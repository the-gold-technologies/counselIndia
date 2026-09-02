"use client";
import React from "react";
import {
  col1Testimonials,
  col2Testimonials,
  col3Testimonials,
  SuccessStoryItem,
} from "./data/successStoriesData";

export default function SuccessTestimonials() {
  return (
    <div className="testimonials-section py-5 bg-white">
      <div className="container custom-container py-2">
        {/* Title matching PHP */}
        <div className="text-center mb-4">
          <h1
            style={{
              fontSize: "clamp(34px, 4.2vw, 44px)",
              fontWeight: 700,
              fontFamily:
                "Georgia, 'Playfair Display', 'Times New Roman', serif",
              color: "#1e293b",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            Stories of Accomplishment
          </h1>
          <div
            className="border"
            style={{
              marginBottom: "35px",
              borderBottom: "1px solid #e5e7eb",
              width: "100%",
            }}
          ></div>
        </div>

        {/* 3 Columns matching Screenshot */}
        <div className="row3">
          {/* Column 1 */}
          <div className="col col-1">
            {col1Testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="col col-2">
            {col2Testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="col col-3">
            {col3Testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .row3 {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          gap: 16px;
        }

        .col {
          flex: 0 0 calc(33.333% - 11px);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .col-1 {
          order: 1;
        }

        .col-2 {
          order: 2;
        }

        .col-3 {
          order: 3;
        }

        @media (max-width: 768px) {
          .row3 {
            display: flex;
            flex-direction: column;
          }
          .col {
            flex: 1 1 100%;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}

function TestimonialCard({ item }: { item: SuccessStoryItem }) {
  return (
    <div className="testimonial-card">
      {/* 80px Circular Profile Image with 2px Black Border matching PHP */}
      <img
        src={item.image}
        alt={item.name}
        width={80}
        height={80}
        className="avatar-img"
        onError={(e) => {
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80";
        }}
      />

      <div className="name">{item.name}</div>
      <p>{item.description}</p>

      <style jsx>{`
        .testimonial-card {
          border: 1px solid #d1d5db;
          padding: 24px 20px;
          text-align: center;
          border-radius: 20px;
          box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.12);
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0px 10px 24px rgba(0, 0, 0, 0.16);
        }

        .avatar-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin-bottom: 14px;
          border: 2px solid #000000;
          object-fit: cover;
        }

        .name {
          font-weight: bold;
          font-size: 16px;
          color: #1e293b;
          margin-bottom: 8px;
        }

        p {
          font-size: 13.5px;
          line-height: 1.6;
          color: #475569;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
