// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logoImg from './gorsel/logo.png';

import Home from './home';
import Info from './info'; 

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
  <div className="navbar-brand">
    <img src={logoImg} alt="DermAI Logo" className="nav-logo" />
  </div>
          <div className="navbar-links">
            <Link to="/" className="nav-link">Ana Sayfa</Link>
            <Link to="/info" className="nav-link">Hastalık Bilgileri</Link>
          </div>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;