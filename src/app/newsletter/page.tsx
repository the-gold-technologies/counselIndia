"use client";
import React, { useState } from "react";
import NewsletterHero from "@/components/newsletter/NewsletterHero";
import NewsletterFeaturedArticles, {
  FEATURED_NEWSLETTERS,
  NewsletterItem,
} from "@/components/newsletter/NewsletterFeaturedArticles";
import NewsletterBenefits from "@/components/newsletter/NewsletterBenefits";
import NewsletterTestimonials from "@/components/newsletter/NewsletterTestimonials";
import NewsletterBottomCTA from "@/components/newsletter/NewsletterBottomCTA";
import NewsletterDownloadModal from "@/components/newsletter/NewsletterDownloadModal";

export default function NewsletterPage() {
  const [selectedNewsletter, setSelectedNewsletter] = useState<NewsletterItem | null>(null);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const handleOpenDownloadModal = (item?: NewsletterItem) => {
    setSelectedNewsletter(item || FEATURED_NEWSLETTERS[0]);
    setIsDownloadModalOpen(true);
  };

  return (
    <div className="main-wrapper">
      {/* 1. Hero with Curve, Background, Illustration & Floating Subscription Form */}
      <NewsletterHero />

      {/* 2. Featured Articles Swiper Section */}
      <NewsletterFeaturedArticles
        newsletters={FEATURED_NEWSLETTERS}
        onDownloadClick={handleOpenDownloadModal}
        onSubscribeClick={() => handleOpenDownloadModal()}
      />

      {/* 3. Benefits Infographic Banner */}
      <NewsletterBenefits />

      {/* 4. Client Testimonials Carousel */}
      <NewsletterTestimonials />

      {/* 5. Bottom Frame-716 CTA with Subscriber Badges */}
      <NewsletterBottomCTA onSubscribeClick={() => handleOpenDownloadModal()} />

      {/* 6. Lead Capture Download Modal (#viewModal) & OTP Verification (#otpModal2) */}
      <NewsletterDownloadModal
        newsletter={selectedNewsletter}
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  );
}
