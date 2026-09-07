import { Metadata } from "next";
import CareerView from "@/components/career/CareerView";

export const metadata: Metadata = {
  title: "Careers | Current Openings at Counsel India",
  description:
    "Explore career opportunities with Counsel India. Join India's leading Psychology Learning EdTech Platform. Find current job openings and apply today.",
  openGraph: {
    title: "Careers | Current Openings at Counsel India",
    description:
      "Explore career opportunities with Counsel India. Join India's leading Psychology Learning EdTech Platform.",
    url: "https://counselindia.com/career",
    type: "website",
  },
};

export default function CareerPage() {
  return <CareerView />;
}
