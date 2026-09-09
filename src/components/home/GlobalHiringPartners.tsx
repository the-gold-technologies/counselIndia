"use client";
import React from "react";
import Link from "next/link";

export default function GlobalHiringPartners() {
  const hiringPartners = [
    {
      id: 1,
      href: "/hiring-partner/minds",
      image: "https://prod-s3.counselindia.com/hiring_partners/Screenshot 2024-07-13 at 11.01.14 AM_1720849487.png",
      alt: "Minds",
    },
    {
      id: 2,
      href: "/hiring-partner/iexplain-education-pvt-ltd",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_explain_1691568875.png",
      alt: "IExplain Education",
    },
    {
      id: 3,
      href: "/hiring-partner/find-hope",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_hope_1691568818.png",
      alt: "Find Hope",
    },
    {
      id: 4,
      href: "/hiring-partner/manav-foundation",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_MF Logo JPG (1)_1706359165.jpg",
      alt: "Manav Foundation",
    },
    {
      id: 5,
      href: "/hiring-partner/shining-youth-foundation",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_SYF Logo - Copy_1703745072.JPG",
      alt: "Shining Youth Foundation",
    },
    {
      id: 6,
      href: "/hiring-partner/firstvite-e-learning-pvt-ltd",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_WhatsApp_Image_2023-07-31_at_11.45.32_AM-removebg-preview_1690784289.png",
      alt: "Firstvite E-Learning",
    },
    {
      id: 7,
      href: "/hiring-partner/adventure-flight-education-private-limited",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_news_logo2_1689053141_1708927422_1715323913.png",
      alt: "Adventure Flight Education",
    },
    {
      id: 8,
      href: "/hiring-partner/my-career-pathshala",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_my-career-pathshala (1)_1686290177_1715326236.jpg",
      alt: "My Career Pathshala",
    },
    {
      id: 9,
      href: "/hiring-partner/uk-international-beauty-school",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_UK INTERNATIONAL BEAUTY SCHOOL_1690778864.jpg",
      alt: "UK International Beauty School",
    },
    {
      id: 10,
      href: "/hiring-partner/saadhak-foundation",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_black logo_1706359212.png",
      alt: "Saadhak Foundation",
    },
    {
      id: 11,
      href: "/hiring-partner/pehchaan",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_Pehchaan (1)_1707722290.png",
      alt: "Pehchaan",
    },
    {
      id: 12,
      href: "/hiring-partner/educlouds",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_Logo Educlouds (1)_1707722328_1715324005.png",
      alt: "Educlouds",
    },
    {
      id: 13,
      href: "/hiring-partner/the-peace-lab",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_The Peace Lab_1690778780.webp",
      alt: "The Peace Lab",
    },
    {
      id: 14,
      href: "/hiring-partner/traident-brains-pvt-ltd",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_cropped-traident-logo-illustration-2-1_1689053556_1715324116.png",
      alt: "Traident Brains",
    },
    {
      id: 15,
      href: "/hiring-partner/the-mind-and-wellness-clinic",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_The Mind and Wellness Clinic_1703744904_1715325965.png",
      alt: "The Mind and Wellness Clinic",
    },
    {
      id: 16,
      href: "/hiring-partner/educounsoullers",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_Educounsellors_1690780582_1715322524.jpg",
      alt: "Educounsellors",
    },
    {
      id: 17,
      href: "/hiring-partner/jan-elaaj",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_jain_1702555646_1715326139.png",
      alt: "Jan Elaaj",
    },
    {
      id: 18,
      href: "/hiring-partner/safal-teaching-training",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_safal_1691568529.png",
      alt: "Safal Teaching Training",
    },
    {
      id: 19,
      href: "/hiring-partner/unique-consulting-services",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_WhatsApp_Image_2023-07-31_at_11.37.18_AM-removebg-preview_1690783719.png",
      alt: "Unique Consulting Services",
    },
    {
      id: 20,
      href: "/hiring-partner/jagatmitra-foundation",
      image: "https://prod-s3.counselindia.com/hiring_partners/news_Jagatmitra Foundation _1702555785.png",
      alt: "Jagatmitra Foundation",
    },
  ];

  // Triplicate array for smooth infinite continuous scrolling
  const marqueePartners = [...hiringPartners, ...hiringPartners, ...hiringPartners];

  return (
    <div className="partners-seaction section-padding-02 bg-white py-5">
      <div className="container custom-container">
        <div className="row mb-4">
          <div className="col-sm-12">
            {/* Section Title Start */}
            <div className="section-title">
              <h2 className="section-title__title font-size-36 fw-bold">
                Our Global Hiring Partner <mark>Network</mark>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        {/* Infinite Marquee Slider Container - Inside Container */}
        <div className="hiring-marquee-container position-relative w-100 overflow-hidden py-2">
          <div className="hiring-marquee-track d-flex align-items-center gap-4">
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="hiring-marquee-item flex-shrink-0"
                style={{
                  width: "141px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",
                }}
              >
                <Link
                  href={partner.href}
                  className="text-decoration-none d-flex align-items-center justify-content-center w-100 h-100"
                >
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    style={{
                      width: "141px",
                      height: "auto",
                      maxHeight: "80px",
                      objectFit: "contain",
                      display: "block",
                      transition: "transform 0.3s ease",
                    }}
                    className="hover-scale"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hiring-marquee-container {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 3%,
            black 97%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 3%,
            black 97%,
            transparent
          );
        }

        .hiring-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: hiring-scroll 38s linear infinite;
        }

        .hiring-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes hiring-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        .hiring-marquee-item:hover {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
