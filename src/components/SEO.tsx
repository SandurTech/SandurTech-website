import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterCard?: string;
  schema?: object | object[];
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  ogType = 'website', 
  ogImage = 'https://sandurtech.vercel.app/images/SandurTech-website-link-preview.png',
  twitterCard = 'summary_large_image',
  schema 
}: SEOProps) {
  const siteTitle = 'SandurTech | Accessible tools for humans';
  const fullTitle = title ? `${title} | SandurTech` : siteTitle;
  const siteDescription = 'SandurTech (Sandur Technologies) creates premium, accessible niche tools and microservices. Handcrafted by Amogha Raj Sandur with a focus on simplicity and performance.';
  const finalDescription = description || siteDescription;
  const siteUrl = 'https://sandurtech.vercel.app';
  const finalCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={finalCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
