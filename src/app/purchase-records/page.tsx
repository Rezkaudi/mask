import { PurchaseRecords } from "@/components/common/sections/PurchaseRecords";
import ContactBanner from "@/components/pages/home/sections/ContactBanner";
import data from "@/content/home/PurchaseResults.json";


export default function page() {
  return (
    <>
    <PurchaseRecords label="買取実績" purchaseItems={data} isLimit={false} />
    <ContactBanner/>
    </>
  );
};
