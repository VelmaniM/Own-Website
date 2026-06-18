import React, { useEffect } from 'react';
import SEO from '../../components/SEO';

function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto text-main-text">
      <SEO 
        title="Privacy Policy | Velmani M" 
        description="Read our Privacy Policy to understand how we protect your data." 
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-muted-text mb-8 text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-8 text-lg leading-relaxed text-muted-text">
        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and project details.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect primarily to communicate with you, provide our services, and deliver your projects. We may also use your email to send project updates, invoices, and occasional promotional materials related to our services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">3. Data Security</h2>
          <p>We take the security of your personal information seriously. We implement reasonable administrative, technical, and physical security measures to protect your data from unauthorized access, loss, or misuse. However, please note that no method of transmission over the Internet is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">4. Third-Party Disclosure</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third-party service providers who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">5. Cookies and Tracking</h2>
          <p>Our website may use "cookies" and similar tracking technologies to enhance user experience and analyze website traffic. You can choose to set your web browser to refuse cookies, but this may cause some parts of the site to function improperly.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">6. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at velmani215@gmail.com.</p>
        </section>
      </div>
    </div>
  );
}

export default Privacy;
