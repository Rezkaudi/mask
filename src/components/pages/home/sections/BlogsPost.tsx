import Link from "next/link";

// components
import PostCard from "../components/PostCard";

// data
import { getAllBlogs } from "@/services/blogs";

const BlogsPost = () => {
  const blogsData = getAllBlogs()
  return (
    <section className="px-[12px] md:px-[80px] lg:px-[160px] py-[80px] md:py-[100px] lg:py-[120px] font-noto text-[#111111]">
      <h2 className="mb-[40px] lg:mb-[50px] text-[30px] md:text-[40px] lg:text-[60px] leading-[45px] md:leading-[60px] lg:leading-[90px] font-black text-center bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent">
        ブログ記事
      </h2>
      {/* boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData
          .slice(-3)
          .reverse()
          .map((blog) => (
            <PostCard
              key={blog.id}
              title={blog.title}
              imageSrc={blog.imageSrc}
              description={blog.metaDescription}
              date={blog.date}
            />
          ))}
      </div>
      <div className="px-[8px] w-full">
        <Link
          href="/blogs"
          className="mt-[24px] md:mt-[35px] lg:mt-[40px] mx-auto py-[12px] w-[90%] md:w-[50%] lg:w-[27%] text-[24px] lg:text-[28px] leading-[36px] lg:leading-[42px] font-black text-white gradient-red rounded text-center block"
        >
          すべてみる
        </Link>
      </div>
    </section>
  );
};

export default BlogsPost;
