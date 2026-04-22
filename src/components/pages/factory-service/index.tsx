'use client'
import { AreaSection } from "./components/AreaSection";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { ProblemsSection } from "./components/ProblemsSection";
import { ProcessSection } from "./components/ProcessSection";
import { ReasonsSection } from "./components/ReasonsSection";
import { ServiceContentSection } from "./components/ServiceContentSection";
import { TipsSection } from "./components/TipsSection";
import ContactBanner from "../home/sections/ContactBanner";
import ContactFixedBanner from "@/components/common/sections/ContactFixedBanner";
import { CTASection } from "./components/CTASection";
import { FAQSection } from "./components/FAQSection";

export const Index = () => {
  return (
    <div className="min-h-screen bg-factory-sky font-sans text-gray-800 leading-relaxed">
      <HeroSection />;
      <ProblemsSection />
      <ReasonsSection />
      <ServiceContentSection />
      <ProcessSection />
      <AreaSection />
      <FAQSection/>
      <TipsSection />
      <ContactSection />
      <ContactBanner applyFactoryTheme />
      <CTASection />
      <ContactFixedBanner />
    </div>
  );
};
