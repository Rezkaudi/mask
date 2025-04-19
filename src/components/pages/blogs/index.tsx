"use client";

import ContactFixedBanner from "@/components/common/sections/ContactFixedBanner";
// common components
import PostCard from "../home/components/PostCard";
import ContactBanner from "../home/sections/ContactBanner";

// components
import Pagination from "./components/Pagination";
import { useBlog } from "@/hooks/useBlog";

const Index = () => {
  const {
    currentBlogs,
    postsPerPage,
    currentPage,
    handlePageChange,
    numberOfBlogs,
  } = useBlog();

  return (
    <>
      <section className="bg-[#f8f7f6]" id="blogs">
        <div className="pt-14 lg:pt-36 pb-20 mx-auto space-y-10 lg:space-y-12 px-4 max-w-[1200px]">
          <h1 className="font-black text-3xl lg:text-6xl text-[#D51A16] text-center">
            ハディズのブログ
          </h1>
          <div className="w-full flex items-center justify-center gap-8 flex-wrap">
            {currentBlogs.map((item) => (
              <PostCard
                className="max-w-[352px]"
                key={item.id}
                title={item.title}
                imageSrc={item.imageSrc}
                description={item.description}
                date={item.date}
              />
            ))}
          </div>
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

export default Index;
