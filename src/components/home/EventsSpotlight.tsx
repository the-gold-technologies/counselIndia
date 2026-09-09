"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function EventsSpotlight() {
  const events = [
    {
      id: 1,
      badge: "START YOUR CAREER IN PSYCHOLOGY & 5X YOUR GROWTH",
      date: "19th September, 2023",
      location: "Noida",
      image: "https://prod-s3.counselindia.com/mainevent/start-your-career-in-psychology-5x-your-growthcoverimage_1694686111.png",
      link: "/events/skills-required-to-become-a-counsellor",
    },
    {
      id: 2,
      badge: "3-DAY LIVE & ONLINE BOOTCAMP ON SELF-HEALING & LIVE A HAPPY LIFE!",
      date: "Oct 26th - 28th, 2024",
      location: "D-7, Fourth Floor , Sector-3, Noida",
      image: "https://prod-s3.counselindia.com/mainevent/Boot Camp Instagram Post -min (2)_1728624901.jpg",
      link: "/events/3-day-live-online-bootcamp-on-self-healing-live-a-happy-life",
    },
    {
      id: 3,
      badge: "SKILLS REQUIRED TO BECOME A COUNSELLOR",
      date: "September 18th & 19th, 2024",
      location: "D-7, Fourth Floor , Sector-3, Noida",
      image: "https://prod-s3.counselindia.com/mainevent/WhatsApp Image 2024-09-10 at 20.30.23_bf5620ad (1)_1726142638.jpg",
      link: "/events/skills-required-to-become-a-counsellor",
    },
    {
      id: 4,
      badge: "EMOTIONAL WELL-BEING AND HAPPINESS",
      date: "October, 15th & 16th, 2024",
      location: "1st Floor, C, 10, Block C, Noida Sector 3",
      image: "https://prod-s3.counselindia.com/mainevent/Boot Camp Instagram Post  (1)_1731048278.jpg",
      link: "/events/emotional-well-being-and-happiness",
    },
    {
      id: 5,
      badge: "MASTERCLASS ON RELATIONSHIP PSYCHOLOGY",
      date: "16th January, 2024",
      location: "C 10, Noida sector 3, 1st floor",
      image: "https://prod-s3.counselindia.com/mainevent/WhatsApp Image 2024-12-26 at 16.31.37_1735211013.jpg",
      link: "/events/masterclass-on-relationship-psychology",
    },
    {
      id: 6,
      badge: "HOW TO GROW AS A COUNSELLOR AND EARN 7LPA",
      date: "12th September, 2023",
      location: "Counsel India",
      image: "https://prod-s3.counselindia.com/mainevent/30022589coverimage_1694148534.webp",
      link: "/events/how-to-grow-as-a-counsellor-and-earn-7lpa",
    },
    {
      id: 7,
      badge: "MEGA OFFLINE EVENT - ROADMAP TO BECOME A SUCCESSFUL COUNSELOR",
      date: "7th October, 2023",
      location: "Noida",
      image: "https://prod-s3.counselindia.com/mainevent/1517186301coverimage_1695818225.jpg",
      link: "/events",
    },
    {
      id: 8,
      badge: "STEP BY STEP PROCESS TO BECOME COUNSELLOR & EARN 7 LPA",
      date: "23th - 24th Feb 2023",
      location: "Delhi",
      image: "https://prod-s3.counselindia.com/mainevent/master-workshop-on-step-by-step-process-to-become-counsellor-and-earn-at-least-7-lpacoverimage_1675841298.jpeg",
      link: "/events",
    },
    {
      id: 9,
      badge: "COUNSELLOR SE CHARCHA - EPISODE 2",
      date: "26th March 2023",
      location: "C-106, Sector 2, Noida (UP)",
      image: "https://prod-s3.counselindia.com/mainevent/counselor-se-charcha-episode-2coverimage_1678526494.jpeg",
      link: "/events",
    },
    {
      id: 10,
      badge: "EMOTIONAL WELLBEING AND HAPPINESS",
      date: "21th and 22th October",
      location: "Online",
      image: "https://prod-s3.counselindia.com/mainevent/1819390319coverimage_1697020639.jpg",
      link: "/events/emotional-well-being-and-happiness",
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
        // Manual Click-based Swiper ONLY - No Autoplay
        swiperInstance = new (window as any).Swiper(".events-spotlight-active .swiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          autoplay: false,
          speed: 600,
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
              <Link
                href="/events"
                className="btn btn-light btn-hover-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  lineHeight: "1",
                }}
              >
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
                      {/* Event Item with Dull White default BG and Pure White on Hover */}
                      <div
                        className="event-item event-custom-card overflow-hidden d-flex flex-column h-100"
                        style={{
                          borderRadius: "5px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {/* Event Image Banner - Enforced Exact 270px Height */}
                        <div
                          className="event-item__image overflow-hidden"
                          style={{
                            height: "270px",
                            minHeight: "270px",
                            maxHeight: "270px",
                            width: "100%",
                            position: "relative",
                          }}
                        >
                          <Link
                            href={e.link}
                            className="d-block w-100 overflow-hidden"
                            style={{
                              height: "270px",
                              minHeight: "270px",
                              maxHeight: "270px",
                              display: "block",
                            }}
                          >
                            <img
                              src={e.image}
                              alt={e.badge}
                              style={{
                                width: "100%",
                                height: "270px",
                                minHeight: "270px",
                                maxHeight: "270px",
                                objectFit: "cover",
                                display: "block",
                                transition: "transform 0.5s ease",
                              }}
                            />
                          </Link>
                        </div>

                        {/* Event Content Area */}
                        <div
                          className="event-item__content text-center d-flex flex-column justify-content-between flex-grow-1"
                          style={{
                            padding: "24px 20px 28px",
                            transition: "background-color 0.3s ease",
                          }}
                        >
                          <div>
                            {/* First Text: Description / Subtitle Badge (#666666, 13px, Poppins) */}
                            <span
                              className="event-item__badge"
                              style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                fontWeight: 500,
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                color: "#666666",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                minHeight: "38px",
                                lineHeight: "1.45",
                                marginBottom: "10px",
                              }}
                            >
                              {e.badge}
                            </span>

                            {/* Main Event Date / Darker Heading (#232937, 15px, Poppins) */}
                            <h3
                              className="event-item__title"
                              style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "15px",
                                fontWeight: 700,
                                color: "#232937",
                                margin: "0 0 14px 0",
                                lineHeight: "1.4",
                              }}
                            >
                              <Link
                                href={e.link}
                                className="text-decoration-none hover-text-primary"
                                style={{
                                  color: "#232937",
                                  fontFamily: "'Poppins', sans-serif",
                                  fontSize: "15px",
                                  fontWeight: 700,
                                }}
                              >
                                {e.date}
                              </Link>
                            </h3>

                            {/* Location with Icon (#666666, 13px, Poppins) */}
                            <p
                              className="event-item__location"
                              style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "13px",
                                color: "#666666",
                                margin: "0 0 18px 0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "6px",
                              }}
                            >
                              <i
                                className="far fa-map-marker-alt"
                                style={{
                                  fontSize: "14px",
                                  color: "#666666",
                                }}
                              ></i>
                              <span
                                style={{
                                  display: "-webkit-box",
                                  WebkitLineClamp: 1,
                                  WebkitBoxOrient: "vertical",
                                  overflow: "hidden",
                                }}
                              >
                                {e.location}
                              </span>
                            </p>
                          </div>

                          {/* Know More Button */}
                          <div>
                            <Link
                              href={e.link}
                              className="btn btn-2 btn-primary btn-hover-primary"
                              style={{
                                fontFamily: "'Poppins', sans-serif",
                                backgroundColor: "#07a64b",
                                borderColor: "#07a64b",
                                color: "#ffffff",
                                fontSize: "14px",
                                fontWeight: 500,
                                borderRadius: "5px",
                                padding: "0 28px",
                                height: "42px",
                                lineHeight: "42px",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: "auto",
                                minWidth: "140px",
                              }}
                            >
                              Know more
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* Event Item End */}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows (Manual Click-based) */}
              <div
                className="swiper-button-next d-none d-md-flex align-items-center justify-content-center"
                style={{
                  position: "absolute",
                  right: "-20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "42px",
                  height: "42px",
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
                  width: "42px",
                  height: "42px",
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

      <style jsx>{`
        .event-custom-card {
          background-color: #f8f8f8;
          border: 1px solid #eeeeee;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
        }
        .event-custom-card .event-item__content {
          background-color: #f8f8f8;
        }
        .event-custom-card .event-item__image {
          height: 270px !important;
          min-height: 270px !important;
          max-height: 270px !important;
        }
        .event-custom-card .event-item__image a {
          height: 270px !important;
          min-height: 270px !important;
          max-height: 270px !important;
          display: block !important;
        }
        .event-custom-card .event-item__image img {
          height: 270px !important;
          min-height: 270px !important;
          max-height: 270px !important;
          width: 100% !important;
          object-fit: cover !important;
        }
        .event-custom-card:hover {
          background-color: #ffffff !important;
          border-color: #e5e5e5;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }
        .event-custom-card:hover .event-item__content {
          background-color: #ffffff !important;
        }
        .event-custom-card:hover .event-item__image img {
          transform: scale(1.06);
        }
      `}</style>
    </div>
  );
}
