import React from 'react';
import { Helmet } from 'react-helmet-async';
import siteMetadata from '../data/meta.json';

interface StructuredDataProps {
  type?: 'attorney' | 'localBusiness' | 'professionalService';
  customData?: Record<string, any>;
}

const StructuredData: React.FC<StructuredDataProps> = ({ 
  type = 'attorney',
  customData
}) => {
  let structuredData;
  
  // Default attorney data
  if (type === 'attorney') {
    structuredData = siteMetadata.structuredData.attorney;
  }
  
  // Local business data
  if (type === 'localBusiness') {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Adv. Noor Z. Khattak Legal Services",
      "image": "https://noorkhattak.vercel.app/Noor_Khattak.jpeg",
      "url": "https://noorkhattak.vercel.app",
      "telephone": "+92 XXX XXXXXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "206-207, Al-Ameera Centre, Shahrah-e-Iraq, Saddar",
        "addressLocality": "Karachi",
        "addressRegion": "Sindh",
        "postalCode": "74400",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.8607,
        "longitude": 67.0011
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "10:00",
          "closes": "14:00"
        }
      ]
    };
  }
  
  // Professional service data
  if (type === 'professionalService') {
    structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Adv. Noor Z. Khattak Legal Services",
      "description": "Senior Legal Counsel specializing in corporate law, banking regulations, and commercial litigation in Karachi, Pakistan.",
      "url": "https://noorkhattak.vercel.app",
      "image": "https://noorkhattak.vercel.app/Noor_Khattak.jpeg",
      "priceRange": "$$",
      "telephone": "+92 XXX XXXXXXX",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "206-207, Al-Ameera Centre, Shahrah-e-Iraq, Saddar",
        "addressLocality": "Karachi",
        "addressRegion": "Sindh",
        "postalCode": "74400",
        "addressCountry": "PK"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Legal Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Banking Law Advisory"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Litigation"
          }
        }
      ]
    };
  }
  
  // Merge with any custom data
  if (customData) {
    structuredData = { ...structuredData, ...customData };
  }
  
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData; 