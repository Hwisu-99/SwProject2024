const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');
const { getAllLecture, getLecture, getLectureTime, addLectureStudent, getAllLectureOfStudent } = require('../controllers/lectureController');
const router = express.Router();

router.get('/', authenticateJWT, getAllLecture);
router.get('/:lecture_id', authenticateJWT, getLecture);
router.get('/time/:lecture_id', authenticateJWT, getLectureTime);
router.post('/:lecture_id/:student_id', authenticateJWT, addLectureStudent);
router.get('/:student_id', authenticateJWT, getAllLectureOfStudent);

module.exports = router;