import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.jsx';
import Shoes from './pages/shoes.jsx'
import Nav from './components/Nav.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;