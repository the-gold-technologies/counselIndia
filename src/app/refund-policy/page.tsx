import { Metadata } from "next";
import RefundView from "@/components/refund-policy/RefundView";
import { getSiteSettings } from "@/services/settingsService";

export const metadata: Metadata = {
  title: "Refund Policy | Counsel India",
  description:
    "Review Counsel India's official refund policy, terms of fee refunds, and submission guidelines.",
  openGraph: {
    title: "Refund Policy | Counsel India",
    description:
      "Review Counsel India's official refund policy, terms of fee refunds, and submission guidelines.",
    url: "https://counselindia.com/refund-policy",
    type: "website",
  },
};

export default async function RefundPolicyPage() {
  const settings = await getSiteSettings();
  return <RefundView content={settings.refundPolicy} />;
}
