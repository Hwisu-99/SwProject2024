// 그룹 관련 라우트 파일
const express = require('express');
const { postGroup, getGroup, getGroupEmptyTime } = require('../controllers/groupController');
const { createMeeting } = require('../controllers/meetingController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.post('/:lecture_id', authenticateJWT, postGroup);

router.get('/:group_id', authenticateJWT, getGroup);

router.get('/:group_id/empty_time', authenticateJWT, getGroup, getGroupEmptyTime);


module.exports = router;
