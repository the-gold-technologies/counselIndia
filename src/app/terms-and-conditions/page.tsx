import { Metadata } from "next";
import TermsView from "@/components/terms-condition/TermsView";

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

export default function TermsAndConditionsPage() {
  return <TermsView />;
}
