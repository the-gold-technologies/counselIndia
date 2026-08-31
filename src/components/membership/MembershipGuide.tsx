"use client";
import React from "react";

export default function MembershipGuide() {
  return (
    <>
      <div
        className="download-section"
        style={{
          padding: "60px 0 30px",
          marginBottom: "0",
          background: "linear-gradient(to bottom, rgba(233, 240, 226, 0.995) 0%, rgba(112, 136, 102, 0.8) 100%)",
          width: "100%",
        }}
      >
        {/* Full-width Section Title Centered on Page */}
        <div className="container custom-container">
          <div className="section-title text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
            <h2
              className="section-title__title-03"
              style={{
                fontSize: "44px",
                fontWeight: 700,
                color: "#1a2638",
                textAlign: "center",
                margin: "0 auto",
                display: "block",
              }}
            >
              Meet Your Wellness Guide
            </h2>
          </div>
        </div>

        <div className="container custom-container" style={{ marginTop: "2%" }}>
          <div className="row gy-10 justify-content-center flex-row-reverse align-items-center">
            {/* Guide Photo on Right */}
            <div className="col-md-5 text-center text-md-end">
              <div className="download-image text-center text-md-end">
                <img
                  src="https://prod-s3.counselindia.com/mastergalaxyimages/Red%20Gradient%20Profile%20Photo%20Instagram%20Post-2_1726033527.png"
                  alt="Anshika Jain Wellness Guide"
                  width="423"
                  height="442"
                  className="img-fluid"
                  style={{
                    maxWidth: "380px",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>

            {/* Guide Bio Copy on Left */}
            <div className="col-md-7">
              <div className="download-content-02 text-center text-md-start position-relative">
                {/* Heading with attached green petal shape */}
                <div
                  className="position-relative d-inline-block text-center text-md-start"
                  style={{ maxWidth: "100%" }}
                >
                  <h3
                    className="fw-bold mb-2"
                    style={{
                      color: "#1a2638",
                      fontSize: "29px",
                      lineHeight: "1.35",
                      position: "relative",
                      display: "inline",
                    }}
                  >
                    Oh hi there, nice to e-meet you! I’m Anshika Jain.
                  </h3>
                  <img
                    className="download-content-02__shape d-none d-sm-inline-block"
                    src="/assets/images/shape/home-online-art-shape.png"
                    alt="shape"
                    width="60"
                    height="70"
                    style={{
                      position: "absolute",
                      right: "-35px",
                      top: "-42px",
                      zIndex: 2,
                    }}
                  />
                </div>

                <h5
                  className="download-content-02__sub-title mb-4 mt-2"
                  style={{
                    color: "#07a64b",
                    fontWeight: 700,
                    fontSize: "16.5px",
                    textAlign: "center",
                  }}
                >
                  But you can call me Anshu.
                </h5>

                <div
                  className="tutor-course-segment__list-style-03 text-center"
                  style={{
                    color: "#212529",
                    fontWeight: 500,
                    fontSize: "15px",
                    lineHeight: "1.75",
                    maxWidth: "680px",
                    margin: "0 auto",
                  }}
                >
                  <p className="mb-4">
                    Imagine a world where comfy yoga pants are your official uniform,
                    and every day is a good hair day (even if it’s just for a quick Zoom call).
                    That’s me for you! I’m all about chill vibes, endless cups of chai,
                    and the occasional Netflix binge—because self-care is essential, right?
                  </p>
                  <p className="mb-4">
                    On the flip side, I’m not a fan of soggy cereal (seriously, who is?),
                    and I can’t stand when my headphones get tangled in my bag (classic mood killer).
                    But don’t let those quirks fool you; my passion for wellness is as strong as my morning coffee!
                  </p>
                  <p className="mb-0">
                    I’m a certified pro in counselling and psychology with a track record of making real change happen.
                    With years of experience under my belt, I blend a compassionate, science-backed approach with a sprinkle
                    of magic to guide you through your wellness journey. My toolbox is packed with everything from
                    trauma-informed practices to somatic techniques that connect body, mind, and soul.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Bottom Section */}
          <div
            className="text-center mt-5 pt-3"
            style={{
              color: "#212529",
              fontWeight: 500,
              fontSize: "15.5px",
              lineHeight: "1.8",
              maxWidth: "960px",
              margin: "0 auto",
            }}
          >
            <p className="mb-4">
              When I’m not indulged in the depths of psychology, you’ll find me living life to the fullest—whether that’s
              mastering the art of the perfect self-care routine or getting lost in a great book. I’m here to offer gentle direction
              and unconditional support as you navigate your own path to wellness.
            </p>
            <p className="mb-4">
              So, buckle up and get ready to click into a new level of self-discovery with me—where your journey is supported,
              your quirks are celebrated, and your wellness goals are within reach!
            </p>
            <h3
              className="fw-bold mt-4"
              style={{ fontSize: "28px", color: "#1a2638", letterSpacing: "0.2px" }}
            >
              See you on the Zen side!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
