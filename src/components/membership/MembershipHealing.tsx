"use client";
import React from "react";

export default function MembershipHealing() {
  const cards = [
    "You will experience significant growth both personally and professionally!",
    "Yes. You will build your professional competence & learn from the finest experts!",
    "Yes. You will get HOURS & HOURS of empowerment!",
    "Yes. You will get a massive toolkit of personalized resources.",
  ];

  return (
    <>
      <div className="section-2nd healing-section" style={{ padding: "70px 0 60px", backgroundColor: "#f0eded" }}>
        <div className="container custom-container" style={{ maxWidth: "1140px" }}>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="section-title__title-03" style={{ fontSize: "44px", fontWeight: 700, color: "#1a2638", marginBottom: "20px" }}>
                  We Are Here For Healing!!
                </h2>

                <h5
                  className="mb-5 fw-bold"
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.7",
                    color: "#212529",
                    maxWidth: "960px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  This community is your safe place for healing and self-growth. No,{" "}
                  <span style={{ color: "#07a64b" }}>
                    <strong>
                      it is NOT limited to self-healers but open to both professionals and clients like yourself!
                    </strong>
                  </span>{" "}
                  Feel free to expose your vulnerable selves as this space is judgement-free.
                </h5>

                <div className="healing-cards-container">
                  <div className="row g-4 justify-content-center">
                    {cards.map((title, idx) => (
                      <div className="col-md-6" key={idx}>
                        <div className="healing-card">
                          <div className="healing-corner-bg"></div>
                          <div className="healing-card-text">{title}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .healing-cards-container {
          width: 100%;
          margin: 0 auto;
        }

        .healing-card {
          background-color: #227827;
          border-radius: 22px;
          padding: 45px 30px;
          min-height: 165px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .healing-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(34, 120, 39, 0.25);
        }

        .healing-corner-bg {
          width: 100px;
          height: 100px;
          background-color: rgba(0, 0, 0, 0.12);
          position: absolute;
          top: -45px;
          right: -45px;
          border-radius: 50%;
          z-index: 1;
          transition: transform 0.5s ease;
        }

        .healing-card:hover .healing-corner-bg {
          transform: scale(7);
        }

        .healing-card-text {
          color: #ffffff;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.45;
          text-align: center;
          position: relative;
          z-index: 2;
          margin: 0;
          font-family: inherit;
        }

        @media (max-width: 768px) {
          .healing-card {
            padding: 35px 20px;
            min-height: 140px;
          }
          .healing-card-text {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}
