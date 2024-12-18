const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Маршрут для входа
router.post('/login', authController.login);

// Маршрут для регистрации
router.post('/register', authController.register);
router.post('/reset-password', authController.resetPasswordRequest);

module.exports = router;
