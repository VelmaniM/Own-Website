import React from 'react';
import { Layout, Code, Server } from 'lucide-react';

function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-32">
      <div className="mb-20 text-center flex flex-col items-center">
        <span className="inline-flex items-center gap-4 mb-6 text-sm font-semibold tracking-[0.2em] uppercase text-brand-blue relative before:content-[''] before:block before:w-10 before:h-[2px] before:bg-brand-blue/40 before:rounded-full">Capabilities</span>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-main-text">End-to-end Engineering.</h2>
        <p className="text-lg text-muted-text max-w-2xl mx-auto">I specialize in the MERN stack, delivering full-cycle development from intuitive interfaces to robust backend architectures.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="group relative bg-card-background rounded-[2rem] p-8 lg:p-10 border border-border-subtle hover:border-blue-500/30 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-colors duration-500"></div>
          <div className="w-16 h-16 bg-card-background border border-border-subtle shadow-sm text-blue-500 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Layout size={28} strokeWidth={1.5}/>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-main-text relative z-10">UI/UX Architecture</h3>
          <p className="text-muted-text leading-relaxed relative z-10">Crafting beautiful, intuitive interfaces and design systems that delight users and drive engagement.</p>
        </div>

        <div className="group relative bg-card-background rounded-[2rem] p-8 lg:p-10 border border-border-subtle hover:border-emerald-500/30 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors duration-500"></div>
          <div className="w-16 h-16 bg-card-background border border-border-subtle shadow-sm text-emerald-500 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Code size={28} strokeWidth={1.5}/>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-main-text relative z-10">Frontend Engineering</h3>
          <p className="text-muted-text leading-relaxed relative z-10">Building fast, interactive, and accessible web applications using React, Next.js, and modern CSS frameworks.</p>
        </div>

        <div className="group relative bg-card-background rounded-[2rem] p-8 lg:p-10 border border-border-subtle hover:border-purple-500/30 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/10 transition-colors duration-500"></div>
          <div className="w-16 h-16 bg-card-background border border-border-subtle shadow-sm text-purple-500 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            <Server size={28} strokeWidth={1.5}/>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-main-text relative z-10">Backend Systems</h3>
          <p className="text-muted-text leading-relaxed relative z-10">Architecting scalable REST/GraphQL APIs and secure databases using Node.js, Express, and MongoDB.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
