export const HeroSection = () => {
  return (
    <section className="relative grid place-items-center text-white min-h-[80vh]">
      <div className="px-4 lg:px-10 text-center w-full max-w-3xl">
        <h1
          className={`
            text-xl md:text-5xl font-extrabold leading-tight mb-4 text-balance
            break-keep [overflow-wrap:normal] [word-break:keep-all]
            max-[640px]:break-words max-[640px]:[overflow-wrap:anywhere]
          `}
        >
          工場整理・閉鎖支援サービス
        </h1>

        <p
          className={`
            text-lg md:text-2xl text-factory-yellow mb-6
            break-keep [overflow-wrap:normal] [word-break:keep-all]
            max-[640px]:break-words max-[640px]:[overflow-wrap:anywhere]
          `}
        >
          機械撤去から清掃まで、廃業・移転を完全サポート
        </p>

        <p
          className={`
            text-base md:text-lg/relaxed mx-auto
            break-keep [overflow-wrap:normal] [word-break:keep-all]
            max-[640px]:break-words max-[640px]:[overflow-wrap:anywhere]
          `}
        >
          ハディズは、工場の閉鎖・移転・廃業に伴うあらゆる作業を一括でお引き受けいたします。
          長年の経験と実績により、機械設備の適正な買取から、最終清掃まで、
          お客様の負担を最小限に抑えながら、スムーズな工場整理を実現します。
        </p>

        <p
          className={`
            text-base md:text-lg/relaxed mx-auto
            break-keep [overflow-wrap:normal] [word-break:keep-all]
            max-[640px]:break-words max-[640px]:[overflow-wrap:anywhere]
          `}
        >
          弁護士様/事業主様/不動産会社様　お気軽にご相談ください
        </p>
      </div>
    </section>
  );
};
