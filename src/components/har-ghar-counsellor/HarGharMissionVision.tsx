"use client";
import React from "react";

export default function HarGharMissionVision() {
  return (
    <div
      className="campus-wrapper scene campus-background position-relative py-5"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp2080505.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "80px 5%",
      }}
    >
      {/* Dark Overlay matching PHP */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(45, 45, 45, 0.78)",
          zIndex: 1,
        }}
      ></div>

      <div
        className="container custom-container position-relative"
        style={{ zIndex: 2, margin: "40px 0" }}
      >
        {/* Mission Row: Text Left, Image Right */}
        <div className="row gy-5 align-items-center mb-5 pb-4">
          <div className="col-lg-6 col-md-12 order-lg-1 order-2">
            <div className="pe-lg-4">
              <h2
                className="heading mb-3"
                style={{
                  color: "rgb(6, 136, 26)",
                  fontFamily:
                    "Georgia, 'Playfair Display', 'Times New Roman', serif",
                  fontSize: "clamp(34px, 4.2vw, 44px)",
                  fontWeight: 700,
                }}
              >
                Mission
              </h2>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.75)",
                  fontFamily:
                    "Georgia, 'Playfair Display', 'Times New Roman', serif",
                  fontSize: "clamp(17px, 1.8vw, 21px)",
                  lineHeight: "1.65",
                  textAlign: "left",
                  margin: 0,
                  maxWidth: "540px",
                }}
              >
                Our mission is to uplift and empower both the broader community
                by weaving social impact into the heart of our educational
                programs. Through this initiative, we aim to spark a deeper
                awareness and place a trained counsellor in every home, ensuring
                all families have immediate access to emotional and
                psychological support to reduce stress and enhance well-being.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 order-lg-2 order-1 text-center text-lg-end">
            <div
              className="d-inline-block rounded-3 overflow-hidden shadow-lg"
              style={{ borderRadius: "10px", width: "100%", maxWidth: "560px" }}
            >
              <img
                src="https://prod-s3.counselindia.com/mastergalaxyimages/WhatsApp%20Image%202024-08-31%20at%2018.12.15_1725108892.jpeg"
                alt="Mission"
                width={570}
                height={380}
                className="img-fluid w-100"
                style={{
                  height: "380px",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </div>

        {/* Vision Row: Image Left, Text Right */}
        <div className="row gy-5 align-items-center pt-3">
          <div className="col-lg-6 col-md-12 order-lg-1 order-1 text-center text-lg-start">
            <div
              className="d-inline-block rounded-3 overflow-hidden shadow-lg"
              style={{ borderRadius: "10px", width: "100%", maxWidth: "560px" }}
            >
              <img
                src="https://prod-s3.counselindia.com/mastergalaxyimages/Har-ghar-Councellor-1_1725103310.png"
                alt="Vision"
                width={570}
                height={380}
                className="img-fluid w-100"
                style={{
                  height: "380px",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 order-lg-2 order-2">
            <div className="ps-lg-4">
              <h2
                className="heading mb-3"
                style={{
                  color: "rgb(6, 136, 26)",
                  fontFamily:
                    "Georgia, 'Playfair Display', 'Times New Roman', serif",
                  fontSize: "clamp(34px, 4.2vw, 44px)",
                  fontWeight: 700,
                }}
              >
                Vision
              </h2>

              <strong
                className="d-block mb-3"
                style={{
                  color: "rgb(242, 234, 225)",
                  fontFamily:
                    "Georgia, 'Playfair Display', 'Times New Roman', serif",
                  fontSize: "clamp(18px, 1.9vw, 22px)",
                  fontWeight: 700,
                }}
              >
                1 in 5 people face mental health challenges.
              </strong>

              <p
                style={{
                  color: "rgba(255, 255, 255, 0.75)",
                  fontFamily:
                    "Georgia, 'Playfair Display', 'Times New Roman', serif",
                  fontSize: "clamp(17px, 1.8vw, 21px)",
                  lineHeight: "1.65",
                  textAlign: "left",
                  margin: 0,
                  maxWidth: "540px",
                }}
              >
                Our vision is to create a world where everyone can thrive with
                emotional well-being. We dream of building an emotionally
                resilient society where people don’t just succeed
                professionally, but also thrive in their personal lives by
                overcoming mental health challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
