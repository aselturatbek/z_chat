// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Mainscreen from './components/Mainscreen';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          {/* Sayfa yönlendirmeleri için Routes ve Route kullanımı */}
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Mainscreen" element={<Mainscreen />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
