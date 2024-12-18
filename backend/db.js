const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log('MongoDB подключена');
  } catch (error) {
    console.error('Ошибка подключения к базе данных:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
