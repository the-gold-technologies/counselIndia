"use client";
import React from "react";
import NewsBanner from "./NewsBanner";
import NewsGrid from "./NewsGrid";

export default function NewsView() {
  return (
    <div className="news-page-wrapper bg-white min-vh-100">
      <NewsBanner />
      <NewsGrid />
    </div>
  );
}
