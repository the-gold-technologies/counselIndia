"use client";
import React from "react";
import HarGharHero from "./HarGharHero";
import HarGharImpact from "./HarGharImpact";
import HarGharMissionVision from "./HarGharMissionVision";
import HarGharCauses from "./HarGharCauses";
import HarGharPRRelease from "./HarGharPRRelease";
import HarGharFollowJourney from "./HarGharFollowJourney";

export default function HarGharCounsellorView() {
  return (
    <main className="har-ghar-counsellor-page">
      <HarGharHero />
      <HarGharImpact />
      <HarGharMissionVision />
      <HarGharCauses />
      <HarGharPRRelease />
      <HarGharFollowJourney />
    </main>
  );
}
