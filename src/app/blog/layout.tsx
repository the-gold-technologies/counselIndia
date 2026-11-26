import type { Metadata } from "next";
import { pageMetadata } from "@/services/pageSeoService";

// The page itself is a client component, so its SEO (Admin → Page SEO) is set here.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/blog", { title: "Blog | Counsel India" });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
