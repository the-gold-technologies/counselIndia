"use client";
import React, { useState, use } from "react";
import Link from "next/link";
import { COUNSELLORS_DATA, CounselorItem } from "@/components/counsellors-network/data/counsellorsData";
import BookSessionModal from "@/components/counsellors-network/BookSessionModal";
import LoginModal from "@/components/auth/LoginModal";
import SuccessStoriesCarousel from "@/components/counsellors-network/SuccessStoriesCarousel";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CounsellorDetailsPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  // Login Modal & Booking Modal State
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Extract ID from slug
  const parts = slug.split("-");
  const parsedId = parseInt(parts[parts.length - 1], 10);

  // Find counselor by ID or matching name
  let counselor: CounselorItem | undefined;
  if (!isNaN(parsedId)) {
    counselor = COUNSELLORS_DATA.find((c) => c.id === parsedId);
  }

  if (!counselor) {
    const normalizedSlug = slug.toLowerCase();
    counselor = COUNSELLORS_DATA.find((c) =>
      normalizedSlug.includes(c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"))
    );
  }

  if (!counselor) {
    counselor = COUNSELLORS_DATA[0];
  }

  return (
    <div className="main-wrapper" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* 1. Header Banner: Learn from the best */}
      <div className="edumall-box-section section-padding-01" style={{ paddingTop: "60px", paddingBottom: "25px" }}>
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-0">
                <h2
                  className="section-title__title-03 fw-bold mb-3"
                  style={{ fontSize: "36px", color: "#1e293b" }}
                >
                  Learn from the{" "}
                  <mark
                    style={{
                      backgroundColor: "transparent",
                      color: "#07a64b",
                      fontWeight: 700,
                    }}
                  >
                    best
                  </mark>
                </h2>
                <p style={{ color: "#64748b", lineHeight: "1.7", fontSize: "15px" }}>
                  Counsel India is aiming to be India&apos;s biggest employer for mental health
                  professionals and has already employed top-notch RCI recognized psychologists for its
                  55+ products and services. Here are the list of some psychologists for its one of the
                  educational products. It has its own network of mental health professionals with close
                  to 2000+ in numbers and increasing everyday. Counsel India has aim to offer stage and
                  career these professionals deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Profile Details Section (Matching Screenshot) */}
      <div
        className="event-section section-padding-01"
        style={{
          paddingTop: "40px",
          paddingBottom: "70px",
        }}
      >
        <div className="container custom-container">
          <div className="row g-5 align-items-start">
            {/* Left Column: Counselor Profile Card */}
            <div className="col-lg-4 col-md-5">
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 6px 25px rgba(0, 0, 0, 0.07)",
                  border: "1px solid #edf2f7",
                  padding: "32px 24px 28px",
                  textAlign: "center",
                }}
              >
                {/* Speaker Image */}
                <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
                  <img
                    src={counselor.image}
                    alt={counselor.name}
                    style={{
                      width: "115px",
                      height: "115px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #f1f5f9",
                      backgroundColor: "#ffffff",
                    }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/assets/images/avatar-placeholder.jpg";
                    }}
                  />
                </div>

                {/* Name */}
                <h3
                  style={{
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "4px",
                    fontFamily: "'Montserrat', 'Inter', sans-serif",
                  }}
                >
                  {counselor.name}
                </h3>

                {/* Designation in Green */}
                <p
                  style={{
                    color: "#00a651",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {counselor.designation || "COUNSELLING PSYCHOLOGIST"}
                </p>

                {/* Star Rating (Centered) */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    color: "#f59e0b",
                    fontSize: "14px",
                    marginBottom: "24px",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={star <= (counselor.rating || 4) ? "fas fa-star" : "far fa-star"}
                    ></i>
                  ))}
                </div>

                {/* Meta Rows (Left Icon + Label, Right Value) */}
                <div
                  style={{
                    borderTop: "1px solid #f1f5f9",
                    paddingTop: "12px",
                    marginBottom: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {/* Experience */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14.5px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#475569" }}>
                      <i className="fas fa-graduation-cap" style={{ width: "18px", color: "#1e293b", fontSize: "15px" }}></i>
                      Experience
                    </span>
                    <span style={{ color: "#1e293b", fontWeight: 500 }}>{counselor.experience}</span>
                  </div>

                  {/* Language */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14.5px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#475569" }}>
                      <i className="fas fa-globe" style={{ width: "18px", color: "#1e293b", fontSize: "15px" }}></i>
                      Language
                    </span>
                    <span style={{ color: "#1e293b", fontWeight: 500, maxWidth: "160px", textAlign: "right" }}>
                      {counselor.language}
                    </span>
                  </div>

                  {/* Fee */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14.5px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#475569" }}>
                      <i className="fas fa-rupee-sign" style={{ width: "18px", color: "#1e293b", fontSize: "15px" }}></i>
                      Fee
                    </span>
                    <span style={{ color: "#00a651", fontWeight: 700, fontSize: "15px" }}>
                      Rs. {counselor.fees}
                    </span>
                  </div>

                  {/* Location */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14.5px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#475569" }}>
                      <i className="fas fa-map-marker-alt" style={{ width: "18px", color: "#1e293b", fontSize: "15px" }}></i>
                      Location
                    </span>
                    <span style={{ color: "#1e293b", fontWeight: 500, maxWidth: "150px", textAlign: "right" }}>
                      {counselor.location}
                    </span>
                  </div>
                </div>

                {/* Book a Session Button (Opens Login Modal matching PHP) */}
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  style={{
                    width: "100%",
                    height: "46px",
                    backgroundColor: "#00a651",
                    color: "#ffffff",
                    borderRadius: "6px",
                    fontSize: "15px",
                    fontWeight: 600,
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0, 166, 81, 0.2)",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  Book a session
                </button>
              </div>
            </div>

            {/* Right Column: Clean Content Typography (Direct on Page Background) */}
            <div className="col-lg-8 col-md-7 ps-lg-4">
              {/* What I Bring */}
              <div style={{ marginBottom: "26px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  What I bring to you.
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.75", fontSize: "14.5px", margin: 0 }}>
                  {counselor.whatBringsYou ||
                    "If I may work with the company i would like to offer all my dedication and loyalty for the benefit and betterment of the company by being a usefull counsellor for the clients ."}
                </p>
              </div>

              {/* About */}
              <div style={{ marginBottom: "26px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  About
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.75", fontSize: "14.5px", margin: 0 }}>
                  {counselor.about ||
                    "I m a dedicated psychologist.I m very passionate about my work and career. I have 1 year of experience in field of counselling and psychology"}
                </p>
              </div>

              {/* Education */}
              <div style={{ marginBottom: "26px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Education
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.75", fontSize: "14.5px", margin: 0 }}>
                  {counselor.education || "Post Graduate"}
                </p>
              </div>

              {/* Experience */}
              <div style={{ marginBottom: "26px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Experience
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.75", fontSize: "14.5px", margin: 0 }}>
                  {counselor.experienceDetails || counselor.experience || "1 Years"}
                </p>
              </div>

              {/* Achievements */}
              <div style={{ marginBottom: "10px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Achievements
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.75", fontSize: "14.5px", margin: 0 }}>
                  {counselor.achievements ||
                    "I have done my masters in psychology. I have also done practical internship in counseling."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Testimonial / Success Stories Section (Smoothly Animated Carousel) */}
      <SuccessStoriesCarousel />

      {/* Login Modal (Opens on Click matching PHP) */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={() => setIsBookingModalOpen(true)}
      />

      {/* Booking Form Modal */}
      <BookSessionModal
        counselor={counselor}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
