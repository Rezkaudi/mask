/**
 * Organization Schema - For brand recognition in search results
 * Use this in: layout.tsx (global)
 */

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "有限会社ハディズ・インターナショナル",
  "alternateName": "機械工具買取ハディズ",
  "url": "https://www.mac-hadis.com",
  "logo": "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/hadis-logo.png",
  "description": "中古機械、電動工具の高額買取ならハディズへ。業務用機器の買取を全国対応で行っています。",
  "telephone": "+81-120-842-881",
  "email": "info@mac-hadis.com",
  "foundingDate": "1999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "笹井1丁目33-5",
    "addressLocality": "狭山市",
    "addressRegion": "埼玉県",
    "postalCode": "350-1327",
    "addressCountry": "JP"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+81-120-842-881",
      "contactType": "customer service",
      "areaServed": "JP",
      "availableLanguage": "Japanese"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+81-4-2955-5276",
      "contactType": "sales",
      "areaServed": "JP",
      "availableLanguage": "Japanese"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Japan"
  },
  "sameAs": [
    "https://line.me/R/ti/p/@hadis"
  ]
};

export const OrganizationSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
};
