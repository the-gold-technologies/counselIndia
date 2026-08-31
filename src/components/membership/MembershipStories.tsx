"use client";
import React from "react";

export default function MembershipStories() {
  const stories = [
    {
      name: "Shruti",
      quote:
        "“I often struggle with my confidence. I get insecure with people and this membership gave me tools to firstly get aware of my negative emotions and their root cause. With its tools like handy workbook and Psychology book recommendation I can manage them and become a better version of myself all at an affordable price.”",
    },
    {
      name: "Akash",
      quote:
        "“After joining Counsel India membership, I have transformed my lifestyle. Just like I go to the gym every day, I practice mindfulness with the well-being routine that I get on this membership. I am addicted to this wonderful routine that makes me feel liberated, energized, and happy, enhancing my overall quality of life significantly.”",
    },
    {
      name: "Megha",
      quote:
        "“I suffer from Generalized Anxiety Disorder, and staying in the moment becomes so difficult for me. My therapist recommended a consistent mental health routine, including some well-being activities. Joining this membership helps me track my progress and keeps me motivated and focused.”",
    },
    {
      name: "Vedh",
      quote:
        "“Since I have joined this membership, every time life throws a challenge at me, I am better prepared to tackle it. I don’t panic like I used to. This emotional health routine has helped me become a calmer individual. The best part is I can track my progress with the assessments provided here by experienced psychologists”",
    },
  ];

  return (
    <>
      <div className="test-main">
        <div className="container custom-container">
          <div className="section-title text-center mb-4">
            <h2 className="section-title__title-03" style={{ fontSize: "40px", fontWeight: 700, color: "#1a2638" }}>
              Personal Stories Straight from the Heart
            </h2>
          </div>

          <div className="container-test d-flex flex-wrap justify-content-center">
            {stories.map((s, idx) => (
              <figure className="snip1533" key={idx}>
                <figcaption>
                  <blockquote>
                    <p>{s.quote}</p>
                  </blockquote>
                  <h3>{s.name}</h3>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="text-center mt-4">
            <img
              style={{ maxWidth: "100%", height: "auto" }}
              src="https://prod-s3.counselindia.com/mastergalaxyimages/test112233_1726050926.png"
              alt="Community member highlights"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .test-main {
          background-color: #e6f0e2;
          padding-top: 5%;
          padding-bottom: 4%;
          width: 100%;
          box-sizing: border-box;
        }

        .container-test {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
          margin-top: 30px;
        }

        .snip1533 {
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);
          color: #000000;
          display: inline-block;
          font-family: "Roboto", Arial, sans-serif;
          font-size: 13px;
          margin: 15px 8px;
          max-width: 275px;
          min-width: 240px;
          position: relative;
          text-align: center;
          background-color: #ffffff;
          border-radius: 5px;
          border-top: 5px solid #1c9709;
          flex: 1 1 240px;
        }

        .snip1533 figcaption {
          padding: 12% 10% 10%;
          display: flex;
          flex-direction: column;
          height: 100%;
          justify-content: space-between;
        }

        .snip1533 h3 {
          color: #3c3c3c;
          font-size: 20px;
          font-weight: 400;
          line-height: 24px;
          margin: 15px 0 0;
          font-family: "Roboto", Arial, sans-serif;
        }

        .snip1533 blockquote {
          font-style: italic;
          font-weight: 300;
          color: #212529;
          line-height: 1.6;
          margin: 0;
          font-size: 13.5px;
        }

        @media (max-width: 768px) {
          .snip1533 {
            max-width: 100%;
            margin: 10px 0;
          }
        }
      `}</style>
    </>
  );
}
