const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');
const { Lecture, Time, Student } = require('../models');
const router = express.Router();

router.get('/:lecture_id', async (req, res, next) => {
    Lecture.findOne({
        where: {
            id: req.params.lecture_id,
        }
    })
        .then(result => {
            res.status(201).send(result)
        })
        .catch(err => {
            res.status(500).send({
                message: "Error to read memo with memo_id=" + req.params.lecture_id
            });
        });
});

router.get('time/:lecture_id', async (req, res, next) => {
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
                message: "Error to read memo with memo_id=" + req.params.lecture_id
            });
        });
});


router.post('/:lecture_id/:student_id', async (req, res, next) => {
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
});

module.exports = router;