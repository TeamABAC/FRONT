import React from 'react';
import Main from './pages/Login';
import axios from 'axios';

const HomePage: React.FC = () => {
  console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL);
  axios.get('https://fc9c-2001-e60-a017-870d-7967-ae08-f4c-c7de.ngrok-free.app/')
    .then(response => {
      console.log('백엔드 연결 성공:', response);
    })
    .catch(error => {
      console.error('백엔드 연결 실패:', error);
    });
  return <Main />;
};

export default HomePage;
