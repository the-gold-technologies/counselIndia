"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getPersonalityEntry } from "@/services/personalityService";
import { getActiveCourses, CourseItem } from "@/services/courseService";

interface ResultConfig {
  levelTitle: string;
  color: string;
  description: string;
  strengths: string[];
  tips: { title: string; desc: string }[];
}

const FALLBACK_PROGRAMS: CourseItem[] = [
  {
    id: 1,
    name: "Counselling Master Course- Advanced",
    slug: "counselling-master-course-advanced",
    cover_image:
      "https://prod-s3.counselindia.com/courses/cover_image/Counselling Master Course- Advance 5_1713526936.jpg",
    rating: 5,
    list_duration: "12 months",
    enrolment: "45 Seats Left",
    subdescription:
      "The Counselling Master Course – Advanced is a comprehensive 12-month certification program designed for aspiring counsellors, psychology graduates, and individuals passionate about mental health...",
    badgeText: "Best Seller",
    badgeBg: "#00a651",
    category: "Master",
    status: "Active",
  },
  {
    id: 2,
    name: "Counselling Master Course - Intermediate",
    slug: "counselling-master-course-intermediate",
    cover_image:
      "https://prod-s3.counselindia.com/courses/cover_image/Counseling Master Course - Intermediate_1713527056.jpg",
    rating: 5,
    list_duration: "6 months",
    enrolment: "22 Seats Left",
    subdescription:
      "The Counselling Master Course is a comprehensive program on various kinds of counselling techniques that a professional employs in order to cater to the needs of counselling...",
    badgeText: "Popular",
    badgeBg: "#00a651",
    category: "Master",
    status: "Active",
  },
  {
    id: 3,
    name: "Counselling Master Course- Foundation",
    slug: "counselling-master-course-foundation",
    cover_image:
      "https://prod-s3.counselindia.com/courses/cover_image/Counselling Master Course- Foundation_1713527162.jpg",
    rating: 5,
    list_duration: "3 months",
    enrolment: "28 Seats Left",
    subdescription:
      "The Counselling Master Course is a foundation course on various psychological problems that a professional counsellor must have to cater to the needs of the client...",
    badgeText: "Foundation",
    badgeBg: "#00a651",
    category: "Foundation",
    status: "Active",
  },
  {
    id: 4,
    name: "Therapy Master Course",
    slug: "therapy-master-course",
    cover_image:
      "https://prod-s3.counselindia.com/courses/cover_image/Therapy Master Course_1714374157.jpg",
    rating: 5,
    list_duration: "6 months",
    enrolment: "25 Seats Left",
    subdescription:
      "Welcome to our comprehensive Therapy Master Course! In this transformative program, we will embark on a journey through the vast landscape of therapeutic modalities...",
    badgeText: "Featured",
    badgeBg: "#00a651",
    category: "Therapy",
    status: "Active",
  },
];

