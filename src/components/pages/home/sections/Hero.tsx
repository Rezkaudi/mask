import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section
      aria-label="Hero section with business highlights"
      className="relative px-4 w-full h-[410px] lg:h-[640px] 2xl:h-[calc(100vh-64px)] overflow-hidden"
    >
      {/* Mobile Background Image (< 1024px) */}
      <div className="absolute inset-0 -z-30 lg:hidden">
        <Image
          src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/home-page/hero-section/hero-background-mobile.webp"
          alt="中古機械・電動工具買取のハディズ - 全国対応"
          fill
          priority // ✅ CRITICAL: This is the LCP element
          quality={85}
          sizes="100vw"
          fetchPriority="high"
          className="object-cover object-right-top"
        />
      </div>

      {/* Desktop Background Image (>= 1024px) */}
      <div className="absolute inset-0 -z-30 hidden lg:block">
        <Image
          src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/home-page/hero-section/hero-background.webp"
          alt="中古機械・電動工具買取のハディズ - 全国対応"
          fill
          priority // ✅ CRITICAL: This is the LCP element
          quality={85}
          sizes="100vw"
          fetchPriority="high"
          className="object-cover object-right-top"
        />
      </div>

      <div className="flex lg:w-1/2 2xl:min-w-[1000px] items-start 2xl:items-center justify-center h-full 2xl:h-3/4 space-y-2 lg:space-y-7 flex-col pt-7 2xl:pt-20 sm:pl-12 pb-4">
        {/* Text Image 1 - NO priority (loads after background) */}
        <div className="relative xl:w-[810px] xl:h-[64px] w-[335px] h-[38px] sm:h-[50px] lg:h-[70px] z-10">
          <Image
            src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/home-page/hero-section/hero-1.webp"
            alt="創業25年以上の実績"
            sizes="(max-width: 1279px) 335px, 810px"
            fill
            // ❌ REMOVED priority - background loads first
            quality={90}
            loading="lazy" // ✅ Lazy load to prioritize background
          />
        </div>

        {/* Text Image 2 - NO priority (loads after background) */}
        <div className="relative w-[340px] h-[88px] sm:h-[130px] lg:h-[300px] xl:w-[810px] xl:h-[350px] z-10">
          <Image
            src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/home-page/hero-section/hero-2.webp"
            alt="高価買取のご案内"
            sizes="(max-width: 1279px) 340px, 810px"
            fill
            // ❌ REMOVED priority - background loads first
            quality={90}
            loading="lazy" // ✅ Lazy load to prioritize background
          />
        </div>

        {/* HTML Text - Keep as is */}
        <div className="flex w-full items-start xl:items-center justify-center gap-2 flex-col lg:flex-row text-white flex-wrap">
          <h2 className="flex gap-1 items-center justify-center w-[165px] h-[66px] lg:w-[276px] lg:h-[102px] gradient-red rounded-lg font-black lg:text-[32px] text-xl">
            <span className="text-[18px] lg:text-[28px]">創業</span>
            <span className="text-[44px] lg:text-[100px]">25</span>
            <span className="mt-auto pb-2 text-[18px] lg:text-[28px]">
              年以上
            </span>
          </h2>
          <h2 className="flex gap-1 lg:gap-2 items-center justify-center w-[165px] h-[66px] lg:w-[276px] lg:h-[102px] gradient-red rounded-lg font-black lg:text-[32px] text-xl">
            <span className="flex items-center justify-center flex-col gap-1 lg:gap-2">
              <span>出張費</span>
              <span>査定費</span>
            </span>
            <span className="text-[46px] lg:text-[100px]">0</span>
            <span className="mt-auto pb-2">円</span>
          </h2>
          <h2 className="flex items-center justify-center w-[165px] h-[66px] lg:w-[276px] lg:h-[102px] gradient-red rounded-lg font-black text-3xl lg:text-[50px]">
            全国対応
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
