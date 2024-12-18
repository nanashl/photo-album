import React, { useEffect, useState } from 'react';
import api from '../services/api';
import SmartFilter from '../components/SmartFilter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCard from '../components/ImageCard';
import '../index.css'; // Подключаем глобальные стили

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  // Функция для получения изображений с бэкенда
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await api.get('/images');
        setImages(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке изображений:', error);
      }
    };
    fetchImages();
  }, []);

  const handleFilter = async (filters) => {
    const response = await api.post('/images/filter', filters);
    setImages(response.data);
  };

  return (
    <>
      {/* Хеддер */}
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />

      {/* Основной контент */}
      <main>
        <section className="hero">
          <h1>Добро пожаловать в Фотоальбом!</h1>
          <SmartFilter onFilter={handleFilter} />
          <p>Загружайте, делитесь и наслаждайтесь фотографиями в лучшем фотоальбоме.</p>
        </section>

        {/* Витрина фото */}
        <section className="gallery">
          {images.length > 0 ? (
            images.map((image) => <ImageCard key={image._id} image={image} />)
          ) : (
            <p>Изображения отсутствуют. Добавьте первые фотографии!</p>
          )}
        </section>
      </main>

      {/* Футер */}
      <Footer />
    </>
  );
};

export default HomePage;
