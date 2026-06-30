import React from 'react';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Pricing from '../components/Pricing';
import Reviews from '../components/Reviews';

function Home() {
  return (
    <>
      <SEO 
        description="Partner with NEXOR, the best web developer company, to build fast, secure, and beautiful websites and apps for your business globally." 
      />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Pricing />
    </>
  );
}

export default Home;
