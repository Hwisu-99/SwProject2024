// 미팅 관련 라우트 파일
const express = require('express');
const { createMeeting } = require('../controllers/meetingController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.post('/', authenticateJWT, createMeeting);

module.exports = router;
