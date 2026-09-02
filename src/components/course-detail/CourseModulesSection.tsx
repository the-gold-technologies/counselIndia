"use client";
import React from "react";

interface Props {
  modules: string[];
}

export default function CourseModulesSection({ modules }: Props) {
  return (
    <div
      className="countdown-signup-section py-5 scene position-relative"
      style={{ backgroundColor: "#E6F0E2", paddingBottom: "70px" }}
    >
      <div className="container custom-container py-3">
        <div className="row justify-content-left">
          <div className="col-lg-10 col-xl-9">
            <div className="countdown-widget">
              {/* Heading with left margin matching PHP */}
              <div style={{ marginLeft: "12%", marginBottom: "20px" }}>
                <h2
                  className="countdown-title__title mb-0"
                  style={{
                    fontWeight: 700,
                    fontSize: "40px",
                    fontFamily:
                      "Georgia, 'Playfair Display', 'Times New Roman', serif",
                    color: "#1e293b",
                    textAlign: "left",
                  }}
                >
                  Course Content
                </h2>
              </div>

              {/* Main List Container */}
              <div
                style={{
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "42rem",
                  padding: "1rem",
                  textAlign: "left",
                }}
              >
                <ol className="gradient-list">
                  {modules && modules.length > 0 ? (
                    modules.map((module, idx) => <li key={idx}>{module}</li>)
                  ) : (
                    <li>No modules available for this course.</li>
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        ol.gradient-list {
          counter-reset: gradient-counter;
          list-style: none;
          margin: 1rem 0;
          padding-left: 0;
          text-align: left;
        }

        ol.gradient-list > li {
          background: white;
          border-radius: 0 0.5rem 0.5rem 0.5rem;
          counter-increment: gradient-counter;
          margin-top: 1.5rem;
          min-height: 3rem;
          padding: 1rem 1rem 1rem 2rem;
          position: relative;
          text-align: left;
          font-size: 14.5px;
          font-weight: 500;
          color: #212529;
          box-shadow:
            0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),
            0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
        }

        ol.gradient-list > li + li {
          margin-top: 2rem;
        }

        ol.gradient-list > li::before,
        ol.gradient-list > li::after {
          background: linear-gradient(135deg, #a2ed56 0%, #fddc32 100%);
          border-radius: 1rem 1rem 0 1rem;
          content: "";
          height: 3rem;
          left: -1rem;
          overflow: hidden;
          position: absolute;
          top: -1rem;
          width: 3rem;
        }

        ol.gradient-list > li::before {
          align-items: flex-end;
          content: counter(gradient-counter);
          color: #1d1f20;
          display: flex;
          font-family: "Montserrat", sans-serif;
          font-weight: 900;
          font-size: 1.5em;
          line-height: 1;
          justify-content: flex-end;
          padding: 0.125em 0.25em;
          z-index: 1;
        }

        ol.gradient-list > li:nth-child(10n + 1)::before {
          background: linear-gradient(135deg, #a2ed56 0%, #fddc32 100%);
        }

        ol.gradient-list > li:nth-child(10n + 2)::before {
          background: linear-gradient(135deg, #a2ed56 0%, #fddc32 100%);
        }

        ol.gradient-list > li:nth-child(10n + 3)::before {
          background: linear-gradient(135deg, #a2ed56 0%, #fddc32 100%);
        }

        ol.gradient-list > li:nth-child(10n + 4)::before {
          background: linear-gradient(135deg, #a2ed56 0%, #fddc32 100%);
        }

        ol.gradient-list > li:nth-child(10n + 5)::before {
          background: linear-gradient(135deg, #a2ed56 0%, #fddc32 100%);
        }
      `}</style>
    </div>
  );
}
