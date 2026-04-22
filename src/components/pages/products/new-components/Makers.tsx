import { TMaker } from "@/types/maker.type";
import Image from "next/image";
import Link from "next/link";

interface IMajorListProps {
  companies: TMaker[];
}

const Makers = ({ companies }: IMajorListProps) => {
  return (
    <section className="px-5 py-[50px] relative">
      <Image
        className="absolute -z-10 top-0 left-0 object-cover"
        fill
        src={
          "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/home-page/backgrounds/flow-bg.jpeg"
        }
        alt="hero-background-hadis"
      />
      {/* Content */}
      <h2 className="bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent text-center text-[32px] leading-[36px] lg:text-[65px] lg:leading-[90px] font-black">
        買取対象の主なメーカー
      </h2>

      <div className="w-full md:w-[90%] lg:w-[80%] md:mx-auto flex flex-wrap justify-center gap-[7px] lg:gap-x-[32px] lg:gap-y-4 mt-10">
        {companies?.map((item, index) => (
          <Link
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
            className="w-[calc(50%-3.5px)] md:w-[calc(33.333%-4.67px)] lg:w-[calc(25%-24px)] 
            px-4 py-3 bg-white border-[3px] border-[#B81122] flex justify-center items-center 
            min-h-[100px] max-h-[100px] lg:min-h-[150px] lg:max-h-[150px] overflow-hidden"
          >
            <Image
              src={item.imageSrc}
              alt={item.en}
              width={250}
              height={250}
              unoptimized
              className="w-full h-full object-contain"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Makers;
