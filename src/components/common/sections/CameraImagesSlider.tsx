"use client";

import CustomSlider from "./CustomSlider";
import ImageTitleSlide from "@/components/common/components/ImageTitleSlide";

interface TImageItem {
  imageSrc: string;
  title: string;
}

interface ICameraImagesSliderProps {
  sectionTitle?: string;
  items: TImageItem[];
  className?: string;
}

const CameraImagesSlider = ({
  sectionTitle,
  items,
  className,
}: ICameraImagesSliderProps) => {
  return (
    <CustomSlider
      sectionTitle={sectionTitle}
      items={items}
      className={className}
      renderSlide={(item) => (
        <ImageTitleSlide imageSrc={item.imageSrc} title={item.title} />
      )}
    />
  );
};

export default CameraImagesSlider;
