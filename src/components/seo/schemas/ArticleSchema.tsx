/**
 * Article Schema - For blog posts and articles
 * Use this in: Blog detail pages (src/app/blogs/[title]/page.tsx)
 */

export interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  authorName?: string;
}

export const ArticleSchema = ({
  title,
  description,
  image,
  datePublished,
  dateModified,
  url,
  authorName = "有限会社ハディズ・インターナショナル"
}: ArticleSchemaProps) => {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://www.mac-hadis.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "機械工具買取ハディズ",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/hadis-logo.png",
        "width": 101,
        "height": 64
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "inLanguage": "ja-JP",
    "isAccessibleForFree": true
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  );
};
