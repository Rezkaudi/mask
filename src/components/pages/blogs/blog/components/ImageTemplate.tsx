import Image from "next/image";
import React from "react";
import SectionWrapper from "./common/SectionWrapper";

interface IImageTemplate {
  content: ImageContent;
  mainTitle: string;
}

const ImageTemplate: React.FC<IImageTemplate> = ({ content, mainTitle }) => {
  return (
    <SectionWrapper id={content.title}>
      <div className="relative w-full max-w-3xl mx-auto">
        <div className="relative w-full h-64 md:h-80 lg:h-96 mb-6 rounded-lg overflow-hidden shadow-lg">
          <Image
            className="object-contain"
            src={content.imageSrc}
            alt={content.title || mainTitle}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 30vw, 30vw"
            loading="lazy"
          />
        </div>

        {content.title && (
          <div className="text-center space-y-2">
            {content.title.split("\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 text-sm lg:text-base italic"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default ImageTemplate;
