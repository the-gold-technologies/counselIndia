"use client";
import React, { useState } from "react";
import NewsletterHero from "@/components/newsletter/NewsletterHero";
import NewsletterFeaturedArticles from "@/components/newsletter/NewsletterFeaturedArticles";
import NewsletterBenefits from "@/components/newsletter/NewsletterBenefits";
import NewsletterTestimonials from "@/components/newsletter/NewsletterTestimonials";
import NewsletterBottomCTA from "@/components/newsletter/NewsletterBottomCTA";
import NewsletterDownloadModal from "@/components/newsletter/NewsletterDownloadModal";

interface NewsletterItem {
  id: number;
  name: string;
  monthTitle?: string;
  image: string;
}

const FEATURED_NEWSLETTERS: NewsletterItem[] = [
  {
    id: 1,
    name: "Understanding Color Psychology & Emotional Perception",
    image: "https://prod-s3.counselindia.com/blog/Color Theory Presentation In Colorful Simple Style (1)_1741849717.jpg",
  },
  {
    id: 2,
    name: "Cognitive Resilience in High-Pressure Workplaces",
    image: "/assets/images/blog/blog-01.jpg",
  },
  {
    id: 3,
    name: "Child Behavioral Development & Modern Parenting",
    image: "/assets/images/blog/blog-04.jpg",
  },
  {
    id: 4,
    name: "The Role of Mindfulness in Stress Reduction",
    image: "/assets/images/blog/blog-05.jpg",
  },
  {
    id: 5,
    name: "Clinical Psychotherapy Breakthroughs in 2025",
    image: "/assets/images/blog/blog-06.jpg",
  },
];

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
