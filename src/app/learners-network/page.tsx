import React from "react";
import type { Metadata } from "next";
import LearnersNetworkView from "@/components/learners-network/LearnersNetworkView";

export const metadata: Metadata = {
  title: "Alumni Network | Counsel India",
  description:
    "Explore the Counsel India Alumni Network. Verify certified counseling psychology learners and practitioners across 15+ countries.",
};

export default function LearnersNetworkPage() {
  return (
    <div
      className="main-body position-relative"
      style={{
        background: "linear-gradient(to bottom, #a8c89e 0%, #a8c89e 250px, #ffffff 100%)",
        minHeight: "100vh",
        paddingTop: "40px",
      }}
    >
      {/* Main Large Title matching PHP */}
      <div className="container custom-container text-center pt-3 pb-3">
        <h1
          className="page-banner__main-title-02 mb-0"
          style={{
            textAlign: "center",
            color: "#000000",
            fontSize: "clamp(46px, 6vw, 80px)",
            fontWeight: 700,
            fontFamily: "Georgia, 'Playfair Display', 'Times New Roman', serif",
            lineHeight: 1.2,
          }}
        >
          Alumni Network
        </h1>
      </div>

      {/* Searchable Learners Directory Grid */}
      <LearnersNetworkView />
    </div>
  );
}
