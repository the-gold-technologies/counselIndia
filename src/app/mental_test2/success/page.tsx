import type { Metadata } from "next";
import MentalTest2SuccessPage from "@/app/mentaltest2/success/page";
import { pageMetadata } from "@/services/pageSeoService";

// Same page as /mentaltest2/success, at its older address. SEO from Admin → Page SEO.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/mental_test2/success", {
    title: "Quality of Life Test Result | Counsel India",
    description:
      "View your personalized quality of life assessment outcome, score, strengths, and recommendations.",
  });
}

export default MentalTest2SuccessPage;
