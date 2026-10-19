"use client";
import React from "react";
import RefundHero from "./RefundHero";
import RefundContent from "./RefundContent";

interface RefundViewProps {
  content?: string;
}

export default function RefundView({ content }: RefundViewProps) {
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      <RefundHero />
      <RefundContent content={content} />
    </div>
  );
}
