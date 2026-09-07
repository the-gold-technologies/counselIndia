"use client";
import React from "react";

interface ReferEarnData {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

interface Props {
  referEarn?: ReferEarnData;
}

export default function CourseReferEarn({ referEarn }: Props) {
  const title =
    referEarn?.title ||
    "Refer someone and Earn upto INR 12,000 Cashback/Vouchers, on every successful enrollment";
  const subtitle =
    referEarn?.subtitle || "Your friend also gets an instant scholarship!";
  const buttonText = referEarn?.buttonText || "Start Referring";
  const buttonLink = referEarn?.buttonLink || "https://www.counselindia.com/membership";

  return (
    <section
      style={{
        padding: "50px 0 60px",
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="container custom-container"
        style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "36px",
          }}
          className="refer-earn-wrapper"
        >
          {/* Left illustration */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/assets/images/refer.png"
              alt="Refer and Earn"
              style={{
                width: "180px",
                maxWidth: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>

          {/* Middle text content */}
          <div style={{ flex: 1, maxWidth: "620px" }}>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "23px",
                fontWeight: 700,
                color: "#1c2d3a",
                lineHeight: "1.35",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                color: "#555555",
                lineHeight: "1.5",
                fontWeight: 400,
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Right action button */}
          <div style={{ flexShrink: 0 }}>
            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "#07a64b",
                color: "#ffffff",
                padding: "14px 34px",
                borderRadius: "6px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(7, 166, 75, 0.25)",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#068f40")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#07a64b")
              }
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991px) {
          .refer-earn-wrapper {
            flex-direction: column !important;
            text-align: center !important;
            gap: 24px !important;
          }
          .refer-earn-wrapper img {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
