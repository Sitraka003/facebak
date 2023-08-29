import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './modules/login-singin/login.jsx';
import { Home } from './modules/Home/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="*" element={<div className="center"> <h1>PAGE NOT FOUND ! </h1> </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;