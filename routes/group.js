// 그룹 관련 라우트 파일
const express = require('express');
const { postGroup, getGroup, getGroupEmptyTime } = require('../controllers/groupController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

// router.post('/:lecture_id', authenticateJWT, postGroup);
// router.get('/:group_id', authenticateJWT, getGroup);
// router.get('/:group_id/empty_time', authenticateJWT, getGroup, getGroupEmptyTime);

router.post('/:lecture_id', postGroup);
router.get('/:group_id', getGroup);
router.get('/:group_id/empty_time', getGroup, getGroupEmptyTime);


module.exports = router;
