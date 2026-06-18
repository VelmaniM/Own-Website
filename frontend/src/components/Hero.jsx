import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-main">
      {/* Modern Grid Background */}
      <div className="hero-grid-bg"></div>
      
      {/* Background Glow Aura */}
      <div className="hero-glow-aura"></div>

      {/* Status Pill Badge */}
      <div className="hero-status-pill">
        <span className="hero-status-dot-container">
          <span className="hero-status-dot-ping"></span>
          <span className="hero-status-dot"></span>
        </span>
        <span className="hero-status-text">Available For New Projects</span>
      </div>

      <h1 className="hero-heading">
        Grow Your Business <br className="hidden md:block"/> 
        <span className="hero-heading-highlight">Online Faster</span>
      </h1>
      
      <p className="hero-description">
        Partner with the <strong>best web developer company</strong> to build beautiful, fast, and modern websites that help you attract more customers and increase your sales.
      </p>

      <p className="mt-4 mb-8 text-lg md:text-xl text-brand-blue dark:text-blue-400 font-medium italic opacity-90 max-w-2xl mx-auto">
        "We are 100% ready. Hand over your project, and we'll deliver nothing but the absolute best for your business."
      </p>

      <div className="hero-actions">
        <Link to="/contact" className="hero-btn-primary">
          Start a Project
        </Link>
        <a href="#work" className="hero-btn-secondary group">
          View Projects
          <ArrowRight size={18} className="hero-btn-icon" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
