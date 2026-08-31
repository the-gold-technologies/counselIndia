"use client";
import React from "react";
import Link from "next/link";
import { BlogItem } from "./data/blogsData";

interface CardProps {
  blog: BlogItem;
}

export default function BlogCard({ blog }: CardProps) {
  return (
    <div
      className="blog-item-02"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
        border: "1px solid #f1f5f9",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "360px",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* 1. Cover Image */}
      <div style={{ height: "185px", overflow: "hidden", backgroundColor: "#f8fafc" }}>
        <Link href={`/blog-detail/${blog.slug}`} style={{ display: "block", height: "100%", width: "100%" }}>
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.4s ease",
            }}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/assets/images/blog/skills.jpg";
            }}
          />
        </Link>
      </div>

      {/* 2. Card Content matching screenshot */}
      <div
        className="blog-item-02__content"
        style={{
          padding: "20px 20px 22px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundColor: "#ffffff",
          textAlign: "left",
        }}
      >
        <div style={{ width: "100%", marginBottom: "16px" }}>
          {/* Calendar Date Row matching screenshot */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              fontSize: "13px",
              color: "#94a3b8",
              marginBottom: "10px",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>{blog.date}</span>
          </div>

          {/* Title with Serif font and 2-line clamp matching screenshot */}
          <h3
            className="blog-item-02__title"
            style={{
              fontFamily: "Georgia, 'Playfair Display', serif",
              fontSize: "17.5px",
              fontWeight: 700,
              lineHeight: 1.35,
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "46px",
            }}
          >
            <Link
              href={`/blog-detail/${blog.slug}`}
              style={{
                color: "#1e293b",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#00a651";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#1e293b";
              }}
            >
              {blog.title}
            </Link>
          </h3>
        </div>

        <div>
          <Link
            href={`/blog-detail/${blog.slug}`}
            className="blog-item-02__more"
            style={{
              backgroundColor: "#f3f4f6",
              color: "#334155",
              border: "none",
              borderRadius: "6px",
              padding: "8px 20px",
              fontSize: "13.5px",
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e5e7eb";
              e.currentTarget.style.color = "#0f172a";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f3f4f6";
              e.currentTarget.style.color = "#334155";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Read More</span>
            <span style={{ fontSize: "14px", lineHeight: 1 }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
