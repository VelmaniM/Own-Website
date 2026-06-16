import React from 'react';
import { Zap, Globe2, Trophy, Heart } from 'lucide-react';

function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-32 border-t border-border-subtle">
      <div className="mb-20">
        <span className="inline-flex items-center gap-4 mb-6 text-sm font-semibold tracking-[0.2em] uppercase text-brand-blue relative before:content-[''] before:block before:w-10 before:h-[2px] before:bg-brand-blue/40 before:rounded-full">About Me</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 max-w-3xl">
          Engineer by trade. <br/>
          <span className="text-muted-text">Architect by nature.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Content Card */}
        <div className="md:col-span-8 bg-card-background rounded-[2rem] p-8 md:p-12 border border-border-subtle shadow-sm flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mb-6 text-main-text">The Philosophy</h3>
            <p className="text-lg text-muted-text leading-relaxed mb-6">
              I am a dedicated enterprise-grade software engineer specializing in transforming complex business requirements into elegant, high-performance web applications that scale effortlessly.
            </p>
            <p className="text-lg text-muted-text leading-relaxed">
              With deep expertise in React, Node.js, and cloud-native architectures, I build secure, accessible, and breathtakingly fast digital experiences that place my clients at the forefront of their industries.
            </p>
          </div>
          
          <div className="relative z-10 mt-12 flex items-center gap-4">
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full bg-page-background border-2 border-border-subtle flex items-center justify-center text-sky-500 text-sm font-bold">5+</div>
              <div className="w-12 h-12 rounded-full bg-page-background border-2 border-border-subtle flex items-center justify-center text-amber-500 text-sm font-bold"><Zap size={20}/></div>
              <div className="w-12 h-12 rounded-full bg-page-background border-2 border-border-subtle flex items-center justify-center text-indigo-500 text-sm font-bold"><Globe2 size={20}/></div>
            </div>
            <span className="text-sm font-medium text-main-text ml-2">Years building for the web</span>
          </div>
        </div>

        {/* Stats Column */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-card-background rounded-[2rem] p-8 border border-border-subtle shadow-sm flex-1 flex flex-col justify-center relative overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="absolute top-4 right-4 w-10 h-10 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Trophy size={20} />
            </div>
            <h4 className="text-5xl font-bold text-main-text tracking-tighter mb-2">15<span className="text-amber-500">+</span></h4>
            <p className="text-sm font-medium text-muted-text uppercase tracking-wider">Projects Delivered</p>
          </div>

          <div className="bg-card-background rounded-[2rem] p-8 border border-border-subtle shadow-sm flex-1 flex flex-col justify-center relative overflow-hidden group hover:border-rose-500/50 transition-colors">
            <div className="absolute top-4 right-4 w-10 h-10 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart size={20} />
            </div>
            <h4 className="text-5xl font-bold text-main-text tracking-tighter mb-2">100<span className="text-rose-500">%</span></h4>
            <p className="text-sm font-medium text-muted-text uppercase tracking-wider">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
