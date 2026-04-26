import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SectionWrapper from "./common/SectionWrapper";
import SectionHeader from "./common/SectionHeader";

interface IListTemplate {
  content: ListContent;
  sectionNumber?: number;
}

const ListTemplate: React.FC<IListTemplate> = ({ content, sectionNumber }) => {
  const withPagination: boolean = !!content.withPagination;
  const withCounter: boolean =
    content.withCounter !== undefined ? content.withCounter : true;

  const [show, setShow] = useState(!withPagination);

  const handleShowMore = () => {
    setShow((prev) => !prev);
  };

  const stripHtml = (html: string): string => html.replace(/<[^>]*>/g, "");

  return (
    <SectionWrapper id={content.title}>
      {/* Section Header */}
      <SectionHeader
        number={sectionNumber}
        title={content.title}
        subTitle={content.subTitle}
      />

      {/* Top Description */}
      {content.topDescription && (
        <>
          <div>
            {content.topDescription.split("\n").map((paragraph, index) => (
              <p
                className="font-noto font-normal text-[14px] lg:text-[16px] leading-[200%] tracking-normal align-middle text-[#323232] my-4 lg:my-8"
                key={index}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
          <span className="h-[1px] bg-[#F1F1F1] w-[90%] mx-auto block"></span>
        </>
      )}

      {/* List Items */}
      <div className="space-y-6 my-8">
        {content.items
          .slice(0, show ? content.items.length : 5)
          ?.map((item, index) => (
            <div key={index}>
              <div className="flex items-start">
                {/* List Marker */}
                {content.listType !== "none" &&
                  (content.listType === "number" ? (
                    <span className="font-noto font-bold text-[18px] leading-[200%] text-[#111111] mr-1 flex-shrink-0">
                      {`${index + 1}.`}
                    </span>
                  ) : (
                    <span
                      className="mr-3 flex-shrink-0 flex items-center mt-4"
                      aria-hidden="true"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#111111] block" />
                    </span>
                  ))}

                <div className="flex-1">
                  {item.title && (
                    <h3 className="font-noto text-[18px] lg:text-[20px] leading-[200%] tracking-normal align-middle text-[#111111]">
                      {item.isLink ? (
                        <Link
                          className="text-[#111111] hover:underline transition-colors text-[14px] lg:text-[16px]"
                          href={item.href!}
                        >
                          <span
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />
                        </Link>
                      ) : (
                        <span
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                      )}
                    </h3>
                  )}

                  {item.description && (
                    <div
                      className="font-noto font-normal text-[14px] lg:text-[16px] leading-[200%] tracking-normal align-middle text-[#323232]"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  )}

                  {/* --- IMAGES SECTION START --- */}
                  {(item.imageSrc || item.images) && (
                    <div className="mt-4 w-full">
                      {/* 1. Single String Image — full width */}
                      {item.imageSrc && typeof item.imageSrc === "string" && (
                        <div className="relative w-full max-w-[321px] h-[175px] lg:max-w-[796px] lg:h-[434px] overflow-hidden rounded-[12px] bg-gray-50">
                          <Image
                            src={item.imageSrc}
                            alt={
                              item.title
                                ? stripHtml(item.title)
                                : "Section illustration"
                            }
                            width={796}
                            height={434}
                            className="w-full h-full object-contain rounded-[12px]"
                            sizes="(max-width: 1024px) 321px, 796px"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* 2. Array of String Images — grid layout */}
                      {item.imageSrc &&
                        Array.isArray(item.imageSrc) &&
                        item.imageSrc.length > 0 && (
                          <div
                            className={`grid gap-3 ${item.imageSrc.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
                          >
                            {item.imageSrc.map((src, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative w-full max-w-[321px] h-[175px] lg:max-w-[796px] lg:h-[434px] overflow-hidden rounded-[12px] bg-gray-50"
                              >
                                <Image
                                  src={src}
                                  alt={`${item.title || "Section illustration"} - Image ${imgIndex + 1}`}
                                  width={796}
                                  height={434}
                                  className="w-full h-full object-contain rounded-[12px]"
                                  sizes="(max-width: 1024px) 321px, 796px"
                                  loading="lazy"
                                />
                              </div>
                            ))}
                          </div>
                        )}

                      {/* 3. Object Array Images — grid layout */}
                      {item.images && item.images.length > 0 && (
                        <div
                          className={`grid gap-3 ${item.images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
                        >
                          {item.images.map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="relative w-full max-w-[321px] h-[175px] lg:max-w-[796px] lg:h-[434px] overflow-hidden rounded-[12px] bg-gray-50"
                            >
                              <Image
                                src={image.src}
                                alt={`${item.title ? stripHtml(item.title) : "Section illustration"} - Image ${imgIndex + 1}`}
                                width={796}
                                height={434}
                                className="w-full h-full object-contain rounded-[12px]"
                                sizes="(max-width: 1024px) 321px, 796px"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {/* --- IMAGES SECTION END --- */}

                  {item.subItems && item.subItems.length > 0 && (
                    <ul className="mt-4 space-y-3">
                      {item.subItems.map((subItem) => (
                        <li
                          key={subItem.id}
                          className="flex items-start text-gray-700 text-sm lg:text-base"
                        >
                          <span className="text-red-500 mr-2 flex-shrink-0 text-[10px]">
                            ●
                          </span>
                          <span
                            className={
                              subItem.isBold ? "font-bold text-gray-800" : ""
                            }
                            dangerouslySetInnerHTML={{ __html: subItem.text }}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Bottom Description */}
                  {item.bottomDescription && (
                    <div className="border border-[#B81122] rounded-2xl bg-[#FFF5F6] p-4">
                      <p
                        className="text-[14px] lg:text-[16px] leading-[160%] align-middle font-noto text-[#B81122]"
                        dangerouslySetInnerHTML={{
                          __html: item.bottomDescription,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* NEW: Section Gallery / Images (Below items, Above/Before Bottom Description) */}
      {content.sectionImages && content.sectionImages.length > 0 && (
        <div className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {content.sectionImages.map((img, idx) => {
              const src = typeof img === "string" ? img : img.src;
              const alt =
                typeof img === "string"
                  ? `${content.title} gallery image ${idx + 1}`
                  : img.alt || `${content.title} gallery image ${idx + 1}`;

              return (
                <div
                  key={idx}
                  className="relative group rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-[4/3] w-full bg-gray-50">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-contain group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {typeof img !== "string" && img.alt && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-sm font-medium line-clamp-1">
                        {img.alt}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {content.bottomDescription && (
        <>
          <div className="border border-[#B81122] rounded-2xl bg-[#FFF5F6] p-4">
            {content.bottomDescription.split("\n").map((paragraph, index) => (
              <p
                className="text-[14px] lg:text-[16px] leading-[160%] align-middle font-noto text-[#B81122]"
                key={index}
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </div>
        </>
      )}

      {/* Show More Button */}
      {content.withPagination && content.items.length > 5 && (
        <div className="mt-8 text-center">
          <button
            onClick={handleShowMore}
            className="inline-block px-8 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-lg hover:shadow-lg hover:translate-y-[-2px] transition-all duration-200"
          >
            {show ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </SectionWrapper>
  );
};

export default ListTemplate;
