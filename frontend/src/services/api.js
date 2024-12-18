import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Базовый URL для запросов
});

// Добавление токена в заголовки
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
