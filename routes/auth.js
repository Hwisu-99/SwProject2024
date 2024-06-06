const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');
const { login, logout } = require('../controllers/authController');

const router = express.Router();

//http://localhost:8001/auth/login : POST -> 학생 로그인
router.post('/login', login);   

//http://localhost:8001/auth/login : POST  -> 학생 로그아웃
router.post('/logout', authenticateJWT, logout);   

module.exports = router;
