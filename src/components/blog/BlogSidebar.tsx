"use client";
import React from "react";
import { BlogCategoryItem } from "./data/blogsData";

interface SidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  categories: BlogCategoryItem[];
  selectedCategory: string | null;
  onCategorySelect: (slug: string | null) => void;
}

export default function BlogSidebar({
  searchQuery,
  onSearchChange,
  categories,
  selectedCategory,
  onCategorySelect,
}: SidebarProps) {
  return (
    <div className="sidebar-widget-wrap-02" style={{ paddingRight: "10px" }}>
      {/* 1. Search Section matching screenshot */}
      <div style={{ marginBottom: "35px" }}>
        <h4
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#212529",
            margin: "0 0 16px",
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: "10px",
          }}
        >
          Search
        </h4>

        {/* Pill-shaped search bar with green icon */}
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              width: "100%",
              height: "44px",
              padding: "0 42px 0 18px",
              borderRadius: "25px",
              border: "1px solid #e5e7eb",
              backgroundColor: "#f9fafb",
              fontSize: "14px",
              color: "#212529",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <button
            type="button"
            style={{
              position: "absolute",
              right: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#00a651"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* 2. Categories Section matching screenshot */}
      <div>
        <h4
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#212529",
            margin: "0 0 16px",
            borderBottom: "1px solid #e5e7eb",
            paddingBottom: "10px",
          }}
        >
          Categories
        </h4>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {categories.map((c) => {
            const isSelected = selectedCategory === c.slug;
            return (
              <li key={c.slug} style={{ marginBottom: "14px" }}>
                <button
                  onClick={() => onCategorySelect(isSelected ? null : c.slug)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    fontSize: "14.5px",
                    fontWeight: isSelected ? 700 : 500,
                    color: isSelected ? "#00a651" : "#334155",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00a651";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.color = "#334155";
                  }}
                >
                  <span>{c.name}</span>
                  <span style={{ fontSize: "14.5px", color: isSelected ? "#00a651" : "#64748b" }}>
                    ({c.count})
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
