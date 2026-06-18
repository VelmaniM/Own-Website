import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter Website',
    price: '₹15,000',
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
  return (
    <section id="pricing" className="pricing-main">
      <div className="pricing-header">
        <span className="pricing-badge">Transparent Pricing</span>
        <h2 className="pricing-heading">High Quality. Honest Pricing.</h2>
        <p className="pricing-description">We believe in delivering world-class websites that give you 10x return on investment. 100% transparent with zero hidden fees.</p>
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
