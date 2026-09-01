"use client";
import React from "react";
import { NewsletterItem } from "./data/newslettersData";

interface CardProps {
  newsletter: NewsletterItem;
  onReadEdition: (newsletter: NewsletterItem) => void;
}

export default function NewsletterCard({ newsletter, onReadEdition }: CardProps) {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.06)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 16px 35px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.06)";
      }}
    >
      {/* Cover Image with Category & Month Badge */}
      <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
        <img
          src={newsletter.image}
          alt={newsletter.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/images/blog/blog-01.jpg";
          }}
        />

        {/* Edition Badge */}
        <span
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            backgroundColor: "#07a64b",
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            padding: "4px 10px",
            borderRadius: "4px",
          }}
        >
          {newsletter.month} {newsletter.year}
        </span>

        {/* Category Pill */}
        <span
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            color: "#ffffff",
            fontSize: "11px",
            fontWeight: 600,
            padding: "3px 9px",
            borderRadius: "12px",
            backdropFilter: "blur(4px)",
          }}
        >
          {newsletter.category}
        </span>
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: "24px 22px 20px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "12px",
              color: "#64748b",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            {newsletter.edition} • {newsletter.readTime}
          </div>

          <h3
            style={{
              fontFamily: "Georgia, 'Playfair Display', serif",
              fontSize: "18px",
              fontWeight: 700,
              color: "#1e293b",
              lineHeight: 1.4,
              marginBottom: "12px",
            }}
          >
            {newsletter.title}
          </h3>

          <p
            style={{
              fontSize: "13.5px",
              color: "#475569",
              lineHeight: "1.6",
              marginBottom: "16px",
            }}
          >
            {newsletter.description}
          </p>

          {/* Key Topics List */}
          <ul style={{ paddingLeft: "18px", margin: "0 0 20px", fontSize: "12.5px", color: "#64748b" }}>
            {newsletter.highlights.map((h, i) => (
              <li key={i} style={{ marginBottom: "4px" }}>
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={() => onReadEdition(newsletter)}
            style={{
              backgroundColor: "#f1f5f9",
              color: "#0f172a",
              border: "1px solid #cbd5e1",
              borderRadius: "6px",
              width: "100%",
              height: "42px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#07a64b";
              e.currentTarget.style.borderColor = "#07a64b";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f1f5f9";
              e.currentTarget.style.borderColor = "#cbd5e1";
              e.currentTarget.style.color = "#0f172a";
            }}
          >
            <i className="far fa-file-pdf"></i>
            <span>Read Edition / Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
