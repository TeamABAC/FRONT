import React from 'react';
import Main from './pages/sigin-in';

const HomePage: React.FC = () => {
  console.log("Backend URL:", process.env.NEXT_PUBLIC_BACKEND_URL);
  return <Main />;
};

export default HomePage;
