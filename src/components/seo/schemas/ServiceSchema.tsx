/**
 * Service Schema - For service pages
 * Use this in: Factory service page, Category pages
 */

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  areaServed?: string;
  serviceType?: string;
}

export const ServiceSchema = ({
  name,
  description,
  url,
  image = "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/main-ogp.jpg",
  areaServed = "Japan",
  serviceType = "買取サービス"
}: ServiceSchemaProps) => {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "image": image,
    "serviceType": serviceType,
    "provider": {
      "@type": "Organization",
      "name": "有限会社ハディズ・インターナショナル",
      "url": "https://www.mac-hadis.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": areaServed
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "買取サービス",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "出張買取",
            "description": "お客様のご自宅や工場へ出張し、その場で査定・買取いたします。"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "宅配買取",
            "description": "商品を送っていただき、査定後にお振込みいたします。"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "持込買取",
            "description": "弊社店舗へ直接お持ちいただき、その場で査定・買取いたします。"
          }
        }
      ]
    },
    "termsOfService": "https://www.mac-hadis.com/satei",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.mac-hadis.com/satei",
      "servicePhone": "+81-120-842-881",
      "serviceSmsNumber": "+81-4-2955-5276"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  );
};

// Pre-configured for Factory Service page
export const FactoryServiceSchema = () => {
  return (
    <ServiceSchema
      name="工場整理・閉鎖支援サービス"
      description="工場の閉鎖・移転・廃業に伴う機械撤去から清掃まで、一括でお引き受けいたします。機械設備の適正な買取から最終清掃まで対応。"
      url="https://www.mac-hadis.com/factory-service"
      image="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step1.jpg"
      serviceType="工場整理サービス"
    />
  );
};
