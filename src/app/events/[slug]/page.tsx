import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EVENTS_DATA } from "@/components/events/data/eventsData";
import { getEventDetail } from "@/components/events/data/eventDetailData";
import EventDetailView from "@/components/events/detail/EventDetailView";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return EVENTS_DATA.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventDetail(slug);

  if (!event) {
    return {
      title: "Event Not Found | Counsel India",
    };
  }

  return {
    title: `${event.name} | Counsel India Events`,
    description: event.about[0] || "Psychology workshop and bootcamp by Counsel India.",
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const event = getEventDetail(slug);

  if (!event) {
    notFound();
  }

  return <EventDetailView event={event} />;
}
