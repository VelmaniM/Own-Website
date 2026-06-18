import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const pricingPlans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '₹15,000',
    description: 'Perfect for small businesses looking for a professional online presence.',
    features: [
      'Custom 5-page Website',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      '1 Month Free Support'
    ],
    recommended: false
  },
  {
    id: 'pro',
    name: 'Professional',
    price: '₹35,000',
    description: 'Ideal for growing companies needing advanced features and dynamic content.',
    features: [
      'Up to 15 Pages',
      'Premium Custom Design',
      'Advanced SEO & Analytics',
      'CMS Integration (Blog)',
      'E-commerce Ready',
      '3 Months Free Support'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale digital solutions for large organizations and complex platforms.',
    features: [
      'Unlimited Pages',
      'Custom Web Application',
      'Complex API Integrations',
      'Advanced Security Setup',
      'Dedicated Cloud Hosting',
      '24/7 Priority Support'
    ],
    recommended: false
  }
];

function Pricing() {
  return (
    <section id="pricing" className="pricing-main">
      <div className="pricing-header">
        <span className="pricing-badge">Plans</span>
        <h2 className="pricing-heading">Simple Pricing.</h2>
        <p className="pricing-description">Choose the best plan for your business. No hidden fees or extra charges.</p>
      </div>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className={`pricing-card ${plan.recommended ? 'pricing-card-recommended' : ''}`}>
            {plan.recommended && <div className="pricing-recommended-badge">Most Popular</div>}
            <div className="pricing-card-header">
              <h3 className="pricing-card-name">{plan.name}</h3>
              <div className="pricing-card-price">{plan.price}</div>
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

            <a href="#contact" className={`pricing-btn ${plan.recommended ? 'pricing-btn-primary' : 'pricing-btn-secondary'}`}>
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
