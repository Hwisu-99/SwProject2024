// 사용자 인증 관련 라우트 파일
const express = require('express');
const { login } = require('../controllers/authController');

const router = express.Router();

router.post('/login', login);

module.exports = router;
