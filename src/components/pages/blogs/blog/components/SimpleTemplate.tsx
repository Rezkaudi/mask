import React from "react";
import SectionWrapper from "./common/SectionWrapper";
import SectionHeader from "./common/SectionHeader";

interface ISimpleTemplate {
  content: SimpleContent;
  sectionNumber?: number;
}

const SimpleTemplate: React.FC<ISimpleTemplate> = ({
  content,
  sectionNumber,
}) => {
  return (
    <SectionWrapper id={content.title}>
      <SectionHeader number={sectionNumber} title={content.title} />

      <div className="prose prose-lg max-w-none">
        {content.description?.split("\n").map((paragraph, index) => (
          <p
            className="font-noto font-normal text-[14px] lg:text-[16px] leading-[200%] tracking-normal align-middle text-[#323232]"
            key={index}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SimpleTemplate;
