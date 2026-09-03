"use client";
import React from "react";
import CiBusinessHero from "./CiBusinessHero";
import CiBusinessPartners from "./CiBusinessPartners";
import CiBusinessStats from "./CiBusinessStats";
import CiBusinessOfferings from "./CiBusinessOfferings";
import CiBusinessPillars from "./CiBusinessPillars";
import CiBusinessForm from "./CiBusinessForm";
import CiBusinessFAQ from "./CiBusinessFAQ";

export default function CiBusinessView() {
  return (
    <main className="ci-business-page bg-white min-vh-100">
      <CiBusinessHero />
      <CiBusinessPartners />
      <CiBusinessStats />
      <CiBusinessOfferings />
      <CiBusinessPillars />
      <CiBusinessForm />
      <CiBusinessFAQ />
    </main>
  );
}
