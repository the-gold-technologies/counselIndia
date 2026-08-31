"use client";
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import FeaturesPillars from "@/components/home/FeaturesPillars";
import AboutSection from "@/components/home/AboutSection";
import Accreditations from "@/components/home/Accreditations";
import CtaEligibility from "@/components/home/CtaEligibility";
import StatsCounter from "@/components/home/StatsCounter";
import AssessmentSection from "@/components/home/AssessmentSection";
import StatsBannerAndVideo from "@/components/home/StatsBannerAndVideo";
import CounselIndiaImpact from "@/components/home/CounselIndiaImpact";
import AlumniCounselors from "@/components/home/AlumniCounselors";
import CorporateClients from "@/components/home/CorporateClients";
import SignedMous from "@/components/home/SignedMous";
import GlobalHiringPartners from "@/components/home/GlobalHiringPartners";
import IndustryExperts from "@/components/home/IndustryExperts";
import ShortCoursesSlider from "@/components/home/ShortCoursesSlider";
import TestimonialsReviews from "@/components/home/TestimonialsReviews";
import NewsInFocus from "@/components/home/NewsInFocus";
import EventsSpotlight from "@/components/home/EventsSpotlight";
import LatestNewsAndUpdates from "@/components/home/LatestNewsAndUpdates";
import AppDownloadBanner from "@/components/home/AppDownloadBanner";

export default function Home() {
  return (
    <main>
      {/* 1. Hero & Video Section */}
      <HeroSection />

      {/* 2. Three Value Pillars */}
      <FeaturesPillars />

      {/* 3. About Counsel India */}
      <AboutSection />

      {/* 4. Accreditations and Associations by World’s Top and Best */}
      <Accreditations />

      {/* 5. Eligibility Test CTA Banner */}
      <CtaEligibility />

      {/* 6. Key Statistics Counters (10000+, 200000+) */}
      <StatsCounter />

      {/* 7. Free Mental Health Tests & Interactive Quiz Modals + OTP Verification */}
      <AssessmentSection />

      {/* 8. Stats Banner (LinkedIn/YouTube/Google) & Video Testimonials */}
      <StatsBannerAndVideo />

      {/* 9. The Counsel India Impact */}
      <CounselIndiaImpact />

      {/* 10. Our Esteemed Alumni & Dedicated Counselors */}
      <AlumniCounselors />

      {/* 11. Our Valued Corporate Clients */}
      <CorporateClients />

      {/* 12. Expanding Horizons: Signed MOUs */}
      <SignedMous />

      {/* 13. Our Global Hiring Partner Network */}
      <GlobalHiringPartners />

      {/* 14. Learn from the Leading Industry Experts */}
      <IndustryExperts />

      {/* 15. Exclusive Short Courses from Counsel India */}
      <ShortCoursesSlider />

      {/* 16. Testimonials - Here’s why learners love us.. */}
      <TestimonialsReviews />

      {/* 17. Counsel India inFocus */}
      <NewsInFocus />

      {/* 18. Events Spotlight - Live Webinars & Workshops */}
      <EventsSpotlight />

      {/* 19. Latest News and Updates */}
      <LatestNewsAndUpdates />

      {/* 20. Learning Made Easy - Mobile App Download & Get in Touch Banner */}
      <AppDownloadBanner />
    </main>
  );
}
