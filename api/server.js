// This is a simple server file to handle pre-rendering for search engines
// It will be used by Vercel's serverless functions

export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  // Handle robots.txt request
  if (req.url === '/robots.txt') {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(`# robots.txt for https://noorkhattak.vercel.app
User-agent: *
Allow: /

Sitemap: https://noorkhattak.vercel.app/sitemap.xml`);
    return;
  }
  
  // Handle sitemap.xml request
  if (req.url === '/sitemap.xml') {
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://noorkhattak.vercel.app/</loc>
    <lastmod>2023-05-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://noorkhattak.vercel.app/about</loc>
    <lastmod>2023-05-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://noorkhattak.vercel.app/expertise</loc>
    <lastmod>2023-05-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://noorkhattak.vercel.app/experience</loc>
    <lastmod>2023-05-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://noorkhattak.vercel.app/contact</loc>
    <lastmod>2023-05-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`);
    return;
  }
  
  // For all other requests, fallback to the client-side app
  res.status(200).json({ message: 'API endpoint for handling SEO-related requests' });
} 