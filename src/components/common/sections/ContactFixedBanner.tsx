import Image from "next/image";

// components
import ContactBtn from "@/components/pages/home/components/ContactBtn";
import PointerIcon from "@/components/pages/home/components/PointerIcon";

// data
import ContactDetails from "@/content/home/ContactDetails.json";

const ContactFixedBanner: React.FC = () => {
  return (
    <section
      className="w-full py-4 fixed bottom-0 left-0 z-30 md:overflow-hidden"
      aria-label="Contact Banner"
    >
      {/* Modern Badge */}
      <div
        className={`absolute -top-12 md:top-1 left-2 z-10 -rotate-[30deg] text-red-600`}
      >
        <svg
          className="w-20 md:w-16 lg:w-20 h-auto"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="modernBadgeTitle"
        >
          <title id="modernBadgeTitle">無料見積もりバッジ</title>

          {/* --- Circle outline (clean) --- */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />

          {/* --- Inner circle (accent ring) --- */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 6"
          />

          {/* --- Text (centered, stacked) --- */}
          <text
            x="50"
            y="44"
            textAnchor="middle"
            fontWeight="700"
            fontSize="15"
            fill="currentColor"
            style={{ letterSpacing: "0.05em" }}
          >
            無料
          </text>
          <text
            x="50"
            y="62"
            textAnchor="middle"
            fontWeight="600"
            fontSize="13"
            fill="currentColor"
          >
            見積もり
          </text>
        </svg>
      </div>
      <Image
        className=" -z-10 absolute top-0 left-0 object-cover"
        src={
          "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/home-page/backgrounds/banner-bg.png"
        }
        alt="hero-background-hadis"
        fill
      />

      <div className="flex flex-wrap items-center justify-center w-full h-full gap-2 px-4 lg:px-20">
        <ContactBtn
          mobileLabel={ContactDetails.phoneNumber.label}
          label={ContactDetails.phoneNumber.label}
          href={ContactDetails.phoneNumber.href}
          variant="red"
          className="text-3xl w-full"
        >
          <PointerIcon />
        </ContactBtn>

        <div className="flex items-center justify-center w-full lg:w-fit  h-full gap-2 ">
          <ContactBtn
            mobileLabel={"フォーム"}
            label={ContactDetails.support.label}
            href={ContactDetails.support.href}
            variant="blue"
            className="text-base lg:text-xl w-1/2 flex-1 lg:flex-auto"
          >
            <PointerIcon />
          </ContactBtn>

          <ContactBtn
            mobileLabel={ContactDetails.line.label}
            label={ContactDetails.line.label}
            href={ContactDetails.line.href}
            variant="green"
            className="text-base lg:text-xl w-1/2 flex-1 lg:flex-auto"
          >
            <PointerIcon />
          </ContactBtn>
        </div>
      </div>
    </section>
  );
};

export default ContactFixedBanner;
