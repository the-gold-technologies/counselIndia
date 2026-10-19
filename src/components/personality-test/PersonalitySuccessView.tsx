"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import EligibilityBanner from "@/components/eligibility-test/EligibilityBanner";
import {
  getPersonalityTabResults,
  getPersonalityEntry,
  PersonalityTabResult,
} from "@/services/personalityService";

interface ArchetypeInsights {
  strengths: string[];
  tips: string[];
  recommendations: { title: string; link: string }[];
}

function getInsights(name: string): ArchetypeInsights {
  const lower = name.toLowerCase();

  if (lower.includes("achiever")) {
    return {
      strengths: [
        "Strong goal-oriented focus and natural drive for tangible results",
        "Clear, structured decision-making in dynamic environments",
        "Ability to balance authority with constructive interpersonal leadership",
      ],
      tips: [
        "Incorporate regular reflective pauses to prevent burnout and sustain long-term focus.",
        "Delegate tasks actively to empower team members and foster mutual growth.",
        "Celebrate incremental milestones alongside overarching long-term objectives.",
      ],
      recommendations: [
        {
          title: "Counselling Master Course - Advanced",
          link: "/courses/counselling-master-course-advanced",
        },
        {
          title: "Masters in Industrial & Organizational Psychology",
          link: "/courses/masters-industrial-organizational-psychology",
        },
        {
          title: "Certificate in Cognitive Behavioural Therapy (CBT)",
          link: "/courses/certificate-cbt",
        },
      ],
    };
  }

  if (lower.includes("enthusiast")) {
    return {
      strengths: [
        "Infectious positive energy and natural creative problem-solving",
        "Remarkable adaptability and openness to novel perspectives",
        "Engaging interpersonal communication that inspires and uplifts others",
      ],
      tips: [
        "Channel high creative energy into structured, prioritized project milestones.",
        "Practice mindful follow-through to see innovative initiatives through to completion.",
        "Set aside quiet time for grounding routines and introspective mental clarity.",
      ],
      recommendations: [
        { title: "Certificate in Art Therapy", link: "/courses/certificate-art-therapy" },
        { title: "PG Diploma in Child Psychology", link: "/courses/pg-diploma-child-psychology" },
        {
          title: "Counselling Master Course - Intermediate",
          link: "/courses/counselling-master-course-intermediate",
        },
      ],
    };
  }

  if (lower.includes("logical")) {
    return {
      strengths: [
        "Deep analytical rigor, objective discernment, and critical inquiry",
        "Fair, evidence-based decision making unbiased by fleeting emotion",
        "Exceptional attention to foundational details and operational processes",
      ],
      tips: [
        "Balance objective reasoning with intuitive and empathetic client considerations.",
        "Allow room for cognitive flexibility when dealing with ambiguous human situations.",
        "Practice open vulnerability to deepen interpersonal and professional rapport.",
      ],
      recommendations: [
        {
          title: "PG Diploma in Clinical Psychology",
          link: "/courses/pg-diploma-clinical-psychology",
        },
        {
          title: "Certificate in Rational Emotive Behaviour Therapy (REBT)",
          link: "/courses/certificate-rebt",
        },
        {
          title: "Counselling Master Course - Advanced",
          link: "/courses/counselling-master-course-advanced",
        },
      ],
    };
  }

  if (lower.includes("empath")) {
    return {
      strengths: [
        "Profound emotional sensitivity, intuition, and heartfelt understanding",
        "Natural talent for creating safe, compassionate, and trusting environments",
        "Strong desire to uplift others and contribute to collective mental well-being",
      ],
      tips: [
        "Establish firm psychological boundaries to avoid taking on others' emotional strain.",
        "Prioritize intentional self-care routines to replenish mental and emotional energy.",
        "Remember that saying 'no' when necessary is an act of healthy self-preservation.",
      ],
      recommendations: [
        {
          title: "PG Diploma in Counselling Psychology",
          link: "/courses/pg-diploma-counselling-psychology",
        },
        {
          title: "Counselling Master Course - Foundation",
          link: "/courses/counselling-master-course-foundation",
        },
        { title: "Certificate in Art Therapy", link: "/courses/certificate-art-therapy" },
      ],
    };
  }

  // Default / Introverted / General archetype
  return {
    strengths: [
      "Insightful self-awareness and keen desire for personal & professional evolution",
      "High capacity for independent, introspective, and focused contemplation",
      "Deep appreciation of individual authentic boundaries and values",
    ],
    tips: [
      "Seek support from mentors and supportive communities to expand your professional horizons.",
      "Engage in restorative self-care activities that promote mental vitality and grounding.",
      "Gradually explore small group interactions to build collaborative confidence at your own pace.",
    ],
    recommendations: [
      {
        title: "Counselling Master Course - Foundation",
        link: "/courses/counselling-master-course-foundation",
      },
      {
        title: "PG Diploma in Counselling Psychology",
        link: "/courses/pg-diploma-counselling-psychology",
      },
      { title: "PG Diploma in Child Psychology", link: "/courses/pg-diploma-child-psychology" },
    ],
  };
}

