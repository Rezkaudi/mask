import React from "react";
import Link from "next/link";
import Image from "next/image";

interface IButtonTemplate {
  content: BtnContent;
}

const ButtonTemplate: React.FC<IButtonTemplate> = ({ content }) => {
  const href = content.href ?? "/#inquiry";
  const label = content.label ?? "お問い合わせはこちら";

  return (
    <div className="flex justify-center my-4 lg:my-6">
      <Link
        href={href}
        className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto min-w-[280px] px-8 py-4 rounded-full font-noto font-bold text-white text-[16px] lg:text-[18px] shadow-md hover:shadow-lg transition-all duration-200"
        style={{
          background: "linear-gradient(135deg, #e02020 0%, #b81515 100%)",
        }}
      >
        <Image
          src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/computer.svg"
          alt=""
          width={24}
          height={24}
          className="brightness-0 invert"
        />
        <span>{label}</span>
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </div>
  );
};

export default ButtonTemplate;
