import React from "react";
import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutOverview from "@/components/about/AboutOverview";
import AboutFounders from "@/components/about/AboutFounders";
import AboutStory from "@/components/about/AboutStory";
import AboutImpactCounters from "@/components/about/AboutImpactCounters";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import AboutWhyCounselIndia from "@/components/about/AboutWhyCounselIndia";
import AboutVideoSection from "@/components/about/AboutVideoSection";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutTeamSlider from "@/components/about/AboutTeamSlider";
import AboutLifeGallery from "@/components/about/AboutLifeGallery";
import AboutAccreditations from "@/components/about/AboutAccreditations";
import AboutWorkCulture from "@/components/about/AboutWorkCulture";
import AboutCareersCTA from "@/components/about/AboutCareersCTA";

export const metadata: Metadata = {
  title: "About Us | Counsel India - Practical Psychology Learning Platform",
  description:
    "Learn more about Counsel India, our mission of 'Har Ghar Counselor', leadership visionaries, practical psychology courses, accreditations, and thriving work culture.",
};

export default function AboutPage() {
  return (
    <main className="main-wrapper bg-white">
      {/* 1. Hero Banner with Parallax Collage */}
      <AboutHero />

      {/* 2. About Us Narrative & Dual Focus Pillars */}
      <AboutOverview />

      {/* 3. Founder Spotlight (Bobby Thakur) */}
      <AboutFounders />

      {/* 4. Our Story Narrative */}
      <AboutStory />

      {/* 5. 5 Impact Metric Counters */}
      <AboutImpactCounters />

      {/* 6. Vision & Mission Cards */}
      <AboutVisionMission />

      {/* 7. Why Counsel India - 7 Pillars */}
      <AboutWhyCounselIndia />

      {/* 8. Video Showcase Section */}
      <AboutVideoSection />

      {/* 9. Leadership Team */}
      <AboutLeadership />

      {/* 10. Core Team & Legal Team */}
      <AboutTeamSlider />

      {/* 11. Life at Counsel India Gallery */}
      <AboutLifeGallery />

      {/* 12. Regulatory Accreditations */}
      <AboutAccreditations />

      {/* 13. Progressive Work Culture */}
      <AboutWorkCulture />

      {/* 14. Careers Opportunity CTA */}
      <AboutCareersCTA />
    </main>
  );
}