function getResultData(score: number, testNumber: number): ResultConfig {
  if (score >= 32) {
    return {
      levelTitle:
        testNumber === 2
          ? "High quality of life"
          : testNumber === 3
            ? "Optimal general health"
            : "High emotional well-being",
      color: "#1e293b",
      description:
        "You possess a high quality of life, characterized by a holistic sense of well-being across various domains. Your overall health satisfaction reflects a commitment to physical and mental wellness, while feelings of safety and security in your daily life enhance your emotional stability. Financial comfort allows you to focus on fulfilling relationships, meaningful work or studies, and engaging leisure activities, contributing to your sense of purpose. Additionally, your positive living conditions and the respect you receive in social circles foster an environment where happiness and contentment can flourish.",
      strengths: [
        "Strong Support System",
        "Sense of Purpose",
        "Positive Self-Image",
        "Engagement in Leisure Activities",
      ],
      tips: [
        {
          title: "Expand Social Circles",
          desc: "Consider joining new groups or activities to meet diverse people and enrich your relationships.",
        },
        {
          title: "Set New Goals",
          desc: "Continuously challenge yourself with new personal or professional goals to enhance your sense of purpose.",
        },
        {
          title: "Mindfulness Practices",
          desc: "Incorporate mindfulness or meditation into your routine to improve emotional resilience and overall happiness.",
        },
      ],
    };
  }

  if (score >= 22) {
    return {
      levelTitle:
        testNumber === 2
          ? "Moderate quality of life"
          : testNumber === 3
            ? "Balanced general vitality"
            : "Moderate emotional well-being",
      color: "#1e293b",
      description:
        "Your responses indicate a balanced mental health profile with occasional periods of stress, cognitive fatigue, or emotional fluctuation. You demonstrate constructive coping abilities and sound self-awareness. Incorporating structured relaxation, sleep hygiene, and professional guidance will help optimize your daily vitality.",
      strengths: [
        "Constructive Self-Awareness & Insight",
        "Adaptive Coping Ability During Challenges",
        "Healthy Social Curiosity & Openness",
        "Genuine Commitment to Personal Growth",
      ],
      tips: [
        {
          title: "Structured Routine",
          desc: "Establish healthy daily routines to balance work, rest, and personal rejuvenation.",
        },
        {
          title: "Stress Regulation",
          desc: "Practice breathing exercises and journaling to process demanding moments effectively.",
        },
        {
          title: "Skill Enrichment",
          desc: "Explore professional psychology courses to build long-term emotional intelligence.",
        },
      ],
    };
  }

  return {
    levelTitle: "Needs attention & support",
    color: "#1e293b",
    description:
      "Your answers suggest you may currently be navigating noticeable strain, emotional exhaustion, or overwhelming daily stress. Recognizing these feelings is an essential, courageous first step. You do not have to walk this journey alone—Counsel India offers compassionate, evidence-based guidance and professional support.",
    strengths: [
      "Courageous and Honest Self-Reflection",
      "Willingness to Acknowledge Personal Boundaries",
      "Openness to Guidance and Positive Transformation",
    ],
    tips: [
      {
        title: "Confidential Guidance",
        desc: "Reach out to trusted mentors or certified counselors for supportive, non-judgmental guidance.",
      },
      {
        title: "Gentle Pacing",
        desc: "Break complex tasks into manageable daily steps to relieve cognitive fatigue.",
      },
      {
        title: "Daily Rest",
        desc: "Prioritize consistent sleep hygiene, nourishment, and daily calming rituals.",
      },
    ],
  };
}

interface MentalTestSuccessViewProps {
  defaultTestNumber?: number;
}

