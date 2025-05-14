import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import SideMenu from './components/SideMenu.jsx';
import ShoeStore from './pages/Products.jsx';

function App() {
  const hiddenRoutes = ["/login", "/register"];
  

  return (
    <Router>
      {(window.location.pathname !== "/login" && window.location.pathname !== "/register") && <SideMenu />}
          <Routes>
         
            <Route path="/products" element={<ShoeStore />} />
             
          </Routes>
    </Router>
  );
}

export default App;
