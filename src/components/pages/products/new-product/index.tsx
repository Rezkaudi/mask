/* 
  ! IMPORTANT NOTE: 
  ! this component is used to display the new product page when get a confirmation we well replace the old product page with this one
*/
import Breadcrumb from "../components/Breadcrumb";
import ImagesGallery from "../new-components/ImagesGallery";
import { TNewProduct } from "@/types/product.type";
// import ProductDetails from "../components/ProductDetails";
// import MajorList from "../components/MajorList";
import ContactBanner from "../../home/sections/ContactBanner";
import PurchaseProcess from "../../home/sections/PurchaseProcess";
import ContactFixedBanner from "@/components/common/sections/ContactFixedBanner";
import PurchaseService from "../new-components/PurchaseServices";
import Types from "../new-components/Types";
import Information from "../new-components/Information";
import Questions from "../new-components/Questions";
import Makers from "../new-components/Makers";
import PurchasedItems from "../../home/sections/PurchasedItems";
import ProductHero from "../components/ProductHero";
import { PurchaseRecords } from "@/components/common/sections/PurchaseRecords";

interface IIndexProps {
  product: TNewProduct;
}

const index = ({ product }: IIndexProps) => {
  return (
    <>
      <ProductHero productTitle={product.title} />
      <Breadcrumb title={product.title} category={product.category} />
      <Types types={product.types} />
      <ImagesGallery images={product.webImagesGallery} />
      {/* <MajorList title={product.title} companies={product.makers} /> */}
      <Makers companies={product.makers} />
      {/* Camera images as slider of image+title */}
      {/* <CameraImagesSlider
        sectionTitle={`${product.title}${product.purchaseProductTitle ?? ""}`}
        items={product.cameraImagesGallery}
      /> */}
      <PurchaseRecords
        label={`${product.title}${product.purchaseProductTitle ?? ""}`}
        purchaseItems={product.cameraImagesGallery}
      />
      <Information information={product.information} />
      <Questions questions={product.questions} />
      <PurchaseService
        // servicesTitle={product.servicesTitle}
        servicesDescription={product.servicesDescription}
      />
      <ContactBanner />
      <ContactFixedBanner />
      <PurchaseProcess />
      {/* <BusinessPolicy /> */}
      <PurchasedItems />
    </>
  );
};

export default index;
