import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import React from 'react';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Shoes from './pages/shoes.jsx';
import Product from './pages/product.jsx';
import Nav from './components/Nav.jsx';
import './App.css';
import CheckoutForm from './pages/cart2.jsx';
import ContactForm from './pages/Contact.jsx';
import ShoppingCart from './pages/cart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

import { AuthProvider } from './Context/AuthToken';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Componente wrapper para acceder a useLocation fuera del Router
function AppContent() {
  const location = useLocation();
  const hideNav = ["/login", "/register"].includes(location.pathname);

  return (
    <>
      {!hideNav && <Nav />}

      <Routes>
        {/* Página inicial: Login */}
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<Login />} />

        {/* Página principal después de login */}
        <Route path="/home" element={<Home />} />

        {/* Otras rutas */}
        <Route path="/about" element={<About />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/shoes/:id" element={<Product />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/cart2" element={<CheckoutForm />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <ToastContainer position="top-center" />
    </>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;