"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "./common/SectionWrapper";
import SectionHeader from "./common/SectionHeader";

interface IImageListTemplate {
  content: ImageListContent;
  sectionNumber?: number;
}

const ImageListTemplate: React.FC<IImageListTemplate> = ({
  content,
  sectionNumber,
}) => {
  return (
    <SectionWrapper id={content.title}>
      {/* Add header if title exists */}
      {content.title && (
        <SectionHeader number={sectionNumber} title={content.title} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
        {content.items?.map((item, index) => (
          <div key={index} className="w-full">
            <div className=" bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="relative w-full aspect-[4/3] flex justify-center items-center bg-gray-50 p-2 lg:p-4">
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-contain p-2 lg:p-4"
                />
              </div>
              {!item.alt ||
                (item.alt !== "" && (
                  <div className="px-3 py-3 lg:px-4 lg:py-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                    <p className="text-[#B81122] text-center font-semibold text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px] line-clamp-2">
                      {item.alt}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ImageListTemplate;
