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
        <Link to="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center' }} onClick={() => {
          setIsMenuOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          {/* Light Mode Eye */}
          <img 
            src="/light-logo-1.png?v=2" 
            alt="NEXOR Logo Eye" 
            className="h-16 w-auto object-contain scale-110 origin-left dark:hidden"
          />
          {/* Dark Mode Eye */}
          <img 
            src="/dark-logo-2.png" 
            alt="NEXOR Logo Eye" 
            className="h-16 w-auto object-contain scale-110 origin-left hidden dark:block"
          />
          
          {/* Single Text Logo (Inverts to black for light mode, stays white for dark mode) */}
          <img 
            src="/dark-logo-1.png" 
            alt="NEXOR Text" 
            className="h-16 w-auto object-contain -ml-8 invert dark:invert-0"
          />
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
          
          <div className="flex items-center">
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
