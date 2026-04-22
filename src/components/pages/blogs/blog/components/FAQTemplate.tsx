import React from "react";
import SectionWrapper from "./common/SectionWrapper";
import SectionHeader from "./common/SectionHeader";

interface IFAQTemplate {
  content: FAQContent;
  sectionNumber?: number;
}

const FAQTemplate: React.FC<IFAQTemplate> = ({ content, sectionNumber }) => {
  return (
    <SectionWrapper id={content.title}>
      <SectionHeader
        number={sectionNumber}
        title={content.title}
        subTitle={content.subTitle}
      />

      {/* Description */}
      {content.description && (
        <div className="mb-8">
          {content.description.split("\n").map((paragraph, index) => (
            <p
              className="font-noto font-normal text-[14px] lg:text-[16px] leading-[200%] tracking-normal align-middle text-[#323232]"
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
          ))}
        </div>
      )}

      {/* FAQ Items */}
      <div className="space-y-6">
        {content.items?.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-200"
          >
            {/* Question */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-white">
              <h3 className="flex items-start font-bold text-lg text-gray-800">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                  Q{item.id}
                </span>
                <span className="pt-1">{item.question}</span>
              </h3>
            </div>

            {/* Answer */}
            <div className="p-6 bg-white">
              <div className="flex items-start">
                <span className="bg-gradient-to-br from-green-500 to-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                  A{item.id}
                </span>
                <div className="text-gray-700 leading-relaxed text-base pt-1">
                  {item.answer.split("\n").map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FAQTemplate;
