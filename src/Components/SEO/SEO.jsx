import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import defaultImage from "/catalogs/GEC New Catalog 04 02 2025AA-pages-1.jpg"; // Fallback image
import defaultLogo from "../../assets/images/Logo-main.jpg"; // Fallback logo



const SEO = ({
  title,
  description,
  keywords,
  image,
  siteName,
  twitterHandle,
  locale = "en_IN", // Focus on Indian locale, change as needed
  organization = "Girish Ego Controls",
  phone = ["+91 22 22068032", "+91 22 22083857"], // Multiple contact numbers
  email = ["sales@girishego.com", "info@girishego.com"], // Emails added
  address = {
    street: "31, Tavawala Building, 147, Lohar Chawl, Kalbadevi",
    locality: "Mumbai",
    region: "Maharashtra",
    postalCode: "400002",
    country: "India",
  },
  locations = ["India", "Dubai", "Russia"], // Targeting these regions
  faqs = [], // Added FAQs
  product = null, // Added Product schema
  breadcrumb = [], // Added Breadcrumb schema
  url, // Explicitly passed for validation
}) => {
  const location = useLocation();
  const validatedUrl = url ? url : `http://localhost:5173${location.pathname}`;
  const validatedImage = image || defaultImage;
  const validatedLogo = defaultLogo;

  // ✅ Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organization,
    url: validatedUrl,
    logo: validatedLogo,
    description: description,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.locality,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
      email: email,
      sameAs: [
        // "https://www.linkedin.com/company/girishego",
        // "https://twitter.com/girishego",
      ],
    },

    contactPoint: phone.map((num) => ({
      "@type": "ContactPoint",
      telephone: num,
      contactType: "customer service",
      areaServed: locations,
      availableLanguage: ["English", "Hindi"],
    })),
  };

  // ✅ FAQ Schema
  const faqSchema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  // ✅ Product Schema
  const productSchema = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.image || validatedImage,
        description: product.description || description,
        brand: {
          "@type": "Brand",
          name: product.brand || organization,
        },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: product.currency || "USD",
          availability: product.availability || "InStock",
          url: validatedUrl,
        },
      }
    : null;

  // ✅ Breadcrumb Schema
  const breadcrumbSchema =
    breadcrumb.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumb.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }
      : null;

  return (
    <Helmet>
      {/* ✅ Standard SEO Meta Tags */}
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteName} />

      {/* ✅ Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="product" />
      <meta property="og:url" content={validatedUrl} />
      <meta property="og:image" content={validatedImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* ✅ Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={validatedImage} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}

      {/* ✅ Canonical Link */}
      <link rel="canonical" href={validatedUrl} />

      {/* ✅ JSON-LD Structured Data Scripts */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
