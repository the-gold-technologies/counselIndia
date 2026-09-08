import { Metadata } from "next";
import FaqsView from "@/components/faqs/FaqsView";

export const metadata: Metadata = {
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

export default function FaqsPage() {
  return <FaqsView />;
}
