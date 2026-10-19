import { Metadata } from "next";
import AcademicView from "@/components/academic-policy/AcademicView";
import { getSiteSettings } from "@/services/settingsService";

export const metadata: Metadata = {
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

export default async function AcademicPolicyPage() {
  const settings = await getSiteSettings();
  return <AcademicView content={settings.academicPolicy} />;
}
