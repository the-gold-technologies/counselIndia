"use client";
import React from "react";
import { ALUMNI_SERVICES } from "./data/alumniData";

export default function AlumniServices() {
  return (
    <div className="services py-4" style={{ marginTop: "0%" }}>
      <div className="container custom-container py-2">
        {/* Section Title */}
        <div className="col-sm-12 text-center mb-4">
          <h2 className="section-title__title text-center text-uppercase">
            SERVICES
          </h2>
        </div>

        {/* 4 Cards Section */}
        <section className="containeralumni">
          {ALUMNI_SERVICES.map((item) => (
            <div key={item.id} className="card">
              <img
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="card-image"
              />
              <div className="card-description p-3 pt-0">
                <h5 style={{ margin: "5% 0" }}>{item.title}</h5>
                <p className="mb-0 text-muted-dark">{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      <style jsx>{`
        .services {
          background: linear-gradient(to top, #ffffff, #ffffff);
        }

        .section-title__title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 36px;
          color: #212529;
          letter-spacing: 0.5px;
          margin-bottom: 2rem;
        }

        .containeralumni {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          background-color: #fff;
          border: 1px solid #ddd;
          width: calc(25% - 20px);
          text-align: center;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
        }

        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 5px 5px 0 0;
          display: block;
        }

        .card-description {
          margin-top: 10px;
          font-size: 15px;
          line-height: 1.6;
          color: #333;
        }

        .card-description h5 {
          font-family: var(--font-inter), sans-serif;
          font-size: 19px;
          font-weight: 700;
          color: #111827;
        }

        .text-muted-dark {
          color: #4b5563;
        }

        @media (min-width: 1024px) {
          .card {
            width: calc(25% - 20px);
          }
        }

        @media (max-width: 1023px) {
          .card {
            width: calc(50% - 20px);
          }
        }

        @media (max-width: 768px) {
          .card {
            width: 100%;
          }

          .containeralumni {
            margin: 2%;
          }
        }
      `}</style>
    </div>
  );
}
