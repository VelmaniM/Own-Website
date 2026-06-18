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
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

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
