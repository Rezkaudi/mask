// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useEffect, useState } from "react";

export const ReasonsSection = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-animate");
          if (id) setIsVisible((prev) => ({ ...prev, [id]: true }));
        }
      });
    }, observerOptions);

    const elementsToObserve = document.querySelectorAll("[data-animate]");
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const reasonesImage = [
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step1.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step2.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step3.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step4.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step5.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step6.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step7.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step8.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step9.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step10.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step11.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step12.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step13.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step14.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step15.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step16.jpg",
    "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Reasons/step17.jpg",
  ];

  const strengths = [
    {
      title: "1. 一括対応で手間削減",
      content:
        "買取・撤去・清掃まですべて当社で対応。（不用品の回収は行っておりません）",
    },
    {
      title: "2. コスト最適化",
      content:
        "買取可能な設備は適正価格で買取し、処分費用から相殺。トータルコストを削減します。",
    },
    {
      title: "3. 豊富な実績",
      content:
        "創業以来、様々な工場整理を手がけ、あらゆる業種・規模に対応してきました。",
    },
    {
      title: "4. 柔軟な対応力",
      content: "営業中の部分撤去 / 段階的な撤去 / 緊急対応",
    },
    {
      title: "5. 安全・安心の作業",
      content: "安全管理の徹底 / 守秘義務契約",
    },
    {
      title: "6. 搬出困難な場所も対応",
      content: "2階、道幅が狭い、段差があるなど、搬出が難しい場所でも対応可能",
    },
  ];
  return (
    <section className="bg-gray-100 py-20">
      {/* Strengths Section */}
      <div className="fs-container max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-factory-teal">
            ハディズの強み
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {strengths.map((strength, index) => (
            <div
              key={index}
              data-animate={`strength-${index}`}
              className={`bg-white p-8 rounded-lg relative border-l-4 transition-all duration-700 ${isVisible[`strength-${index}`]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
                } border-factory-sky`}
            >
              <h3 className="text-xl font-bold mb-3 text-factory-teal">
                {strength.title}
              </h3>
              <p>{strength.content}</p>
            </div>
          ))}
        </div>

        <div className="text-white p-8 rounded-lg text-center bg-factory-sky mb-8">
          <h3 className="text-2xl font-bold mb-4">無料サービス</h3>
          <p className="text-xl">現地調査・見積もり / 買取査定</p>
        </div>
      </div>

      {/* slider */}
      <div className="relative mt-10">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={3.5}
          loop
          centeredSlides
          // preloads neighbors for smoother UX
          lazyPreloadPrevNext={2}
          // keep your existing selectors
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.3, spaceBetween: 8 },
            640: { slidesPerView: 2, spaceBetween: 16 },
            768: { slidesPerView: 3.5, spaceBetween: 16 },
            1024: { slidesPerView: 3.5, spaceBetween: 32 },
          }}
          className="!pb-10"
        >
          {reasonesImage.map((src, i) => (
            <SwiperSlide key={src}>
              <div className="relative h-[400px] overflow-hidden rounded-xl bg-gray-200">
                <Image
                  src={src}
                  alt={`作業ステップ ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom nav buttons (match your selectors) */}
        <button
          className="custom-prev absolute -left-3 md:-left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur px-2.5 py-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-factory-teal"
          aria-label="前へ"
          type="button"
        >
          ‹
        </button>
        <button
          className="custom-next absolute -right-3 md:-right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 backdrop-blur px-2.5 py-2 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-factory-teal"
          aria-label="次へ"
          type="button"
        >
          ›
        </button>
      </div>
    </section>
  );
};
