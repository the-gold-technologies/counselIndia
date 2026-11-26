import { Metadata } from "next";
import AcademicView from "@/components/academic-policy/AcademicView";
import { getSiteSettings } from "@/services/settingsService";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Academic Policy | Counsel India",
  description:
    "Review Counsel India's official Academic Policy covering class hygiene, disciplinary measures, mentoring support, awards, and placement procedures.",
  openGraph: {
    title: "Academic Policy | Counsel India",
    description:
      "Review Counsel India's official Academic Policy covering class hygiene, disciplinary measures, mentoring support, awards, and placement procedures.",
    url: "https://counselindia.com/academic-policy",
    type: "website",
  },
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/academic-policy", fallbackMetadata);
}

export default async function AcademicPolicyPage() {
  const settings = await getSiteSettings();
  return <AcademicView content={settings.academicPolicy} />;
}
