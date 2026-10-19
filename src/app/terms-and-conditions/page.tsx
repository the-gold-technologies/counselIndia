import { Metadata } from "next";
import TermsView from "@/components/terms-condition/TermsView";
import { getSiteSettings } from "@/services/settingsService";

export const metadata: Metadata = {
  title: "Terms & Conditions | Counsel India",
  description:
    "Review the Terms and Conditions governing your access and use of the Counsel India website, services, programs, and certifications.",
  openGraph: {
    title: "Terms & Conditions | Counsel India",
    description:
      "Review the Terms and Conditions governing your access and use of the Counsel India website, services, programs, and certifications.",
    url: "https://counselindia.com/terms-and-conditions",
    type: "website",
  },
};

export default async function TermsAndConditionsPage() {
  const settings = await getSiteSettings();
  return <TermsView content={settings.termsCondition} />;
}
