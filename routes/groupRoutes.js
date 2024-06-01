// 그룹 관련 라우트 파일
const express = require('express');
const { getGroup, getSchedule } = require('../controllers/groupController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.get('/', authenticateJWT, getGroup);
router.get('/schedule', authenticateJWT, getSchedule);

module.exports = router;
