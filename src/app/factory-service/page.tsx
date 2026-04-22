import React from "react";
import { Index as FactoryServicePage } from "@/components/pages/factory-service/index";
import { FactoryServiceSchema, BreadcrumbSchema, generateBreadcrumbs } from '@/components/seo/schemas';
import type { Metadata } from "next";
import { baseUrl } from "@/utils/baseUrl";

// メタデータを追加
export const metadata: Metadata = {
  title: "工場整理・閉鎖支援サービス",
  description: "工場の閉鎖・移転・廃業に伴う機械撤去から清掃まで、一括でお引き受けいたします。",
  alternates: {
    canonical: `${baseUrl}/factory-service`,
  },
};

const FactoryService: React.FC = () => {
  return (
    <>
      {/* ✅ Structured Data */}
      <FactoryServiceSchema />
      <BreadcrumbSchema items={generateBreadcrumbs.factoryService()} />
      <FactoryServicePage />
    </>
  );
};

export default FactoryService;
