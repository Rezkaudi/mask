/**
 * LocalBusiness Schema - For local search visibility
 * Use this in: Home page (src/components/pages/home/index.tsx)
 */

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mac-hadis.com/#localbusiness",
  "name": "有限会社ハディズ・インターナショナル",
  "alternateName": "機械工具買取ハディズ",
  "description": "中古機械、電動工具の高額買取ならハディズへ。ハディズでは、業務用機器の買取を全国対応で行っています。創業25年以上の実績。",
  "url": "https://www.mac-hadis.com",
  "telephone": "+81-120-842-881",
  "image": "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/main-ogp.jpg",
  "logo": "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/hadis-logo.png",
  "priceRange": "¥¥",
  "currenciesAccepted": "JPY",
  "paymentAccepted": "Cash, Bank Transfer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "笹井1丁目33-5",
    "addressLocality": "狭山市",
    "addressRegion": "埼玉県",
    "postalCode": "350-1327",
    "addressCountry": "JP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.8569",
    "longitude": "139.4130"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "18:00"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Japan"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "35.8569",
      "longitude": "139.4130"
    },
    "geoRadius": "1000000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "機械工具買取サービス",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "出張買取"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "宅配買取"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "持込買取"
        }
      }
    ]
  }
};

export const LocalBusinessSchema = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  );
};
