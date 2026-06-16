import React from 'react';
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden pt-12">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>
      
      {/* Background Glow Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none dark:opacity-30" style={{ background: 'radial-gradient(circle, var(--color-brand-blue) 0%, rgba(0,0,0,0) 70%)' }}></div>

      {/* Status Pill Badge */}
      <div className="z-10 mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-subtle bg-white/50 dark:bg-black/50 backdrop-blur-md shadow-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-xs font-medium text-main-text">Available for new opportunities</span>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] text-main-text mb-6 z-10 max-w-5xl mx-auto">
        Architecting the <br className="hidden md:block"/> 
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-cyan-400 to-indigo-500">Digital Standard</span>
      </h1>
      
      <p className="text-lg md:text-xl text-muted-text max-w-2xl mx-auto leading-relaxed mb-10 font-normal z-10">
        Premium web engineering for ambitious brands. I build scalable full-stack applications with exceptional user experiences.
      </p>

      <div className="z-10 flex flex-col sm:flex-row items-center gap-4">
        <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-blue to-indigo-500 text-white text-lg font-medium rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)] dark:shadow-[0_0_40px_-10px_rgba(14,165,233,0.3)] w-full sm:w-auto">
          Start a Project
        </a>
        <a href="#work" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-border-subtle text-main-text text-lg font-medium rounded-full hover:bg-main-text hover:text-btn-text transition-all w-full sm:w-auto group">
          View Work
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
