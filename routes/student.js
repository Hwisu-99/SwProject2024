// 그룹 관련 라우트 파일
const express = require('express');
const { getStudent, deleteStudent} = require('../controllers/studentController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.get('/:student_id', authenticateJWT, getStudent);
router.delete('/:student_id', authenticateJWT, deleteStudent);

module.exports = router;