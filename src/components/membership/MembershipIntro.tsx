"use client";
import React from "react";

export default function MembershipIntro() {
  const roadmapItems = [
    { title: "Mental Health Routine", desc: "to keep your emotions in check" },
    { title: "Self-help Videos", desc: "to empower your personal development" },
    {
      title: "An Emotional Meter",
      desc: "to keep a track of your mental health",
    },
    {
      title: "Tailor Made Tips",
      desc: "to improve your current mental health score",
    },
    {
      title: "Recommended By Experts Section",
      desc: "Must Watch Movies & Books: Psychology Thrillers, Feel Good, Psychodrama & more",
    },
    {
      title: "Healing Hands",
      desc: "Help One person around you from everything you have gathered from Counsel India",
    },
    { title: "A Curated Podcast Library", desc: "for Mental fitness" },
    { title: "20 Case Study Videos", desc: "to learn from real life stories" },
    { title: "Handy Workbook", desc: "for Journaling therapy" },
    { title: "FREE Self-paced Courses", desc: "" },
    {
      title: "Monthly Newsletter",
      desc: "to stay updated with the latest trends in mental health",
    },
    { title: "LIVE Healing Session", desc: "with experts" },
    {
      title: "Additional 1000 rupee Discount",
      desc: "on Counsel India Programs",
    },
    {
      title: "Refer & Grow",
      desc: "Gift/Refer Counsel India membership to 5 friends & get 1 month of membership FREE worth Rs. 199.",
    },
  ];

  return (
    <>
      {/* 1. Hey Fellow Human Section */}
      <div
        className="section-2nd"
        style={{
          paddingTop: "5%",
          paddingBottom: "2%",
          backgroundColor: "#eeeeee",
        }}
      >
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Section Title Start */}
              <div className="section-title text-center" data-aos="fade-up">
                <h2 className="section-title__title-03">Hey, Fellow Human!</h2>
                <h2 className="section-title__title-03">
                  Ready to <mark>meet the best version of yourself?</mark>
                </h2>
                <h6 className="mt-2">
                  Feeling stressed, anxious, or down is a natural part of our
                  everyday life. But what if we told you there&apos;s a friend
                  who can guide you through it all, helping you manage your
                  emotions to live a life you&apos;ve always wanted?
                </h6>

                <h5 className="mb-4 fw-bold" style={{ marginTop: "5%" }}>
                  <span className="primary-text-color">
                    Believe in yourself, and you&apos;re halfway there.
                  </span>
                </h5>
                <h6 className="mt-2">
                  Our team of expert psychologists has carefully curated a
                  wellbeing routine designed to infuse your life with hope,
                  emotional stability, and confidence for lasting wellbeing and
                  personal growth.
                </h6>
              </div>
              {/* Section Title End */}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Live a life that's truly yours - Numbered Checklist & Image */}
      <div
        className="countdown-signup-section section-padding-01 scene"
        style={{ backgroundColor: "#E6F0E2" }}
      >
        <div className="container">
          <div className="row gy-10 align-items-center justify-content-center">
            <div className="col-md-6">
              {/* Countdown Widget Start */}
              <div
                className="countdown-widget"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {/* Countdown Title Start */}
                <div className="countdown-title">
                  <h2 className="countdown-title__title">
                    Live a life that&apos;s truly yours <br />
                    <mark>Let&apos;s get started: </mark>
                  </h2>

                  <main>
                    <ol className="gradient-list">
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          Mental Health Routine{" "}
                        </strong>
                        to keep your emotions in check
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          Self-help Videos{" "}
                        </strong>
                        to empower your personal development
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          An Emotional Meter{" "}
                        </strong>
                        to keep a track of your mental health
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          Tailor Made Tips{" "}
                        </strong>
                        to improve your current mental health score
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          Recommended By Experts Section{" "}
                        </strong>
                        Must Watch Movies &amp; Books: Psychology Thrillers,
                        Feel Good, Psychodrama &amp; more
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          Healing Hands{" "}
                        </strong>
                        Help One person around you from everything you have
                        gathered from Counsel India
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          A Curated Podcast Library{" "}
                        </strong>
                        for Mental fitness
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          20 Case Study Videos{" "}
                        </strong>
                        to learn from real life stories
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          Handy Workbook{" "}
                        </strong>
                        for Journaling therapy
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          FREE Self-paced Courses{" "}
                        </strong>
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          Monthly Newsletter{" "}
                        </strong>
                        to stay updated with the latest trends in mental health
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          LIVE Healing Session{" "}
                        </strong>
                        with experts
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          Additional 1000 rupee Discount{" "}
                        </strong>
                        on Counsel India Programs
                      </li>
                      <li>
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          Refer &amp; Grow{" "}
                        </strong>
                        Gift/Refer Counsel India membership to 5 friends &amp;
                        get 1 month of membership FREE{" "}
                        <strong
                          className="primary-text-color"
                          style={{ fontWeight: 400 }}
                        >
                          worth Rs. 199.
                        </strong>
                      </li>
                    </ol>
                  </main>
                </div>
                {/* Countdown Title End */}
              </div>
              {/* Countdown Widget End */}
            </div>

            <div className="col-md-6">
              {/* Countdown Image Start */}
              <div
                className="countdown-image text-center scene"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="countdown-image__image">
                  <img
                    className="lifeimg"
                    src="https://prod-s3.counselindia.com/mastergalaxyimages/Website%20collage-4_1726051869.png"
                    alt="resource image"
                    width="400"
                    height="1600"
                  />
                </div>
              </div>
              {/* Countdown Image End */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lifeimg {
          height: 1300px;
          object-fit: cover;
          width: auto;
        }

        .countdown-image__image {
          max-height: 1600px;
          overflow: hidden;
          width: 550px;
        }

        main {
          display: block;
          margin: 0 auto;
          max-width: 40rem;
          padding: 1rem;
        }

        ol.gradient-list {
          counter-reset: gradient-counter;
          list-style: none;
          margin: 1rem 0;
          padding-left: 1rem;
        }

        ol.gradient-list > li {
          background: white;
          border-radius: 0 0.5rem 0.5rem 0.5rem;
          counter-increment: gradient-counter;
          margin-top: 0.8rem;
          min-height: 3rem;
          padding: 1rem 1rem 1rem 2rem;
          position: relative;
          box-shadow:
            0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),
            0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
          font-size: 14px;
          color: #212529;
          line-height: 1.5;
        }

        ol.gradient-list > li::before,
        ol.gradient-list > li::after {
          background: linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%);
          border-radius: 1rem 1rem 0 1rem;
          content: "";
          height: 3rem;
          left: -1rem;
          overflow: hidden;
          position: absolute;
          top: -1rem;
          width: 3rem;
        }

        ol.gradient-list > li::before {
          align-items: flex-end;
          content: counter(gradient-counter);
          color: #1d1f20;
          display: flex;
          font: 900 1.5em/1 "Montserrat";
          justify-content: flex-end;
          padding: 0.125em 0.25em;
          z-index: 1;
        }

        ol.gradient-list > li:nth-child(10n + 1):before {
          background: linear-gradient(
            135deg,
            rgba(162, 237, 86, 0.2) 0%,
            rgba(253, 220, 50, 0.2) 100%
          );
        }

        ol.gradient-list > li:nth-child(10n + 2):before {
          background: linear-gradient(
            135deg,
            rgba(162, 237, 86, 0.4) 0%,
            rgba(253, 220, 50, 0.4) 100%
          );
        }

        ol.gradient-list > li:nth-child(10n + 3):before {
          background: linear-gradient(
            135deg,
            rgba(162, 237, 86, 0.6) 0%,
            rgba(253, 220, 50, 0.6) 100%
          );
        }

        ol.gradient-list > li:nth-child(10n + 4):before {
          background: linear-gradient(
            135deg,
            rgba(162, 237, 86, 0.8) 0%,
            rgba(253, 220, 50, 0.8) 100%
          );
        }

        ol.gradient-list > li:nth-child(10n + 5):before {
          background: linear-gradient(135deg, #a2ed56 0%, #fddc32 100%);
        }

        ol.gradient-list > li:nth-child(10n + 6):before {
          background: linear-gradient(
            135deg,
            rgba(162, 237, 86, 0.8) 0%,
            rgba(253, 220, 50, 0.8) 100%
          );
        }

        ol.gradient-list > li:nth-child(10n + 7):before {
          background: linear-gradient(
            135deg,
            rgba(162, 237, 86, 0.6) 0%,
            rgba(253, 220, 50, 0.6) 100%
          );
        }

        ol.gradient-list > li:nth-child(10n + 8):before {
          background: linear-gradient(
            135deg,
            rgba(162, 237, 86, 0.4) 0%,
            rgba(253, 220, 50, 0.4) 100%
          );
        }

        ol.gradient-list > li:nth-child(10n + 9):before {
          background: linear-gradient(
            135deg,
            rgba(162, 237, 86, 0.2) 0%,
            rgba(253, 220, 50, 0.2) 100%
          );
        }

        ol.gradient-list > li:nth-child(10n + 10):before {
          background: linear-gradient(
            135deg,
            rgba(162, 237, 86, 0) 0%,
            rgba(253, 220, 50, 0) 100%
          );
        }

        ol.gradient-list > li + li {
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .countdown-image__image {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
