"use client";
import Image from "next/image";
import ContactBanner from "../../home/sections/ContactBanner";
import SubContent from "./sections/SubContent";
import ContactFixedBanner from "@/components/common/sections/ContactFixedBanner";
import { useState } from "react";

interface IBlogPage {
  data: BlogPost;
}

const Index: React.FC<IBlogPage> = ({ data }) => {
  const date = data.date.split("/").join("-");

  const [isOpen, setIsOpen] = useState(false);

  // Filter out images/videos to only get headings
  const items = data.subContent.filter(
    (item) => item.title && item.type !== "image" && item.type !== "video",
  );

  if (items.length === 0) return null;

  return (
    <>
      {/* Article Header */}
      <section className="pt-6 md:pt-16 w-full block px-4 md:px-28 lg:px-32">
        {/* Added mx-auto to center horizontally and px-4 for safety padding on mobile */}
        <div className="container mx-auto md:px-[40px] lg:px-[80px]">
          <div className="w-full space-y-6 md:space-y-8 mb-8 md:mb-12">
            <h1 className="text-center font-bold text-[20px] md:text-[30px] lg:text-[40px] leading-[150%]">
              {data.title}
            </h1>
            {/* Date */}
            <div className="bg-[#FFF5F6] border-[#B8112226] border-opacity-15 border-[1px] rounded-lg py-2 px-4 w-fit mx-auto flex justify-center items-center gap-x-3 shadow-custom-light">
              <Image
                src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/blogs/icons/CalendarDays.svg"
                alt="calender icon"
                width={20} // Keeps the aspect ratio correct
                height={20} // Sets the resolution for the larger size
                className="w-4 h-4 md:w-5 md:h-5"
                sizes="20px" // Optional: Helps browser optimize loading
              />
              <div className="text-[#D30101] font-semibold text-[14px] md:text-[16px] font-noto">
                {date}
              </div>
            </div>
          </div>
          {/* Image Section - Responsive with Figma aspect ratios */}
          {/* Desktop: 1040x584 (aspect ~1.78:1), Mobile: 361x203 (aspect ~1.78:1) */}
          <div className="w-full relative rounded-3xl overflow-hidden shadow-sm aspect-[361/203] md:aspect-[1040/584] bg-gray-100">
            <Image
              src={data.imageSrc}
              alt={data.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1040px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
      <span className="h-[1px] bg-[#F1F1F1] w-[90%] mx-auto my-8 lg:my-[80px] block"></span>
      {/* Content Wrapper */}
      <div className="w-full lg:max-w-[90%] lg:mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8">
        {/* MOBILE VIEW: Sticky Header + Accordion */}
        <div className="block lg:hidden sticky top-16 w-full z-40">
          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`w-full  p-5 flex items-center justify-between ${isOpen ? "rounded-lg bg-[#B81122] text-white" : "rounded-none bg-[#FFF5F6] text-[#111111]"} transition-all duration-300`}
          >
            <div className="flex items-center font-bold">
              <span className="mr-2 text-xl">
                <Image
                  src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/blogs/icons/assignment.svg"
                  alt="assignment"
                  width={20}
                  height={20}
                  className={
                    isOpen
                      ? "filter brightness-0 invert transition-all duration-300"
                      : ""
                  }
                />
              </span>
              <span className="font-bold text-[16px]">目次</span>
            </div>
            {/* Arrow Icon */}
            <span
              className={`transform transition-transform duration-200 text-gray-400 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <Image
                src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/blogs/icons/ChevronDown.svg"
                alt="arrow down"
                width={20}
                height={20}
                className={
                  isOpen
                    ? "filter brightness-0 invert transition duration-300"
                    : ""
                }
              />
            </span>
          </button>

          {/* Mobile Dropdown Menu (Collapsible) */}
          {isOpen && (
            <nav className="absolute left-1/2 transform -translate-x-1/2 w-[90%] bg-white border border-[#EAEAEA] rounded-[16px] shadow-[0px_4px_8px_0px_#0000000D] max-h-[60vh] mx-auto overflow-y-auto">
              <ul className="space-y-1">
                {items.map((item, index) => (
                  <>
                    <li key={index} className="relative group">
                      <div className="block left-0 top-1/2 bg-[#B81122] rounded-tr-[4px] rounded-br-[4px] w-[4px] h-[90%] -translate-y-1/2 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <a
                        href={`#${item.title}`}
                        onClick={() => setIsOpen(false)} // Close menu on click
                        className="block p-5 font-noto font-normal text-[16px] leading-[20px] text-gray-600 hover:text-[#B81122] hover:font-bold rounded-md transition-all duration-200"
                      >
                        {item.title}
                      </a>
                    </li>
                    {index !== items.length - 1 && (
                      <div className="w-[80%] h-[1px] bg-[#F2F2F2] mx-auto block"></div>
                    )}
                  </>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {/* 💻 DESKTOP VIEW: Sidebar (Always visible, No collapse) */}
        <div className="hidden lg:block lg:col-span-3 pb-12">
          <div className="bg-white border border-[#EAEAEA] rounded-[16px] shadow-[0px_4px_8px_0px_#0000000D] overflow-hidden sticky top-20">
            {/* Header */}
            <div className="bg-[#FFF5F6] p-5 flex items-center gap-2">
              <Image
                src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/blogs/icons/assignment.svg"
                alt="assignment"
                width={20}
                height={20}
              />
              <span className="font-bold text-[16px] text-[#111111]">目次</span>
            </div>
            {/* List */}
            <nav>
              <ul>
                {items.map((item, index) => (
                  <li key={index} className="relative group">
                    <div className="block left-0 top-1/2 bg-[#B81122] rounded-tr-[4px] rounded-br-[4px] w-[4px] h-[90%] -translate-y-1/2 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <a
                      href={`#${item.title}`}
                      className="block font-noto font-normal text-[16px] leading-[20px] text-gray-600 hover:text-[#B81122] hover:font-bold p-5 transition-all duration-200"
                    >
                      {item.title}
                    </a>
                    {index !== items.length - 1 && (
                      <div className="w-[80%] h-[1px] bg-[#F2F2F2] mx-auto"></div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <main className="w-full lg:col-span-9 px-4 lg:px-0 pb-8 lg:pb-12 ">
          {data.description && (
            <section className="bg-[#FDFDFD] border border-gray-200 rounded-2xl p-5 lg:py-4 lg:px-8 mt-10 mb-8 lg:mt-0 lg:mb-12 relative overflow-hidden shadow-[0px_4px_8px_0px_#0000000D]">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#B81122]"></div>

              <div className="prose prose-lg max-w-none">
                {data.description.split("\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-noto font-medium text-[14px] lg:text-[16px] leading-[200%] tracking-normal align-middle text-[#323232]"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Sub Content Sections */}
          <div className="space-y-12">
            {(() => {
              let sectionCounter = 0;
              return data.subContent.map((item, index) => {
                const number = item.title ? ++sectionCounter : undefined;
                return (
                  <SubContent
                    key={index}
                    content={item}
                    mainTitle={data.title}
                    sectionNumber={number}
                  />
                );
              });
            })()}
          </div>
        </main>
      </div>
      <ContactBanner />
      <ContactFixedBanner />
    </>
    // <>
    //   {/* Article Header */}
    //   <section className="">
    //     <div className="container max-w-7xl mx-auto px-4 lg:px-8">
    //       <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 mb-4 leading-tight tracking-tight">
    //         {data.title}
    //       </h1>

    //       {/* Centered intro text for better readability */}
    //       <div className="max-w-3xl mx-auto">
    //         <p
    //           className="text-gray-600 text-base lg:text-lg font-normal mb-8 leading-relaxed"
    //           dangerouslySetInnerHTML={{
    //             __html: getSubtitle(data.description),
    //           }}
    //         />
    //       </div>

    //       <div className="inline-block bg-white text-gray-600 px-6 py-3 rounded-lg text-sm font-semibold shadow-md mb-8">
    //         📅 {data.date} 更新
    //       </div>

    //       {/* REVERTED: Back to original max-w-2xl and original heights */}
    //       <div className="relative w-full max-w-2xl h-64 md:h-80 lg:h-96 mx-auto rounded-xl overflow-hidden shadow-xl">
    //         <Image
    //           className="object-cover"
    //           src={data.imageSrc}
    //           alt={data.title}
    //           fill
    //           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
    //         />
    //       </div>
    //     </div>
    //   </section>

    //   <ContactBanner />

    //   {/* Main Content Wrapper */}
    //   <div className="bg-white py-12 lg:py-16">
    //     <div className="container max-w-7xl mx-auto px-4 lg:px-8">
    //       {/* UX IMPROVEMENT: Kept the Reading Column (max-w-4xl) for text legibility */}
    //       <div className="max-w-4xl mx-auto">
    //         {/* Table of Contents */}
    //         <div className="w-full mb-8">
    //           <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
    //             <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
    //               <span className="mr-2">📋</span>
    //               目次
    //             </h3>
    //             <nav>
    //               <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
    //                 {data.subContent
    //                   .filter(
    //                     (item) =>
    //                       item.title &&
    //                       item.type !== "image" &&
    //                       item.type !== "video",
    //                   )
    //                   .map((item, index) => (
    //                     <li key={index}>
    //                       <a
    //                         href={`#${item.title}`}
    //                         className="block text-sm text-gray-600 hover:text-red-600 py-2 pl-4 border-l-2 border-transparent hover:border-red-600 transition-all duration-200"
    //                       >
    //                         {item.title}
    //                       </a>
    //                     </li>
    //                   ))}
    //               </ul>
    //             </nav>
    //           </div>
    //         </div>

    //         {/* Quick Contact Card */}
    //         {/* <div className="w-full mb-12">
    //           <div className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-xl p-6 text-center">
    //             <h3 className="text-lg font-bold mb-4">
    //               無料査定・相談受付中
    //             </h3>
    //             <p className="text-sm mb-6 opacity-90">
    //               専門スタッフがお客様の状況に合わせて最適なソリューションをご提案
    //             </p>
    //             <Link href="/satei"
    //               className="block sm:inline-block bg-white text-red-600 py-3 px-6 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-200">
    //               今すぐ相談する
    //             </Link>
    //           </div>
    //         </div> */}

    //         {/* Main Content */}
    //         <main className="w-full">
    //           {/* Introduction Section */}
    //           {data.description && (
    //             <section className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 lg:p-12 mb-12 relative overflow-hidden">
    //               <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-500 to-blue-500"></div>

    //               <div className="prose prose-lg max-w-none">
    //                 {data.description.split("\n").map((paragraph, index) => (
    //                   <p
    //                     key={index}
    //                     className="text-gray-700 leading-relaxed mb-6 text-base lg:text-lg"
    //                     dangerouslySetInnerHTML={{ __html: paragraph }}
    //                   />
    //                 ))}
    //               </div>
    //             </section>
    //           )}

    //           {/* Sub Content Sections */}
    //           <div className="space-y-12">
    //             {data.subContent.map((item, index) => (
    //               <SubContent
    //                 key={index}
    //                 content={item}
    //                 mainTitle={data.title}
    //               />
    //             ))}
    //           </div>
    //         </main>
    //       </div>
    //       {/* End of Reading Column */}

    //       {/* Call to Action Section - Kept slightly wider for visual break */}
    //       <div className="max-w-4xl mx-auto mt-16">
    //         <section className="bg-gradient-to-r from-red-600 to-red-700 text-white p-10 lg:p-16 rounded-2xl text-center relative overflow-hidden shadow-2xl">
    //           <div className="absolute inset-0 bg-black opacity-10"></div>

    //           <div className="relative z-10 max-w-2xl mx-auto">
    //             <h3 className="text-2xl lg:text-3xl font-bold mb-6 flex items-center justify-center">
    //               <span className="mr-3 text-3xl">🤝</span>
    //               ハディズにお任せください
    //             </h3>

    //             <p className="text-base lg:text-lg leading-relaxed mb-8 opacity-95">
    //               専門スタッフが丁寧に状況をお伺いし、無料査定・ご提案をさせていただきます。
    //               不用な機械を「負債」ではなく「資産」に変えるお手伝いをいたします。
    //             </p>

    //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //               <Link
    //                 href="/satei"
    //                 className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-base hover:translate-y-[-2px] hover:shadow-lg transition-all duration-200"
    //               >
    //                 無料査定のご依頼
    //               </Link>
    //               <Link
    //                 href="/satei"
    //                 className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-base hover:bg-white hover:text-red-600 transition-all duration-200"
    //               >
    //                 お問い合わせ
    //               </Link>
    //             </div>
    //           </div>
    //         </section>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Breadcrumb */}
    //   <div className="bg-gray-50 py-4">
    //     <div className="container max-w-7xl mx-auto px-4 lg:px-8">
    //       <div className="text-gray-500 text-sm">
    //         <Link href="/" className="hover:text-red-600 transition-colors">
    //           ホーム
    //         </Link>
    //         <span className="mx-2">›</span>
    //         <Link
    //           href="/blogs"
    //           className="hover:text-red-600 transition-colors"
    //         >
    //           ブログ
    //         </Link>
    //         <span className="mx-2">›</span>
    //         <span className="text-gray-700">{data.title}</span>
    //       </div>
    //     </div>
    //   </div>

    //   <ContactBanner />
    //   <ContactFixedBanner />
    // </>
  );
};

export default Index;
