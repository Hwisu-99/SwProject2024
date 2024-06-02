// 그룹 관련 라우트 파일
const express = require('express');
const group_process = require('../controllers/groupController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

// GET : http://localhost:3000/api/groups : 인증된 사용자가 속한 그룹과 그룹 멤버 정보를 조회
router.get('/',  group_process.getGroup);
// authenticateJWT,
// GET : http://localhost:3000/api/groups/schedule : 인증된 사용자가 속한 그룹 멤버들의 시간표를 조회
router.get('/schedule', group_process.getSchedule);

module.exports = router;
