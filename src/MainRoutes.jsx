import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ChatbotComponent from './components/ChatbotComponent';
import Succeed from './components/Succeed';

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatbotComponent />} />
        <Route path="/succeed" element={<Succeed />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
