// 학생 관련 기능을 처리하는 컨트롤러 파일
const { Student, Group, Lecture } = require("../models");



// 그룹 정보 가져오기 
const getAllStudent = async (req, res, next) => {
    try {
      const students = await Student.findAll();
      res.status(200).send(students);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Server error' });
    }
};

// 특정 학생의 정보 가져오기
const getStudent = async (req, res, next) => {
  Student.findOne({
    where: {
      id: req.params.student_id,
    },
    include: {
      model: Group,
      attributes: ['id', 'name']
    },
  })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(500).send();
    });
};

const deleteStudent = async (req, res, next) => {
  try {
    const result = await Student.destroy({
      where: {
        id: req.params.student_id,
      },
    });

    if (result) {
      res.status(200).send({ message: "Student deleted successfully" });
    } else {
      res.status(404).send({ message: "Student not found" });
    }
  } catch (err) {
    console.error(err); // 에러 로그 출력
    res.status(500).send({ message: "Internal server error" });
  }
};

// 특정 학생의 모든 강의 정보 불러오기 
const getAllLectureOfStudent = async (req, res, next) => {
    try {
        const student = await Student.findOne({
            where: {
                id: req.params.student_id,
            },
            include: [{
                model: Lecture,
                through: { attributes: [] }
            }]
        });

        if (!student) {
            return res.status(404).send({ message: 'Student not found' });
        }

        const lectures = student.Lectures;

        res.status(200).send(lectures);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Server error' });
    }
};




module.exports = {
  getAllStudent,
  getStudent,
  deleteStudent,
  getAllLectureOfStudent
};
