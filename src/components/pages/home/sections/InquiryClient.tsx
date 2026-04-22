// src/components/pages/home/sections/InquiryClient.tsx
"use client";

import dynamic from "next/dynamic";

// Simple loader to prevent layout shift while loading
const SectionLoader = ({ height = "600px" }: { height?: string }) => (
  <div className="w-full bg-gray-50 animate-pulse" style={{ height }} />
);

// Dynamically import the heavy Inquiry form with SSR enabled for better display
const Inquiry = dynamic(() => import("@/components/common/sections/Inquiry"), {
  ssr: true,
  loading: () => <SectionLoader height="800px" />,
});

export default function InquiryClient() {
  return <Inquiry />;
}