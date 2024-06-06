// 그룹 관련 라우트 파일
const express = require('express');
const { postGroup, getGroup, getGroupEmptyTime } = require('../controllers/groupController');
const { createMeeting } = require('../controllers/meetingController');
const authenticateJWT = require('../middleware/authenticateJWT');
const { Group } = require('../models');

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

// router.post('/:group_id/:student_id:', authenticateJWT, async (req, res, next) => {
router.post('/:group_id/:student_id:', async (req, res, next) => {
    console.log("@@@@@")
    try {
        const group = await Group.findOne({
            where: {
                id: req.params.lecture_id,
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


router.get('/:group_id/empty_time', authenticateJWT, getGroup, getGroupEmptyTime);


module.exports = router;
