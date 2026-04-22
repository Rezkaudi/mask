import Image from "next/image";

// components
import ContactBtn from "../components/ContactBtn";

// data
import ContactDetails from "@/content/home/ContactDetails.json";

const ContactBanner = ({
  showFormBtn = true,
  applyFactoryTheme = false,
}: {
  showFormBtn?: boolean;
  applyFactoryTheme?: boolean;
}) => {
  return (
    <section className="font-noto object-cover relative flex flex-row-reverse">
      <Image
        className=" absolute top-0 left-0 opacity-25"
        src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/home-page/backgrounds/banner-full-bg.jpeg"
        alt="banner-background-hadis"
        fill
      />
      {/* Right image */}
      <div className="hidden md:block md:w-[48%] relative md:h-auto">
        <Image
          src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/home-page/backgrounds/right-bg-banner.jpeg"
          alt="banner-right-bg"
          fill
          className="object-cover"
        />
      </div>

      {/* left section */}
      <div className="px-5 py-[50px] xl:p-[75px] md:w-[52%] xl:pl-[80px] space-y-4 lg:max-h-[415px]">
        {/* Modern Badge */}
        <div
          className={`absolute top-2 left-2 z-10 -rotate-[30deg] ${applyFactoryTheme ? "text-white" : "text-red-600"}`}
        >
          <svg
            className="w-20 md:w-24 h-auto"
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

        {/* Show this only on screens smaller than 600px */}
        <h2
          className={`font-noto !mt-8 bg-gradient-to-r bg-clip-text text-transparent text-center text-[32px] md:text-[36px] font-black leading-[48px] md:leading-[54px] block sm:hidden ${
            applyFactoryTheme ? "bg-white" : "from-light-red to-dark-red"
          }`}
        >
          ラクラク無料査定
        </h2>

        {/* Show this only on screens 600px and above */}
        <h2
          className={`font-noto bg-gradient-to-r  bg-clip-text text-transparent text-center text-[32px] md:text-[36px] font-black leading-[48px] md:leading-[54px] hidden sm:block ${
            applyFactoryTheme ? "bg-white" : "from-light-red to-dark-red"
          }`}
        >
          ラクラク無料査定
        </h2>
        {/* communication information */}
        <div className="flex justify-center flex-wrap space-y-4 lg:space-y-[24px]">
          {/* call button */}
          <div className="w-full">
            <ContactBtn
              mobileLabel={ContactDetails.phoneNumber.label}
              label={ContactDetails.phoneNumber.label}
              href={ContactDetails.phoneNumber.href}
              variant={applyFactoryTheme ? "sky" : "red"}
              className="text-[32px] lg:text-[40px] h-20 w-full  sm:w-full"
            />
            {showFormBtn && (
              <p
                className={`text-[14px] leading-[21px] mt-1 font-normal w-fit ${
                  applyFactoryTheme ? "text-white" : "text-black"
                }`}
              >
                営業時間：10:00 〜 18:00
              </p>
            )}
          </div>
          {/* social media buttons */}
          <div className="space-y-2 md:space-y-0 md:space-x-2 flex-wrap md:flex-nowrap flex w-full">
            {showFormBtn && (
              <ContactBtn
                mobileLabel={ContactDetails.support.label}
                label={ContactDetails.support.label}
                href={ContactDetails.support.href}
                variant="blue"
                className="text-lg w-full sm:w-full lg:flex-1 sm:px-3"
              />
            )}
            <ContactBtn
              mobileLabel={ContactDetails.line.label}
              label={ContactDetails.line.label}
              href={ContactDetails.line.href}
              variant="green"
              className="text-lg w-full sm:w-full lg:flex-1 sm:px-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
