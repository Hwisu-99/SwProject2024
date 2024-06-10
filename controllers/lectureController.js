// 로그인 인증을 처리하는 컨트롤러 파일 
const { Lecture, Time, Student } = require('../models');

// 강의 정보 조회 
const getLecture = async (req, res, next) => {
    Lecture.findOne({
        where: {
            id: req.params.lecture_id,
        }
    })
        .then(result => {
            res.status(201).send(result)
        })
        .catch(err => {
            res.status(500).send();
        });
}

// 모든 강의 정보 한번에 불러오기
const getAllLecture = async (req, res, next) => {
    try {
        const lectures = await Lecture.findAll();
        res.status(200).send(lectures);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Server error' });
    }
}



// 강의 시간 조회
const getLectureTime = async (req, res, next) => {
    Time.findAll({
        where: {
            lecture_id: req.params.lecture_id,
        }
    })
        .then(result => {
            res.status(201).send(result)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error"
            });
        });
}


// 강의에 학생 추가 
const addLectureStudent = async (req, res, next) => {
    try {
        const lecture = await Lecture.findOne({
            where: {
                id: req.params.lecture_id,
            }
        });
        if (!lecture) {
            return res.status(404).send({ message: "Lecture not found" });
        }

        const student = await Student.findOne({
            where: {
                id: req.params.student_id,
            }
        });
        if (!student) {
            return res.status(404).send({ message: "Student not found" });
        }
        await lecture.addStudent(student);
        res.status(201).send({ message: "Student added to lecture successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Error adding student to lecture" });
    }
}

module.exports = { getLecture, getAllLecture, getLectureTime, addLectureStudent };