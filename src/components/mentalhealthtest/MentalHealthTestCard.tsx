"use client";
import React from "react";

export interface TestData {
  id: string;
  title: string;
  image: string;
  description: string;
  questions: {
    id: number;
    text: string;
    options: { label: string; value: string; points: number }[];
  }[];
}

interface CardProps {
  test: TestData;
  onExplore: (test: TestData) => void;
}

export default function MentalHealthTestCard({ test, onExplore }: CardProps) {
  return (
    <div
      className="blog-item-02"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* 1. Cover Image */}
      <div
        style={{
          height: "230px",
          overflow: "hidden",
          backgroundColor: "#e2e8f0",
        }}
      >
        <img
          src={test.image}
          alt={test.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/assets/images/author/author-01.jpg";
          }}
        />
      </div>

      {/* 2. Card Content (Matching screenshot: #b8d7a1 background, Serif Title, White Explore Button) */}
      <div
        className="blog-item-02__content"
        style={{
          backgroundColor: "#b8d7a1",
          padding: "26px 20px 26px",
          textAlign: "center",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "-4px",
        }}
      >
        <h3
          className="blog-item-02__title"
          onClick={() => onExplore(test)}
          style={{
            fontFamily: "Georgia, 'Playfair Display', serif",
            fontSize: "20px",
            fontWeight: 700,
            color: "#1e293b",
            margin: "0",
            lineHeight: 1.25,
            textAlign: "center",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            cursor: "pointer",
            transition: "color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#08A64B";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#1e293b";
          }}
        >
          {test.title}
        </h3>

        <button
          onClick={() => onExplore(test)}
          className="blog-item-02__more"
          style={{
            backgroundColor: "#F5F5F5",
            color: "#242a37",
            border: "none",
            borderRadius: "6px",
            padding: "8px 24px",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#08A64B";
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#242a37";
            e.currentTarget.style.backgroundColor = "#F5F5F5";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.06)";
          }}
        >
          <span>Explore Now</span>
          <span style={{ fontSize: "14px", lineHeight: 1 }}>→</span>
        </button>
      </div>
    </div>
  );
}
