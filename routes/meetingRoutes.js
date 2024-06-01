// 미팅 관련 라우트 파일
const express = require('express');
const { createMeeting } = require('../controllers/meetingController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

// POST : http://localhost:3000/api/meetings/ : 그룹 미팅 생성
router.post('/', authenticateJWT, createMeeting);

module.exports = router;
