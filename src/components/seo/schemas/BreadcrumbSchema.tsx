/**
 * BreadcrumbList Schema - For breadcrumb navigation in search results
 * Use this in: Any page with breadcrumbs (Blog pages, Product pages, Category pages)
 */

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  );
};

// Helper function to generate common breadcrumb paths
export const generateBreadcrumbs = {
  home: (): BreadcrumbItem[] => [
    { name: "ホーム", url: "https://www.mac-hadis.com" }
  ],
  
  blog: (blogTitle: string): BreadcrumbItem[] => [
    { name: "ホーム", url: "https://www.mac-hadis.com" },
    { name: "ブログ", url: "https://www.mac-hadis.com/blogs" },
    { name: blogTitle, url: `https://www.mac-hadis.com/blogs/${encodeURIComponent(blogTitle)}` }
  ],
  
  category: (categoryId: string, categoryTitle: string): BreadcrumbItem[] => [
    { name: "ホーム", url: "https://www.mac-hadis.com" },
    { name: "買取品目", url: "https://www.mac-hadis.com/#purchased-items" },
    { name: categoryTitle, url: `https://www.mac-hadis.com/products/${categoryId}` }
  ],
  
  product: (categoryId: string, categoryTitle: string, productTitle: string): BreadcrumbItem[] => [
    { name: "ホーム", url: "https://www.mac-hadis.com" },
    { name: categoryTitle, url: `https://www.mac-hadis.com/products/${categoryId}` },
    { name: productTitle, url: `https://www.mac-hadis.com/products/${categoryId}/${encodeURIComponent(productTitle)}` }
  ],

  satei: (): BreadcrumbItem[] => [
    { name: "ホーム", url: "https://www.mac-hadis.com" },
    { name: "無料価格査定", url: "https://www.mac-hadis.com/satei" }
  ],

  factoryService: (): BreadcrumbItem[] => [
    { name: "ホーム", url: "https://www.mac-hadis.com" },
    { name: "工場整理・閉鎖支援サービス", url: "https://www.mac-hadis.com/factory-service" }
  ]
};
