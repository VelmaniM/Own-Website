import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isDark, setIsDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
          Velmani M
        </Link>
        
        <div className="navbar-links-container">
          <a href="/#" className="navbar-link group">
            Home
            <span className="navbar-link-underline"></span>
          </a>
          <a href="/#about" className="navbar-link group">
            About
            <span className="navbar-link-underline"></span>
          </a>
          <a href="/#services" className="navbar-link group">
            Capabilities
            <span className="navbar-link-underline"></span>
          </a>
          <a href="/#work" className="navbar-link group">
            Work
            <span className="navbar-link-underline"></span>
          </a>
        </div>

        <div className="navbar-actions">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="navbar-theme-toggle"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/contact" className="navbar-contact-btn">
            Contact Us
          </Link>
          <button 
            onClick={toggleMenu}
            className="navbar-menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <a href="/#" className="navbar-mobile-link" onClick={toggleMenu}>Home</a>
          <a href="/#about" className="navbar-mobile-link" onClick={toggleMenu}>About</a>
          <a href="/#services" className="navbar-mobile-link" onClick={toggleMenu}>Capabilities</a>
          <a href="/#work" className="navbar-mobile-link" onClick={toggleMenu}>Work</a>
          <Link to="/contact" className="navbar-mobile-contact-btn" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
