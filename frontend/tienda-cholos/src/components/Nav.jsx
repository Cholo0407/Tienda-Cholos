import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"; 
import "../../styles/Nav.css";

const Nav = () => {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo-link">
            <img 
              src={logo} 
              alt="Cholo's Logo" 
              className="logo-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/60';
              }}
            />
          </Link>
  
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shoes" className="nav-link">
                SHOES
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Nav;