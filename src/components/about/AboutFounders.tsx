"use client";
import React from "react";

export default function AboutFounders() {
  return (
    <div className="founders-block">
      <div className="container custom-container">
        {/* Section Title */}
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="section-title__title">
            <mark>Our Founders</mark>
          </h2>
        </div>

        <div className="event-details">
          <div className="event-details__summary">
            <div className="event-details__content">
              <div className="row gy-6 align-items-center">
                <div className="col-lg-4">
                  <div className="event-details__booking-info">
                    <div className="speaker-item text-center">
                      <div
                        className="speaker-item__thumbnail"
                        style={{ margin: "5%" }}
                      >
                        <img
                          src="https://prod-s3.counselindia.com/images/image.jpg"
                          alt="Mr. Bobby Thakur"
                          width={170}
                          height={170}
                          className="rounded-circle"
                          style={{
                            width: "170px",
                            height: "170px",
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div
                        className="speaker-item__content"
                        style={{ marginTop: "14%" }}
                      >
                        <h6
                          className="speaker-item__name font-size-25"
                          style={{ fontSize: "25px", fontWeight: 700 }}
                        >
                          Mr. Bobby Thakur
                        </h6>
                        <p
                          className="mb-0 primary-text-color fw-bold-500"
                          style={{
                            color: "#07a64b",
                            fontWeight: 500,
                            fontSize: "14px",
                          }}
                        >
                          Founder &amp; CEO <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-8">
                  <p style={{ textAlign: "justify" }}>
                    Bobby Thakur is a psychologist, educator, and the Founder of
                    Counsel India, a leading platform dedicated to practical
                    psychology and counseling education.
                  </p>

                  <p style={{ textAlign: "justify" }}>
                    With a vision of &ldquo;Har Ghar Counselor,&rdquo; he has
                    helped thousands of individuals discover the power of
                    psychology, build meaningful careers, and create real impact
                    through emotional understanding.
                  </p>

                  <p style={{ textAlign: "justify" }}>
                    Over the years, he has guided learners, professionals, and
                    aspiring counselors to not only understand human behavior —
                    but to apply it in real life, relationships, and leadership.
                  </p>

                  <p style={{ textAlign: "justify" }}>
                    Known for simplifying complex psychological concepts into
                    practical tools, Bobby’s work focuses on emotional
                    intelligence, communication, and human connection.
                  </p>

                  <p style={{ textAlign: "justify" }}>
                    He is also the author of the book{" "}
                    <strong>
                      Listen. Don’t Just Talk: A Million Dollar Skill
                    </strong>
                    , which emphasizes your ability to listen can change
                    everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .founders-block {
          padding-top: 10px;
        }

        .custom-container {
          max-width: 1200px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          margin-top: 25px;
          margin-bottom: 30px;
        }

        .section-title__title {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          line-height: 1.5;
          font-weight: 700;
          color: #232937;
        }

        .section-title__title mark {
          position: relative;
          z-index: 0;
          padding: 0 0 10px;
          color: inherit;
          background-color: transparent;
          display: inline-block;
        }

        .section-title__title mark::after {
          content: "";
          position: absolute;
          width: 91px;
          height: 12px;
          bottom: 0;
          left: 50%;
          z-index: -1;
          transform: translate(-45px);
          background-color: #07a64b;
          mask-repeat: no-repeat;
          mask-size: contain;
          mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          -webkit-mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
        }

        p {
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          font-weight: 300;
          line-height: 1.75;
          color: #333;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
