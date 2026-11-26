import { Metadata } from "next";
import AskQuestionView from "@/components/ask-question/AskQuestionView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Ask a Question | Counsel India",
  description:
    "Have a question about psychological counselling, mental health, or our courses? Ask our expert counselors at Counsel India.",
  openGraph: {
    title: "Ask a Question | Counsel India",
    description:
      "Have a question about psychological counselling, mental health, or our courses? Ask our expert counselors at Counsel India.",
    url: "https://counselindia.com/ask-question",
    type: "website",
  },
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/ask-question", fallbackMetadata);
}

export default function AskQuestionPage() {
  return <AskQuestionView />;
}
