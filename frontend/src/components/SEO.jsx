import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEO({ title, description, name, type }) {
  const siteTitle = title ? `${title} | NEXOR` : 'NEXOR';
  const siteDescription = description || 'We are a premium digital agency providing top-notch web design, app development, and SEO services globally. Grow your business online with us.';
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name='description' content={siteDescription} />
      
      {/* Open Graph tags for social sharing */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || 'Velmani M'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
    </Helmet>
  );
}

export default SEO;
