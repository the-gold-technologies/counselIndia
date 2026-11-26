import { Metadata } from "next";
import SupportView from "@/components/support/SupportView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
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

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/support", fallbackMetadata);
}

export default function SupportPage() {
  return <SupportView />;
}
