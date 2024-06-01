# GroupPageTest

## 설치 및 이용 방법

1. 이 레포지토리를 클론합니다

2. 필요한 패키지를 설치합니다:

    ```sh
    npm install express mysql2 dotenv jsonwebtoken body-parser
    ```

3. MySQL에서 데이터베이스와 테이블을 생성합니다:

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

4. 초기 데이터 삽입:

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

    PORT=3000
    ```

6. 서버를 시작합니다:

    ```sh
    npm start
    ```

    서버가 실행 중이면, `http://localhost:3000`에서 API를 사용할 수 있습니다.

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
