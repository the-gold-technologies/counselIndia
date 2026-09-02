"use client";
import React, { useEffect } from "react";
import { LearnerItem } from "./data/learnersData";

interface SkillsModalProps {
  learner: LearnerItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function SkillsModal({
  learner,
  isOpen,
  onClose,
}: SkillsModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !learner) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        animation: "modalFadeIn 0.2s ease-out forwards",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "6px",
          boxShadow: "0 15px 50px rgba(0, 0, 0, 0.25)",
          maxWidth: "580px",
          width: "100%",
          padding: "48px 40px 44px",
          position: "relative",
          animation: "modalZoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          boxSizing: "border-box",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "16px",
            right: "18px",
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#64748b",
            lineHeight: 1,
            padding: "4px",
          }}
        >
          ✕
        </button>

        {/* Modal Title */}
        <h3
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "#1e293b",
            textAlign: "center",
            margin: "0 0 28px 0",
            fontFamily: "var(--font-inter), sans-serif",
            lineHeight: 1.2,
          }}
        >
          Skills Learned
        </h3>

        {/* Modal Content */}
        <p
          style={{
            fontSize: "16px",
            color: "#475569",
            lineHeight: 1.8,
            margin: 0,
            fontFamily: "var(--font-inter), sans-serif",
            textAlign: "left",
          }}
        >
          {learner.skills}
        </p>
      </div>

      <style jsx>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes modalZoomIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
