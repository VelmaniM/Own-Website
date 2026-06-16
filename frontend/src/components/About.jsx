import React from 'react';
import { Zap, Globe2, Trophy, Heart } from 'lucide-react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-main">
      <div className="about-header">
        <span className="about-badge">About Me</span>
        <h2 className="about-heading">
          Engineer by trade. <br/>
          <span className="about-heading-sub">Architect by nature.</span>
        </h2>
      </div>

      <div className="about-grid">
        {/* Main Content Card */}
        <div className="about-main-card">
          <div className="about-glow-blob"></div>
          <div className="about-content-wrapper">
            <h3 className="about-title">The Philosophy</h3>
            <p className="about-paragraph">
              I am a dedicated enterprise-grade software engineer specializing in transforming complex business requirements into elegant, high-performance web applications that scale effortlessly.
            </p>
            <p className="about-paragraph-last">
              With deep expertise in React, Node.js, and cloud-native architectures, I build secure, accessible, and breathtakingly fast digital experiences that place my clients at the forefront of their industries.
            </p>
          </div>
          
          <div className="about-stats-row">
            <div className="about-icons-group">
              <div className="about-icon about-icon-blue">5+</div>
              <div className="about-icon about-icon-amber"><Zap size={20}/></div>
              <div className="about-icon about-icon-indigo"><Globe2 size={20}/></div>
            </div>
            <span className="about-stats-label">Years building for the web</span>
          </div>
        </div>

        {/* Stats Column */}
        <div className="about-side-column">
          <div className="about-stat-card about-stat-card-amber group">
            <div className="about-stat-icon-wrapper about-stat-icon-amber">
              <Trophy size={20} />
            </div>
            <h4 className="about-stat-number">15<span className="about-stat-symbol-amber">+</span></h4>
            <p className="about-stat-desc">Projects Delivered</p>
          </div>

          <div className="about-stat-card about-stat-card-rose group">
            <div className="about-stat-icon-wrapper about-stat-icon-rose">
              <Heart size={20} />
            </div>
            <h4 className="about-stat-number">100<span className="about-stat-symbol-rose">%</span></h4>
            <p className="about-stat-desc">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
