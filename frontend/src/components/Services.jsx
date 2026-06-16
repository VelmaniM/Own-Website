import React from 'react';
import { Layout, Code, Server } from 'lucide-react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services-main">
      <div className="services-header">
        <span className="services-badge">Capabilities</span>
        <h2 className="services-heading">End-to-end Engineering.</h2>
        <p className="services-description">I specialize in the MERN stack, delivering full-cycle development from intuitive interfaces to robust backend architectures.</p>
      </div>
      
      <div className="services-grid">
        <div className="services-card services-card-blue group">
          <div className="services-glow services-glow-blue"></div>
          <div className="services-icon-wrapper services-icon-blue">
            <Layout size={28} strokeWidth={1.5}/>
          </div>
          <h3 className="services-card-title">UI/UX Architecture</h3>
          <p className="services-card-desc">Crafting beautiful, intuitive interfaces and design systems that delight users and drive engagement.</p>
        </div>

        <div className="services-card services-card-emerald group">
          <div className="services-glow services-glow-emerald"></div>
          <div className="services-icon-wrapper services-icon-emerald">
            <Code size={28} strokeWidth={1.5}/>
          </div>
          <h3 className="services-card-title">Frontend Engineering</h3>
          <p className="services-card-desc">Building fast, interactive, and accessible web applications using React, Next.js, and modern CSS frameworks.</p>
        </div>

        <div className="services-card services-card-purple group">
          <div className="services-glow services-glow-purple"></div>
          <div className="services-icon-wrapper services-icon-purple">
            <Server size={28} strokeWidth={1.5}/>
          </div>
          <h3 className="services-card-title">Backend Systems</h3>
          <p className="services-card-desc">Architecting scalable REST/GraphQL APIs and secure databases using Node.js, Express, and MongoDB.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
