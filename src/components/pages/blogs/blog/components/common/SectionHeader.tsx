import React from "react";

interface ISectionHeader {
  number?: number;
  title?: string;
  subTitle?: string;
}

const SectionHeader: React.FC<ISectionHeader> = ({
  number,
  title,
  subTitle,
}) => {
  if (!title || !title.trim()) return null;

  return (
    <div className="flex items-center gap-2 lg:gap-4 p-3 lg:p-4 rounded-xl lg:rounded-2xl border border-[#B8112226] bg-[#FFF5F6] mb-4 lg:mb-8">
      {typeof number === "number" && (
        <div className="font-noto flex items-center justify-center rounded-full w-8 h-8 lg:w-11 lg:h-11 bg-[#B81122] text-white shrink-0 font-bold text-[16px] lg:text-[20px]">
          {number}
        </div>
      )}
      <div className="flex-1">
        <h2 className="font-noto font-bold text-[18px] lg:text-[20px] leading-[20px] tracking-normal align-middle text-[#B81122]">
          {title}
        </h2>
        {subTitle && (
          <h3 className="font-noto font-medium text-[14px] lg:text-[16px] text-[#323232] mt-1">
            {subTitle}
          </h3>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
