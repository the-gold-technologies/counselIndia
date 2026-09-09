import { Metadata } from "next";
import AskQuestionView from "@/components/ask-question/AskQuestionView";

export const metadata: Metadata = {
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

export default function AskQuestionPage() {
  return <AskQuestionView />;
}
