import React, { useEffect } from 'react';
import SEO from '../../components/SEO';

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto text-main-text">
      <SEO 
        title="Terms & Conditions | Velmani M" 
        description="Read our Terms and Conditions. We provide transparent and professional web development services." 
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>
      <p className="text-muted-text mb-8 text-sm">Last Updated: {new Date().toLocaleDateString()}</p>
      
      <div className="space-y-8 text-lg leading-relaxed text-muted-text">
        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">1. Acceptance of Terms</h2>
          <p>By accessing this website and engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">2. Services and Scope</h2>
          <p>We provide custom web development, mobile app development, and digital marketing services. The exact scope of work, deliverables, and timelines will be defined in a formal project agreement or invoice before the commencement of any work.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">3. Payment, Cancellations, and Refunds</h2>
          <p>We require an initial deposit before beginning any project. <strong>All payments are strictly non-refundable.</strong> We do not offer cancellations or refunds once a project has commenced, as our work involves custom time and intellectual effort.</p>
          <p className="mt-4">Instead of refunds, we are fully committed to your satisfaction. We will provide revisions and modifications as per the mutually agreed scope to ensure the final product meets your expectations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">4. Client Responsibilities</h2>
          <p>The client is responsible for providing all necessary text, images, and other content required for the project in a timely manner. Delays in providing content may result in project delays that are outside our control.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">5. Intellectual Property</h2>
          <p>Upon final and full payment, the client owns the rights to the final delivered website or application. However, we reserve the right to display the completed work in our portfolio, case studies, and promotional materials unless a strict Non-Disclosure Agreement (NDA) is signed beforehand.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">6. Limitation of Liability</h2>
          <p>Under no circumstances shall we be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services or the resulting products. Our maximum liability shall not exceed the total amount paid by you for the specific project.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-main-text mb-4">7. Amendments</h2>
          <p>We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of our services after any changes indicates your acceptance of the new terms.</p>
        </section>
      </div>
    </div>
  );
}

export default Terms;
