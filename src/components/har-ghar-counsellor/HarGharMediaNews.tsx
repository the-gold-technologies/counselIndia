"use client";
import React from "react";
import Link from "next/link";

export default function HarGharMediaNews() {
  const newsItems = [
    {
      day: "28",
      month: "AUG",
      source: "Biz News Desk",
      title: "From Vision to Reality: How Counsel India, Helping Hands....",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/counsel%20india%20NEWS%201_1725106712.png",
      link: "https://biznewsdesk.com/business/from-vision-to-reality-how-counsel-india-helping-hands/",
      isExternal: true,
    },
    {
      day: "7",
      month: "AUG",
      source: "PNI News",
      title: "Counsel India hosted their convocation ceremony and....",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/counsel%20india%20NEWS%202_1725106735.png",
      link: "https://pninews.in/Counsel-India-hosted-their-convocation-ceremony-and-joined-hands-with-educational-institutions-corporations-and-NGOs-to-work-together-at-ground-zero-for-the-mental-well-being-of-society",
      isExternal: true,
    },
    {
      day: "08",
      month: "JUN",
      source: "Content Media Solution",
      title: "Counsel India and Medhavi Skill University join.....",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/counsel%20india%20NEWS%203_1725106746.png",
      link: "https://contentmediasolution.com/business/counsel-india-and-medhavi-skill-university-join-hands-to-foster-skill-development-opportunities-unveils-pragati-2024/",
      isExternal: true,
    },
    {
      day: "28",
      month: "APR",
      source: "CCN",
      title: "Sunny Hinduja Joins Counsel India to Champion.....",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/counsel%20india%20NEWS%204_1725106757.png",
      link: "https://www.chandigarhcitynews.com/sunny-hinduja-joins-counsel-india-to-champion-mental-wellness-among-youth/",
      isExternal: true,
    },
    {
      day: "17",
      month: "MAY",
      source: "Youtube",
      title: "Pragati 2024 Partnership of MSU & Council India...",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/counsel%20india%20NEWS%205_1725106766.png",
      link: "https://www.youtube.com/watch?v=7WHm2cpDmjA",
      isExternal: true,
    },
    {
      day: "",
      month: "",
      source: "Explore more about us",
      title: "Learn more about our core philosophy and our founders.",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/Counsel%20India%20News%20Section_1725108691.jpg",
      link: "/about",
      isExternal: false,
    },
  ];

  return (
    <div className="media-section py-5" style={{ backgroundColor: "#f8fafc" }}>
      <div className="container custom-container py-4">
        {/* Section Title */}
        <div className="text-center mb-5">
          <h2
            style={{
              fontSize: "clamp(30px, 3.8vw, 42px)",
              fontWeight: 800,
              fontFamily: "Georgia, 'Playfair Display', serif",
              color: "#1e293b",
            }}
          >
            News &amp; Media Coverage
          </h2>
        </div>

        {/* 6 News Cards */}
        <div className="row gy-4">
          {newsItems.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              {item.isExternal ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news-card-link text-decoration-none d-block h-100"
                >
                  <NewsCardContent item={item} />
                </a>
              ) : (
                <Link
                  href={item.link}
                  className="news-card-link text-decoration-none d-block h-100"
                >
                  <NewsCardContent item={item} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .news-card-link {
          transition: transform 0.25s ease;
        }
        .news-card-link:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
}

function NewsCardContent({
  item,
}: {
  item: {
    day: string;
    month: string;
    source: string;
    title: string;
    image: string;
  };
}) {
  return (
    <div
      className="news-card position-relative rounded-3 overflow-hidden shadow-sm h-100"
      style={{
        backgroundColor: "#000000",
        minHeight: "260px",
        borderRadius: "12px",
      }}
    >
      <img
        src={item.image}
        alt={item.source}
        width={370}
        height={260}
        className="w-100 h-100 position-absolute top-0 start-0"
        style={{
          objectFit: "cover",
          opacity: 0.65,
          transition: "transform 0.4s ease, opacity 0.4s ease",
        }}
      />

      {/* Date Badge */}
      {item.day && (
        <div
          className="date-badge position-absolute top-0 end-0 m-3 bg-white text-dark text-center px-3 py-2 rounded-2 shadow-sm"
          style={{ zIndex: 2, minWidth: "48px" }}
        >
          <span className="d-block font-size-18 fw-bold leading-1">
            {item.day}
          </span>
          <span className="d-block font-size-11 fw-bold text-uppercase text-muted">
            {item.month}
          </span>
        </div>
      )}

      {/* Caption Overlay */}
      <div
        className="caption-overlay position-absolute bottom-0 start-0 w-100 p-4"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 70%, transparent 100%)",
        }}
      >
        <h4
          style={{
            color: "#31cc46",
            fontSize: "18px",
            fontWeight: 700,
            marginBottom: "6px",
          }}
        >
          {item.source}
        </h4>
        <p
          style={{
            color: "#ffffff",
            fontSize: "14px",
            lineHeight: "1.5",
            margin: 0,
            opacity: 0.9,
          }}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
}
