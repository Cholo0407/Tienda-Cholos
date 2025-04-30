import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"; 
import "../../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="navbar bg-[#1c2128] px-8 py-4">
      <div className="flex items-center justify-between w-full">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img 
            src={logo} 
            alt="Cholo's Logo" 
            className="h-12 w-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/60';
            }}
          />
        </Link>

        {/* Menú */}
        <ul className="flex gap-10 text-white font-bold tracking-wide">
          <li><Link to="/" className="nav-link">HOME</Link></li>
          <li><Link to="/shoes" className="nav-link">SHOES</Link></li>
          <li><Link to="/about" className="nav-link">ABOUT</Link></li>
          <li><Link to="/contact" className="nav-link">CONTACT</Link></li>
        </ul>

        {/* Íconos */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-white hover:text-teal-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          <Link to="/cart" className="text-white hover:text-teal-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
          <Link to="/profile" className="text-white hover:text-teal-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Nav;
