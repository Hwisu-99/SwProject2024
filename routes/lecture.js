const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');
const { getLecture, getLectureTime, addLectureStudent } = require('../controllers/lectureController');
const router = express.Router();

router.get('/:lecture_id', authenticateJWT, getLecture);

router.get('/time/:lecture_id', authenticateJWT, getLectureTime);

router.post('/:lecture_id/:student_id', authenticateJWT, addLectureStudent);

module.exports = router;