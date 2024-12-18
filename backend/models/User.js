const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  resetPasswordToken: { type: String, default: null }, // Токен восстановления пароля
  resetPasswordExpires: { type: Date, default: null }, // Срок действия токена
});

module.exports = mongoose.model('User', userSchema);
