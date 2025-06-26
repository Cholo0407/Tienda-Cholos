import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import logo from "../images/logo.jpg";
import { useAuth } from "../Context/AuthToken";
import "../../styles/Nav.css";

const Nav = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo izquierda */}
        <Link to="/home" className="logo-link">
          <img src={logo} alt="Cholo's Logo" className="logo-image" />
        </Link>

        {/* Menú centrado */}
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/home" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/shoes" className="nav-link">Shoes</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>

        {/* Íconos derecha */}
        <div className="nav-icons">
          <Link to="/cart" className="icon-link">
            <ShoppingCart />
          </Link>

          <div className="user-button">
            <User className="user-icon" />
            <div className="user-menu">
              {isLoggedIn ? (
                <button onClick={handleLogout}>Cerrar sesión</button>
              ) : (
                <Link to="/login">Iniciar sesión</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
