import React, { useState } from 'react';
import api from '../services/api';

const Modal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState('');

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isRegister ? '/auth/register' : '/auth/login'; // Регистрация или вход
      const data = isRegister
        ? { username, email, password }
        : { email, password };

      const response = await api.post(endpoint, data);

      if (response.status === 201 || response.status === 200) {
        setMessage(isRegister ? 'Регистрация успешна!' : 'Вход выполнен!');
        onClose(); // Закрыть модальное окно
      }
    } catch (error) {
      setMessage('Ошибка: ' + (error.response?.data?.message || 'Что-то пошло не так'));
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isRegister ? 'Регистрация' : 'Вход'}</h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              type="text"
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isRegister ? 'Зарегистрироваться' : 'Войти'}</button>
        </form>
        <button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
        </button>
        <button onClick={onClose}>Закрыть</button>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Modal;
