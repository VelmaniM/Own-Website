import React from 'react';
import { ArrowRight } from 'lucide-react';
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
        <span className="hero-status-text">Available for new opportunities</span>
      </div>

      <h1 className="hero-heading">
        Architecting the <br className="hidden md:block"/> 
        <span className="hero-heading-highlight">Digital Standard</span>
      </h1>
      
      <p className="hero-description">
        Premium web engineering for ambitious brands. I build scalable full-stack applications with exceptional user experiences.
      </p>

      <div className="hero-actions">
        <a href="#contact" className="hero-btn-primary">
          Start a Project
        </a>
        <a href="#work" className="hero-btn-secondary group">
          View Work
          <ArrowRight size={18} className="hero-btn-icon" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
