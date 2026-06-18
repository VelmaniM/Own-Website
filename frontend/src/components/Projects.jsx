import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Fortuna Packaging",
    subtitle: "Packaging Solutions",
    description: "A complete website redesign for a packaging company, making it easy for their customers to find products.",
    link: "https://velmanim.github.io/Fortuna-Packaging/",
    type: "Client Project"
  },
  {
    id: 2,
    title: "Velmani M Portfolio",
    subtitle: "Personal Website",
    description: "My personal website showing my past projects, skills, and the web development services I offer.",
    link: "https://velmanim.github.io/VelmaniM-Portfolio/",
    type: "Personal Project"
  },
  {
    id: 3,
    title: "VetriVel Traders",
    subtitle: "Scrap Management",
    description: "A modern website for an industrial scrap management company to help them get more local business online.",
    link: "https://velmanim.github.io/Vetrivvel-Traders/",
    type: "Client Project"
  },
  {
    id: 4,
    title: "Business Dashboard",
    subtitle: "Data Analytics",
    description: "A custom web application built for business owners to easily track their sales and customer data.",
    link: "#",
    type: "SaaS Product"
  }
];

function Projects() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth > 768 ? window.innerWidth * 0.5 : window.innerWidth * 0.8;
      sliderRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="portfolio-main">
      <div className="portfolio-header">
        <span className="portfolio-badge">Our Work</span>
        <h2 className="portfolio-heading">Featured Projects.</h2>
        <p className="portfolio-description">Take a look at some of the awesome websites we have built for our clients. Swipe right to explore.</p>
      </div>

      <div className="portfolio-slider-wrapper">
        <button 
          onClick={() => scroll('left')} 
          className={`portfolio-arrow portfolio-arrow-left ${!canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <div 
          className="portfolio-slider-container hide-scrollbar"
          ref={sliderRef}
          onScroll={checkScroll}
        >
          {/* We map through pairs of projects (slides) */}
          {projects.reduce((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index/2)
            if(!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = [] // start a new chunk
            }
            resultArray[chunkIndex].push(item)
            return resultArray
          }, []).map((slideProjects, slideIndex) => (
            <div key={slideIndex} className="portfolio-slide">
              {slideProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`portfolio-project-card group ${
                    index % 2 === 0 ? 'portfolio-project-card-up' : 'portfolio-project-card-down'
                  }`}
                >
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="portfolio-image-wrapper"
                  >
                    <div className="portfolio-overlay">
                      <div className="portfolio-icon-container">
                        <ExternalLink size={28} />
                      </div>
                    </div>
                    
                    <div className="portfolio-type-badge-wrapper">
                      <span className="portfolio-type-badge">{project.type}</span>
                    </div>

                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="portfolio-mockup-container"
                    >
                      <div className="portfolio-mockup-window">
                         <div className="portfolio-mockup-header">
                            <div className="portfolio-mockup-dot-red"></div>
                            <div className="portfolio-mockup-dot-amber"></div>
                            <div className="portfolio-mockup-dot-green"></div>
                         </div>
                         <span className="portfolio-mockup-title">{project.title}</span>
                         {project.subtitle && <span className="portfolio-mockup-subtitle">{project.subtitle}</span>}
                      </div>
                    </motion.div>
                  </a>
                  <div>
                    <div className="portfolio-info-container">
                      <h3 className="portfolio-info-title">{project.title}</h3>
                    </div>
                    <p className="portfolio-info-desc">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <button 
          onClick={() => scroll('right')} 
          className={`portfolio-arrow portfolio-arrow-right ${!canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

export default Projects;
