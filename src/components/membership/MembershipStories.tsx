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
        <div className="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="section-title__title-03">
            Personal Stories Straight from the Heart
          </h2>
        </div>

        <div className="container-test">
          {stories.map((s, idx) => (
            <figure className="snip1533" key={idx}>
              <div className="quote-badge">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 512 512"
                  fill="#1c9709"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                </svg>
              </div>
              <figcaption>
                <blockquote>
                  <p>{s.quote}</p>
                </blockquote>
                <h3>{s.name}</h3>
              </figcaption>
            </figure>
          ))}
        </div>

        <img
          className="bottom-image"
          src="https://prod-s3.counselindia.com/mastergalaxyimages/test112233_1726050926.png"
          alt="Community member highlights"
          loading="lazy"
          decoding="async"
        />
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

        .test-main {
          background-color: #E6F0E2;
          padding-top: 5%;
          width: 100%;
          box-sizing: border-box;
          position: relative;
        }

        .test-main .section-title {
          margin-bottom: 37px;
          text-align: center;
        }

        .test-main .section-title__title-03 {
          font-family: "Playfair Display", serif;
          font-weight: 700;
          font-size: 40px;
          line-height: 1.3;
          color: #232937;
          margin: 0;
        }

        .container-test {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1%;
          padding: 0 5%;
          box-sizing: border-box;
        }

        .snip1533 {
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          color: #000000;
          font-family: 'Roboto', Arial, sans-serif;
          font-size: 13px;
          max-width: 290px;
          min-width: 200px;
          margin: 10px;
          position: relative;
          text-align: center;
          width: calc(25% - 20px);
          background-color: #ffffff;
          border-radius: 5px;
          border-top: 5px solid #1c9709;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .snip1533 *,
        .snip1533 *:before {
          box-sizing: border-box;
          transition: all 0.1s ease-out;
        }

        .quote-badge {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .snip1533 figcaption {
          padding: 13% 10% 12%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          flex: 1;
        }

        .snip1533 h3 {
          color: #3c3c3c;
          font-size: 20px;
          font-weight: 300;
          line-height: 24px;
          margin: 10px 0 5px;
          font-family: 'Roboto', Arial, sans-serif;
        }

        .snip1533 blockquote {
          font-style: italic;
          font-weight: 300;
          margin: 0 0 20px;
          color: #000000;
          font-size: 13px;
          line-height: 1.6;
        }

        .snip1533 blockquote p {
          margin: 0;
          font-size: 13px;
          line-height: 1.6;
          font-weight: 300;
          color: #000000;
        }

        .bottom-image {
          display: block;
          margin: 20px auto 0;
          width: auto;
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          .test-main {
            padding-top: 10%;
            padding-bottom: 5%;
          }

          .test-main .section-title__title-03 {
            font-size: 28px;
          }

          .container-test {
            flex-direction: column;
            align-items: center;
          }

          .snip1533 {
            width: 100%;
            max-width: none;
            margin: 25px 0 10px;
          }

          .snip1533 figcaption {
            padding: 10% 5% 10%;
          }

          .quote-badge {
            top: -24px;
            width: 48px;
            height: 48px;
          }

          .quote-badge svg {
            width: 20px;
            height: 20px;
          }

          .snip1533 h3 {
            font-size: 18px;
          }

          .snip1533 blockquote {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
