import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import './ContactUs.css';

function ContactUs() {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
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
      <section className="contact-main">
        <div className="contact-header">
          <div className="contact-badge-wrapper"><span className="contact-badge">Contact Us</span></div>
          <h2 className="contact-heading">Initiate Your Digital Transformation.</h2>
          <p className="contact-desc">Connect with our experts to discuss your strategic initiatives. We'll respond with actionable insights within 24 hours.</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
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

            {status === 'success' ? (
              <div className="contact-success-msg animate-in fade-in slide-in-from-bottom-4">
                <CheckCircle2 className="contact-success-icon" size={32} />
                <div>
                  <h4 className="contact-success-title">Message Sent Successfully</h4>
                  <p className="contact-success-desc">We'll review your requirements and get back to you shortly.</p>
                </div>
              </div>
            ) : (
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className={`contact-submit-btn ${status === 'submitting' ? 'contact-submit-btn-disabled' : ''}`}
              >
                {status === 'submitting' ? 'Processing...' : 'Send Message'}
              </button>
            )}

            {status === 'error' && (
              <div className="contact-error-msg animate-in fade-in">
                Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
