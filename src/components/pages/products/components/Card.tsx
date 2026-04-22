import Image from "next/image";

interface ICardProps {
  title: string;
  data: string[];
}

const Card = ({ title, data }: ICardProps) => {
  return (
    <div className="card group bg-white rounded-[16px] pt-[60px] px-[30px] pb-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-300 ease-in-out relative border border-[#f1f5f9] overflow-hidden hover:-translate-y-[10px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.1)] bg-[var(--accent-bg)]">
      <h3 className="text-center text-[#111111] text-[24px] font-bold mb-2">
        {title}
      </h3>
      <span className="block w-[30%] mx-auto border-b-4 border-[#B81122] mb-8 transition-all duration-300 ease-in-out group-hover:w-full"></span>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <Image
              src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/red-correct.svg"
              width={20}
              height={20}
              alt="red-correct"
            />
            <p className="text-[#111111] text-[14px]">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
