import type { Metadata } from "next";
import MentalTest1SuccessPage from "@/app/mentaltest1/success/page";
import { pageMetadata } from "@/services/pageSeoService";

// Same page as /mentaltest1/success, at its older address. SEO from Admin → Page SEO.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/mental_test1/success", {
    title: "Emotional Well-Being Test Result | Counsel India",
    description:
      "View your personalized emotional well-being assessment outcome, score, strengths, and recommendations.",
  });
}

export default MentalTest1SuccessPage;
