import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isDark, setIsDark }) {
  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <Link to="/" className="navbar-logo">
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
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
