const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: { type: String, required: true },              // Название изображения
  url: { type: String, required: true },                // URL изображения
  uploadDate: { type: Date, default: Date.now },        // Дата загрузки
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // ID пользователя, загрузившего фото

  // Новые поля для умного фильтра
  category: { type: String, required: false },          // Категория (например: "Природа", "Города", "Люди")
  tags: { type: [String], required: false },            // Теги (список строк, например: ["лето", "пейзаж", "море"])
  views: { type: Number, default: 0 },                  // Количество просмотров изображения
});

module.exports = mongoose.model('Image', imageSchema);
