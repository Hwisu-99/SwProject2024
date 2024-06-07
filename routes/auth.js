const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');
const { login, logout } = require('../controllers/authController');

const router = express.Router();

router.post('/login', login);
router.post('/logout', authenticateJWT, logout);

module.exports = router;
