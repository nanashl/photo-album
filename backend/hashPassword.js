const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const saltRounds = 10; // Количество итераций для хэширования
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log(`Хэш для "${password}": ${hashedPassword}`);
};

hashPassword('admin123');
