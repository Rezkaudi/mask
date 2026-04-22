import Image from "next/image";

interface IResultSlideProps {
  image: string;
  title1: string;
  title2: string;
  title3?: string;
  model: string;
}

const ResultSlide = ({
  image,
  title1,
  title2,
  title3,
  model,
}: IResultSlideProps) => {
  return (
    <div className="p-4 lg:p-[20px] rounded border-2 bg-[#FFF7F8] border-[#B81122] flex space-x-2 items-center h-[140px] lg:h-[190px]">
      <Image
        src={image}
        alt={title1}
        width={150}
        height={150}
        className="w-[100px] lg:w-[150px] h-[100px] lg:h-[150px]"
      />
      <div className="text-[12px] lg:text-[16px] leading-[18px] lg:leading-[24px] text-[#111111] font-bold overflow-hidden">
        <span className="hidden py-[3px] lg:py-1 px-2 mb-1 lg:mb-2 text-[10px] leading-[15px] text-white w-fit bg-[#B81122]">
          カテゴリー1
        </span>
        <p className="truncate">{title1}</p>
        <p className="truncate">{title2}</p>
        {title3 && <p className="truncate">{title3}</p>}
        <p className="truncate">{model}</p>
      </div>
    </div>
  );
};

export default ResultSlide;
