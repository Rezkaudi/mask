import { getCategoryByTitle } from "@/services/category";
import Image from "next/image";
import Link from "next/link";

interface IBreadcrumbProps {
  title: string;
  category?: string;
}

const Breadcrumb = ({ title, category }: IBreadcrumbProps) => {
  const categoryId = getCategoryByTitle(category as string)?.id;

  return (
    <section className="bg-[#f8f7f6] text-[#111111]">
      <div className="max-w-[928px] mx-auto py-4 lg:py-10 px-4">
        {/* Breadcrumb Navigation */}
        <div className="text-[#999999] font-normal text-xs lg:text-sm">
          <Link href={"/"} className="inline-block">
            <span>ホーム</span>
          </Link>
          <Image
            className="inline-block mx-2"
            src={
              "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/right-arrow.svg"
            }
            width={16}
            height={16}
            alt="right arrow icon"
          />
          <Link href={`/products/${categoryId}`}>
            <span>{category}</span>
          </Link>
          <Image
            className="inline-block mx-2"
            src={
              "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/icons/right-arrow.svg"
            }
            width={16}
            height={16}
            alt="right arrow icon"
          />
          <span>{title}</span>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
