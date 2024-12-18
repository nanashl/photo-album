import React, { useState } from 'react';
import Header from '../components/Header';
import UploadImage from '../components/UploadImage';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <main>
        <h1>Личный кабинет</h1>
        <UploadImage />
      </main>
    </>
  );
};

export default Dashboard;
