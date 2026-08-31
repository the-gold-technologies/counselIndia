"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CounselorItem } from "./data/counsellorsData";

interface CardProps {
  counselor: CounselorItem;
  onBookSession: (counselor: CounselorItem) => void;
}

export default function CounsellorCard({ counselor, onBookSession }: CardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Generate slug matching PHP: Str::slug(name-designation-id)
  const slug = `${counselor.name}-${counselor.designation || "counselling-psychologist"}-${counselor.id}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return (
    <div className="col-lg-4 col-md-6 mb-4" style={{ display: "flex" }}>
      <div
        className="ci-counselor-card"
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          padding: 0,
          margin: 0,
          border: "none",
        }}
      >
        {/* Top Header Pattern (pc-bg.png) */}
        <div
          style={{
            height: "135px",
            width: "100%",
            backgroundImage: "url('/assets/images/pc-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            flexShrink: 0,
          }}
        >
          {/* AVAILABLE Badge (Top Left) */}
          <div
            style={{
              position: "absolute",
              top: "14px",
              left: "14px",
              zIndex: 10,
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#5bb876",
                color: "#ffffff",
                borderRadius: "4px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.6px",
                padding: "5px 10px",
                textTransform: "uppercase",
                lineHeight: "1.2",
              }}
            >
              AVAILABLE
            </span>
          </div>

          {/* Bookmark Button (Top Right) */}
          <div
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              zIndex: 10,
            }}
          >
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#202c39",
                borderRadius: "6px",
                color: isBookmarked ? "#5bb876" : "#ffffff",
                cursor: "pointer",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                margin: 0,
                boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
              }}
              title="Bookmark"
            >
              <i
                className={isBookmarked ? "fas fa-bookmark" : "far fa-bookmark"}
                style={{ fontSize: "14px" }}
              ></i>
            </button>
          </div>
        </div>

        {/* Circular Avatar (Centered & Overlapping Header) */}
        <div
          style={{
            marginTop: "-65px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 15,
            flexShrink: 0,
          }}
        >
          <img
            src={counselor.image}
            alt={counselor.name}
            style={{
              width: "135px",
              height: "135px",
              borderRadius: "50%",
              border: "4px solid #ffffff",
              backgroundColor: "#ffffff",
              boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
              objectFit: "cover",
              display: "block",
              padding: 0,
              margin: 0,
            }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/assets/images/avatar-placeholder.jpg";
            }}
          />
        </div>

        {/* Card Body (Left-Aligned Content) */}
        <div
          style={{
            padding: "16px 24px 24px 24px",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            textAlign: "left",
          }}
        >
          {/* Name */}
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#1e293b",
              fontFamily: "'Montserrat', 'Inter', -apple-system, sans-serif",
              margin: "0 0 6px 0",
              lineHeight: 1.2,
            }}
          >
            {counselor.name}
          </h3>

          {/* Star Rating (Left-Aligned) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "#f59e0b",
              fontSize: "14px",
              margin: "0 0 16px 0",
            }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={star <= (counselor.rating || 4) ? "fas fa-star" : "far fa-star"}
              ></i>
            ))}
          </div>

          {/* Available Info List (Left-Aligned) */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 24px 0",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "15px",
                color: "#334155",
                margin: 0,
              }}
            >
              <i
                className="fas fa-graduation-cap"
                style={{ width: "20px", fontSize: "16px", color: "#1e293b", textAlign: "center" }}
              ></i>
              <span>{counselor.experience}</span>
            </li>

            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "15px",
                color: "#334155",
                margin: 0,
              }}
            >
              <i
                className="fas fa-globe"
                style={{ width: "20px", fontSize: "16px", color: "#1e293b", textAlign: "center" }}
              ></i>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {counselor.language}
              </span>
            </li>

            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "15px",
                color: "#0f172a",
                fontWeight: 700,
                margin: 0,
              }}
            >
              <i
                className="fas fa-rupee-sign"
                style={{ width: "20px", fontSize: "16px", color: "#1e293b", textAlign: "center", fontWeight: "bold" }}
              ></i>
              <span style={{ fontSize: "16px" }}>{counselor.fees}</span>
            </li>

            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "15px",
                color: "#334155",
                margin: 0,
              }}
            >
              <i
                className="fas fa-map-marker-alt"
                style={{ width: "20px", fontSize: "16px", color: "#1e293b", textAlign: "center" }}
              ></i>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {counselor.location}
              </span>
            </li>
          </ul>

          {/* Bottom Action Buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "auto",
              width: "100%",
            }}
          >
            <Link
              href={`/counsellors-details/${slug}`}
              style={{
                flex: 1,
                height: "44px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f1f5f9",
                color: "#1e293b",
                fontSize: "14.5px",
                fontWeight: 500,
                borderRadius: "8px",
                textDecoration: "none",
                border: "none",
                padding: "0 10px",
                margin: 0,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background-color 0.2s ease",
              }}
            >
              View Profile
            </Link>

            <button
              onClick={() => onBookSession(counselor)}
              style={{
                flex: 1,
                height: "44px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#00a651",
                color: "#ffffff",
                fontSize: "14.5px",
                fontWeight: 500,
                borderRadius: "8px",
                border: "none",
                padding: "0 10px",
                margin: 0,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background-color 0.2s ease",
              }}
            >
              Book a session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
