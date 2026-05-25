import React from "react";
import Link from "next/link";
import Image from "next/image";

interface IButtonTemplate {
  content: BtnContent;
}

const renderLabelWithFreeAccent = (label: string) => {
  const idx = label.indexOf("無料");
  if (idx === -1) return label;
  return (
    <>
      {label.slice(0, idx)}
      <span className="relative inline-block px-[0.06em]">
        無料
        <span
          aria-hidden
          className="pointer-events-none absolute left-0 right-0 -bottom-[3px] h-[3px] rounded-[3px] bg-[#1F82C4] origin-left scale-x-0 group-hover:scale-x-100 group-hover:bg-white transition-[transform,background-color] duration-[350ms] delay-[50ms] ease-out"
        />
      </span>
      {label.slice(idx + 2)}
    </>
  );
};

const ButtonTemplate: React.FC<IButtonTemplate> = ({ content }) => {
  const href = content.href ?? "/#inquiry";
  const label = content.label ?? "お問い合わせはこちら";
  const variant = content.variant ?? "primary";

  if (variant === "secondary") {
    return (
      <div className="flex justify-center my-4 lg:my-6">
        <Link
          href={href}
          aria-label={label}
          className="group relative isolate inline-flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full border-2 border-[#1F82C4] bg-white px-8 py-4 lg:px-12 lg:py-5 font-noto font-black text-[16px] lg:text-[18px] leading-none tracking-[0.02em] text-[#1F82C4] shadow-[0_8px_20px_-12px_rgba(31,130,196,0.6)] transition-[color,transform,box-shadow] duration-300 hover:-translate-y-[2px] hover:text-white hover:shadow-[0_16px_30px_-14px_rgba(31,130,196,0.7)] active:translate-y-[1px] focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#1F82C4]"
        >
          <span
            aria-hidden
            className="absolute inset-0 -z-10 rounded-[inherit] bg-gradient-to-b from-[#2E97D8] to-[#155F9C] origin-left scale-x-0 transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
          />
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="flex-none"
          >
            <rect x={2.5} y={4} width={19} height={13} rx={2} />
            <path d="M2.5 20.5h19" />
          </svg>
          <span>{renderLabelWithFreeAccent(label)}</span>
          <svg
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="flex-none transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[5px]"
          >
            <path d="M5 12h13" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    );
  }

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
