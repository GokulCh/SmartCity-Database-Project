import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Global/NavigationBar.jsx';
import HomePage from './pages/HomePage.jsx';

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
