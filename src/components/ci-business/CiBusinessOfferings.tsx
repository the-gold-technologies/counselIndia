"use client";
import React from "react";

const OFFERINGS = [
  {
    title: "Webinar",
    desc: "Online interactive sessions addressing common workplace stressors",
    image:
      "https://prod-s3.counselindia.com/bootcamp/workshopbusiness.jpg",
  },
  {
    title: "Seminar & Workshops",
    desc: "Offline sessions on various topics covering work life balance, stress management, self-motivation, and more.",
    image:
      "https://prod-s3.counselindia.com/bootcamp/webinarbusiness.jpg",
  },
  {
    title: "1 on 1 Counselling Session",
    desc: "Personalized support for employees needing individual attention",
    image:
      "https://sandbox-counselindiastudymaterial.s3.ap-south-1.amazonaws.com/common/1v1business.jpg",
  },
  {
    title: "Psychometric Assessment",
    desc: "Evaluating your organization’s mental and emotional health through targeted assessments designed by top psychologists and providing tailored solutions.",
    image:
      "https://prod-s3.counselindia.com/bootcamp/testbusiness.jpg",
  },
];

export default function CiBusinessOfferings() {
  return (
    <div
      className="membership-plans py-5 position-relative"
      style={{
        backgroundColor: "rgb(2, 8, 25)",
      }}
    >
      <div className="container custom-container py-4">
        {/* Section Title with authentic green curve mask underneath Make an Impact */}
        <div
          className="section-title text-center"
          style={{ marginTop: "10px", marginBottom: "68px" }}
        >
          <h2
            className="section-title__title-02 m-0 d-inline-block text-white"
            style={{
              fontSize: "clamp(26px, 3.4vw, 36px)",
              fontFamily:
                "'Playfair Display', Georgia, 'Times New Roman', serif",
              fontWeight: 700,
            }}
          >
            Join to grow & <mark className="impact-mark">Make an Impact</mark>
          </h2>
        </div>

        {/* 4 Corporate Offerings Cards (Height reduced by ~20px) */}
        <div className="row g-4 g-lg-5 justify-content-center mb-5">
          {OFFERINGS.map((item, idx) => (
            <div
              key={idx}
              className="col-lg-6 col-md-6 col-12 d-flex justify-content-center"
            >
              <div
                className="bg-white overflow-hidden w-100 d-flex flex-column"
                style={{
                  maxWidth: "540px",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
                  borderRadius: "0px",
                }}
              >
                {/* Edge-to-edge Card Image with reduced height */}
                <div
                  className="position-relative w-100 overflow-hidden"
                  style={{ height: "270px" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* White Card Text Box below Image */}
                <div
                  className="px-4 py-3 text-center d-flex flex-column justify-content-center flex-grow-1 bg-white"
                  style={{ minHeight: "125px" }}
                >
                  <h3
                    className="mb-2"
                    style={{
                      fontSize: "28px",
                      fontFamily:
                        "'Playfair Display', Georgia, 'Times New Roman', serif",
                      fontWeight: 700,
                      color: "#1e2532",
                      lineHeight: "1.3",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "14.5px",
                      color: "#475569",
                      lineHeight: "1.55",
                      maxWidth: "440px",
                      margin: "0 auto",
                      fontFamily:
                        "Inter, 'Plus Jakarta Sans', system-ui, sans-serif",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision & Mission Row (Increased Width and Height) */}
        <div className="row g-4 g-lg-5 justify-content-center pt-5 mt-2">
          {/* Vision */}
          <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center">
            <div
              className="position-relative w-100 overflow-hidden rounded-3"
              style={{
                height: "360px",
                maxWidth: "580px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src="https://prod-s3.counselindia.com/images/academics/vision.jpg"
                alt="Vision"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              {/* Bottom Gradient Overlay & Title */}
              <div
                className="position-absolute bottom-0 start-0 end-0 d-flex align-items-end justify-content-center pb-3"
                style={{
                  height: "50%",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                <h3
                  className="text-white m-0"
                  style={{
                    fontSize: "28px",
                    fontFamily:
                      "'Playfair Display', Georgia, 'Times New Roman', serif",
                    fontWeight: 700,
                  }}
                >
                  Vision
                </h3>
              </div>
            </div>

            <p
              className="text-center pt-3 mb-0"
              style={{
                color: "#cbd5e1",
                fontSize: "14px",
                lineHeight: "1.65",
                maxWidth: "540px",
              }}
            >
              Empowering individuals with Emotional Intelligence and skills to
              manage their emotions effectively, build strong relationships, and
              cultivate self-awareness for a fulfilling life.
            </p>
          </div>

          {/* Mission */}
          <div className="col-lg-6 col-md-6 col-12 d-flex flex-column align-items-center">
            <div
              className="position-relative w-100 overflow-hidden rounded-3"
              style={{
                height: "360px",
                maxWidth: "580px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
              }}
            >
              <img
                src="https://prod-s3.counselindia.com/images/academics/mission.jpg"
                alt="Mission"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              {/* Bottom Gradient Overlay & Title */}
              <div
                className="position-absolute bottom-0 start-0 end-0 d-flex align-items-end justify-content-center pb-3"
                style={{
                  height: "50%",
                  background:
                    "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0) 100%)",
                }}
              >
                <h3
                  className="text-white m-0"
                  style={{
                    fontSize: "28px",
                    fontFamily:
                      "'Playfair Display', Georgia, 'Times New Roman', serif",
                    fontWeight: 700,
                  }}
                >
                  Mission
                </h3>
              </div>
            </div>

            <p
              className="text-center pt-3 mb-0"
              style={{
                color: "#cbd5e1",
                fontSize: "14px",
                lineHeight: "1.65",
                maxWidth: "540px",
              }}
            >
              Our mission is to empower India at an emotional level by training
              them in counselling skills with comprehensive programs as well as
              offering access to personal counselling through our global network
              of expert Counsellors and Psychologists.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .impact-mark {
          position: relative;
          z-index: 0;
          padding: 0 0 8px;
          color: inherit;
          background-color: transparent;
          display: inline-block;
        }

        .impact-mark::after {
          content: "";
          position: absolute;
          width: 96px;
          height: 12px;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          z-index: -1;
          background-image: url("/assets/images/headline-curve-02.svg");
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
      `}</style>
    </div>
  );
}