export default function PersonalitySuccessView() {
  const searchParams = useSearchParams();
  const leadId = searchParams.get("leadId") || searchParams.get("id");
  const resultQuery = searchParams.get("result") || searchParams.get("name");

  const [loading, setLoading] = useState(true);
  const [candidateName, setCandidateName] = useState("");
  const [matchedResult, setMatchedResult] = useState<PersonalityTabResult | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const tabResults = await getPersonalityTabResults();

        let targetName = resultQuery || "";

        // If leadId is available, fetch lead entry to get candidate name and recorded result
        if (leadId) {
          const entry = await getPersonalityEntry(leadId);
          if (entry) {
            setCandidateName(entry.name || "");
            if (
              !targetName &&
              entry.result &&
              entry.result !== "In Progress" &&
              entry.result !== "0"
            ) {
              targetName = entry.result;
            }
          }
        }

        // Find matching tab result from database
        let found: PersonalityTabResult | null = null;
        if (targetName && tabResults.length > 0) {
          found =
            tabResults.find((r) => r.name.toLowerCase() === targetName.toLowerCase()) ||
            tabResults.find((r) => r.name.toLowerCase().includes(targetName.toLowerCase())) ||
            tabResults.find((r) => targetName.toLowerCase().includes(r.name.toLowerCase())) ||
            null;
        }

        // Fallback to first tab result or a default
        if (!found && tabResults.length > 0) {
          found = tabResults[0];
        }

        setMatchedResult(found);
      } catch (err) {
        console.error("Failed to load success page data:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [leadId, resultQuery]);

  const archetypeName = matchedResult?.name || resultQuery || "The Achiever";
  const archetypeDescription =
    matchedResult?.description ||
    "You are action- and result-oriented and focus on the tasks ahead, where performance and productivity are key. You are verbally and socially skilled. You enjoy problem-solving and have high achievement needs.";

  const insights = getInsights(archetypeName);

  return (
    <div className="main-wrapper bg-white min-vh-100">
      {/* 1. Page Banner matching Counsel India live */}
      <EligibilityBanner />

      {/* 2. Success Result Section matching https://www.counselindia.com/personality-test/success */}
      <div
        className="countdown-signup-section section-padding-01 py-5"
        style={{ backgroundColor: "#D3E7D6", paddingTop: "50px", paddingBottom: "40px" }}
      >
        <div className="container custom-container">
          {loading ? (
            <div className="text-center py-5">
              <div
                className="spinner-border text-success"
                role="status"
                style={{ width: "3rem", height: "3rem" }}
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 text-muted">Retrieving your assessment profile...</p>
            </div>
          ) : (
            <>
              {candidateName && (
                <div className="text-center mb-2">
                  <span
                    className="badge px-3 py-2 rounded-pill"
                    style={{
                      backgroundColor: "#e8f5e9",
                      color: "#07a64b",
                      fontSize: "14px",
                      fontWeight: 600,
                      border: "1px solid #c8e6c9",
                    }}
                  >
                    Assessment Completed for: {candidateName}
                  </span>
                </div>
              )}

              {/* Title with exact <mark> styling matching live Counsel India */}
              <h2
                className="section-title__title-03 text-center my-3"
                style={{
                  fontFamily: "Georgia, 'Playfair Display', serif",
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  fontWeight: 700,
                  color: "#1e293b",
                }}
              >
                <mark
                  style={{
                    backgroundColor: "transparent",
                    color: "#07a64b",
                    padding: "0 6px",
                  }}
                >
                  {archetypeName}
                </mark>
              </h2>

              <div className="row gy-5 align-items-center justify-content-center mt-3">
                {/* Left Column: Result Profile, Strengths, Tips & Course Recommendations */}
                <div className="col-lg-7 col-md-7">
                  <div className="countdown-widget">
                    <div className="countdown-title">
                      <p
                        style={{
                          textAlign: "justify",
                          fontSize: "16px",
                          lineHeight: "1.8",
                          color: "#334155",
                          marginBottom: "24px",
                        }}
                      >
                        {archetypeDescription}
                      </p>

                      {/* Key Strengths */}
                      <div className="mb-4">
                        <strong
                          style={{
                            fontWeight: 700,
                            fontSize: "18px",
                            color: "darkgreen",
                            display: "block",
                            marginBottom: "8px",
                          }}
                        >
                          Key Strengths:
                        </strong>
                        <ul style={{ paddingLeft: "22px", margin: 0 }}>
                          {insights.strengths.map((str, idx) => (
                            <li
                              key={idx}
                              style={{
                                fontSize: "14.5px",
                                color: "#334155",
                                marginBottom: "6px",
                                lineHeight: "1.6",
                              }}
                            >
                              {str}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips for Further Development */}
                      <div className="mb-4">
                        <strong
                          style={{
                            fontWeight: 700,
                            fontSize: "18px",
                            color: "darkgreen",
                            display: "block",
                            marginBottom: "8px",
                          }}
                        >
                          Tips for Further Development:
                        </strong>
                        <ul style={{ paddingLeft: "22px", margin: 0 }}>
                          {insights.tips.map((tip, idx) => (
                            <li
                              key={idx}
                              style={{
                                fontSize: "14.5px",
                                color: "#334155",
                                marginBottom: "6px",
                                lineHeight: "1.6",
                              }}
                            >
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Our Recommendations */}
                      <div className="mb-4">
                        <strong
                          style={{
                            fontWeight: 700,
                            fontSize: "18px",
                            color: "darkgreen",
                            display: "block",
                            marginBottom: "8px",
                          }}
                        >
                          Our Recommendations:
                        </strong>
                        <ul style={{ paddingLeft: "22px", margin: 0 }}>
                          {insights.recommendations.map((rec, idx) => (
                            <li
                              key={idx}
                              style={{
                                fontSize: "14.5px",
                                marginBottom: "6px",
                                lineHeight: "1.6",
                              }}
                            >
                              <Link
                                href={rec.link}
                                style={{
                                  color: "#07a64b",
                                  fontWeight: 600,
                                  textDecoration: "underline",
                                }}
                              >
                                {rec.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action CTAs */}
                      <div
                        className="d-flex flex-wrap gap-3 justify-content-start align-items-center mt-4 pt-3 border-top"
                        style={{ borderColor: "rgba(0, 0, 0, 0.12)", paddingBottom: "40px" }}
                      >
                        <Link
                          href="/eligibility-test"
                          className="btn d-inline-flex justify-content-center align-items-center text-center"
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#334155",
                            border: "1.5px solid #cbd5e1",
                            borderRadius: "8px",
                            fontWeight: 700,
                            fontSize: "14.5px",
                            padding: "10px 24px",
                            textAlign: "center",
                            minWidth: "140px",
                            lineHeight: "1.2",
                          }}
                        >
                          Retake Test
                        </Link>
                        <Link
                          href="/courses"
                          className="btn d-inline-flex justify-content-center align-items-center text-center"
                          style={{
                            backgroundColor: "#07a64b",
                            color: "#ffffff",
                            borderRadius: "8px",
                            fontWeight: 700,
                            fontSize: "14.5px",
                            padding: "10px 24px",
                            textDecoration: "none",
                            boxShadow: "0 2px 6px rgba(7, 166, 75, 0.3)",
                            textAlign: "center",
                            minWidth: "150px",
                            lineHeight: "1.2",
                          }}
                        >
                          Explore Courses
                        </Link>
                        <Link
                          href="/contact-us"
                          className="btn d-inline-flex justify-content-center align-items-center text-center"
                          style={{
                            backgroundColor: "#1e293b",
                            color: "#ffffff",
                            borderRadius: "8px",
                            fontWeight: 700,
                            fontSize: "14.5px",
                            padding: "10px 24px",
                            textDecoration: "none",
                            textAlign: "center",
                            minWidth: "160px",
                            lineHeight: "1.2",
                          }}
                        >
                          Book Counseling
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Exact resource illustration image */}
                <div className="col-lg-5 col-md-5">
                  <div className="countdown-image text-center">
                    <img
                      src="https://prod-s3.counselindia.com/images/resourse-image.png"
                      alt="resourse image"
                      width={346}
                      height={309}
                      className="img-fluid"
                      style={{ maxHeight: "320px", objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
