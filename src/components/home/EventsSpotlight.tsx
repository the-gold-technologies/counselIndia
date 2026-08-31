"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function EventsSpotlight() {
  const events = [
    {
      id: 1,
      title: "Counselor Se Charcha",
      date: "19th Feb 2023",
      location: "Noida",
      image: "https://prod-s3.counselindia.com/images/event/counselor_se_charcha.jpg",
      slug: "counselor-se-charcha",
    },
    {
      id: 2,
      title: "Counselor Se Charcha (Special Chapter)",
      date: "05th Mar 2023",
      location: "Delhi NCR",
      image: "https://prod-s3.counselindia.com/images/event/counselor_se_charcha1.jpg",
      slug: "counselor-se-charcha-delhi",
    },
    {
      id: 3,
      title: "Psychology Practitioners Meetup",
      date: "25th Apr 2023",
      location: "Online / Virtual",
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/cover22_1730113051.png",
      slug: "psychology-practitioners-meetup",
    },
  ];

  useEffect(() => {
    let swiperInstance: any = null;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".events-spotlight-active .swiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          autoplay: { delay: 3000, disableOnInteraction: false },
          speed: 1000,
          navigation: {
            nextEl: ".events-spotlight-active .swiper-button-next",
            prevEl: ".events-spotlight-active .swiper-button-prev",
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 15 },
            576: { slidesPerView: 2, spaceBetween: 20 },
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
    <div className="event-section section-padding-01 bg-white">
      <div className="container custom-container">
        <div className="row gy-10 align-items-center">
          {/* Section Title Left Start */}
          <div className="col-xl-3 col-lg-5 col-md-6 col-sm-7">
            <div className="section-title mb-0 pe-lg-8">
              <h4 className="section-title__sub-title">EVENTS</h4>
              <h2 className="section-title__title-02">
                <br /> <mark>Events Spotlight</mark>
              </h2>
              <p className="mt-2 text-muted">
                Stay updated and enroll in our events and workshops for continuous learning and exposure
              </p>
            </div>

            <div className="section-btn mt-4">
              <Link href="/event" className="btn btn-light btn-hover-primary px-4 py-2 font-size-14 fw-semibold">
                View all
              </Link>
            </div>
          </div>
          {/* Section Title Left End */}

          {/* Event Active Right Start */}
          <div className="col-xl-9">
            <div className="event-active events-spotlight-active swiper-button-style position-relative">
              <div className="swiper">
                <div className="swiper-wrapper py-2">
                  {events.map((e) => (
                    <div className="swiper-slide h-auto" key={e.id}>
                      {/* Event Item Start */}
                      <div className="event-item bg-white rounded-3 shadow-sm overflow-hidden d-flex flex-column h-100">
                        <div className="event-item__image">
                          <Link href={`/event/${e.slug}`} className="d-block overflow-hidden" style={{ height: "186px" }}>
                            <img
                              src={e.image}
                              alt={e.title}
                              width="330"
                              height="186"
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

                        <div
                          className="event-item__content text-center p-4 d-flex flex-column justify-content-between flex-grow-1"
                          style={{ backgroundColor: "#f8f8f8" }}
                        >
                          <div>
                            <span className="event-item__date text-success font-size-13 fw-semibold d-block mb-1">
                              {e.date}
                            </span>
                            <h3 className="event-item__title font-size-16 fw-bold mb-2" style={{ minHeight: "44px" }}>
                              <Link href={`/event/${e.slug}`} className="text-dark text-decoration-none hover-text-primary">
                                {e.title}
                              </Link>
                            </h3>
                            <p className="event-item__location font-size-13 text-muted mb-3">
                              <i className="far fa-map-marker-alt me-1"></i> {e.location}
                            </p>
                          </div>

                          <Link
                            href={`/event/${e.slug}`}
                            className="btn btn-2 btn-primary btn-hover-primary mt-3 w-100 font-size-14 py-2"
                            style={{
                              backgroundColor: "#07a64b",
                              borderColor: "#07a64b",
                              color: "#fff",
                            }}
                          >
                            Know more
                          </Link>
                        </div>
                      </div>
                      {/* Event Item End */}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div
                className="swiper-button-next d-none d-md-flex align-items-center justify-content-center"
                style={{
                  position: "absolute",
                  right: "-20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                  color: "#333",
                  zIndex: 10,
                  cursor: "pointer",
                }}
              >
                <i className="fas fa-chevron-right font-size-14"></i>
              </div>
              <div
                className="swiper-button-prev d-none d-md-flex align-items-center justify-content-center"
                style={{
                  position: "absolute",
                  left: "-20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#fff",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                  color: "#333",
                  zIndex: 10,
                  cursor: "pointer",
                }}
              >
                <i className="fas fa-chevron-left font-size-14"></i>
              </div>
            </div>
          </div>
          {/* Event Active Right End */}
        </div>
      </div>
    </div>
  );
}
