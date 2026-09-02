"use client";
import React from "react";
import { LearnerItem } from "./data/learnersData";

interface LearnerCardProps {
  learner: LearnerItem;
  onOpenSkills: (learner: LearnerItem) => void;
}

export default function LearnerCard({
  learner,
  onOpenSkills,
}: LearnerCardProps) {
  const isSkillsLong = learner.skills && learner.skills.length > 22;
  const truncatedSkills = isSkillsLong
    ? `${learner.skills.substring(0, 22)}...`
    : learner.skills;

  return (
    <div className="col-lg-4 col-md-6 mb-4 d-flex">
      <div
        className="ci-learner-card w-100"
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          minHeight: "475px",
        }}
      >
        {/* Top Header Pattern (pc-bg.png) */}
        <div
          style={{
            height: "125px",
            width: "100%",
            backgroundImage: "url('/assets/images/pc-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#d5ebd8",
            position: "relative",
            flexShrink: 0,
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          {/* Top Left Badge: COUNSEL INDIA */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              zIndex: 10,
            }}
          >
            <span
              style={{
                display: "inline-block",
                backgroundColor: "#5bb876",
                color: "#ffffff",
                borderRadius: "4px",
                fontSize: "10.5px",
                fontWeight: 700,
                letterSpacing: "0.5px",
                padding: "4px 10px",
                textTransform: "uppercase",
                lineHeight: "1.2",
              }}
            >
              COUNSEL INDIA
            </span>
          </div>

          {/* Top Right Badge: Blue Verified Icon */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              zIndex: 10,
            }}
          >
            <div
              style={{
                width: "26px",
                height: "26px",
                borderRadius: "50%",
                backgroundColor: "#0191ff",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 5px rgba(1, 145, 255, 0.35)",
              }}
            >
              <i className="fas fa-check" style={{ fontSize: "13px" }}></i>
            </div>
          </div>
        </div>

        {/* Center Circular Avatar */}
        <div
          style={{
            marginTop: "-72px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: "145px",
              height: "145px",
              borderRadius: "50%",
              backgroundColor: "#ffffff",
              border: "5px solid #ffffff",
              boxShadow: "0 3px 12px rgba(0, 0, 0, 0.08)",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={
                learner.image ||
                "https://prod-s3.counselindia.com/images/profileimage.jpg"
              }
              alt={learner.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                e.currentTarget.src =
                  "https://prod-s3.counselindia.com/images/profileimage.jpg";
              }}
            />
          </div>
        </div>

        {/* Card Body */}
        <div
          style={{
            padding: "10px 22px 26px 22px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            textAlign: "left",
          }}
        >
          {/* Alumni Name */}
          <h3
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#1e293b",
              textAlign: "center",
              margin: "4px 0 14px 0",
              fontFamily: "var(--font-inter), sans-serif",
              lineHeight: 1.25,
            }}
          >
            {learner.name}
          </h3>

          {/* Details List */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "9px",
              flexGrow: 1,
            }}
          >
            {/* Course Name */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                fontSize: "14px",
                lineHeight: "1.45",
              }}
            >
              <i
                className="fas fa-graduation-cap"
                style={{
                  color: "#1e293b",
                  marginTop: "3px",
                  fontSize: "15px",
                  width: "18px",
                  flexShrink: 0,
                }}
              ></i>
              <div>
                <strong style={{ color: "#1e293b", fontWeight: 700 }}>
                  Course Name:
                </strong>{" "}
                <span style={{ color: "#374151" }}>{learner.programname}</span>
              </div>
            </div>

            {/* Unique ID */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                fontSize: "14px",
                lineHeight: "1.45",
              }}
            >
              <i
                className="fas fa-globe"
                style={{
                  color: "#1e293b",
                  marginTop: "3px",
                  fontSize: "15px",
                  width: "18px",
                  flexShrink: 0,
                }}
              ></i>
              <div>
                <strong style={{ color: "#1e293b", fontWeight: 700 }}>
                  Unique ID:
                </strong>{" "}
                <span style={{ color: "#374151" }}>{learner.rci_number}</span>
              </div>
            </div>

            {/* Profession */}
            {learner.profession && (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  fontSize: "14px",
                  lineHeight: "1.45",
                }}
              >
                <i
                  className="fas fa-briefcase"
                  style={{
                    color: "#1e293b",
                    marginTop: "3px",
                    fontSize: "15px",
                    width: "18px",
                    flexShrink: 0,
                  }}
                ></i>
                <div>
                  <strong style={{ color: "#1e293b", fontWeight: 700 }}>
                    Profession:
                  </strong>{" "}
                  <span style={{ color: "#374151" }}>{learner.profession}</span>
                </div>
              </div>
            )}

            {/* Skills Learned */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "8px",
                  fontSize: "14px",
                  lineHeight: "1.45",
                }}
              >
                <i
                  className="fas fa-tools"
                  style={{
                    color: "#1e293b",
                    marginTop: "3px",
                    fontSize: "15px",
                    width: "18px",
                    flexShrink: 0,
                  }}
                ></i>
                <div>
                  <strong style={{ color: "#1e293b", fontWeight: 700 }}>
                    Skills Learned:
                  </strong>{" "}
                  <span style={{ color: "#374151" }}>{truncatedSkills}</span>
                </div>
              </div>
              {isSkillsLong && (
                <button
                  type="button"
                  onClick={() => onOpenSkills(learner)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#0066ff",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    padding: "4px 0 0 26px",
                    textDecoration: "none",
                  }}
                >
                  Read More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ci-learner-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
  );
}
