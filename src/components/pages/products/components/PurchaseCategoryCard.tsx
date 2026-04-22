import Image from "next/image";

interface IPurchaseCategoryCardProps {
  image: string;
  title: string;
}

const PurchaseCategoryCard = ({ title, image }: IPurchaseCategoryCardProps) => {
  return (
    <div className="w-[47%] md:w-[30%] lg:w-[22%]">
      <div className="min-h-[240px] lg:min-h-[258px] bg-white relative">
        <div className="w-full flex justify-center items-center">
          <Image
            src={image}
            alt={title}
            width={190}
            height={190}
            className="w-auto h-[140px] lg:w-auto lg:h-[190px]"
          />
        </div>
        <p className="px-[10px] lg:px-[6px] py-[7px] lg:py-[12px] w-full text-[#B81122] text-center font-semibold text-[14px] lg:text-[20px] leading-[22px] lg:leading-[35px] text-ellipsis">
          {title}
        </p>
      </div>
    </div>
  );
};

export default PurchaseCategoryCard;
