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
import NewsletterSubscribeModal from "@/components/newsletter/NewsletterSubscribeModal";

export default function NewsletterPage() {
  const [selectedNewsletter, setSelectedNewsletter] = useState<NewsletterItem | null>(null);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);

  const handleOpenDownloadModal = (item?: NewsletterItem) => {
    setSelectedNewsletter(item || FEATURED_NEWSLETTERS[0]);
    setIsDownloadModalOpen(true);
  };

  const handleOpenSubscribeModal = () => {
    setIsSubscribeModalOpen(true);
  };

  return (
    <div className="main-wrapper">
      {/* 1. Hero with Curve, Background, Illustration & Floating Subscription Form */}
      <NewsletterHero />

      {/* 2. Featured Articles Swiper Section */}
      <NewsletterFeaturedArticles
        newsletters={FEATURED_NEWSLETTERS}
        onDownloadClick={handleOpenDownloadModal}
        onSubscribeClick={handleOpenSubscribeModal}
      />

      {/* 3. Benefits Infographic Banner */}
      <NewsletterBenefits />

      {/* 4. Client Testimonials Carousel */}
      <NewsletterTestimonials />

      {/* 5. Bottom Frame-716 CTA with Subscriber Badges */}
      <NewsletterBottomCTA onSubscribeClick={handleOpenSubscribeModal} />

      {/* 6. Newsletter Subscription Modal (Clean 3-field form, strictly no download) */}
      <NewsletterSubscribeModal
        isOpen={isSubscribeModalOpen}
        onClose={() => setIsSubscribeModalOpen(false)}
      />

      {/* 7. Lead Capture Download Modal for specific newsletter editions */}
      <NewsletterDownloadModal
        newsletter={selectedNewsletter}
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </div>
  );
}
