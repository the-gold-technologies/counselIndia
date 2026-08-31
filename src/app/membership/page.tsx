import React from "react";
import type { Metadata } from "next";
import MembershipHero from "@/components/membership/MembershipHero";
import MembershipIntro from "@/components/membership/MembershipIntro";
import MembershipWhyJoin from "@/components/membership/MembershipWhyJoin";
import MembershipStories from "@/components/membership/MembershipStories";
import MembershipPrivileges from "@/components/membership/MembershipPrivileges";
import MembershipVideoCheers from "@/components/membership/MembershipVideoCheers";
import MembershipPricing from "@/components/membership/MembershipPricing";
import MembershipCertificate from "@/components/membership/MembershipCertificate";
import MembershipGuide from "@/components/membership/MembershipGuide";
import MembershipEmpower from "@/components/membership/MembershipEmpower";
import MembershipHealing from "@/components/membership/MembershipHealing";
import MembershipInsideWalkthrough from "@/components/membership/MembershipInsideWalkthrough";
import MembershipManifesto from "@/components/membership/MembershipManifesto";
import MembershipFaq from "@/components/membership/MembershipFaq";

export const metadata: Metadata = {
  title: "Counsel India Membership - Online Psychology & Emotional Wellbeing",
  description:
    "Join Counsel India's exclusive membership for personalized wellbeing routines crafted by expert psychologists starting at Rs 199/month.",
};

export default function MembershipPage() {
  return (
    <main className="membership-page">
      {/* 1. Hero Section */}
      <MembershipHero />

      {/* 2. Hey Fellow Human & 14-Step Checklist with Collage */}
      <MembershipIntro />

      {/* 3. Why Should I Join */}
      <MembershipWhyJoin />

      {/* 4. Personal Stories Straight From the Heart */}
      <MembershipStories />

      {/* 5. Glimpse Of Our Membership Privileges */}
      <MembershipPrivileges />

      {/* 6. Cheers From Our Member Video */}
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

      {/* 12. Inside The Membership Video Walkthrough & 5-Step Infographic */}
      <MembershipInsideWalkthrough />

      {/* 13. At Counsel India, People get Transformed */}
      <MembershipManifesto />

      {/* 14. Frequently Asked Questions */}
      <MembershipFaq />
    </main>
  );
}
