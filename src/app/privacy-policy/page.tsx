import { Metadata } from "next";
import PrivacyView from "@/components/privacy-policy/PrivacyView";

export const metadata: Metadata = {
  title: "Privacy Policy | Counsel India",
  description:
    "Review Counsel India's official Privacy Policy explaining data collection, protection, usage, and compliance under DPDPA 2023.",
  openGraph: {
    title: "Privacy Policy | Counsel India",
    description:
      "Review Counsel India's official Privacy Policy explaining data collection, protection, usage, and compliance under DPDPA 2023.",
    url: "https://counselindia.com/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyView />;
}
