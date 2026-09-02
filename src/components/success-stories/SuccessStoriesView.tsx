"use client";
import React from "react";
import SuccessHero from "./SuccessHero";
import SuccessStatsBar from "./SuccessStatsBar";
import SuccessImageGallery from "./SuccessImageGallery";
import SuccessVideoJourneys from "./SuccessVideoJourneys";
import SuccessTestimonials from "./SuccessTestimonials";
import SuccessIndiaPresence from "./SuccessIndiaPresence";

export default function SuccessStoriesView() {
  return (
    <main className="success-stories-page">
      <SuccessHero />
      <SuccessStatsBar />
      <SuccessImageGallery />
      <SuccessVideoJourneys />
      <SuccessTestimonials />
      <SuccessIndiaPresence />
    </main>
  );
}
