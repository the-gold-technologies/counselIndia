import { Metadata } from "next";
import SupportView from "@/components/support/SupportView";

export const metadata: Metadata = {
  title: "Counsel India Support Services | Counsel India",
  description:
    "Counsel India Support Services. Have questions, need course assistance, or customer support? Reach out to Counsel India's dedicated student support team.",
  openGraph: {
    title: "Counsel India Support Services | Counsel India",
    description:
      "Counsel India Support Services. Have questions, need course assistance, or customer support? Reach out to Counsel India's dedicated student support team.",
    url: "https://counselindia.com/support",
    type: "website",
  },
};

export default function SupportPage() {
  return <SupportView />;
}
