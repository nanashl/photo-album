import React, { useState } from 'react';
import Modal from './Modal';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <header className="header">
      <div className="logo">Фотоальбом</div>
      <nav>
        <ul>
          <li><a href="/">Главная</a></li>
          {isAuthenticated ? (
            <>
              <li><a href="/dashboard">Личный кабинет</a></li>
              <li><button onClick={handleLogout}>Выйти</button></li>
            </>
          ) : (
            <li><button onClick={() => setIsModalOpen(true)}>Вход</button></li>
          )}
        </ul>
      </nav>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} setIsAuthenticated={setIsAuthenticated} />}
    </header>
  );
};

const togglePrintVersion = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/print.css';
  document.head.appendChild(link);
  window.print();
};

<button onClick={togglePrintVersion}>Версия для печати</button>


export default Header;