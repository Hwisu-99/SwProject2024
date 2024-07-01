// 그룹 관련 라우트 파일
const express = require('express');
const { getStudent, deleteStudent, getAllLectureOfStudent, getAllStudent } = require('../controllers/studentController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.get('/', authenticateJWT, getAllStudent);
router.get('/:student_id', authenticateJWT, getStudent);
router.delete('/:student_id', authenticateJWT, deleteStudent);
router.get('/lectures/:student_id', authenticateJWT, getAllLectureOfStudent);


module.exports = router;