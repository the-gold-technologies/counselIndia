import { Metadata } from "next";
import CareerView from "@/components/career/CareerView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Careers | Current Openings at Counsel India",
  description:
    "Explore career opportunities with Counsel India. Join India's leading Psychology Learning EdTech Platform. Find current job openings and apply today.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/careers", fallbackMetadata);
}

export default function CareersPage() {
  return <CareerView />;
}
