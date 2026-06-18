import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './ContactUs.css';

function ContactUs() {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedName, setSubmittedName] = useState('');
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Split "Full Name" into firstName and lastName since backend expects it
    const nameParts = formData.name.trim().split(' ');
    const firstName = nameParts[0] || 'Unknown';
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
    setSubmittedName(firstName);

    try {
      const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:5001' : '';
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
      <section className="contact-main">
        <div className="contact-header">
          <div className="contact-badge-wrapper"><span className="contact-badge">Contact Us</span></div>
          <h2 className="contact-heading">Initiate Your Digital Transformation.</h2>
          <p className="contact-desc">Connect with our experts to discuss your strategic initiatives. We'll respond with actionable insights within 24 hours.</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            {status === 'success' ? (
              <div className="contact-success-container py-8">
                <div className="flex flex-col items-center justify-center gap-6">
                  <div className="relative w-28 h-28 mb-4">
                    {/* Circle */}
                    <motion.svg
                      className="absolute inset-0 w-full h-full text-green-500"
                      viewBox="0 0 50 50"
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.circle
                        cx="25"
                        cy="25"
                        r="20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        initial={{ pathLength: 0, scale: 0.8, opacity: 0 }}
                        animate={{ pathLength: 1, scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      {/* Tick */}
                      <motion.path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M 16 26 l 6 6 l 12 -12"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                      />
                    </motion.svg>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-center"
                  >
                    <h3 className="text-3xl font-bold text-main-text mb-3">Hello, {submittedName}!</h3>
                    <p className="text-muted-text text-lg leading-relaxed">Thank you for reaching out.<br/>Your message has been sent successfully and we'll get back to you shortly.</p>
                    <button 
                      type="button" 
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-6 py-2 bg-slate-100 dark:bg-zinc-800 text-main-text rounded-lg hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors font-medium"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                </div>
              </div>
            ) : (
              <>
                <div className="contact-grid">
                  <div className="contact-field">
                    <label className="form-label" htmlFor="name">Full Name</label>
                    <input ref={nameInputRef} className="form-input" type="text" id="name" required placeholder="Jane Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="contact-field">
                    <label className="form-label" htmlFor="email">Work Email</label>
                    <input className="form-input" type="email" id="email" required placeholder="jane@company.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                </div>
                
                <div className="contact-field">
                  <label className="form-label" htmlFor="message">Project Details</label>
                  <textarea className="form-textarea" id="message" rows="5" required placeholder="Tell us about your technical requirements..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`contact-submit-btn ${status === 'submitting' ? 'contact-submit-btn-disabled' : ''}`}
                >
                  {status === 'submitting' ? 'Processing...' : 'Send Message'}
                </button>

                {status === 'error' && (
                  <div className="contact-error-msg animate-in fade-in">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
