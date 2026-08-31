import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import MembershipHero from "@/components/membership/MembershipHero";
import MembershipIntro from "@/components/membership/MembershipIntro";
import MembershipWhyJoin from "@/components/membership/MembershipWhyJoin";

// Dynamically import below-the-fold components for instant initial page render
const MembershipStories = dynamic(() => import("@/components/membership/MembershipStories"), {
  ssr: true,
});
const MembershipPrivileges = dynamic(() => import("@/components/membership/MembershipPrivileges"), {
  ssr: true,
});
const MembershipVideoCheers = dynamic(() => import("@/components/membership/MembershipVideoCheers"), {
  ssr: true,
});
const MembershipPricing = dynamic(() => import("@/components/membership/MembershipPricing"), {
  ssr: true,
});
const MembershipCertificate = dynamic(() => import("@/components/membership/MembershipCertificate"), {
  ssr: true,
});
const MembershipGuide = dynamic(() => import("@/components/membership/MembershipGuide"), {
  ssr: true,
});
const MembershipEmpower = dynamic(() => import("@/components/membership/MembershipEmpower"), {
  ssr: true,
});
const MembershipHealing = dynamic(() => import("@/components/membership/MembershipHealing"), {
  ssr: true,
});
const MembershipInsideWalkthrough = dynamic(
  () => import("@/components/membership/MembershipInsideWalkthrough"),
  {
    ssr: true,
  }
);
const MembershipManifesto = dynamic(() => import("@/components/membership/MembershipManifesto"), {
  ssr: true,
});
const MembershipFaq = dynamic(() => import("@/components/membership/MembershipFaq"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Counsel India Membership - Online Psychology & Emotional Wellbeing",
  description:
    "Join Counsel India's exclusive membership for personalized wellbeing routines crafted by expert psychologists starting at Rs 199/month.",
};

export default function MembershipPage() {
  return (
    <main className="membership-page">
      {/* 1. Hero Section (Loaded instantly) */}
      <MembershipHero />

      {/* 2. Hey Fellow Human & 14-Step Checklist with Collage */}
      <MembershipIntro />

      {/* 3. Why Should I Join */}
      <MembershipWhyJoin />

      {/* 4. Personal Stories Straight From the Heart */}
      <MembershipStories />

      {/* 5. Glimpse Of Our Membership Privileges */}
      <MembershipPrivileges />

      {/* 6. Cheers From Our Member Video (Optimized with preload='none') */}
      <MembershipVideoCheers />

      {/* 7. Membership Plans Pricing (#member) */}
      <MembershipPricing />

      {/* 8. Membership Certificate */}
      <MembershipCertificate />

      {/* 9. Meet Your Wellness Guide */}
      <MembershipGuide />

      {/* 10. We empower you through... */}
      <MembershipEmpower />

      {/* 11. We Are Here For Healing!! */}
      <MembershipHealing />

      {/* 12. Inside The Membership Video Walkthrough (Optimized with preload='none') */}
      <MembershipInsideWalkthrough />

      {/* 13. At Counsel India, People get Transformed */}
      <MembershipManifesto />

      {/* 14. Frequently Asked Questions */}
      <MembershipFaq />
    </main>
  );
}
