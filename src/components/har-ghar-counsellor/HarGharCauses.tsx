"use client";
import React from "react";

export default function HarGharCauses() {
  const causes = [
    {
      title: "Free Counselling Centers in Ziro and Beyond",
      desc: "Personalized counselling support in remote areas, starting from the heart of Ziro.",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/IMG_20181001_101123%20(1)_1725103458.jpg",
    },
    {
      title: "Community Mental Health Awareness Drives",
      desc: "Impactful initiatives in universities and govt. schools to raise mental health awareness and support.",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/DSC_1027_1725103580.JPG",
    },
    {
      title: "Mental Health Conferences and Workshops",
      desc: "Interactive events fostering dialogue and finding personalized solutions to mental health challenges.",
      image:
        "https://prod-s3.counselindia.com/mastergalaxyimages/DSC_3284_1725103530.JPG",
    },
  ];

  return (
    <div
      className="blog-section py-5 bg-white"
      style={{ paddingTop: "70px", paddingBottom: "80px" }}
    >
      <div className="container custom-container">
        {/* Title */}
        <div className="section-title text-center mb-5 pb-2">
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
            Our causes
          </h2>
        </div>

        {/* 3 Cause Cards matching PHP .blog-item-02 */}
        <div className="row gy-4 justify-content-center">
          {causes.map((item, idx) => (
            <div key={idx} className="col-xl-4 col-md-6 col-12">
              <div
                className="blog-item-02 bg-white rounded-2 overflow-hidden h-100 d-flex flex-column"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 6px 22px rgba(0, 0, 0, 0.06)",
                  border: "1px solid #f1f5f9",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                {/* 211px Image */}
                <div
                  className="blog-item-02__image position-relative overflow-hidden w-100"
                  style={{ height: "211px" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={370}
                    height={211}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                    }}
                  />
                </div>

                {/* Content */}
                <div className="blog-item-02__content p-4 d-flex flex-column flex-grow-1">
                  <h3
                    className="blog-item-02__title mb-3"
                    style={{
                      fontSize: "19px",
                      fontWeight: 700,
                      fontFamily:
                        "Georgia, 'Playfair Display', 'Times New Roman', serif",
                      color: "#1e293b",
                      lineHeight: "1.35",
                      minHeight: "52px",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14.5px",
                      lineHeight: "1.65",
                      color: "#475569",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .blog-item-02:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.09) !important;
        }
        .blog-item-02:hover .blog-item-02__image img {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
}
