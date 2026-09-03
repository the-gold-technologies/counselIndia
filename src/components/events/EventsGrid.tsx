"use client";
import React, { useState } from "react";
import Link from "next/link";
import { EVENTS_DATA, EventItem } from "./data/eventsData";

export default function EventsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(EVENTS_DATA.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedEvents = EVENTS_DATA.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 300, behavior: "smooth" });
    }
  };

  return (
    <div
      className="event-section overflow-visible py-5"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container custom-container">
        {/* Archive Filter Bars */}
        <div className="archive-filter-bars mb-4 pb-1">
          <div className="archive-filter-bar mb-0">
            <p
              className="m-0"
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "#333333",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              We found{" "}
              <span style={{ color: "#252525", fontWeight: 700 }}>
                {EVENTS_DATA.length}
              </span>{" "}
              events available for you
            </p>
          </div>
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="row gy-4 gx-4">
          {displayedEvents.map((event: EventItem) => (
            <div
              className="col-xl-4 col-lg-4 col-sm-6 col-12 grid-item"
              key={event.id}
            >
              <div
                className="event-card-item h-100 d-flex flex-column overflow-hidden"
                style={{
                  borderRadius: "6px",
                  border: "1px solid #edf2f7",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Event Poster Image */}
                <div
                  className="event-card-image position-relative overflow-hidden w-100"
                  style={{
                    height: "360px",
                    backgroundColor: "#f8fafc",
                  }}
                >
                  <Link
                    href={`/events/${event.slug}`}
                    className="d-block w-100 h-100"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-100 h-100"
                      style={{
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.6s cubic-bezier(0, 0, 0.2, 1)",
                      }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://prod-s3.counselindia.com/images/home-university-image-campus-life.jpg";
                      }}
                    />
                  </Link>
                </div>

                {/* Content Section (Dull white by default, brighter white on hover) */}
                <div
                  className="event-card-content d-flex flex-column flex-grow-1 text-center"
                  style={{
                    padding: "20px 18px 24px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Event Date: 13px Uppercase */}
                  <div
                    className="event-card-date mb-2 text-uppercase"
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      letterSpacing: "0.5px",
                      color: "#64748b",
                      fontFamily: "Poppins, 'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {event.date}
                  </div>

                  {/* Event Title: 15px Poppins */}
                  <h3
                    className="event-card-title mb-3"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.5",
                      fontFamily: "Poppins, 'Plus Jakarta Sans', sans-serif",
                      fontWeight: 600,
                      color: "#1e2532",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      height: "3em",
                    }}
                  >
                    <Link
                      href={`/events/${event.slug}`}
                      className="text-decoration-none text-dark event-title-link"
                    >
                      {event.title}
                    </Link>
                  </h3>

                  {/* Know More Green Button */}
                  <div className="mt-auto">
                    <Link
                      href={`/events/${event.slug}`}
                      className="btn event-cta-btn d-inline-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#07a64b",
                        border: "none",
                        color: "#ffffff",
                        fontWeight: 500,
                        fontSize: "15px",
                        fontFamily: "Poppins, 'Plus Jakarta Sans', sans-serif",
                        padding: "0px 14px",
                        borderRadius: "8px",
                        transition: "all 0.25s ease",
                      }}
                    >
                      Know more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Pagination: Displayed ONLY when totalPages > 1 */}
        {totalPages > 1 && (
          <div className="page-pagination-wrapper pt-5 mt-2 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center gap-4 gap-md-5">
              {/* PREVIOUS button (visible when not on page 1) */}
              {currentPage > 1 && (
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="btn border-0 shadow-none d-inline-flex align-items-center gap-1 p-0 fw-bold"
                  style={{
                    background: "transparent",
                    color: "#1e2532",
                    fontSize: "16px",
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  &larr; PREVIOUS
                </button>
              )}

              {/* Page numbers */}
              <div className="d-flex align-items-center gap-3">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isActive = currentPage === page;
                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className="btn border-0 shadow-none d-inline-flex align-items-center justify-content-center p-0"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: isActive ? "#0071dc" : "transparent",
                        color: isActive ? "#ffffff" : "#1e2532",
                        fontSize: "18px",
                        fontWeight: 700,
                        fontFamily: "Poppins, sans-serif",
                        borderRadius: isActive ? "50%" : "0px",
                        transition: "all 0.2s ease",
                        cursor: "pointer",
                      }}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* NEXT button (visible when not on last page) */}
              {currentPage < totalPages && (
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="btn border-0 shadow-none d-inline-flex align-items-center gap-1 p-0 fw-bold"
                  style={{
                    background: "transparent",
                    color: "#1e2532",
                    fontSize: "16px",
                    fontWeight: 700,
                    fontFamily: "Poppins, sans-serif",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  NEXT &rarr;
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Default state: dull off-white background */
        .event-card-item {
          background-color: #f8f8f8 !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .event-card-content {
          background-color: #f8f8f8 !important;
        }

        /* Hover state: whiter bright white background with elevation */
        .event-card-item:hover {
          background-color: #ffffff !important;
          transform: translateY(-5px);
          box-shadow: 0 14px 35px rgba(0, 0, 0, 0.08) !important;
        }

        .event-card-item:hover .event-card-content {
          background-color: #ffffff !important;
        }

        .event-card-item:hover img {
          transform: scale(1.05);
        }

        .event-title-link:hover {
          color: #07a64b !important;
        }

        .event-cta-btn:hover {
          background-color: #05853c !important;
          color: #ffffff !important;
          box-shadow: 0 4px 15px rgba(7, 166, 75, 0.35) !important;
        }
      `}</style>
    </div>
  );
}
