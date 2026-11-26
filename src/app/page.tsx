import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { pageMetadata } from "@/services/pageSeoService";

// SEO from Admin → Page SEO; these values are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/", {
    title: "Counsel India - Online Psychology Courses & Therapy",
    description:
      "Counsel India is the best place for Online psychology & psychology therapist. Get an internship in psychology from a top psychologist in India and a career as a psychologist in India.",
  });
}

export default function Page() {
  return <HomePage />;
}
