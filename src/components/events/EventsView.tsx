"use client";
import React from "react";
import EventsBanner from "./EventsBanner";
import EventsGrid from "./EventsGrid";

export default function EventsView() {
  return (
    <div className="events-page-wrapper bg-white min-vh-100">
      <EventsBanner />
      <EventsGrid />
    </div>
  );
}
