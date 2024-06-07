// 그룹 관련 라우트 파일
const express = require('express');
const { getGroup, deleteGroup, addStudentToGroup, getGroupEmptyTime } = require('../controllers/groupController');
const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

// 그룹 정보 가져오기 
router.get('/:group_id', authenticateJWT, getGroup);

// 그룹 정보 삭제하기 
router.delete('/groups/:group_id', authenticateJWT, deleteGroup);


// router.post('/:group_id/:student_id', authenticateJWT, async (req, res, next) => {
router.post('/:group_id/:student_id', authenticateJWT, addStudentToGroup);


// 회의 가능 시간 도출
// router.get('/:group_id/empty_time', authenticateJWT, async (req, res, next) => {
router.get('/empty_time/:group_id', authenticateJWT, getGroupEmptyTime);

module.exports = router;
