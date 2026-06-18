import React from 'react';
import { Zap, Globe2, Trophy, Heart } from 'lucide-react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-main">
      <div className="about-header">
        <span className="about-badge">About Me</span>
        <h2 className="about-heading">
          Your Success is <br/>
          <span className="about-heading-sub">Our Mission.</span>
        </h2>
      </div>

      <div className="about-grid">
        {/* Main Content Card */}
        <div className="about-main-card">
          <div className="about-glow-blob"></div>
          <div className="about-content-wrapper">
            <h3 className="about-title">Who We Are</h3>
            <p className="about-paragraph">
              Recognized as the <strong>best web developer company</strong>, we are a dedicated digital agency specializing in helping businesses succeed online. We build beautiful, fast-loading websites and mobile apps that are easy to use.
            </p>
            <p className="about-paragraph-last">
              With our expertise in web design and digital marketing, we make sure your business stands out from the competition and reaches more customers online.
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
