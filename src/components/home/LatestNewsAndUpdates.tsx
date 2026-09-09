"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function LatestNewsAndUpdates() {
  const newsList = [
    {
      id: 1,
      image: "https://prod-s3.counselindia.com/news/Untitled%20design%20(25)_1719390395.png",
      date: "24 Jun 2024",
      title: "Examining Ways to Promote a Healthy and Safe Work Environment for Employees",
      link: "https://businessnewsthisweek.com/news/examining-ways-to-promote-a-healthy-and-safe-work-environment-for-employees/",
    },
    {
      id: 2,
      image: "https://prod-s3.counselindia.com/news/Untitled%20design%20(4)_1752639280.png",
      date: "15 Jul 2025",
      title: "Counsel India empowers 10,000+ professionals, aims to become India's largest psychology learning platform",
      link: "https://ncrexpressnews.com/counsel-india-set-a-target-to-become-100000-professionals/",
    },
    {
      id: 3,
      image: "https://prod-s3.counselindia.com/news/Untitled%20design%20(11)_1728455491.png",
      date: "08 Oct 2024",
      title: "Counsel India Partners with Galgotias University to Launch UGC-Approved Psychology Programs",
      link: "https://taasir.com/2024/10/counsel-india-partners-with-galgotias-university-to-launch-ugc-approved-psychology-programs/#:~:text=Counsel%20India%20will%20now%20provide%20UGC-approved%20psychology%20programs%20as%20part",
    },
    {
      id: 4,
      image: "https://prod-s3.counselindia.com/news/Untitled%20design_1720768645_1725625604.png",
      date: "05 Sep 2024",
      title: "Is Counsel India a scam?",
      link: "https://www.passionateinmarketing.com/is-counsel-india-a-scam/",
    },
    {
      id: 5,
      image: "https://prod-s3.counselindia.com/news/passionate%20(1)_1720767393.png",
      date: "11 Jul 2024",
      title: "The Path to Becoming a Counsellor: Examining Career Options in Different Specialisations",
      link: "https://www.aajtakcampus.in/news/the-path-to-becoming-a-counsellor-examining-career-options-in-different-specialisations",
    },
    {
      id: 6,
      image: "https://prod-s3.counselindia.com/news/WhatsApp%20Image%202024-07-12%20at%2012.00.55_1720766201.jpeg",
      date: "10 Jul 2024",
      title: "News from the world of education - July 4, 2024",
      link: "https://www.thehindu.com/education/news-from-the-world-of-education-july-4-2024/article68366397.ece",
    },
    {
      id: 7,
      image: "https://prod-s3.counselindia.com/news/Untitled%20design%20(27)_1719390817.png",
      date: "13 Jun 2024",
      title: "Examining Ways to Promote a Healthy and Safe Work Environment for Employees",
      link: "https://taasir.com/2024/06/examining-ways-to-promote-a-healthy-and-safe-work-environment-for-employees/?lang=English#google_vignette",
    },
  ];

  useEffect(() => {
    let swiperInstance: any = null;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        if (swiperInstance) {
          try {
            swiperInstance.destroy(true, true);
          } catch (e) {}
        }
        swiperInstance = new (window as any).Swiper(".testimonial-active-02 .swiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          observer: true,
          observeParents: true,
          watchSlidesProgress: true,
          speed: 800,
          pagination: {
            el: ".testimonial-active-02 .swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 30 },
          },
        });
      }
    };
    init();
    const t = setTimeout(init, 400);
    return () => {
      clearTimeout(t);
      if (swiperInstance?.destroy) swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <div className="blog-section-02 section-padding-02 py-5 bg-white">
      <div className="container custom-container">
        {/* Section Title */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="section-title">
              <h2 className="section-title__title font-size-36 fw-bold">
                <mark>Latest News and Updates</mark>
              </h2>
            </div>
          </div>
        </div>

        {/* News Cards Carousel */}
        <div className="col-xl-12" style={{ marginBottom: "5%" }}>
          <div className="testimonial-active-02 swiper-dots-style position-relative">
            <div className="swiper">
              <div className="swiper-wrapper py-2">
                {newsList.map((item) => (
                  <div className="swiper-slide h-auto" key={item.id}>
                    <div
                      className="blog-item-02 h-100 d-flex flex-column bg-white overflow-hidden w-100"
                      style={{
                        borderRadius: "10px",
                        border: "1.5px solid #000000",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.04)",
                        transition: "all 0.3s ease",
                        width: "100%",
                      }}
                    >
                      {/* Card Header Media - Enforced Consistent Width & Height */}
                      <div
                        className="blog-item-02__image overflow-hidden"
                        style={{
                          height: "220px",
                          width: "100%",
                          position: "relative",
                        }}
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-block w-100 h-100 overflow-hidden"
                          style={{ width: "100%", height: "220px" }}
                        >
                          <img
                            src={item.image}
                            alt="psychology news"
                            className="grid-item-image"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                              transition: "transform 0.5s ease",
                            }}
                          />
                        </a>
                      </div>

                      {/* Card Content */}
                      <div
                        className="blog-item-02__content p-4 d-flex flex-column justify-content-between flex-grow-1"
                        style={{ backgroundColor: "#ffffff" }}
                      >
                        <div>
                          {/* Published Date */}
                          <div className="blog-item-02__meta mb-2">
                            <span
                              className="meta-action text-muted"
                              style={{
                                fontSize: "13px",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                              }}
                            >
                              <i className="far fa-calendar"></i> {item.date}
                            </span>
                          </div>

                          {/* News Title */}
                          <h3
                            className="blog-item-02__title mb-3"
                            style={{
                              fontSize: "16px",
                              fontWeight: 700,
                              lineHeight: "1.5",
                              minHeight: "48px",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-dark text-decoration-none hover-text-primary"
                              style={{ color: "#222736" }}
                            >
                              {item.title}
                            </a>
                          </h3>
                        </div>

                        {/* Read More Button */}
                        <div>
                          <a
                            className="blog-item-02__more btn btn-light btn-hover-white"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.link}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              lineHeight: "1",
                            }}
                          >
                            Read More <i className="fal fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="swiper-pagination text-center mt-4"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-active-02 .swiper-slide {
          height: auto !important;
          display: flex !important;
          box-sizing: border-box !important;
        }
        .testimonial-active-02 .blog-item-02 {
          width: 100% !important;
          max-width: 100% !important;
          box-sizing: border-box !important;
        }
        .blog-item-02:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }
        .blog-item-02:hover .blog-item-02__image img {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}
