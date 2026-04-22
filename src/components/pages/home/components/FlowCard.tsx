import Image from "next/image";

interface IFlowCard {
  imageSrc: string;
  title: string;
}

const FlowCard: React.FC<IFlowCard> = ({ imageSrc, title }) => {
  return (
    <div className=" space-y-4 text-center">
      <div className="relative w-[210px] h-[210px] xl:w-[313px] xl:h-[313px]">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
      <p
        className="text-xl xl:text-3xl font-black max-w-[230px] xl:max-w-[350px] mx-auto"
        style={{ lineHeight: "46px" }}
      >
        {title}
      </p>
    </div>
  );
};

export default FlowCard;
