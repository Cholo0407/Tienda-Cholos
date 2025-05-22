import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import SideMenu from './components/SideMenu.jsx';
import ShoeStore from './pages/Products.jsx';
import Login from './pages/login.jsx';
import Dashboard from './pages/dashboard.jsx';
import ProductForm from './pages/AgregarZapato.jsx';
import Recovery from './pages/PasswordRecovery/passwordRecovery.jsx';
import VerifyCode from './pages/PasswordRecovery/verifyCode.jsx';
import NewPassword from './pages/PasswordRecovery/newPassword.jsx';
import Clientes from './pages/Clientes.jsx';
import PrivateRoute from './components/PrivateRoutes/PrivateRoutes.jsx';
import { AuthProvider } from './Context/AuthToken.jsx';

function AppContent() {
  const location = useLocation();
  const hiddenRoutes = ['/login', '/recovery', '/verifyCode', '/newPassword'];
  const shouldShowMenu = !hiddenRoutes.includes(location.pathname);

  return (
    <div className="flex">
      {shouldShowMenu && <SideMenu />}
      <div className="flex-1">
      <Routes>
  {/* Redirección desde "/" a "/dashboard" */}
  <Route path="/" element={<Navigate to="/login" />} />

  {/* Rutas públicas */}
  <Route path="/login" element={<Login />} />
  <Route path="/recovery" element={<Recovery />} />
  <Route path="/verifyCode" element={<VerifyCode />} />
  <Route path="/newPassword" element={<NewPassword />} />

  {/* Rutas protegidas */}
  <Route element={<PrivateRoute />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/products" element={<ShoeStore />} />
    <Route path="/products/AgregarZapato" element={<ProductForm />} />
    <Route path="/customers" element={<Clientes />} />
    <Route path="/admins" element={<div>Admins</div>} />
    <Route path="/models" element={<div>Modelos</div>} />
    <Route path="/register" element={<div>Register</div>} />
  </Route>
</Routes> 
      </div>
    </div>
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
