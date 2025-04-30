import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home.jsx';
import Shoes from './pages/shoes.jsx';
import Product from './pages/product.jsx';
import Nav from './components/Nav.jsx';
import './App.css';
import ContactForm from './pages/about.jsx'
<<<<<<< HEAD
import Footer from "../components/Footer";

=======
import ShoppingCart from './pages/cart.jsx'
>>>>>>> 4efcc9c20296233eea5d18df343e6bf3b518d05a

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/cart" element={<ShoppingCart />} />

        <Route path="/shoes" element={<Shoes />} />
        <Route path="/product" element={<Product />} /> {/* Esta es la ruta dinámica */}
      </Routes>
    </Router>


  );
}

export default App;
