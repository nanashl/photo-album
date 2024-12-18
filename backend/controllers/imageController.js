const Image = require('../models/Image');

exports.uploadImage = async (req, res) => {
  try {
    const { title, category, tags } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Файл изображения обязателен' });
    }

    // Создание нового изображения
    const newImage = new Image({
      title,
      url: `/uploads/${req.file.filename}`,
      category: category || 'Без категории', // Если категория не указана
      tags: tags ? tags.split(',').map(tag => tag.trim()) : [], // Преобразуем строку в массив тегов
      views: 0,
    });

    // Сохранение изображения в базе данных
    await newImage.save();

    res.status(201).json({ message: 'Изображение успешно загружено', image: newImage });
  } catch (error) {
    console.error('Ошибка при загрузке изображения:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

exports.filterImages = async (req, res) => {
  const { category, tags, minViews } = req.body;

  const query = {};
  if (category) query.category = category;
  if (tags && tags.length > 0) query.tags = { $in: tags };
  if (minViews) query.views = { $gte: parseInt(minViews) };

  try {
    const images = await Image.find(query);
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка фильтрации' });
  }
};

