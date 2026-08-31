"use client";
import React from "react";
import Link from "next/link";

export default function NewsInFocus() {
  const newsItems = [
    {
      id: 1,
      title: "The Rise of Practical Psychology & Mental Healthcare in India",
      date: "15 Oct 2024",
      author: "Counsel India Editorial",
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/cover22_1730113051.png",
      slug: "rise-of-practical-psychology",
      category: "Mental Health",
    },
    {
      id: 2,
      title: "How Cognitive Behavioural Therapy is Transforming Modern Counseling",
      date: "02 Nov 2024",
      author: "Dr. Ayushi Madaan",
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/second-cover_converted.webp",
      slug: "cbt-transforming-counseling",
      category: "Psychology Insights",
    },
    {
      id: 3,
      title: "Why Continuous Professional Development Matters for Psychologists",
      date: "18 Nov 2024",
      author: "Counsel India Research",
      image: "https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/mastergalaxyimages/coverr_converted.webp",
      slug: "professional-development-psychologists",
      category: "Career & Education",
    },
  ];

  return (
    <>
      {/* 1. Counsel India inFocus */}
      <div className="partners-seaction section-padding-02 bg-white">
        <div className="container custom-container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title mb-4">
                <h2 className="section-title__title">
                  Counsel India in<mark>Focus</mark>
                </h2>
              </div>
            </div>
          </div>

          <div className="partners-active swiper-dots-style">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div
                  className="partner-logo p-2 d-inline-block"
                  style={{
                    borderRadius: "4px",
                    overflow: "hidden",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div className="partner-logo__logo">
                    <img
                      src="/assets/images/partners-logo/client_logo.jpg"
                      alt="Psychology News"
                      style={{
                        maxHeight: "65px",
                        width: "auto",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Latest News and Updates */}
      <div className="blog-section section-padding-01 bg-color-13">
        <div className="container custom-container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-5">
            <div>
              <h4 className="section-title__sub-title text-success font-size-14 fw-bold mb-2">
                NEWS &amp; MEDIA
              </h4>
              <h2 className="section-title__title-02 font-size-32 lh-sm mb-0">
                Latest News &amp; <mark>Media Updates</mark>
              </h2>
            </div>
            <div className="mt-3 mt-md-0">
              <Link href="/news" className="btn btn-light btn-hover-primary px-4 py-2 font-size-14 fw-semibold">
                View all Media <i className="fas fa-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>

          <div className="row gy-8 g-4">
            {newsItems.map((item) => (
              <div className="col-lg-4 col-md-6" key={item.id}>
                <div className="blog-item-02 bg-white rounded-3 shadow-sm overflow-hidden h-100 d-flex flex-column">
                  <div className="blog-item-02__image overflow-hidden" style={{ height: "200px" }}>
                    <Link href={`/news/${item.slug}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 0.5s ease",
                        }}
                      />
                    </Link>
                  </div>
                  <div className="blog-item-02__content p-4 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2 font-size-12 text-muted">
                        <span className="badge bg-success-subtle text-success px-2 py-1">
                          {item.category}
                        </span>
                        <span>{item.date}</span>
                      </div>
                      <h3 className="blog-item-02__title font-size-16 fw-bold mb-3" style={{ lineHeight: "1.5" }}>
                        <Link href={`/news/${item.slug}`} className="text-dark hover-text-primary text-decoration-none">
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="pt-3 border-top d-flex justify-content-between align-items-center">
                      <span className="font-size-12 text-muted">By {item.author}</span>
                      <Link href={`/news/${item.slug}`} className="text-success font-size-13 fw-semibold text-decoration-none">
                        Read Story <i className="fas fa-arrow-right ms-1 font-size-11"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
