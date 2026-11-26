import type { Metadata } from "next";
import MentalTest3SuccessPage from "@/app/mentaltest3/success/page";
import { pageMetadata } from "@/services/pageSeoService";

// Same page as /mentaltest3/success, at its older address. SEO from Admin → Page SEO.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/mental_test3/success", {
    title: "General Health Test Result | Counsel India",
    description:
      "View your personalized general health assessment outcome, score, strengths, and recommendations.",
  });
}

export default MentalTest3SuccessPage;
