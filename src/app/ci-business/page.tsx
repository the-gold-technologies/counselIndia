import React from "react";
import { Metadata } from "next";
import CiBusinessView from "@/components/ci-business/CiBusinessView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "CI for Business | Corporate Mental Wellness & Training | Counsel India",
  description:
    "Transform your workplace with Counsel India's corporate wellness programs. Empower employees with Emotional Intelligence, stress management, and productivity training.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/ci-business", fallbackMetadata);
}

export default function CiBusinessPage() {
  return <CiBusinessView />;
}
