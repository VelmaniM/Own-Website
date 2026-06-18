import React from 'react';
import { Layout, Code, Server } from 'lucide-react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services-main">
      <div className="services-header">
        <span className="services-badge">Our Services</span>
        <h2 className="services-heading">What We Do.</h2>
        <p className="services-description">We provide complete digital solutions, from designing your website to making sure it ranks high on Google.</p>
      </div>
      
      <div className="services-grid">
        <div className="services-card services-card-blue group">
          <div className="services-glow services-glow-blue"></div>
          <div className="services-icon-wrapper services-icon-blue">
            <Layout size={28} strokeWidth={1.5}/>
          </div>
          <h3 className="services-card-title">Web & UI Design</h3>
          <p className="services-card-desc">We design beautiful, easy-to-use websites that your customers will love to interact with.</p>
        </div>

        <div className="services-card services-card-emerald group">
          <div className="services-glow services-glow-emerald"></div>
          <div className="services-icon-wrapper services-icon-emerald">
            <Code size={28} strokeWidth={1.5}/>
          </div>
          <h3 className="services-card-title">Website Development</h3>
          <p className="services-card-desc">We build fast, secure, and modern websites that work perfectly on mobile phones and computers.</p>
        </div>

        <div className="services-card services-card-purple group">
          <div className="services-glow services-glow-purple"></div>
          <div className="services-icon-wrapper services-icon-purple">
            <Server size={28} strokeWidth={1.5}/>
          </div>
          <h3 className="services-card-title">SEO & Marketing</h3>
          <p className="services-card-desc">We help your website show up on Google search and reach more people through social media.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
