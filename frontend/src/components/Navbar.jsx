import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
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
            Services
            <span className="navbar-link-underline"></span>
          </a>
          <a href="/#work" className="navbar-link group">
            Projects
            <span className="navbar-link-underline"></span>
          </a>
          <a href="/#testimonials" className="navbar-link group">
            Reviews
            <span className="navbar-link-underline"></span>
          </a>
          <a href="/#pricing" className="navbar-link group">
            Pricing
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
          
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          <div id="google_translate_element" className="hidden"></div>

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
          <a href="/#services" className="navbar-mobile-link" onClick={toggleMenu}>Services</a>
          <a href="/#work" className="navbar-mobile-link" onClick={toggleMenu}>Projects</a>
          <a href="/#testimonials" className="navbar-mobile-link" onClick={toggleMenu}>Reviews</a>
          <a href="/#pricing" className="navbar-mobile-link" onClick={toggleMenu}>Pricing</a>
          <Link to="/contact" className="navbar-mobile-contact-btn" onClick={toggleMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
