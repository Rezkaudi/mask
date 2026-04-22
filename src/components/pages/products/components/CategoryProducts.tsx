import { TItem } from "@/types/item.type";
import PurchaseItemsCard from "../../home/components/PurchaseItemsCard";
import Image from "next/image";

interface ICategoryProductsProps {
  products?: TItem[];
  categoryName: string;
  categoryId: string;
}

const CategoryProducts = ({
  products,
  categoryName,
  categoryId,
}: ICategoryProductsProps) => {
  return (
    <section className="relative py-[50px] md:py-[80px] lg:py-[120px] px-5 md:px-[50px] lg:px-[80px]">
      <Image
        className=" absolute -z-10 top-0 left-0 object-cover"
        fill
        src={
          "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/home-page/backgrounds/flow-bg.jpeg"
        }
        alt="hero-background-hadis"
      />
      <h2 className="text-[30px] md:text-[50px] lg:text-[60px] leading-[45px] md:leading-[60px] lg:leading-[90px] font-black text-center font-noto bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent">
        {categoryName}
      </h2>
      <p className="my-2 lg:my-4 text-[20px] lg:text-[40px] leading-[30px] lg:leading-[60px] font-black text-center bg-gradient-to-r from-light-red to-dark-red bg-clip-text text-transparent">
        のカテゴリー商品一覧
      </p>
      <p className="text-[16px] lg:text-[20px] leading-[20px] lg:leading-[30px] text-center">
        記載のないメーカー製品もお問い合わせください
      </p>
      <div className="mt-[40px] md:mt-[45px] lg:mt-[50px] flex flex-wrap justify-between md:justify-center gap-[17px] lg:gap-8">
        {products?.map((item) => (
          <div className="w-[47%] md:w-[30%] lg:w-[22%]" key={item.id}>
            <PurchaseItemsCard
              image={item.image}
              title={item.title}
              categoryId={categoryId}
              categoryName={categoryName}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryProducts;
