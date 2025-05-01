import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Shoes from './pages/shoes.jsx';
import Product from './pages/product.jsx';
import Nav from './components/Nav.jsx';
import './App.css';
import CheckoutForm from './pages/cart2.jsx'
import ContactForm from './pages/Contact.jsx'
import ShoppingCart from './pages/cart.jsx'; // Asegúrate que esta ruta es correcta



function App() {
  return (
    <Router>
      <Nav />
      <Routes>
      <Route path="/about" element={<About />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/cart" element={<ShoppingCart />} />

        <Route path="/shoes" element={<Shoes />} />
        <Route path="/product" element={<Product />} /> {/* Esta es la ruta dinámica */}
        <Route path="/cart2" element={<CheckoutForm />} />
      </Routes>
    </Router>


  );
}

export default App;
