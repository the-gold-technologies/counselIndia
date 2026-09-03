import React from "react";
import type { Metadata } from "next";
import EventsView from "@/components/events/EventsView";

export const metadata: Metadata = {
  title: "Events & Workshops | Counsel India",
  description:
    "Explore upcoming psychology events, workshops, masterclasses, and bootcamps at Counsel India.",
};

export default function EventsPage() {
  return <EventsView />;
}
