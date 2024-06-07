// 미팅 관련 라우트 파일
const express = require('express');
const { createGroupMeeting, getGroupMeeting } = require('../controllers/meetingController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

// router.post('/open/:student_id', authenticateJWT, createGroupMeeting);
// router.post('/open/:lecture_id/:student_id', authenticateJWT, createGroupMeeting);
router.post('/open/:lecture_id/:student_id', createGroupMeeting);

// router.get('/lectrue_id/:student_id', authenticateJWT, getGroupMeeting);
router.get('/:lecture_id/:student_id', getGroupMeeting);


module.exports = router;
