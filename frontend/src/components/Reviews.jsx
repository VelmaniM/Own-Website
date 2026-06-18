import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Reviews.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    time: '2 weeks ago',
    initial: 'S',
    color: 'bg-blue-500',
    content: 'Velmani transformed our digital presence completely. The new platform is not only beautiful but incredibly fast. Our customer engagement has increased by 40% since the launch.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    time: '1 month ago',
    initial: 'M',
    color: 'bg-green-500',
    content: 'An exceptional engineer who understands both business needs and technical architecture. The scrap management system he built saved us hundreds of hours of manual work.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    time: '2 months ago',
    initial: 'E',
    color: 'bg-purple-500',
    content: 'Working with Velmani was seamless. He took our vague requirements and turned them into a stunning, conversion-optimized website. Highly recommended for any serious business.',
    rating: 5
  }
];

function Reviews() {
  return (
    <section id="testimonials" className="testi-main">
      <div className="testi-header">
        <span className="testi-badge">Reviews</span>
        <h2 className="testi-heading">What Our Clients Say.</h2>
      </div>

      <div className="testi-marquee-wrapper">
        <div className="testi-marquee-track">
          {/* First set of cards */}
          {testimonials.map((testimonial) => (
            <div key={`first-${testimonial.id}`} className="testi-card group">
              <div className="testi-google-header">
                <div className="testi-user-info">
                  <div className={`testi-avatar ${testimonial.color}`}>
                    {testimonial.initial}
                  </div>
                  <div className="testi-user-details">
                    <h4 className="testi-author-name">{testimonial.name}</h4>
                    <p className="testi-time">{testimonial.time}</p>
                  </div>
                </div>
                <div className="testi-google-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    <path d="M1 1h22v22H1z" fill="none"/>
                  </svg>
                </div>
              </div>
              
              <div className="testi-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#fbbc04" stroke="#fbbc04" className="testi-star-icon" />
                ))}
              </div>

              <p className="testi-content">{testimonial.content}</p>
            </div>
          ))}

          {/* Duplicated set for infinite loop */}
          {testimonials.map((testimonial) => (
            <div key={`second-${testimonial.id}`} className="testi-card group">
              <div className="testi-google-header">
                <div className="testi-user-info">
                  <div className={`testi-avatar ${testimonial.color}`}>
                    {testimonial.initial}
                  </div>
                  <div className="testi-user-details">
                    <h4 className="testi-author-name">{testimonial.name}</h4>
                    <p className="testi-time">{testimonial.time}</p>
                  </div>
                </div>
                <div className="testi-google-icon">
                  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    <path d="M1 1h22v22H1z" fill="none"/>
                  </svg>
                </div>
              </div>
              
              <div className="testi-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#fbbc04" stroke="#fbbc04" className="testi-star-icon" />
                ))}
              </div>

              <p className="testi-content">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
