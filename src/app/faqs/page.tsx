import { Metadata } from "next";
import FaqsView from "@/components/faqs/FaqsView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Frequently Asked Questions | Counsel India",
  description:
    "Find answers to frequently asked questions about Counsel India psychology courses, certifications, refund policies, and career support.",
  openGraph: {
    title: "Frequently Asked Questions | Counsel India",
    description:
      "Find answers to frequently asked questions about Counsel India psychology courses, certifications, refund policies, and career support.",
    url: "https://counselindia.com/faqs",
    type: "website",
  },
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/faqs", fallbackMetadata);
}

export default function FaqsPage() {
  return <FaqsView />;
}
