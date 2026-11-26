import React from "react";
import type { Metadata } from "next";
import EventsView from "@/components/events/EventsView";
import { pageMetadata } from "@/services/pageSeoService";

const fallbackMetadata: Metadata = {
  title: "Events & Workshops | Counsel India",
  description:
    "Explore upcoming psychology events, workshops, masterclasses, and bootcamps at Counsel India.",
};

// SEO from Admin → Page SEO; the values above are used when nothing is saved there.
export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/events", fallbackMetadata);
}

export default function EventsPage() {
  return <EventsView />;
}
