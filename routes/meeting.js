// 미팅 관련 라우트 파일
const express = require('express');
const { createGroupMeeting, getGroupMeeting } = require('../controllers/meetingController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

// http://localhost:8001/meetings/open?student_id=1 : query_parameter방식 / 사용자가 속한 그룹의 온라인 미팅을 생성 
router.get('/open', authenticateJWT, createGroupMeeting); 

// http://localhost:8001/meetings/get?student_id=1 : query_parameter방식 / 사용자가 속한 그룹에 온라인 미팅이 있다면 미팅 링크를 반환 
router.get('/get', authenticateJWT, getGroupMeeting); 


module.exports = router;
