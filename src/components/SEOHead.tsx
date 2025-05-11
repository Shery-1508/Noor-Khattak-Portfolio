import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  canonicalUrl = window.location.href, 
  keywords = "lawyer, advocate, Karachi, Sindh, Pakistan, corporate law, banking regulations, High Court, legal services, commercial litigation, legal counsel"
}: SEOHeadProps) => {
  
  const siteTitle = "Adv. Noor Z. Khattak | Senior Legal Counsel in Karachi";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // This is a manual approach to SEO instead of using Helmet
    // It's not as elegant but will work
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
    
    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
    
  }, [fullTitle, description, keywords, canonicalUrl]);
  
  return null; // This component doesn't render anything visible
};

export default SEOHead;