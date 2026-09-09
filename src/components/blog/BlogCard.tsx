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
        width: "100%",
        maxWidth: "270px",
        height: "100%",
        minHeight: "360px",
        margin: "0 auto",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* 1. Cover Image (270px width) */}
      <div style={{ width: "100%", height: "185px", overflow: "hidden", backgroundColor: "#f8fafc" }}>
        <Link href={`/blog-detail/${blog.slug}`} style={{ display: "block", height: "100%", width: "100%" }}>
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              maxWidth: "270px",
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

          {/* Title with Playfair Display font and 2-line clamp matching screenshot */}
          <h3
            className="blog-item-02__title"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: 1.4,
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "45px",
            }}
          >
            <Link
              href={`/blog-detail/${blog.slug}`}
              style={{
                color: "#232937",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#08A64B";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#232937";
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
              backgroundColor: "#F5F5F5",
              color: "#232937",
              border: "none",
              borderRadius: "6px",
              padding: "8px 20px",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
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
            <span>Read More</span>
            <span style={{ fontSize: "14px", lineHeight: 1 }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
