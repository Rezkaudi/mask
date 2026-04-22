import React from "react";
import SectionWrapper from "./common/SectionWrapper";
import SectionHeader from "./common/SectionHeader";

interface IVideoTemplate {
  content: VideoContent;
  sectionNumber?: number;
}

const VideoTemplate: React.FC<IVideoTemplate> = ({
  content,
  sectionNumber,
}) => {
  return (
    <SectionWrapper id={content.title}>
      {content.title && (
        <SectionHeader number={sectionNumber} title={content.title} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.list.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <video
              width="100%"
              height="auto"
              className="w-full h-auto max-h-[400px] object-cover"
              poster={item.poster}
              controls
            >
              <source src={item.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default VideoTemplate;
