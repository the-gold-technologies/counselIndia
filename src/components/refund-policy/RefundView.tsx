"use client";
import React from "react";
import RefundHero from "./RefundHero";
import RefundContent from "./RefundContent";

export default function RefundView() {
  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff" }}>
      <RefundHero />
      <RefundContent />
    </div>
  );
}
