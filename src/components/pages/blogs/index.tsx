"use client";

import ContactFixedBanner from "@/components/common/sections/ContactFixedBanner";
import ContactBanner from "../home/sections/ContactBanner";
import Pagination from "./components/Pagination";
import { useBlog } from "@/hooks/useBlog";
import PostCard from "../home/components/PostCard";

const BlogsListNew = () => {
  const {
    currentBlogs,
    postsPerPage,
    currentPage,
    handlePageChange,
    numberOfBlogs,
  } = useBlog();

  return (
    <>
      <section className="bg-gradient-to-b from-gray-50 to-white" id="blogs">
        <div className="pt-16 lg:pt-24 pb-20 mx-auto space-y-12 lg:space-y-16 px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center">
            <h1 className="font-black text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700 mb-4">
              ハディズのブログ
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              機械買取・工場整理に関する専門情報をお届けします
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((item) => (
              <PostCard
                key={item.id}
                title={item.title}
                imageSrc={item.imageSrc}
                description={item.metaDescription}
                date={item.date}
              />
            ))}
          </div>

          {/* Pagination */}
          <Pagination
            totalItems={numberOfBlogs}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
      <ContactBanner />
      <ContactFixedBanner />
    </>
  );
};


export default BlogsListNew;