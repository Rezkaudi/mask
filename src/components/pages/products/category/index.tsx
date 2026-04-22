import CategoryHero from "../components/CategoryHero";
import CategoryProducts from "../components/CategoryProducts";
import Flow from "../../home/sections/Flow";
import WhyChoose from "../../home/sections/WhyChoose";
import ContactBanner from "../../home/sections/ContactBanner";
import PurchaseProcess from "../../home/sections/PurchaseProcess";
import Inquiry from "@/components/common/sections/Inquiry";
import MajorList from "../components/MajorList";
import HadisReason from "../components/HadisReason";
import { TCategory } from "@/types/category.type";
import ContactFixedBanner from "@/components/common/sections/ContactFixedBanner";
import { PurchaseRecords } from "@/components/common/sections/PurchaseRecords";

interface IIndexProps {
  categoryData: TCategory;
}

const index = ({ categoryData }: IIndexProps) => {
  return (
    <>
      <CategoryHero categoryName={categoryData.title} />
      <CategoryProducts
        categoryName={categoryData.title.replace(/\n/g, "")}
        categoryId={categoryData.id}
        products={categoryData?.items}
      />
      <PurchaseRecords
        label={categoryData.title.replace(/\n/g, "")}
        isCategory
        purchaseItems={categoryData?.purchaseItems}
      />
      <MajorList
        title={categoryData.title.replace(/\n/g, "")}
        companies={categoryData?.makers}
      />
      <Flow />
      <WhyChoose />
      <ContactBanner />
      <HadisReason />
      <ContactBanner />
      <PurchaseProcess />
      <Inquiry />
      <ContactBanner />
      <ContactFixedBanner />
    </>
  );
};

export default index;
