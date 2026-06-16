import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar({ isDark, setIsDark }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-black shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-main-text">
        <Link to="/" className="text-2xl font-extrabold tracking-tight flex items-center">
          Velmani M
        </Link>
        
        <div className="hidden md:flex gap-10 text-[15px] font-medium">
          <a href="/#" className="relative text-muted-text hover:text-main-text transition-colors group">
            Home
            <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a href="/#about" className="relative text-muted-text hover:text-main-text transition-colors group">
            About
            <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a href="/#services" className="relative text-muted-text hover:text-main-text transition-colors group">
            Capabilities
            <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a href="/#work" className="relative text-muted-text hover:text-main-text transition-colors group">
            Work
            <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="text-muted-text hover:text-main-text transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/contact" className="hidden sm:flex px-6 py-2.5 bg-main-text text-btn-text text-sm font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
