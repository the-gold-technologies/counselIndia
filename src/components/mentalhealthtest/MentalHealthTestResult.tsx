"use client";
import React from "react";
import Link from "next/link";

interface ResultProps {
  score: number;
  userName: string;
  onRetake: () => void;
}

export default function MentalHealthTestResult({ score, userName, onRetake }: ResultProps) {
  const getResultDetails = (totalScore: number) => {
    if (totalScore > 34) {
      return {
        level: "High Well-Being",
        color: "#07a64b",
        desc: "You possess a high quality of life and emotional well-being across various domains. Your health satisfaction and sense of purpose reflect positive emotional stability, fulfilling relationships, and strong resilience.",
        strengths: ["Strong Support System", "Sense of Purpose", "Positive Self-Image", "Emotional Vitality"],
        tips: [
          "Set new personal or professional goals to continuously expand your purpose.",
          "Expand your social circles and mentor others seeking emotional growth.",
          "Incorporate daily mindfulness practices to sustain your emotional resilience.",
        ],
      };
    } else if (totalScore >= 25 && totalScore <= 34) {
      return {
        level: "Moderate Well-Being",
        color: "#d97706",
        desc: "Your score reflects a state of healthy balance with occasional fluctuations. While you have strong baseline coping mechanisms, developing targeted mindfulness and stress regulation skills will help you thrive.",
        strengths: ["Self-Awareness", "Adaptive Coping Skills", "Openness to Growth", "Relationship Awareness"],
        tips: [
          "Practice progressive muscle relaxation or breathwork when experiencing stress peaks.",
          "Establish healthy work-life boundaries to protect your energy.",
          "Engage in weekly creative hobbies or physical activities that recharge you.",
        ],
      };
    } else {
      return {
        level: "Needs Attention & Support",
        color: "#dc2626",
        desc: "Your responses indicate you may currently be experiencing elevated stress, emotional exhaustion, or life strain. Acknowledging this is the first empowering step toward meaningful relief.",
        strengths: ["Self-Recognition", "Desire for Positive Change", "Emotional Honesty"],
        tips: [
          "Consider connecting with a certified psychologist for confidential, compassionate guidance.",
          "Break down overwhelming tasks into small, manageable 15-minute steps.",
          "Prioritize restorative sleep, regular meals, and gentle daily walks.",
        ],
      };
    }
  };

  const result = getResultDetails(score);

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
            padding: "45px 35px",
          }}
        >
          {/* Top Score Summary */}
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "#e8f8ee",
                color: "#07a64b",
                padding: "6px 18px",
                borderRadius: "20px",
                fontWeight: 700,
                fontSize: "13.5px",
                marginBottom: "12px",
              }}
            >
              Assessment Score: {score} / 40
            </div>
            <h2
              style={{
                fontFamily: "Georgia, 'Playfair Display', serif",
                fontSize: "34px",
                fontWeight: 800,
                color: result.color,
                marginBottom: "8px",
              }}
            >
              {result.level}
            </h2>
            {userName && (
              <p style={{ fontSize: "14.5px", color: "#64748b" }}>
                Evaluated for <strong>{userName}</strong>
              </p>
            )}
          </div>

          {/* Clinical Overview */}
          <div
            style={{
              backgroundColor: "#f8fafc",
              borderRadius: "10px",
              padding: "24px",
              border: "1px solid #edf2f7",
              marginBottom: "26px",
            }}
          >
            <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#1e293b", marginBottom: "10px" }}>
              Clinical Overview
            </h4>
            <p style={{ fontSize: "14.5px", color: "#475569", lineHeight: "1.75", margin: 0 }}>
              {result.desc}
            </p>
          </div>

          {/* Key Strengths */}
          <div style={{ marginBottom: "26px" }}>
            <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#07a64b", marginBottom: "12px" }}>
              Key Strengths:
            </h4>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              {result.strengths.map((st, i) => (
                <li key={i} style={{ fontSize: "14.5px", color: "#334155", marginBottom: "6px" }}>
                  {st}
                </li>
              ))}
            </ul>
          </div>

          {/* Tips for Development */}
          <div style={{ marginBottom: "34px" }}>
            <h4 style={{ fontSize: "17px", fontWeight: 700, color: "#07a64b", marginBottom: "12px" }}>
              Tips for Further Development:
            </h4>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              {result.tips.map((tip, i) => (
                <li key={i} style={{ fontSize: "14.5px", color: "#334155", marginBottom: "8px", lineHeight: "1.6" }}>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTAs */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/counsellors-network"
              style={{
                backgroundColor: "#07a64b",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(7, 166, 75, 0.25)",
              }}
            >
              Book a Session with Psychologist
            </Link>
            <button
              onClick={onRetake}
              style={{
                backgroundColor: "#f1f5f9",
                color: "#334155",
                border: "1px solid #cbd5e1",
                padding: "12px 24px",
                borderRadius: "8px",
                fontWeight: 600,
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              Take Another Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
