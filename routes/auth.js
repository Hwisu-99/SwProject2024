// 사용자 인증 관련 라우트 파일
const express = require('express');
const { login } = require('../controllers/authController');

const router = express.Router();


// POST : http://localhost:3000/api/auth/login : 로그인하여 JWT 토큰 얻기
router.post('/login', login);

module.exports = router;
