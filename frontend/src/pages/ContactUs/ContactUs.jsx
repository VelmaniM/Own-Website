import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import './ContactUs.css';

function ContactUs() {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Split "Full Name" into firstName and lastName since backend expects it
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || 'Unknown';
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          projectDetails: formData.message
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="contact-page-container min-h-[80vh] flex flex-col justify-center py-20">
      <section className="bg-contact-bg border-border-subtle transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center"><span className="inline-flex items-center gap-4 mb-6 text-sm font-semibold tracking-[0.2em] uppercase text-brand-blue relative before:content-[''] before:block before:w-10 before:h-[2px] before:bg-brand-blue/40 before:rounded-full">Contact Us</span></div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-main-text">Initiate Your Digital Transformation.</h2>
          <p className="text-xl text-muted-text mb-12">Connect with our experts to discuss your strategic initiatives. We'll respond with actionable insights within 24 hours.</p>
          
          <form className="max-w-xl mx-auto text-left space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input className="form-input" type="text" id="name" required placeholder="Jane Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="form-label" htmlFor="email">Work Email</label>
                <input className="form-input" type="email" id="email" required placeholder="jane@company.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="form-label" htmlFor="message">Project Details</label>
              <textarea className="form-textarea" id="message" rows="5" required placeholder="Tell us about your technical requirements..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full py-4 bg-gradient-to-r from-brand-blue to-indigo-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/20 disabled:opacity-70"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-xl border border-green-200 dark:border-green-800 flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4">
              <CheckCircle2 size={20} />
              <p className="font-medium">Message received. We will be in touch shortly.</p>
            </div>
          )}
          {status === 'error' && (
            <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800 flex items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4">
              <p className="font-medium">Oops! Something went wrong. Please try again later.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
