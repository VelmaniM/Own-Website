import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
    </>
  );
}

export default Home;
