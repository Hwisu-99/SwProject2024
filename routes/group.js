// 그룹 관련 라우트 파일
const express = require('express');
const { getGroup, deleteGroup, addStudentToGroup, getGroupEmptyTime, getAllGroup } = require('../controllers/groupController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.get('/:group_id', authenticateJWT, getGroup);
// router.get('/', getAllGroup);
router.get('/', authenticateJWT, getGroup);
router.delete('/:group_id', authenticateJWT, deleteGroup);
router.post('/:group_id/:student_id', addStudentToGroup);
router.get('/empty_time/:group_id', authenticateJWT, getGroupEmptyTime);

module.exports = router;