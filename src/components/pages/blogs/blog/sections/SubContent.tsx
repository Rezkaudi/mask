"use client";

import React from "react";
import SimpleTemplate from "../components/SimpleTemplate";
import FAQTemplate from "../components/FAQTemplate";
import ImageTemplate from "../components/ImageTemplate";
import VideoTemplate from "../components/VideoTemplate";
import ListTemplate from "../components/ListTemplate";
import TableTemplate from "../components/TableTemplate";
import ImageListTemplate from "../components/ImageListTemplate";

interface ISubContent {
  content: BlogSubContent;
  mainTitle: string;
  sectionNumber?: number;
}

const SubContent: React.FC<ISubContent> = ({
  content,
  mainTitle,
  sectionNumber,
}) => {
  // Generate section ID for navigation
  const sectionId = content.title ? `section-${content.id}` : undefined;

  return (
    <div id={sectionId}>
      {(() => {
        switch (content.type) {
          case "simple":
            return (
              <SimpleTemplate content={content} sectionNumber={sectionNumber} />
            );
          case "image":
            return <ImageTemplate content={content} mainTitle={mainTitle} />;
          case "video":
            return (
              <VideoTemplate content={content} sectionNumber={sectionNumber} />
            );
          case "list":
            return (
              <ListTemplate content={content} sectionNumber={sectionNumber} />
            );
          case "faq":
            return (
              <FAQTemplate content={content} sectionNumber={sectionNumber} />
            );
          case "table":
            return (
              <TableTemplate content={content} sectionNumber={sectionNumber} />
            );
          case "imageList":
            return (
              <ImageListTemplate
                content={content}
                sectionNumber={sectionNumber}
              />
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default SubContent;
