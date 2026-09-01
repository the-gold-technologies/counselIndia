"use client";
import React, { useState } from "react";
import EbookAnimatedBackground from "@/components/ebook/EbookAnimatedBackground";
import EbookBanner from "@/components/ebook/EbookBanner";
import EbookCard, { EbookItem } from "@/components/ebook/EbookCard";
import EbookDownloadModal from "@/components/ebook/EbookDownloadModal";
import { EBOOKS_DATA } from "@/components/ebook/data/ebooksData";

export default function EbookPage() {
  const [selectedEbook, setSelectedEbook] = useState<EbookItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDownload = (ebook: EbookItem) => {
    setSelectedEbook(ebook);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* 1. Guaranteed Visible Floating Animated Background Particles */}
      <EbookAnimatedBackground />

      {/* 2. Main Page Content (Transparent wrapper with z-index: 1 so background is visible) */}
      <div
        className="main-wrapper position-relative"
        style={{
          backgroundColor: "transparent",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Centered Green Serif 'Ebooks' Heading */}
        <EbookBanner />

        {/* E-Book Library Grid */}
        <div className="section-padding-01" style={{ padding: "0 0 40px" }}>
          <div className="container">
            <div className="row g-4">
              {EBOOKS_DATA.map((ebook) => (
                <div key={ebook.id} className="col-xl-4 col-md-6">
                  <EbookCard ebook={ebook} onDownload={handleOpenDownload} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ebook Download Lead Modal Component (Outside main-wrapper for root z-index overlay) */}
      <EbookDownloadModal
        ebook={selectedEbook}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
