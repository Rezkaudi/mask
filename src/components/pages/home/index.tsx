// src/components/pages/home/index.tsx
import dynamic from "next/dynamic";
import Hero from "./sections/Hero";
import ContactFixedBanner from "@/components/common/sections/ContactFixedBanner";
import { PurchaseRecords } from "@/components/common/sections/PurchaseRecords";
import data from "@/content/home/PurchaseResults.json";
import { LocalBusinessSchema } from '@/components/seo/schemas';

// ✅ Import the Client Component Wrapper we just created
import InquiryClient from "./sections/InquiryClient";

// Helper for consistent loading states to prevent CLS
const SectionLoader = ({ height = "400px" }: { height?: string }) => (
  <div className={`w-full bg-gray-50 animate-pulse`} style={{ height }} />
);

const Flow = dynamic(() => import("./sections/Flow"), {
  loading: () => <SectionLoader height="600px" />,
});
const WhyChoose = dynamic(() => import("./sections/WhyChoose"), {
  loading: () => <SectionLoader height="500px" />,
});

const BlogsPost = dynamic(() => import("./sections/BlogsPost"), {
  loading: () => <SectionLoader height="400px" />,
});
const ContactBanner = dynamic(() => import("./sections/ContactBanner"), {
  loading: () => <SectionLoader height="200px" />,
});
const PurchasedItems = dynamic(() => import("./sections/PurchasedItems"), {
  loading: () => <SectionLoader height="500px" />,
});

const PurchaseProcess = dynamic(() => import("./sections/PurchaseProcess"), {
  loading: () => <SectionLoader height="400px" />,
});
const BusinessPolicy = dynamic(() => import("./sections/BusinessPolicy"), {
  loading: () => <SectionLoader height="300px" />,
});
const ReviewsReceived = dynamic(() => import("./sections/ReviewsReceived"), {
  loading: () => <SectionLoader height="400px" />,
});
const FrequentlyAskedQuestions = dynamic(
  () => import("./sections/FrequentlyAskedQuestions"),
  { loading: () => <SectionLoader height="600px" /> }
);
const CompanyProfile = dynamic(() => import("./sections/CompanyProfile"), {
  loading: () => <SectionLoader height="500px" />
});

// ❌ REMOVED: The render-blocking dynamic import definition from here

const Index = () => {
  return (
    <>
      <LocalBusinessSchema />
      <Hero />
      <ContactFixedBanner />
      <Flow />
      <WhyChoose />
      {/* <VideoSection /> */}
      <ContactBanner />
      <PurchasedItems />
      {/* <PurchaseResults /> */}
      {/* Static data passed, this is fine to render immediately if it's above fold, 
          but usually this is lower down. If it causes issues, make PurchaseRecords dynamic too. */}
      <PurchaseRecords label="買取実績" purchaseItems={data} isLimit={true} />
      <PurchaseProcess />
      <BusinessPolicy />
      <ContactBanner />
      <ReviewsReceived />
      <BlogsPost />
      <FrequentlyAskedQuestions />
      <ContactBanner />
      <CompanyProfile />
      {/* ✅ ADDED: The client wrapper handles the no-ssr loading */}
      <InquiryClient />
    </>
  );
};

export default Index;