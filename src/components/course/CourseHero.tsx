"use client";
import React from "react";
import { CourseDetailData } from "./data/courseDetailData";

interface Props {
  course: CourseDetailData;
  onOpenBrochure: () => void;
}

export default function CourseHero({ course, onOpenBrochure }: Props) {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `linear-gradient(rgba(24, 32, 47, 0.88), rgba(24, 32, 47, 0.92)), url('${course.bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundAttachment: "scroll",
        padding: "70px 0 60px",
        color: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="container custom-container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 16px" }}>
        <div style={{ maxWidth: "820px" }}>
          {/* Partner / Accreditation Logo */}
          {course.partnerLogo && (
            <div style={{ marginBottom: "20px" }}>
              <img
                src={course.partnerLogo}
                alt="Partner Accreditation"
                style={{
                  borderRadius: "6px",
                  maxHeight: "44px",
                  width: "auto",
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  padding: "4px 8px",
                }}
              />
            </div>
          )}

          {/* Badges */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            {course.badgeSale && (
              <span
                style={{
                  backgroundColor: "#f59e0b",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 700,
                  padding: "4px 10px",
                  borderRadius: "4px",
                  letterSpacing: "0.5px",
                }}
              >
                {course.badgeSale}
              </span>
            )}
            <span
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: "4px",
                border: "1px solid rgba(255, 255, 255, 0.25)",
              }}
            >
              {course.category}
            </span>
          </div>

          {/* Course Title */}
          <h1
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 800,
              fontFamily: "'Playfair Display', Georgia, serif",
              lineHeight: "1.25",
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            {course.name}
          </h1>

          {/* Short Description */}
          <p
            style={{
              margin: "0 0 20px",
              fontSize: "14.5px",
              lineHeight: "1.7",
              color: "rgba(255, 255, 255, 0.88)",
              maxWidth: "760px",
            }}
          >
            {course.description}
          </p>

          {/* Rating */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff" }}>
              <strong>{course.rating}</strong> / 5
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "3px", color: "#f7c04d" }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#f7c04d">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
            <a
              href={course.enrollUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#07a64b",
                color: "#ffffff",
                padding: "13px 28px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 14px rgba(7, 166, 75, 0.35)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#068f40";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#07a64b";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Enroll Now
            </a>

            <a
              href={`tel:${course.phone}`}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.12)",
                color: "#ffffff",
                padding: "13px 24px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(4px)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#07a64b";
                e.currentTarget.style.borderColor = "#07a64b";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              Talk To Career Expert
            </a>

            <button
              onClick={onOpenBrochure}
              style={{
                backgroundColor: "#ffffff",
                color: "#1e293b",
                padding: "13px 24px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f1f5f9";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Download Brochure
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
