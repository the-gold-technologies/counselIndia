"use client";
import React from "react";

export default function MembershipGuide() {
  return (
    <div
      className="download-section"
      style={{
        marginBottom: "-3%",
        background:
          "linear-gradient(to bottom, rgba(233, 240, 226, 0.995) 0%, rgba(112, 136, 102, 0.8) 100%)",
      }}
    >
      <div
        className="section-title text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2
          className="section-title__title-03 mark-title"
          style={{ paddingTop: "5%" }}
        >
          Meet Your Wellness Guide
        </h2>
      </div>

      <div className="container custom-container" style={{ marginTop: "5%" }}>

        {/* ── Two-column row: Photo (left) + Bio (right) ── */}
        <div className="row gy-10 justify-content-center flex-row-reverse align-items-center">

          {/* Photo column */}
          <div className="col-md-5">
            <div className="download-image text-center text-md-end">
              <img
                src="https://prod-s3.counselindia.com/mastergalaxyimages/Red%20Gradient%20Profile%20Photo%20Instagram%20Post-2_1726033527.png"
                alt="Download"
                width="423"
                height="442"
              />
            </div>
          </div>

          {/* Bio column */}
          <div className="col-md-7">
            <div className="download-content-02 text-center text-md-start">
              <img
                className="download-content-02__shape"
                src="https://prod-s3.counselindia.com/images/shape/home-online-art-shape.png"
                alt="shape"
                width="68"
                height="80"
              />

              <h3>
                <span
                  className="fw-bold"
                  style={{ marginTop: "5%", textAlign: "center" } as React.CSSProperties}
                >
                  Oh hi there, nice to e-meet you! I&apos;m Anshika Jain.
                </span>
              </h3>

              <h5
                className="download-content-02__sub-title"
                style={{ textAlign: "center" }}
              >
                But you can call me Anshu.
              </h5>

              {/* ── Inner bio paragraphs (ul matches live site) ── */}
              <ul
                className="tutor-course-segment__list-style-03"
                style={{ textAlign: "center", fontWeight: 700, fontSize: "15px" }}
              >
                Imagine a world where comfy yoga pants are your official uniform,
                and every day is a good hair day (even if it&apos;s just for a quick Zoom call).
                That&apos;s me for you! I&apos;m all about chill vibes, endless cups of chai,
                and the occasional Netflix binge—because self-care is essential, right?

                <br /><br />
                On the flip side, I&apos;m not a fan of soggy cereal (seriously, who is?),
                and I can&apos;t stand when my headphones get tangled in my bag (classic mood killer).
                But don&apos;t let those quirks fool you; my passion for wellness is as strong as my morning coffee!

                <br /><br />
                I&apos;m a certified pro in counselling and psychology with a track record of making real change happen.
                With years of experience under my belt, I blend a compassionate, science-backed approach with a sprinkle
                of magic to guide you through your wellness journey. My toolbox is packed with everything from
                trauma-informed practices to somatic techniques that connect body, mind, and soul.

                <br /><br />
              </ul>

              {/* Arrow image — inside download-content-02, after the ul */}
              <img
                className="download-content-02__arrow"
                src="https://prod-s3.counselindia.com/images/secondary-arrow.png"
                alt="Arrow"
              />
            </div>
          </div>
        </div>

        {/* ── Sign-off paragraphs — OUTSIDE the row, inside the container ── */}
        <ul
          className="tutor-course-segment__list-style-03"
          style={{ textAlign: "center", fontSize: "15px", fontWeight: 700 }}
        >
          <p>
            When I&apos;m not indulged in the depths of psychology, you&apos;ll find me living life to the
            fullest—whether that&apos;s mastering the art of the perfect self-care routine or getting lost in a great book.
            I&apos;m here to offer gentle direction and unconditional support as you navigate your own path to wellness.
          </p>
          <p style={{ textAlign: "center" }}>
            So, buckle up and get ready to click into a new level of self-discovery with me—where your journey
            is supported, your quirks are celebrated, and your wellness goals are within reach!
            <br /><br />
            <span className="fw-bold" style={{ fontSize: "24px" }}>
              See you on the Zen side!
            </span>
          </p>
        </ul>

      </div>
    </div>
  );
}
