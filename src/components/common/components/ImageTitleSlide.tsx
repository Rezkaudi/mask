import Image from "next/image";

interface IImageTitleSlideProps {
  imageSrc: string;
  title: string;
}

const ImageTitleSlide = ({ imageSrc, title }: IImageTitleSlideProps) => {
  return (
    <div className="p-4 lg:p-[20px] rounded border-2 bg-[#FFF7F8] border-[#B81122] flex items-center gap-3 h-[140px] lg:h-[190px]">
      <Image
        src={imageSrc}
        alt={title}
        width={150}
        height={150}
        className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] object-contain"
      />
      <p className="text-[12px] lg:text-[16px] leading-[18px] lg:leading-[24px] text-[#111111] font-bold line-clamp-3">
        {title}
      </p>
    </div>
  );
};

export default ImageTitleSlide;
