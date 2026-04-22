/**
 * Product Schema - For product/service pages
 * Use this in: Product pages (src/app/products/[categoryId]/[title]/page.tsx)
 */

export interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  category: string;
  url: string;
  brand?: string;
}

export const ProductSchema = ({
  name,
  description,
  image,
  category,
  url,
  brand = "ハディズ"
}: ProductSchemaProps) => {
  const productData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description.substring(0, 500),
    "image": image,
    "category": category,
    "url": url,
    "brand": {
      "@type": "Brand",
      "name": brand
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "JPY",
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "itemCondition": "https://schema.org/UsedCondition",
      "seller": {
        "@type": "Organization",
        "name": "有限会社ハディズ・インターナショナル",
        "url": "https://www.mac-hadis.com"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
    />
  );
};
