import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: '₹15,000',
    originalPrice: '₹25,000',
    description: 'The perfect launchpad for new businesses. Premium quality at an affordable price.',
    features: [
      '5-Page Stunning Design',
      'Mobile-First & Fast Loading',
      'Google SEO Foundation',
      'Lead Generation Forms',
      '30 Days Free Maintenance'
    ],
    recommended: false
  },
  {
    id: 'business',
    name: 'Business Growth',
    price: '₹35,000',
    originalPrice: '₹50,000',
    description: 'Our most popular plan. Packed with advanced features to scale your digital presence rapidly.',
    features: [
      'Up to 15 Premium Pages',
      'Advanced Animations & UI',
      'High-Performance SEO',
      'Dynamic Blog / CMS System',
      'Fast Cloud Hosting Included',
      '90 Days Priority Support'
    ],
    recommended: true
  },
  {
    id: 'custom',
    name: 'Custom Web App',
    price: 'Let\'s Talk',
    description: 'Need a complete digital transformation? We build secure, scalable apps tailored to your unique needs.',
    features: [
      'Unlimited Pages & Features',
      'E-commerce & Web Apps',
      'Custom API Integrations',
      'Bank-Grade Security',
      'Global Scalable Servers',
      'Lifetime Dedicated Support'
    ],
    recommended: false
  }
];

function Pricing() {
  const [timeLeft, setTimeLeft] = useState('00h 00m 00s');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);
      
      const difference = endOfDay - now;
      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft(`${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`);
      } else {
        setTimeLeft('00h 00m 00s');
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="pricing-main">
      <div className="pricing-header">
        <span className="pricing-badge">Special Offer</span>
        <h2 className="pricing-heading">High Quality. Honest Pricing.</h2>
        <p className="pricing-description">We believe in delivering world-class websites that give you 10x return on investment. Book today to lock in your discount.</p>
      </div>

      <div className="flex flex-col items-center justify-center mb-12 px-6">
        <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-3 rounded-full flex flex-col sm:flex-row items-center gap-3 animate-pulse">
          <span className="font-bold uppercase tracking-wider text-sm">🔥 Mega Offer Ends Today:</span>
          <span className="font-mono font-bold text-xl">{timeLeft}</span>
        </div>
        <Link to="/contact" className="mt-6 bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-brand-blue/20 hover:-translate-y-1 hover:shadow-brand-blue/40 transition-all flex items-center gap-2">
          Click Here For Immediate Booking Discount!
        </Link>
      </div>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={`pricing-card ${plan.recommended ? 'pricing-card-recommended' : ''}`}>
            {plan.recommended && <div className="pricing-recommended-badge">Most Popular</div>}
            <div className="pricing-card-header">
              <h3 className="pricing-card-name">{plan.name}</h3>
              <div className="pricing-card-price-container flex flex-col items-start gap-1 my-4">
                {plan.originalPrice && (
                  <span className="text-muted-text line-through text-lg decoration-red-500/50 decoration-2">
                    {plan.originalPrice}
                  </span>
                )}
                <div className="pricing-card-price !my-0">{plan.price}</div>
              </div>
              <p className="pricing-card-desc">{plan.description}</p>
            </div>
            
            <div className="pricing-card-features">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="pricing-feature">
                  <Check size={18} className="pricing-feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className={`pricing-btn ${plan.recommended ? 'pricing-btn-primary' : 'pricing-btn-secondary'}`}>
              Get Started
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-muted-text max-w-2xl mx-auto px-6">
        <p>
          <strong className="text-main-text font-semibold">Please Note:</strong> We do not offer cancellations or refunds once a project has commenced. However, we are fully committed to your satisfaction and will gladly provide revisions and changes to ensure the final product meets your expectations.
        </p>
      </div>
    </section>
  );
}

export default Pricing;
