// 그룹 관련 라우트 파일
const express = require('express');
const { postGroup, getGroup, getGroupEmptyTime } = require('../controllers/groupController');
const authenticateJWT = require('../middleware/authenticateJWT');
const { Group, Student, Lecture, Time } = require('../models');

const router = express.Router();

router.post('/:lecture_id', authenticateJWT, postGroup);

router.get('/:group_id', authenticateJWT, async (req, res, next) => {
    Group.findAll({
        where: {
            id: req.params.group_id,
        }
    })
        .then(result => {
            res.status(201).send(result)
        })
        .catch(err => {
            res.status(500).send();
        });
});

// router.post('/:group_id/:student_id', authenticateJWT, async (req, res, next) => {
router.post('/:group_id/:student_id', async (req, res, next) => {
    try {
        const group = await Group.findOne({
            where: {
                id: req.params.group_id,
            }
        });
        if (!group) {
            return res.status(404).send({ message: "group not found" });
        }

        const student = await Student.findOne({
            where: {
                id: req.params.student_id,
            }
        });
        if (!student) {
            return res.status(404).send({ message: "Student not found" });
        }
        await group.addStudent(student);
        res.status(201).send({ message: "Student added to group successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Error adding student to group" });
    }
});


// router.get('/:group_id/empty_time', authenticateJWT, async (req, res, next) => {
router.get('/empty_time/:group_id', async (req, res, next) => {
    try {
        const students = await Group.findOne({
            where: { id: req.params.group_id },
            include: {
                model: Student,
                attributes: ['id'],
            },
        });

        if (!students) {
            res.status(401).send({ message: "Can not find student_id" });
            return;
        }

        const studentIds = students.Students.map((student) => student.id);

        const lectures = await Lecture.findAll({
            include: {
                model: Student,
                where: { id: studentIds },
                // empty array to bring only lecture info
                attributes: [],
            },
        });

        if (lectures.length < 0) {
            res.status(401).send({ message: "Can not find lecture_id" });
        }

        const lectureIds = lectures.map((lecture) => lecture.id);

        const times = await Time.findAll({
            where: { lecture_id: lectureIds },
            attributes: ['id', 'startTime', 'endTime', 'dayOfWeek']
        })
        if (times.length < 0) {
            res.status(401).send({ message: "Can not find time_id" });
        }
        times.forEach((time) => {
            console.log(`ID: ${time.id}, startTime: ${time.startTime}, endTime: ${time.endTime}, dayOfWeek: ${time.dayOfWeek}`);
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Error to find empty time" });
    }
});
module.exports = router;
