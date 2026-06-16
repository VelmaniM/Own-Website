import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Fortuna Packaging",
    subtitle: "Packaging Solutions",
    description: "A complete digital overhaul for a packaging solutions enterprise. Features a custom UI architecture and robust product showcasing.",
    link: "https://velmanim.github.io/Fortuna-Packaging/",
    type: "Client Project"
  },
  {
    id: 2,
    title: "Velmani M Portfolio",
    subtitle: "Personal Website",
    description: "My previous personal portfolio showcasing my early journey, projects, and initial iterations of my design system.",
    link: "https://velmanim.github.io/VelmaniM-Portfolio/",
    type: "Personal Project"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    subtitle: "Digital Storefront",
    description: "A robust, highly scalable e-commerce application built with Next.js and Stripe integration for seamless payments.",
    link: "#",
    type: "Enterprise Application"
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    subtitle: "Data Visualization",
    description: "A real-time data visualization dashboard for business intelligence, featuring complex charts and secure authentication.",
    link: "#",
    type: "SaaS Product"
  }
];

function Portfolio() {
  return (
    <section id="work" className="max-w-[100vw] overflow-hidden py-32 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col items-start md:items-center md:text-center">
        <span className="inline-flex items-center gap-4 mb-6 text-sm font-semibold tracking-[0.2em] uppercase text-brand-blue relative before:content-[''] before:block before:w-10 before:h-[2px] before:bg-brand-blue/40 before:rounded-full">Portfolio</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-main-text">Featured Projects.</h2>
        <p className="text-lg text-muted-text max-w-2xl">A curated selection of my latest enterprise-grade applications and digital experiences. Swipe right to explore.</p>
      </div>

      <div className="flex overflow-x-auto scroll-smooth overscroll-x-contain snap-x snap-mandatory hide-scrollbar items-center md:items-stretch">
        {/* We map through pairs of projects (slides) */}
        {projects.reduce((resultArray, item, index) => { 
          const chunkIndex = Math.floor(index/2)
          if(!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] // start a new chunk
          }
          resultArray[chunkIndex].push(item)
          return resultArray
        }, []).map((slideProjects, slideIndex) => (
          <div key={slideIndex} className="w-full shrink-0 snap-center snap-always flex flex-col md:flex-row justify-center items-center md:items-stretch gap-12 md:gap-8 lg:gap-16 py-10">
            {slideProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group relative w-[90vw] md:w-[45vw] lg:w-[42vw] shrink-0 transition-transform duration-500 hover:z-10 ${
                  index % 2 === 0 ? 'md:mb-32 md:self-start' : 'md:mt-32 md:self-end'
                }`}
              >
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block aspect-[4/3] w-full bg-white dark:bg-black rounded-[2.5rem] overflow-hidden relative mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.02)] border border-border-subtle"
                >
                  <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                      <ExternalLink size={28} />
                    </div>
                  </div>
                  
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-2 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-widest text-main-text border border-border-subtle shadow-sm">{project.type}</span>
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full bg-slate-50 dark:bg-zinc-900 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-3/4 h-3/4 bg-white dark:bg-black rounded-2xl shadow-xl flex flex-col items-center justify-center border border-border-subtle overflow-hidden relative">
                       <div className="absolute top-0 w-full h-8 bg-slate-50 dark:bg-zinc-900 border-b border-border-subtle flex items-center px-4 gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                       </div>
                       <span className="text-2xl md:text-3xl font-black text-slate-900 dark:text-zinc-100 tracking-tight mt-6 px-4">{project.title}</span>
                       {project.subtitle && <span className="text-sm md:text-base font-bold text-slate-900 dark:text-zinc-100 mt-2">{project.subtitle}</span>}
                    </div>
                  </motion.div>
                </a>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl md:text-2xl font-semibold text-main-text group-hover:text-brand-blue transition-colors">{project.title}</h3>
                    <span className="w-2 h-2 rounded-full bg-brand-blue opacity-80"></span>
                  </div>
                  <p className="text-muted-text text-base leading-relaxed mb-6">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
