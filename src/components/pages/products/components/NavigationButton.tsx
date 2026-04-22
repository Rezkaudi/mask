import Image from "next/image";

interface INavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
}

const NavigationButton = ({
  direction,
  onClick,
  disabled,
}: INavigationButtonProps) => {
  const classType = `custom-${direction}`;
  const isPrev = direction === "prev";
  const arrowClass = isPrev ? "rotate-180" : "";
  const positionClass = isPrev
    ? "left-1 lg:left-[5%]"
    : "right-1 lg:right-[5%]";

  return (
    <div
      className={`${classType} absolute top-[50%] translate-y-[-50%] ${positionClass} z-10 w-[40px] lg:w-[52px] h-[40px] lg:h-[52px] gradient-navigation rounded-full border-0 text-white flex justify-center items-center ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "opacity-100 cursor-pointer"
      }`}
      onClick={!disabled ? onClick : undefined}
      aria-label={isPrev ? "Previous image" : "Next image"}
    >
      <Image
        src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/arrow-navigation.svg"
        alt={`${direction}-arrow`}
        width={24}
        height={12}
        className={`${arrowClass} w-[24px] lg:w-[31px] h-[12px] lg:h-[15px]`}
      />
    </div>
  );
};

export default NavigationButton;
