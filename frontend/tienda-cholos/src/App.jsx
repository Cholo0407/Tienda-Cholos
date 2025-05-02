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
import ShoppingCart from './pages/cart.jsx'; 
import Login from './pages/Login.jsx'



function App() {
  return (
    <Router>
      {/* Este código revisa que no se renderize el navbar si la ruta es /login, register*/}
      {(window.location.pathname !== "/login" && window.location.pathname !== "/register") && <Nav />}
      <Routes>
      <Route path="/about" element={<About />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/cart" element={<ShoppingCart />} />

        <Route path="/shoes" element={<Shoes />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart2" element={<CheckoutForm />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>


  );
}

export default App;
