// 그룹 관련 라우트 파일
const express = require('express');
const { getGroup, getSchedule } = require('../controllers/groupController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

// GET : http://localhost:3000/api/groups : 인증된 사용자가 속한 그룹과 그룹 멤버 정보를 조회
router.get('/', authenticateJWT, getGroup);

// GET : http://localhost:3000/api/groups/shedule : 인증된 사용자가 속한 그룹 멤버들의 시간표를 조회
router.get('/schedule', authenticateJWT, getSchedule);

module.exports = router;
