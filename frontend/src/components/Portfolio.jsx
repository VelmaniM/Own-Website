import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

function Portfolio() {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-32 border-t border-border-subtle">
      <div className="mb-20 flex flex-col items-start md:items-center md:text-center">
        <span className="inline-flex items-center gap-4 mb-6 text-sm font-semibold tracking-[0.2em] uppercase text-brand-blue relative before:content-[''] before:block before:w-10 before:h-[2px] before:bg-brand-blue/40 before:rounded-full">Portfolio</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-main-text">Featured Projects.</h2>
        <p className="text-lg text-muted-text max-w-2xl">A curated selection of my latest enterprise-grade applications and digital experiences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Project 1 */}
        <div className="group relative">
          <a 
            href="https://velmanim.github.io/Fortuna-Packaging/" 
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
              <span className="px-4 py-2 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-widest text-main-text border border-border-subtle shadow-sm">Client Project</span>
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
                 <span className="text-3xl font-black text-slate-900 dark:text-zinc-100 tracking-tight mt-6">Fortuna</span>
                 <span className="text-base font-bold text-slate-900 dark:text-zinc-100 mt-2">Packaging Solutions</span>
              </div>
            </motion.div>
          </a>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-3xl font-bold text-main-text group-hover:text-brand-blue transition-colors">Fortuna Packaging</h3>
              <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
            </div>
            <p className="text-muted-text text-lg leading-relaxed mb-6">A complete digital overhaul for a packaging solutions enterprise. Features a custom UI architecture and robust product showcasing.</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="group relative mt-0 md:mt-24">
          <a 
            href="https://velmanim.github.io/VelmaniM-Portfolio/" 
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
              <span className="px-4 py-2 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-widest text-main-text border border-border-subtle shadow-sm">Personal Project</span>
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
                 <span className="text-3xl font-black text-slate-900 dark:text-zinc-100 tracking-tight mt-6">Velmani M</span>
              </div>
            </motion.div>
          </a>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-3xl font-bold text-main-text group-hover:text-brand-blue transition-colors">Personal Portfolio Website</h3>
              <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
            </div>
            <p className="text-muted-text text-lg leading-relaxed mb-6">My previous personal portfolio showcasing my early journey, projects, and initial iterations of my design system.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
