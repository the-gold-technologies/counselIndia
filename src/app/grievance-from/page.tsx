import { Metadata } from "next";
import GrievanceView from "@/components/grievance/GrievanceView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Grievance Form | Counsel India",
  description:
    "Submit your grievances, queries, or cancellation requests through Counsel India's official grievance redressal portal.",
  openGraph: {
    title: "Grievance Form | Counsel India",
    description:
      "Submit your grievances, queries, or cancellation requests through Counsel India's official grievance redressal portal.",
    url: "https://counselindia.com/grievance-from",
    type: "website",
  },
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/grievance-from", fallbackMetadata);
}

export default function GrievanceFromPage() {
  return <GrievanceView />;
}
