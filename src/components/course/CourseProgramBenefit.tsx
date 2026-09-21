"use client";
import React from "react";

interface Props {
  programBenefit?: string[];
}

export default function CourseProgramBenefit({ programBenefit }: Props) {
  if (!programBenefit || programBenefit.length === 0) return null;

  return (
    <section
      className="tutor-course-segment"
      style={{
        padding: "36px 0 20px",
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="container custom-container"
        style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
      >
        <h3
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#1c2d3a",
            lineHeight: "1.3",
            margin: "0 0 20px",
          }}
        >
          How will this program benefit you?
        </h3>

        <div className="tutor-course-segment__content-wrap">
          <ul
            style={{
              paddingLeft: "22px",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              listStyleType: "disc",
            }}
          >
            {programBenefit.map((item, idx) => {
              const colonIndex = item.indexOf(":");
              let title = "";
              let desc = item;
              if (colonIndex !== -1 && colonIndex < 60) {
                title = item.substring(0, colonIndex + 1);
                desc = item.substring(colonIndex + 1).trim();
              }
              return (
                <li
                  key={idx}
                  style={{
                    fontSize: "15px",
                    color: "#555555",
                    lineHeight: "1.75",
                  }}
                >
                  {title ? (
                    <>
                      <strong style={{ color: "#212529" }}>{title} </strong>
                      {desc}
                    </>
                  ) : (
                    <span>{item}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
