import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SideMenu from './components/SideMenu.jsx';
import ShoeStore from './pages/Products.jsx';
import Login from './pages/login.jsx'
import Dashboard from './pages/dashboard.jsx'

function AppContent() {
  const location = useLocation();
  const hiddenRoutes = ['/', '/register'];
  const shouldShowMenu = !hiddenRoutes.includes(location.pathname);

  return (
    <div className="flex">
      {shouldShowMenu && <SideMenu />}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ShoeStore />} />
          <Route path="/customers" element={<div>Clientes</div>} />
          <Route path="/admins" element={<div>Admins</div>} />
          <Route path="/models" element={<div>Modelos</div>} />
          <Route path="/register" element={<div>Register</div>} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
