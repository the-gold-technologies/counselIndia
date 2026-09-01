"use client";
import React from "react";

export default function AboutFounders() {
  return (
    <div className="founders-section bg-white py-4">
      <div className="container custom-container">
        {/* Section Title */}
        <div className="section-title mb-4" style={{ marginTop: "5%" }}>
          <h2 className="section-title__title font-size-34 fw-bold text-dark">
            <mark>Our Founders</mark>
          </h2>
        </div>

        <div className="event-details">
          <div className="event-details__summary">
            <div className="event-details__content">
              <div className="row gy-6 align-items-center">
                {/* Left Speaker Box */}
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div className="event-details__booking-info bg-white p-4 rounded-4 shadow-sm border text-center">
                    <div className="speaker-item text-center">
                      <div className="speaker-item__thumbnail my-3 d-inline-block">
                        <img
                          src="https://prod-s3.counselindia.com/images/image.jpg"
                          alt="Mr. Bobby Thakur"
                          width={170}
                          height={170}
                          className="rounded-circle shadow-sm"
                          style={{
                            width: "170px",
                            height: "170px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="speaker-item__content mt-3">
                        <h4 className="speaker-item__name font-size-24 fw-bold text-dark mb-1">
                          Mr. Bobby Thakur
                        </h4>
                        <p className="mb-0 text-success fw-bold font-size-15">
                          Founder &amp; CEO
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Bio Narrative */}
                <div className="col-lg-8 ps-lg-4">
                  <p className="font-size-15 text-muted lh-lg mb-3" style={{ textAlign: "justify" }}>
                    Bobby Thakur is a psychologist, educator, and the Founder of Counsel India, a leading platform dedicated to practical psychology and counseling education.
                  </p>

                  <p className="font-size-15 text-muted lh-lg mb-3" style={{ textAlign: "justify" }}>
                    With a vision of &ldquo;Har Ghar Counselor,&rdquo; he has helped thousands of individuals discover the power of psychology, build meaningful careers, and create real impact through emotional understanding.
                  </p>

                  <p className="font-size-15 text-muted lh-lg mb-3" style={{ textAlign: "justify" }}>
                    Over the years, he has guided learners, professionals, and aspiring counselors to not only understand human behavior — but to apply it in real life, relationships, and leadership.
                  </p>

                  <p className="font-size-15 text-muted lh-lg mb-3" style={{ textAlign: "justify" }}>
                    Known for simplifying complex psychological concepts into practical tools, Bobby’s work focuses on emotional intelligence, communication, and human connection.
                  </p>

                  <p className="font-size-15 text-muted lh-lg mb-0" style={{ textAlign: "justify" }}>
                    He is also the author of the book{" "}
                    <strong className="text-dark">
                      Listen. Don’t Just Talk: A Million Dollar Skill
                    </strong>
                    , which emphasizes your ability to listen can change everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-title__title {
          font-family: Georgia, "Playfair Display", "Times New Roman", serif;
          font-size: 34px;
          color: #212529;
          line-height: 1.3;
        }

        .event-details__booking-info {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06) !important;
          border: 1px solid #eef2f0 !important;
          max-width: 340px;
          margin: 0 auto;
        }

        @media (max-width: 991px) {
          .section-title__title {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
}
