"use client";
import React from "react";

export default function AllCoursesBanner() {
  return (
    <div
      className="page-banner bg-color-04 position-relative overflow-hidden w-100"
      style={{
        backgroundColor: "#F8F8F8",
        position: "relative",
        zIndex: 1,
        paddingTop: "60px",
        paddingBottom: "60px",
      }}
    >
      {/* Background outline geometric circles matching PHP .page-banner__shape */}
      <div
        style={{
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          border: "1px solid rgba(7, 166, 75, 0.18)",
          position: "absolute",
          left: "-110px",
          bottom: "-140px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>

      <div
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          border: "1px solid rgba(7, 166, 75, 0.22)",
          position: "absolute",
          right: "22%",
          top: "-50px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>

      <div
        style={{
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          border: "1px solid rgba(7, 166, 75, 0.18)",
          position: "absolute",
          right: "-70px",
          bottom: "-150px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>

      <div
        style={{
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          border: "1px solid rgba(7, 166, 75, 0.2)",
          position: "absolute",
          right: "30px",
          bottom: "-90px",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></div>

      <div
        className="container custom-container position-relative z-1"
        style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 15px" }}
      >
        {/* Main Title: Live Courses and Programs */}
        <div style={{ marginBottom: "120px" }}>
          <h1
            style={{
              fontSize: "clamp(30px, 3.8vw, 38px)",
              fontWeight: 700,
              fontFamily: "Georgia, 'Playfair Display', serif",
              color: "#07a64b",
              lineHeight: "1.25",
              margin: 0,
            }}
          >
            Live Courses and Programs
          </h1>
        </div>

        {/* Call To Action Box matching PHP .call-to-action__wrapper */}
        <div
          className="call-to-action__wrapper"
          style={{
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Overlapping Green Round Lightning Bolt Icon */}
          <div
            className="call-to-action__icon"
            style={{
              width: "58px",
              height: "58px",
              backgroundColor: "#07a64b",
              color: "#ffffff",
              borderRadius: "50%",
              position: "absolute",
              top: "-22px",
              left: "-22px",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              boxShadow: "0 4px 12px rgba(7, 166, 75, 0.25)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>

          {/* Light Mint Green Box matching PHP .call-to-action__content */}
          <div
            className="call-to-action__content"
            style={{
              backgroundColor: "#e7f6ed",
              padding: "26px 36px 26px 45px",
              borderRadius: "6px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {/* Internal decorative circular shapes */}
            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                border: "1px solid rgba(7, 166, 75, 0.16)",
                position: "absolute",
                left: "-45px",
                bottom: "-50px",
                pointerEvents: "none",
              }}
            ></div>

            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                border: "1px solid rgba(7, 166, 75, 0.16)",
                position: "absolute",
                top: "-60px",
                right: "15px",
                pointerEvents: "none",
              }}
            ></div>

            <div
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                border: "1px solid rgba(7, 166, 75, 0.16)",
                position: "absolute",
                right: "-60px",
                bottom: "-200px",
                pointerEvents: "none",
              }}
            ></div>

            {/* Heading text */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <h3
                style={{
                  fontSize: "clamp(18px, 2.1vw, 22px)",
                  fontWeight: 700,
                  fontFamily: "Georgia, 'Playfair Display', serif",
                  color: "#212529",
                  margin: 0,
                  lineHeight: "1.35",
                }}
              >
                Wondering if Psychology is the Right Fit for You?
              </h3>
            </div>

            {/* Button */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <a
                href="tel:+918031320449"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#07a64b",
                  color: "#ffffff",
                  padding: "10px 22px",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "'Poppins', sans-serif",
                  transition: "background-color 0.2s ease",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#068a3e")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#07a64b")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.21 2.2z" />
                </svg>
                Talk To Career Expert
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
