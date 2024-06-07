# GroupPageTest

## How to install and use
1. Clone the repository

2. Install packages
    ```sh
    npm install express mysql2 dotenv jsonwebtoken body-parser 
    npm install swagger-jsdoc swagger-ui-express --save-dev
    ```
3. Create Database on local mysql:

    ```sql
    CREATE DATABASE eclassDB;
    USE eclassDB;
    ```

4. Insert initial Datas

  ```sql
  INSERT INTO majors(name, department) VALUES('소프트웨어학과', '소프트웨어학부');
  INSERT INTO majors(name, department) VALUES('전자전기공학부', '창의ICT공과대학');

  INSERT INTO students(eclassID, eclassPW, name, major_id) VALUES('kim_studentID', 'kim_studentPW!', '김하나', '1');
  INSERT INTO students(eclassID, eclassPW, name, major_id) VALUES('park_studentID', 'park_studentPW!', '박민수', '2');
  INSERT INTO students(eclassID, eclassPW, name, major_id) VALUES('lee_studentID', 'lee_studentPW!', '이준호', '1');
  INSERT INTO students(eclassID, eclassPW, name, major_id) VALUES('choi_studentID', 'choi_studentPW!', '최서연', '2');
  INSERT INTO students(eclassID, eclassPW, name, major_id) VALUES('jung_studentID', 'jung_studentPW!', '정현우', '1');
  INSERT INTO students(eclassID, eclassPW, name, major_id) VALUES('sung_studentID', 'sung_studentPW!', '성지호', '1');
  INSERT INTO students(eclassID, eclassPW, name, major_id) VALUES('son_studentID', 'son_studentPW!', '손수연', '1');
  INSERT INTO students(eclassID, eclassPW, name, major_id) VALUES('moon_studentID', 'moon_studentPW!', '문지효', '2');


  INSERT INTO professors(eclassID, eclassPW, name, major_id) VALUES('kim_professorID', 'kim_professorPW!', '김민철', '1');
  INSERT INTO professors(eclassID, eclassPW, name, major_id) VALUES('kang_professorID', 'kang_professorPW!', '강서훈', '1');
  INSERT INTO professors(eclassID, eclassPW, name, major_id) VALUES('sin_professorID', 'sin_professorPW!', '신서희', '1');
  INSERT INTO professors(eclassID, eclassPW, name, major_id) VALUES('kang_professorID2', 'kang_professorPW!', '강훈', '2');

  INSERT INTO lectures(name, credit, lectureNumber, professor_id, major_id) VALUES('운영체제', '3', '301', '1', '1');
  INSERT INTO lectures(name, credit, lectureNumber, professor_id, major_id) VALUES('알고리즘', '3', '302', '4', '2');
  INSERT INTO lectures(name, credit, lectureNumber, professor_id, major_id) VALUES('소프트웨어공학', '3', '303', '2', '1');
  INSERT INTO lectures(name, credit, lectureNumber, professor_id, major_id) VALUES('자료구조', '3', '201', '2', '1');
  INSERT INTO lectures(name, credit, lectureNumber, professor_id, major_id) VALUES('머신러닝', '3', '401', '3', '1');


  INSERT INTO times (startTime, endTime, dayOfWeek, lecture_id) VALUES ('1500', '1700', 'monday', '1');
  INSERT INTO times (startTime, endTime, dayOfWeek, lecture_id) VALUES ('1500', '1500', 'wednesday', '1');

  INSERT INTO times (startTime, endTime, dayOfWeek, lecture_id) VALUES ('1400', '1600', 'tuesday', '2');
  INSERT INTO times (startTime, endTime, dayOfWeek, lecture_id) VALUES ('1600', '1700', 'thursday', '2');

  INSERT INTO times (startTime, endTime, dayOfWeek, lecture_id) VALUES ('1400', '1800', 'monday', '3');
  INSERT INTO times (startTime, endTime, dayOfWeek, lecture_id) VALUES ('1200', '1400', 'wednesday', '3');

  INSERT INTO times (startTime, endTime, dayOfWeek, lecture_id) VALUES ('1900', '2100', 'tuesday', '4');
  INSERT INTO times (startTime, endTime, dayOfWeek, lecture_id) VALUES ('1300', '1400', 'thursday', '4');

  INSERT INTO times (startTime, endTime, dayOfWeek, lecture_id) VALUES ('1030', '1530', 'friday', '5');


  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (1, 1);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (1, 2);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (1, 5);

  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (2, 1);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (2, 3);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (2, 5);

  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (3, 1);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (3, 2);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (3, 3);

  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (4, 2);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (4, 3);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (4, 4);

  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (5, 1);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (5, 4);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (5, 5);

  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (6, 3);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (6, 4);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (6, 5);

  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (7, 2);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (7, 3);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (7, 5);

  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (8, 3);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (8, 4);
  INSERT INTO `student-lecture` (studentId, lectureId) VALUES (8, 5);

  INSERT INTO `groups` (name, professor_id, lecture_id) VALUES ('1조', 2, 3);
  INSERT INTO `groups` (name, professor_id, lecture_id) VALUES ('2조', 2, 3);

  INSERT INTO `student-group` (studentId, groupId) VALUES (1, 1);
  INSERT INTO `student-group` (studentId, groupId) VALUES (2, 1);
  INSERT INTO `student-group` (studentId, groupId) VALUES (3, 2);
  INSERT INTO `student-group` (studentId, groupId) VALUES (4, 1);
  INSERT INTO `student-group` (studentId, groupId) VALUES (5, 1);
  INSERT INTO `student-group` (studentId, groupId) VALUES (6, 2);
  INSERT INTO `student-group` (studentId, groupId) VALUES (7, 2);
  INSERT INTO `student-group` (studentId, groupId) VALUES (8, 2);
  ```
  
5. Set `config.joson`file in config dir
    ```plaintext
    "development": {
        "username": "root",
         "password": "",
         "database": "eclassDB",
         "host": "127.0.0.1",
          "dialect": "mysql",
         "define" :  {"timestamps" : false} 
    },
    ```

6. start server:
    ```sh
    npm start
    ```

    then, you can use API 
    by acceessing `http://localhost:8001`

## API-docs
1. access `http://localhost:8001/api-docs`