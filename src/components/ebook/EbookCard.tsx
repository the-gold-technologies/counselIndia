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
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid #1e293b",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.18)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "430px",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* 1. Cover Image Graphic Area */}
      <div
        style={{
          height: "220px",
          overflow: "hidden",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 12px 0",
        }}
      >
        <img
          src={ebook.image}
          alt={ebook.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
            borderRadius: "6px",
          }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/images/blog/skills.jpg";
          }}
        />
      </div>

      {/* 2. Content with robust text wrapping and clean spacing */}
      <div
        className="blog-item-02__content"
        style={{
          padding: "20px 22px 24px",
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
        <div style={{ width: "100%", marginBottom: "20px" }}>
          <h3
            className="blog-item-02__title"
            style={{
              fontFamily: "Georgia, 'Playfair Display', serif",
              fontSize: "18.5px",
              fontWeight: 700,
              color: "#1e293b",
              lineHeight: 1.4,
              margin: 0,
              textAlign: "left",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              minHeight: "52px",
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
              backgroundColor: "#f3f4f6",
              color: "#1e293b",
              border: "none",
              borderRadius: "6px",
              padding: "10px 22px",
              fontSize: "14.5px",
              fontWeight: 500,
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e5e7eb";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f3f4f6";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Download Now</span>
            <span style={{ fontSize: "15px", lineHeight: 1 }}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
