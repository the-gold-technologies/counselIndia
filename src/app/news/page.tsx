import React from "react";
import type { Metadata } from "next";
import NewsView from "@/components/news/NewsView";

export const metadata: Metadata = {
  title: "News & Media | Counsel India",
  description:
    "Explore latest news, press releases, media coverage, and updates about Counsel India and psychological education.",
};

export default function NewsPage() {
  return <NewsView />;
}