export default function MentalTestSuccessView({
  defaultTestNumber = 1,
}: MentalTestSuccessViewProps) {
  const searchParams = useSearchParams();
  const testParam = searchParams.get("testNumber") || searchParams.get("test");
  const scoreParam = searchParams.get("score");
  const nameParam = searchParams.get("name");
  const idParam = searchParams.get("id");

  const [testNumber, setTestNumber] = useState<number>(defaultTestNumber);
  const [score, setScore] = useState<number>(36);
  const [candidateName, setCandidateName] = useState<string>("");
  const [courses, setCourses] = useState<CourseItem[]>(FALLBACK_PROGRAMS);

  useEffect(() => {
    async function loadData() {
      const parsedTest = parseInt(testParam || String(defaultTestNumber), 10);
      setTestNumber(isNaN(parsedTest) ? 1 : parsedTest);

      if (scoreParam) {
        const parsedScore = parseInt(scoreParam, 10);
        if (!isNaN(parsedScore)) {
          setScore(parsedScore);
        }
      }

      if (nameParam) {
        setCandidateName(decodeURIComponent(nameParam));
      }

      if (idParam && (!scoreParam || !nameParam)) {
        try {
          const entry = await getPersonalityEntry(idParam);
          if (entry) {
            if (!nameParam && entry.name && entry.name !== "-") {
              setCandidateName(entry.name);
            }
            if (!scoreParam && entry.result && !isNaN(Number(entry.result))) {
              setScore(Number(entry.result));
            }
          }
        } catch (err) {
          console.error("[MentalTestSuccess] Failed to load lead entry:", err);
        }
      }
    }

    loadData();
  }, [testParam, scoreParam, nameParam, idParam, defaultTestNumber]);

  // Fetch dynamic programs from API and match the exact 4 courses with valid slugs
  useEffect(() => {
    async function loadPrograms() {
      try {
        const active = await getActiveCourses();
        if (active && active.length > 0) {
          const targetSlugs = [
            "counselling-master-course-advanced",
            "counselling-master-course-intermediate",
            "counselling-master-course-foundation",
            "therapy-master-course",
          ];
          const matched = targetSlugs
            .map((slug) => active.find((c) => c.slug === slug))
            .filter((c): c is CourseItem => Boolean(c));

          if (matched.length === 4) {
            setCourses(matched);
          } else {
            // Include matched courses first, then fill remaining slots with latest active courses
            const remaining = active.filter((c) => !matched.some((m) => m.slug === c.slug));
            const combined = [...matched, ...remaining].slice(0, 4);
            setCourses(combined);
          }
        }
      } catch (err) {
        console.warn("Using fallback recommended programs:", err);
      }
    }
    loadPrograms();
  }, []);

  const result = getResultData(score, testNumber);

  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* =========================================================================
          SECTION 1: HERO ASSESSMENT RESULT (#D3E7D6 background, No Buttons)
          ========================================================================= */}
      <section
        style={{
          backgroundColor: "#D3E7D6",
          paddingTop: "60px",
          paddingBottom: "50px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          {/* Main Assessment Title with Serif Typography and Hand-Drawn Squiggle Underline */}
          <div className="text-center mb-4">
            <h1
              style={{
                fontFamily: "Georgia, 'Playfair Display', serif",
                fontSize: "38px",
                fontWeight: 700,
                color: "#1e293b",
                letterSpacing: "-0.5px",
                marginBottom: "6px",
              }}
            >
              {result.levelTitle}
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <svg width="130" height="12" viewBox="0 0 130 12" fill="none">
                <path
                  d="M2 8C28 2 56 11 84 5C102 1 116 9 128 6"
                  stroke="#15803d"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="row align-items-center g-4 mt-2">
            {/* Left Column: Full Assessment Narrative, Key Strengths & Tips */}
            <div className="col-lg-7 col-md-7">
              <div style={{ paddingRight: "15px" }}>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.8",
                    color: "#2d3748",
                    marginBottom: "24px",
                    textAlign: "justify",
                  }}
                >
                  {result.description}
                </p>

                {/* Key Strengths */}
                <div style={{ marginBottom: "24px" }}>
                  <h4
                    style={{
                      color: "#006400",
                      fontWeight: 700,
                      fontSize: "18px",
                      marginBottom: "10px",
                    }}
                  >
                    Key Strengths:
                  </h4>
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "22px",
                      margin: 0,
                    }}
                  >
                    {result.strengths.map((str, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: "14.5px",
                          color: "#2d3748",
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
                <div>
                  <h4
                    style={{
                      color: "#006400",
                      fontWeight: 700,
                      fontSize: "18px",
                      marginBottom: "10px",
                    }}
                  >
                    Tips for Further Development:
                  </h4>
                  <ul
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "22px",
                      margin: 0,
                    }}
                  >
                    {result.tips.map((tip, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: "14.5px",
                          color: "#2d3748",
                          marginBottom: "8px",
                          lineHeight: "1.6",
                        }}
                      >
                        <strong style={{ color: "#1e293b" }}>{tip.title}:</strong> {tip.desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Exact Smiling Woman Pointing to the Left */}
            <div className="col-lg-5 col-md-5 d-flex justify-content-center align-items-end">
              <div style={{ width: "100%", maxWidth: "460px", textAlign: "center" }}>
                <img
                  src="https://prod-s3.counselindia.com/mastergalaxyimages/Purple%20People%20World%20Smile%20Day%20Poster%20(Potrait)_1729936783.png"
                  alt="Assessment Insights"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    maxHeight: "480px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: RECOMMENDED PROGRAMS (Latest 4 from API with Valid Working Slugs)
          ========================================================================= */}
      <section
        style={{
          backgroundColor: "#ffffff",
          paddingTop: "60px",
          paddingBottom: "90px",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
        >
          {/* Centered Heading with Squiggle Underline */}
          <div className="text-center mb-5">
            <h2
              style={{
                fontFamily: "Georgia, 'Playfair Display', serif",
                fontSize: "36px",
                fontWeight: 700,
                color: "#1e293b",
                marginBottom: "6px",
              }}
            >
              Recommended Programs
            </h2>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <svg width="120" height="12" viewBox="0 0 120 12" fill="none">
                <path
                  d="M2 8C26 2 52 11 78 5C96 1 110 9 118 6"
                  stroke="#15803d"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* 4 Cards in 2x2 Grid */}
          <div className="row g-4">
            {courses.map((prog) => {
              const cleanDesc = (prog.subdescription || "")
                .replace(/<[^>]*>/g, "")
                .replace(/\s+/g, " ")
                .trim();
              const displayDesc =
                cleanDesc.length > 180 ? cleanDesc.slice(0, 175) + "..." : cleanDesc;

              const courseLink = `/course/${prog.slug}`;

              return (
                <div key={prog.id || prog.slug} className="col-lg-6 col-md-6">
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "10px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 18px rgba(0, 0, 0, 0.06)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    {/* Card Image */}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "240px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={
                          prog.cover_image ||
                          "https://prod-s3.counselindia.com/courses/cover_image/Counselling Master Course- Advance 5_1713526936.jpg"
                        }
                        alt={prog.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* Card Content */}
                    <div
                      style={{
                        padding: "24px 22px 26px",
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        {/* Title */}
                        <h3
                          style={{
                            fontFamily: "Georgia, 'Playfair Display', serif",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#1e293b",
                            marginBottom: "8px",
                          }}
                        >
                          {prog.name}
                        </h3>

                        {/* Stars */}
                        <div style={{ display: "flex", gap: "3px", marginBottom: "10px" }}>
                          {[...Array(prog.rating || 5)].map((_, i) => (
                            <span key={i} style={{ color: "#f59e0b", fontSize: "15px" }}>
                              ★
                            </span>
                          ))}
                        </div>

                        {/* Meta Information (Duration & Seats) */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "18px",
                            fontSize: "13.5px",
                            color: "#00a651",
                            fontWeight: 600,
                            marginBottom: "14px",
                          }}
                        >
                          <span
                            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            {prog.list_duration || "6 months"}
                          </span>
                          <span
                            style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                              <line x1="16" y1="2" x2="16" y2="6"></line>
                              <line x1="8" y1="2" x2="8" y2="6"></line>
                              <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            {prog.enrolment || "25 Seats Left"}
                          </span>
                        </div>

                        {/* Description */}
                        <p
                          style={{
                            fontSize: "13.5px",
                            lineHeight: "1.65",
                            color: "#64748b",
                            marginBottom: "20px",
                          }}
                        >
                          {displayDesc}
                        </p>
                      </div>

                      {/* Know More Button with Correct Navigation Slug */}
                      <div>
                        <Link
                          href={courseLink}
                          style={{
                            backgroundColor: "#00a651",
                            color: "#ffffff",
                            borderRadius: "6px",
                            fontWeight: 700,
                            fontSize: "14px",
                            padding: "9px 24px",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "background-color 0.2s ease",
                          }}
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
