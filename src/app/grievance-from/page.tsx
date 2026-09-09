import { Metadata } from "next";
import GrievanceView from "@/components/grievance/GrievanceView";

export const metadata: Metadata = {
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

export default function GrievanceFromPage() {
  return <GrievanceView />;
}
