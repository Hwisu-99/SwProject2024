# GroupPageTest
# 팀 관리 시스템 백엔드

이 프로젝트는 팀 관리 시스템의 백엔드 서버입니다. 사용자 인증, 그룹 관리, 미팅 생성 및 시간표 관리를 위한 API를 제공합니다. 이 서버는 Node.js와 Express.js를 사용하여 작성되었으며, MySQL을 데이터베이스로 사용합니다.

## 기능

- 사용자 등록 및 로그인
- 그룹 생성 및 조회
- 그룹 멤버 관리
- 온라인 미팅 생성
- 팀원 시간표 관리 및 회의 시간 조율

## 설치 및 실행

### 사전 요구사항

- Node.js (v14 이상)
- MySQL 데이터베이스
- npm 또는 yarn

### 설치 방법

1. 이 레포지토리를 클론합니다:

    ```sh
    git clone https://github.com/your-username/team-management-backend.git
    cd team-management-backend
    ```

2. 필요한 패키지를 설치합니다:

    ```sh
    npm install express mysql2 dotenv jsonwebtoken body-parser 

    ```

3. MySQL에서 데이터베이스와 테이블을 생성합니다: (api 테스트용)

    ```sql
    CREATE DATABASE team_management;

    USE team_management;

    CREATE TABLE users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );

    CREATE TABLE user_groups (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    );

    CREATE TABLE meetings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      link VARCHAR(255) NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE schedules (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      time_slot VARCHAR(255) NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );

    CREATE TABLE group_members (
      group_id INT NOT NULL,
      user_id INT NOT NULL,
      FOREIGN KEY (group_id) REFERENCES user_groups(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
    ```

4. 초기 데이터 삽입: (api 테스트용)

    ```sql
    -- users 데이터 삽입
    INSERT INTO users (name, email, password) VALUES ('John Doe', 'john@example.com', 'password123');
    INSERT INTO users (name, email, password) VALUES ('Jane Smith', 'jane@example.com', 'password123');
    INSERT INTO users (name, email, password) VALUES ('Alice Johnson', 'alice@example.com', 'password123');

    -- user_groups 데이터 삽입
    INSERT INTO user_groups (name) VALUES ('Development Team');
    INSERT INTO user_groups (name) VALUES ('Marketing Team');

    -- group_members 데이터 삽입
    INSERT INTO group_members (group_id, user_id) VALUES (1, 1); -- John Doe in Development Team
    INSERT INTO group_members (group_id, user_id) VALUES (1, 2); -- Jane Smith in Development Team
    INSERT INTO group_members (group_id, user_id) VALUES (2, 3); -- Alice Johnson in Marketing Team

    -- schedules 데이터 삽입
    INSERT INTO schedules (user_id, time_slot) VALUES (1, 'Monday 10-12'); -- John Doe
    INSERT INTO schedules (user_id, time_slot) VALUES (2, 'Monday 14-16'); -- Jane Smith
    INSERT INTO schedules (user_id, time_slot) VALUES (3, 'Tuesday 10-12'); -- Alice Johnson
    ```

5. `.env` 파일을 생성하고 다음과 같이 설정합니다:

    ```plaintext
    DB_HOST=localhost
    DB_USER=yourDatabaseUser
    DB_PASSWORD=yourDatabasePassword
    DB_NAME=team_management

    JWT_SECRET=yourSuperSecretKey

    PORT=5000
    ```

6. 서버를 시작합니다:

    ```sh
    npm start
    ```

    서버가 실행 중이면, `http://localhost:5000`에서 API를 사용할 수 있습니다.

## API 사용 방법

### 사용자 인증

#### 로그인

- **URL**: `/api/auth/login`
- **Method**: POST
- **Request Body**:

    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- **Response**:

    ```json
    {
      "token": "jwt-token-string"
    }
    ```

### 그룹 관리

#### 그룹 정보 조회

- **URL**: `/api/groups`
- **Method**: GET
- **Headers**:
    - `Authorization`: `Bearer jwt-token-string`

- **Response**:

    ```json
    {
      "id": 1,
      "name": "Development Team",
      "members": [
        {
          "id": 1,
          "name": "John Doe"
        },
        {
          "id": 2,
          "name": "Jane Smith"
        }
      ]
    }
    ```

#### 그룹 시간표 조회

- **URL**: `/api/groups/schedule`
- **Method**: GET
- **Headers**:
    - `Authorization`: `Bearer jwt-token-string`

- **Response**:

    ```json
    {
      "schedule": [
        {
          "user_id": 1,
          "time_slot": "Monday 10-12"
        },
        {
          "user_id": 2,
          "time_slot": "Monday 14-16"
        }
      ]
    }
    ```

### 미팅 관리

#### 미팅 생성

- **URL**: `/api/meetings`
- **Method**: POST
- **Headers**:
    - `Authorization`: `Bearer jwt-token-string`

- **Request Body**: 없음
- **Response**:

    ```json
    {
      "link": "https://meeting.com/unique-meeting-link"
    }
    ```

## 기여 방법

1. 이 레포지토리를 포크합니다.
2. 새로운 브랜치를 만듭니다 (`git checkout -b feature-branch`).
3. 변경 사항을 커밋합니다 (`git commit -am 'Add new feature'`).
4. 브랜치에 푸시합니다 (`git push origin feature-branch`).
5. 풀 리퀘스트를 생성합니다.

## 라이센스

이 프로젝트는 MIT 라이센스를 따릅니다. 자세한 내용은 `LICENSE` 파일을 참고하세요.
