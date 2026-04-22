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

      <div className="flex flex-wrap justify-between md:justify-center gap-4 lg:gap-6">
        {content.items?.map((item, index) => (
          <div key={index} className="w-[47%] md:w-[47%]">
            <div className=" bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
              <div className="w-full  flex justify-center items-center bg-gray-50 p-4">
                <Image
                  src={item.imageSrc}
                  alt={item.alt}
                  width={250}
                  height={250}
                  className="w-auto h-[200px] lg:w-auto lg:h-[250px] object-contain"
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
