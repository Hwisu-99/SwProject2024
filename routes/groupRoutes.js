// 그룹 관련 라우트 파일
const express = require('express');
const { getGroup, getSchedule } = require('../controllers/groupController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

// GET : http://localhost:3000/api/groups : 팀원 정보 조회
router.get('/', authenticateJWT, getGroup);

// GET : http://localhost:3000/api/groups/shedule : 팀원들의 시간표 정보 조회
router.get('/schedule', authenticateJWT, getSchedule);

module.exports = router;
