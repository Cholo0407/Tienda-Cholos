import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import SideMenu from './components/SideMenu.jsx';

function App() {
  const hiddenRoutes = ["/login", "/register"];
  const shouldShowMenu = !hiddenRoutes.includes(window.location.pathname);

  return (
    <Router>
      {(window.location.pathname !== "/login" && window.location.pathname !== "/register") && <SideMenu />}
          <Routes>
            <Route path="/"  />
            <Route path="/products" />
            <Route path="/customers" />
            <Route path="/admins" />
            <Route path="/models" />
            <Route path="/login" />
            <Route path="/register" />
          </Routes>
    </Router>
  );
}

export default App;
