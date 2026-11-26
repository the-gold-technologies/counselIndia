import React from "react";
import type { Metadata } from "next";
import NewsView from "@/components/news/NewsView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "News & Media | Counsel India",
  description:
    "Explore latest news, press releases, media coverage, and updates about Counsel India and psychological education.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/news", fallbackMetadata);
}

export default function NewsPage() {
  return <NewsView />;
}
