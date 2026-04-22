import { Metadata } from "next";
import { notFound } from "next/navigation";

// page
import BlogDetails from "@/components/pages/blogs/blog";

// services
import { getBlogByTitle } from "@/services/blogs";

// baseUrl
import { baseUrl } from "@/utils/baseUrl";

import { ArticleSchema, BreadcrumbSchema, generateBreadcrumbs } from '@/components/seo/schemas';


interface IBlogPage {
  params: Promise<{
    title: string;
  }>;
}

// metadata
export async function generateMetadata({
  params,
}: IBlogPage): Promise<Metadata> {
  const { title } = await params;

  const data = await getBlogByTitle(title);

  if (!data) {
    return {
      title: "Blog Not Found",
    };
  } else {
    return {
      title: data?.title,
      description: data?.metaDescription,
      // keywords: "",

      openGraph: {
        type: "article",
        url: `${baseUrl}/blogs/${data?.title}`,
        title: data?.title,
        description: data?.metaDescription,
        siteName: "機械工具買取ハディズ",
        images: [{ url: `${data?.imageSrc}` }],
      },

      twitter: {
        card: "summary_large_image",
        title: data?.title,
        description: data?.metaDescription,
        images: `${data?.imageSrc}`,
      },

      alternates: {
        canonical: `${baseUrl}/blogs/${data?.title}`,
      },
    };
  }
}

export default async function BlogDetailsPage({ params }: IBlogPage) {
  const { title } = await params;

  const data: BlogPost | undefined = await getBlogByTitle(title);

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* ✅ 追加: Structured Data */}
      <ArticleSchema
        title={data.title}
        description={data.metaDescription}
        image={data.imageSrc}
        datePublished={data.date}
        url={`${baseUrl}/blogs/${data.title}`}
      />
      <BreadcrumbSchema items={generateBreadcrumbs.blog(data.title)} />

      <BlogDetails data={data} />
    </>
  );
}
