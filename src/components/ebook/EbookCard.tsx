"use client";
import React from "react";

export interface EbookItem {
  id: number | string;
  name: string;
  image: string;
  category?: string;
  downloadUrl?: string;
}

interface CardProps {
  ebook: EbookItem;
  onDownload: (ebook: EbookItem) => void;
}

export default function EbookCard({ ebook, onDownload }: CardProps) {
  return (
    <div
      className="blog-item-02"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* 1. Full-Width Cover Image (No Padding) */}
      <div
        style={{
          width: "100%",
          height: "220px",
          overflow: "hidden",
          backgroundColor: "#f1f5f9",
        }}
      >
        <img
          src={ebook.image}
          alt={ebook.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/images/blog/skills.jpg";
          }}
        />
      </div>

      {/* 2. Content Section */}
      <div
        className="blog-item-02__content"
        style={{
          padding: "15px 30px 30px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          textAlign: "left",
          backgroundColor: "#ffffff",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ width: "100%", marginBottom: "22px" }}>
          <h3
            className="blog-item-02__title"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "16px",
              fontWeight: 600,
              color: "#232937",
              lineHeight: 1.45,
              margin: 0,
              textAlign: "left",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {ebook.name}
          </h3>
        </div>

        <div style={{ width: "100%" }}>
          <button
            onClick={() => onDownload(ebook)}
            className="blog-item-02__more"
            style={{
              backgroundColor: "#F5F5F5",
              color: "#232937",
              border: "none",
              borderRadius: "6px",
              padding: "8px 20px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#08A64B";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F5F5F5";
              e.currentTarget.style.color = "#232937";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.05)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Download Now</span>
            <span style={{ fontSize: "14px", lineHeight: 1 }}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
