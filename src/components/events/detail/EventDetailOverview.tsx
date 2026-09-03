"use client";
import React from "react";
import { EventDetail } from "../data/eventDetailData";

interface EventDetailOverviewProps {
  event: EventDetail;
}

export default function EventDetailOverview({ event }: EventDetailOverviewProps) {
  return (
    <div className="event-details__content pt-2 pb-5">
      <div className="row gy-5 gx-lg-5">
        {/* Left Column: Title, Overview, Key Features, Areas Focused */}
        <div className="col-lg-8">
          <div className="about-event-text mb-4">
            <h3
              className="fw-bold mb-3"
              style={{
                fontSize: "19px",
                color: "#212529",
                fontFamily: "Poppins, 'Plus Jakarta Sans', sans-serif",
                lineHeight: "1.4",
              }}
            >
              {event.name}
            </h3>
            {event.about.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: "15px",
                  lineHeight: "1.8",
                  color: "#4a5568",
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Key Features (Numbered points with description) */}
          {event.keyFeatures && event.keyFeatures.length > 0 && (
            <div className="tutor-course-segment mt-4 mb-4">
              <h4
                className="fw-bold mb-4"
                style={{
                  fontSize: "17px",
                  color: "#212529",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Key Features:
              </h4>
              <div className="d-flex flex-column gap-4">
                {event.keyFeatures.map((feature, index) => (
                  <div key={index}>
                    <h5
                      className="fw-semibold mb-2"
                      style={{
                        fontSize: "15.5px",
                        color: "#212529",
                        fontFamily: "Poppins, sans-serif",
                      }}
                    >
                      {index + 1}. {feature.title}
                    </h5>
                    <p
                      className="mb-0"
                      style={{
                        fontSize: "14.5px",
                        lineHeight: "1.75",
                        color: "#4a5568",
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Perks (if present) */}
          {event.perks && event.perks.length > 0 && (
            <div
              className="p-4 mb-4"
              style={{
                backgroundColor: "#f5fbf7",
                borderRadius: "10px",
                border: "1px solid #e4f4ea",
              }}
            >
              <h4
                className="fw-bold mb-3 d-flex align-items-center gap-2"
                style={{ fontSize: "16.5px", color: "#07a64b" }}
              >
                <span>💥</span> Main Highlights & Perks:
              </h4>
              <div className="row gy-2">
                {event.perks.map((perk, i) => (
                  <div className="col-12 col-md-6" key={i}>
                    <div className="d-flex align-items-start gap-2">
                      <span className="text-success fw-bold">✓</span>
                      <span style={{ fontSize: "14.5px", color: "#334155" }}>
                        {perk}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Areas Focused */}
          {event.areasFocused && event.areasFocused.length > 0 && (
            <div className="tutor-course-segment mt-4">
              <h4
                className="tutor-course-segment__title fw-bold mb-3"
                style={{
                  fontSize: "18px",
                  color: "#212529",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Areas Focused
              </h4>
              <ul className="list-unstyled d-flex flex-column gap-2 mb-0 ps-0">
                {event.areasFocused.map((area, index) => (
                  <li
                    key={index}
                    className="p-2 px-3 rounded"
                    style={{
                      backgroundColor: "#f8fafc",
                      border: "1px solid #f1f5f9",
                      fontSize: "15px",
                      color: "#1e2532",
                      fontWeight: 500,
                    }}
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: Floating Booking Card matching screenshot */}
        <div className="col-lg-4">
          <div
            className="event-details__booking-info bg-white"
            style={{
              padding: "30px 24px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.08)",
              borderRadius: "8px",
              border: "1px solid #f1f5f9",
              width: "100%",
              maxWidth: "380px",
              marginLeft: "auto",
            }}
          >
            <ul
              className="event-details__info-meta list-unstyled p-0 mb-4"
              style={{ fontFamily: "Poppins, 'Plus Jakarta Sans', sans-serif" }}
            >
              {/* Event Mode */}
              <li
                className="meta-info d-flex justify-content-between align-items-center py-3"
                style={{ borderBottom: "1px solid #edf2f7" }}
              >
                <span className="meta-label fw-bold d-flex align-items-center gap-2 text-dark font-size-15">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#475569"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  Event Mode
                </span>
                <span className="meta-value fw-bold text-dark font-size-15">
                  {event.type.includes("Online") ? "Online" : "Offline"}
                </span>
              </li>

              {/* Price */}
              <li
                className="meta-info d-flex justify-content-between align-items-center py-3"
                style={{ borderBottom: "1px solid #edf2f7" }}
              >
                <span className="meta-label fw-bold d-flex align-items-center gap-2 text-dark font-size-15">
                  <span style={{ fontSize: "16px", color: "#475569" }}>₹</span>
                  Price
                </span>
                <span
                  className="meta-value fw-bold font-size-16"
                  style={{ color: "#07a64b" }}
                >
                  Rs {event.price}
                </span>
              </li>

              {/* Seats */}
              <li className="meta-info d-flex justify-content-between align-items-center py-3">
                <span className="meta-label fw-bold d-flex align-items-center gap-2 text-dark font-size-15">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#475569"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <line x1="9" x2="15" y1="9" y2="15" />
                    <line x1="15" x2="9" y1="9" y2="15" />
                  </svg>
                  Seats
                </span>
                <span className="meta-value fw-bold text-dark font-size-15">
                  {event.seats.replace(/\D/g, "") || "50"}
                </span>
              </li>
            </ul>

            {/* Centered Green CTA Button */}
            <div className="text-center pt-2">
              <a
                href={event.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn event-register-btn d-inline-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#07a64b",
                  border: "none",
                  color: "#ffffff",
                  fontWeight: 500,
                  fontSize: "15px",
                  fontFamily: "Poppins, sans-serif",
                  padding: "10px 32px",
                  borderRadius: "6px",
                  transition: "all 0.25s ease",
                }}
              >
                Register now
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .event-register-btn:hover {
          background-color: #05853c !important;
          color: #ffffff !important;
          box-shadow: 0 4px 15px rgba(7, 166, 75, 0.35) !important;
        }
      `}</style>
    </div>
  );
}
