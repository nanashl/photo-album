import React, { useState } from 'react';
import api from '../services/api';

const UploadImage = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    formData.append('category', category);
    formData.append('tags', tags);

    try {
      const response = await api.post('/images/upload', formData);
      if (response.status === 201) {
        setMessage('Изображение успешно загружено!');
        if (onUploadSuccess) onUploadSuccess();
      }
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error);
      setMessage('Ошибка при загрузке');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Категория"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Теги (через запятую)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
      <button type="submit">Загрузить</button>
      <p>{message}</p>
    </form>
  );
};

export default UploadImage;
