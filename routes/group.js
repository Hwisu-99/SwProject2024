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
            attributes: ['id', 'startTime', 'endTime', 'dayOfWeek'],
            order: [
                ['dayOfWeek', 'ASC'],
                ['startTime', 'ASC'],
            ],
        })
        if (times.length < 0) {
            res.status(401).send({ message: "Can not find time_id" });
        }

        // times.forEach((time) => {
        //     console.log(`ID: ${time.id}, startTime: ${time.startTime}, endTime: ${time.endTime}, dayOfWeek: ${time.dayOfWeek}`);
        // });

        const daySlots = {};
        daySlots['monday'] = [];
        daySlots['tuesday'] = [];
        daySlots['wednesday'] = [];
        daySlots['thursday'] = [];
        daySlots['friday'] = [];
        daySlots['saturday'] = [];
        daySlots['sunday'] = [];

        // missingSlots = [];
        // missingSlots['monday'] = [];
        // missingSlots['tuesday'] = [];
        // missingSlots['wednesday'] = [];
        // missingSlots['thursday'] = [];
        // missingSlots['friday'] = [];
        // missingSlots['saturday'] = [];
        // missingSlots['sunday'] = [];

        const missingSlots = {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        };

        times.forEach((time) => {
            const day = time.dayOfWeek;

            // if (!daySlots[day]) {
            //     daySlots[day] = [];
            // }
            daySlots[day].push({ startTime: time.startTime, endTime: time.endTime });
        });

        for (const day in daySlots) {
            startTime = '0000';
            endTime = '0000'
            if (daySlots[day].length) {
                // at least one time, then push. ex) 0 ~ 1600
                endTime = daySlots[day][0].startTime;
                missingSlots[day].push({ startTime: startTime, endTime: endTime });
                // missingSlots[day].push({ startTime: startTime, endTime: endTime, dayOfWeek: day });

                startTime = daySlots[day][0].startTime;
                endTime = daySlots[day][0].endTime;

                if (daySlots[day].length == 1) {
                    startTime = daySlots[day][0].endTime;
                }
            }

            for (let i = 1; i < daySlots[day].length; i++) {
                if (daySlots[day][i].startTime < endTime) {
                    if (daySlots[day][i].endTime > endTime) {
                        startTime = daySlots[day][i].endTime;
                    }
                } else {
                    endTime = daySlots[day][i].startTime;
                    missingSlots[day].push({ startTime: startTime, endTime: endTime });
                    // missingSlots[day].push({ startTime: startTime, endTime: endTime, dayOfWeek: day });

                    endTime = daySlots[day][i].endTime;
                }
            }
            missingSlots[day].push({ startTime: endTime, endTime: "2400" });
            // missingSlots[day].push({ startTime: startTime, endTime: "2400", dayOfWeek: day });

        }

        console.log(missingSlots);
        res.status(201).json(missingSlots);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Error to find empty time" });
    }
});
module.exports = router;
