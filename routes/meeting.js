// 미팅 관련 라우트 파일
const express = require('express');
const { createMeeting } = require('../controllers/meetingController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

// POST : http://localhost:3000/api/meetings/ : 새로운 미팅을 생성하고, 생성된 미팅 링크를 반환
router.post('/', authenticateJWT, createMeeting);

module.exports = router;
