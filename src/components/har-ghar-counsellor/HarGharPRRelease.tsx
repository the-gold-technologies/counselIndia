"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function HarGharPRRelease() {
  const row1 = [
    {
      id: 1,
      day: "28",
      month: "AUG",
      source: "Biz News Desk",
      title: "From Vision to Reality: How Counsel India, Helping Hands....",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/counsel%20india%20NEWS%201_1725106712.png",
      link: "https://biznewsdesk.com/business/from-vision-to-reality-how-counsel-india-helping-hands/",
      isExternal: true,
      defaultHover: false,
    },
    {
      id: 2,
      day: "7",
      month: "AUG",
      source: "PNI News",
      title: "Counsel India hosted their convocation ceremony and....",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/counsel%20india%20NEWS%202_1725106735.png",
      link: "https://pninews.in/Counsel-India-hosted-their-convocation-ceremony-and-joined-hands-with-educational-institutions-corporations-and-NGOs-to-work-together-at-ground-zero-for-the-mental-well-being-of-society",
      isExternal: true,
      defaultHover: true,
    },
    {
      id: 3,
      day: "08",
      month: "JUN",
      source: "Content Media Solution",
      title: "Counsel India and Medhavi Skill University join.....",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/counsel%20india%20NEWS%203_1725106746.png",
      link: "https://contentmediasolution.com/business/counsel-india-and-medhavi-skill-university-join-hands-to-foster-skill-development-opportunities-unveils-pragati-2024/",
      isExternal: true,
      defaultHover: false,
    },
  ];

  const row2 = [
    {
      id: 4,
      day: "28",
      month: "APR",
      source: "CCN",
      title: "Sunny Hinduja Joins Counsel India to Champion.....",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/counsel%20india%20NEWS%204_1725106757.png",
      link: "https://www.chandigarhcitynews.com/sunny-hinduja-joins-counsel-india-to-champion-mental-wellness-among-youth/",
      isExternal: true,
      defaultHover: false,
    },
    {
      id: 5,
      day: "17",
      month: "MAY",
      source: "Youtube",
      title: "Pragati 2024 Partnership of MSU & Council India...",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/counsel%20india%20NEWS%205_1725106766.png",
      link: "https://www.youtube.com/watch?v=7WHm2cpDmjA",
      isExternal: true,
      defaultHover: true,
    },
    {
      id: 6,
      day: "",
      month: "",
      source: "Explore more about us",
      title: "",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/Counsel%20India%20News%20Section_1725108691.jpg",
      link: "/about",
      isExternal: false,
      defaultHover: false,
    },
  ];

  return (
    <div className="pr-release-section py-5 bg-white">
      <div className="container custom-container py-4">
        {/* Title */}
        <div className="text-center mb-5">
          <h2
            className="section-title__title-02"
            style={{
              fontSize: "clamp(34px, 4.2vw, 44px)",
              fontWeight: 700,
              fontFamily:
                "Georgia, 'Playfair Display', 'Times New Roman', serif",
              color: "#07a64b",
              letterSpacing: "-0.5px",
            }}
          >
            PR release screengrabs
          </h2>
        </div>

        {/* Row 1 */}
        <div className="figure-container mb-4">
          {row1.map((item) => (
            <SnipCard key={item.id} item={item} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="figure-container">
          {row2.map((item) => (
            <SnipCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .figure-container {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .snip1529 {
          background-color: #000000;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
          color: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
          font-size: 16px;
          line-height: 1.6em;
          margin: 0;
          flex: 1 1 calc(33.333% - 20px);
          max-width: calc(33.333% - 20px);
          min-width: 260px;
          overflow: hidden;
          position: relative;
          text-align: left;
          height: 480px;
          box-sizing: border-box;
          border-radius: 4px;
        }

        .snip1529 * {
          box-sizing: border-box;
          transition: all 0.25s ease;
        }

        .snip1529 .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: relative;
          opacity: 0.82;
          display: block;
        }

        .snip1529 figcaption {
          padding: 25px 20px;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.65);
          z-index: 1;
        }

        .snip1529 .date {
          background-color: #ffffff;
          color: #111827;
          font-size: 18px;
          font-weight: 800;
          min-height: 48px;
          min-width: 48px;
          padding: 8px 10px;
          position: absolute;
          right: 15px;
          text-align: center;
          text-transform: uppercase;
          top: 0;
          z-index: 2;
        }

        .snip1529 .date span {
          display: block;
          line-height: 14px;
        }

        .snip1529 .date .month {
          font-size: 11px;
          margin-top: 2px;
        }

        .snip1529 .hover-overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          align-items: center;
          background-color: rgba(236, 188, 46, 0.82);
          display: flex;
          justify-content: center;
          opacity: 0;
          z-index: 2;
        }

        /* Hover states */
        .snip1529:hover .hover-overlay,
        .snip1529.active-hover .hover-overlay {
          opacity: 1;
          transition-delay: 0.05s;
        }

        .snip1529:hover figcaption,
        .snip1529.active-hover figcaption {
          opacity: 0;
        }

        .snip1529:hover .date,
        .snip1529.active-hover .date {
          transform: translateY(-100%);
        }

        @media (max-width: 992px) {
          .snip1529 {
            flex: 1 1 calc(50% - 20px);
            max-width: calc(50% - 20px);
          }
        }

        @media (max-width: 768px) {
          .figure-container {
            flex-direction: column;
            align-items: center;
          }
          .snip1529 {
            flex: 1 1 100%;
            max-width: 100%;
            margin-bottom: 20px;
            height: 420px;
          }
        }
      `}</style>
    </div>
  );
}

function SnipCard({
  item,
}: {
  item: {
    id: number;
    day: string;
    month: string;
    source: string;
    title: string;
    image: string;
    link: string;
    isExternal: boolean;
    defaultHover: boolean;
  };
}) {
  const [isHovered, setIsHovered] = useState(item.defaultHover);

  const content = (
    <figure
      className={`snip1529 ${isHovered ? "active-hover" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(item.defaultHover)}
    >
      <img src={item.image} alt={item.source} className="card-img" />

      {item.day && (
        <div className="date">
          <span className="day">{item.day}</span>
          <span className="month">{item.month}</span>
        </div>
      )}

      <figcaption>
        <h3
          style={{
            color: "rgb(49, 204, 70)",
            fontSize: "20px",
            fontWeight: 800,
            marginBottom: "6px",
          }}
        >
          {item.source}
        </h3>
        {item.title && (
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.5",
              color: "#ffffff",
              margin: 0,
            }}
          >
            {item.title}
          </p>
        )}
      </figcaption>

      {/* Gold Yellow Hover Overlay with External Link Icon */}
      <div className="hover-overlay">
        <svg
          width="58"
          height="58"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </div>
    </figure>
  );

  if (item.isExternal) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="d-contents text-decoration-none"
        style={{ display: "contents" }}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={item.link}
      className="d-contents text-decoration-none"
      style={{ display: "contents" }}
    >
      {content}
    </Link>
  );
}
