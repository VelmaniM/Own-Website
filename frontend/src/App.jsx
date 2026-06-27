import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs/ContactUs';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.add('theme-switching');
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    const timeoutId = setTimeout(() => {
      document.documentElement.classList.remove('theme-switching');
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [isDark]);

  useEffect(() => {
    // Anti-copy and Security Features
    const preventAction = (e) => e.preventDefault();
    
    // Prevent right-click
    document.addEventListener('contextmenu', preventAction);
    // Prevent drag
    document.addEventListener('dragstart', preventAction);

    // Prevent keyboard shortcuts for copy and dev tools
    const handleKeyDown = (e) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+C, Ctrl+P
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I / J
        (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 67 || e.keyCode === 80)) || // Ctrl+U / C / P
        (e.metaKey && e.altKey && (e.keyCode === 73 || e.keyCode === 74)) || // Mac Cmd+Option+I / J
        (e.metaKey && (e.keyCode === 85 || e.keyCode === 67 || e.keyCode === 80)) // Mac Cmd+U / C / P
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // PrintScreen clearing clipboard (basic attempt, not full-proof but requested)
    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
      }
    };
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('contextmenu', preventAction);
      document.removeEventListener('dragstart', preventAction);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
