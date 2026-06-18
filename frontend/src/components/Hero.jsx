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
