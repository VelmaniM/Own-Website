import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout, Server, Sparkles, CheckCircle2, Mail, MapPin, Moon, Sun, Terminal, Palette, Cpu, Trophy, Zap, Globe2, ExternalLink, Heart } from 'lucide-react';

function App() {
  const [status, setStatus] = useState('idle');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className="app-container">
      {/* Navigation (Ultra-Clean Enterprise White) */}
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-black shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-colors duration-300">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center text-main-text">
          <div className="text-2xl font-extrabold tracking-tight flex items-center">
            Velmani M
          </div>
          
          <div className="hidden md:flex gap-10 text-[15px] font-medium">
            <a href="#about" className="relative text-muted-text hover:text-main-text transition-colors group">
              About
              <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a href="#work" className="relative text-muted-text hover:text-main-text transition-colors group">
              Work
              <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
            <a href="#services" className="relative text-muted-text hover:text-main-text transition-colors group">
              Capabilities
              <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsDark(!isDark)}
              className="text-muted-text hover:text-main-text transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="#contact" className="hidden sm:flex px-6 py-2.5 bg-main-text text-btn-text text-sm font-semibold rounded-lg hover:bg-brand-blue hover:text-white transition-colors">
              Get in Touch
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Services Section */}
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

      {/* Selected Work Section */}
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

      {/* Contact Section */}
      <section id="contact" className="bg-contact-bg py-32 mt-20 border-t border-border-subtle transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center"><span className="inline-flex items-center gap-4 mb-6 text-sm font-semibold tracking-[0.2em] uppercase text-brand-blue relative before:content-[''] before:block before:w-10 before:h-[2px] before:bg-brand-blue/40 before:rounded-full">Contact</span></div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-main-text">Initiate Your Digital Transformation.</h2>
          <p className="text-xl text-muted-text mb-12">Connect with our experts to discuss your strategic initiatives. We'll respond with actionable insights within 24 hours.</p>
          
          <form className="max-w-xl mx-auto text-left space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input className="form-input" type="text" id="name" required placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="form-label" htmlFor="email">Work Email</label>
                <input className="form-input" type="email" id="email" required placeholder="jane@company.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="form-label" htmlFor="message">Project Details</label>
              <textarea className="form-textarea" id="message" rows="5" required placeholder="Tell us about your technical requirements..."></textarea>
            </div>
            
            <button 
              type="button" 
              className="w-full py-4 bg-gradient-to-r from-brand-blue to-indigo-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20"
              onClick={(e) => {
                e.preventDefault();
                setStatus('success');
              }}
            >
              Send Message
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl border border-green-200 dark:border-green-800 flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4">
              <CheckCircle2 size={20} />
              <p className="font-medium">Message received. We will be in touch shortly.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-footer-bg text-footer-text pt-24 pb-8 border-t border-border-subtle transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold mb-2 tracking-tight">Velmani M</h3>
            <p className="text-footer-muted text-sm leading-relaxed mb-4">Architecting the future of business through premium digital experiences and scalable enterprise solutions.</p>
            <div className="flex gap-4 items-center">
              <a href="https://wa.me/919600487102" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110 drop-shadow-sm" title="WhatsApp">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/iam__velmanikandan?igsh=MTlvdXEzNGY4enRjag%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110 drop-shadow-sm" title="Instagram">
                <svg width="29" height="29" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f09433" />
                      <stop offset="25%" stopColor="#e6683c" />
                      <stop offset="50%" stopColor="#dc2743" />
                      <stop offset="75%" stopColor="#cc2366" />
                      <stop offset="100%" stopColor="#bc1888" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/velmani-m/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110 drop-shadow-sm" title="LinkedIn">
                <svg width="25" height="25" viewBox="0 0 24 24" fill="#0077B5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:velmani215@gmail.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center transition-transform hover:scale-110 drop-shadow-sm" title="Mail">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#EA4335">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg mb-2 text-footer-text">Services</h4>
            <a href="#services" className="text-footer-muted hover:text-footer-text transition-colors text-sm">Experience Design</a>
            <a href="#services" className="text-footer-muted hover:text-footer-text transition-colors text-sm">Enterprise Engineering</a>
            <a href="#services" className="text-footer-muted hover:text-footer-text transition-colors text-sm">Digital Commerce</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg mb-2 text-footer-text">Company</h4>
            <a href="#about" className="text-footer-muted hover:text-footer-text transition-colors text-sm">About Us</a>
            <a href="#work" className="text-footer-muted hover:text-footer-text transition-colors text-sm">Client Success</a>
            <a href="#contact" className="text-footer-muted hover:text-footer-text transition-colors text-sm">Contact</a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg mb-2 text-footer-text">Connect</h4>
            <a href="mailto:velmani215@gmail.com" className="flex items-center gap-3 text-footer-muted hover:text-footer-text transition-colors text-sm">
              <Mail size={16} />
              <span>velmani215@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-footer-muted text-sm">
              <MapPin size={16} />
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-footer-muted">
          <p>© {new Date().getFullYear()} Velmani M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
