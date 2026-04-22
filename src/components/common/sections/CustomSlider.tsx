"use client";
// import Swiper core and required modules
import { Navigation } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { ReactNode } from "react";

interface ICustomSliderProps<T> {
  sectionTitle?: string;
  items: T[];
  renderSlide: (item: T, index: number) => ReactNode;
  className?: string;
}

const CustomSlider = <T,>({
  sectionTitle,
  items,
  renderSlide,
  className,
}: ICustomSliderProps<T>) => {
  return (
    <section
      className={`py-[50px] lg:py-[120px] bg-[url(https://mac-hadis.s3.ap-northeast-1.amazonaws.com/home-page/backgrounds/dot-bg-results.svg)] bg-auto font-noto relative ${
        className ?? ""
      }`}
    >
      {sectionTitle && (
        <h2 className="mb-[40px] lg:mb-[50px] text-[20px] md:text-[35px] lg:text-[48px] leading-[45px] lg:leading-[90px] text-[#D51A16] text-center font-black">
          {sectionTitle}
        </h2>
      )}
      {/* sliders buttons */}
      <div className="custom-prev absolute top-[65%] translate-y-[-65%] left-1 lg:left-[5%] z-10 w-[40px] lg:w-[52px] h-[40px] lg:h-[52px] gradient-navigation rounded-full border-0 text-white flex justify-center items-center cursor-pointer">
        <Image
          src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/arrow-navigation.svg"
          alt="right-arrow"
          width={24}
          height={12}
          className="rotate-180 w-[24px] lg:w-[31px] h-[12px] lg:h-[15px]"
        />
      </div>
      <div className="custom-next absolute top-[65%] translate-y-[-65%] right-1 lg:right-[5%] z-10 w-[40px] lg:w-[52px] h-[40px] lg:h-[52px] gradient-navigation rounded-full border-0 text-white flex justify-center items-center cursor-pointer">
        <Image
          src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/arrow-navigation.svg"
          alt="right-arrow"
          width={24}
          height={12}
          className="w-[24px] lg:w-[31px] h-[12px] lg:h-[15px]"
        />
      </div>
      {/* sliders */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={3.5}
        loop
        centeredSlides
        breakpoints={{
          320: { slidesPerView: 1.3, spaceBetween: 8 },
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3.5, spaceBetween: 16 },
          1024: { slidesPerView: 3.5, spaceBetween: 32 },
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderSlide(item, index)}</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomSlider;
