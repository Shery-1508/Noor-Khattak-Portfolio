import { Helmet } from 'react-helmet-async';
import siteMetadata from '../data/meta.json';

interface SEOProps {
  pageKey: 'home' | 'about' | 'expertise' | 'experience' | 'contact' | 'notFound';
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
  canonicalPath?: string;
}

const SEO = ({ 
  pageKey, 
  customTitle,
  customDescription,
  customKeywords,
  canonicalPath
}: SEOProps) => {
  const page = siteMetadata.pages[pageKey];
  
  const title = customTitle || page.title;
  const fullTitle = `${title} | ${siteMetadata.site.title}`;
  const description = customDescription || page.description;
  const keywords = customKeywords || page.keywords;
  const canonical = `${siteMetadata.site.url}${canonicalPath || '/' + (pageKey === 'home' ? '' : pageKey)}`;
  const ogImage = siteMetadata.site.ogImage || `${siteMetadata.site.url}/og-image.jpg`;

  // Attorney structured data
  const attorneySchema = JSON.stringify(siteMetadata.structuredData.attorney);
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteMetadata.site.author} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={siteMetadata.site.title} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      {siteMetadata.social.twitter && <meta name="twitter:site" content={siteMetadata.social.twitter} />}
      
      {/* Mobile Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#1a365d" />
      
      {/* Structured Data */}
      <script type="application/ld+json">{attorneySchema}</script>
    </Helmet>
  );
};

export default SEO; 