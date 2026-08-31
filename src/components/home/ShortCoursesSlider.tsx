"use client";
import React, { useEffect } from "react";
import Link from "next/link";

export default function ShortCoursesSlider() {
  const shortCourses = [
    {
      id: 1,
      title: "Counselor Se Charcha",
      date: "19th Feb 2023",
      location: "Noida",
      image: "/assets/images/event/counselor_se_charcha.jpg",
      slug: "counselor-se-charcha",
    },
    {
      id: 2,
      title: "Certificate in Cognitive Behavioural Therapy (CBT)",
      date: "Online Masterclass",
      location: "Live Interactive",
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/12345678_1728475516.png",
      slug: "cbt-certification",
    },
    {
      id: 3,
      title: "Certificate in Expressive Art & Play Therapy",
      date: "Hands-on Practical",
      location: "Live Interactive",
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/7f76f6_1728475558.png",
      slug: "art-therapy-certification",
    },
    {
      id: 4,
      title: "Certificate in Child & Adolescent Psychology",
      date: "Skill Development",
      location: "Live Interactive",
      image: "https://prod-s3.counselindia.com/mastergalaxyimages/86o7tfytcv_1728475571.png",
      slug: "child-psychology-certification",
    },
  ];

  useEffect(() => {
    let swiperInstance: any = null;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".event-active .swiper", {
          slidesPerView: 3,
          spaceBetween: 25,
          loop: true,
          autoplay: { delay: 2800, disableOnInteraction: false },
          speed: 1000,
          navigation: {
            nextEl: ".event-active .swiper-button-next",
            prevEl: ".event-active .swiper-button-prev",
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 15 },
            576: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 25 },
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
          {/* Left Column: Title & View All */}
          <div className="col-xl-3 col-lg-5 col-md-6 col-sm-7">
            <div className="section-title mb-0 pe-lg-8">
              <h4 className="section-title__sub-title text-success font-size-14 fw-bold mb-2">
                SHORT COURSES
              </h4>
              <h2 className="section-title__title-02 font-size-32 lh-sm">
                Exclusive Short Courses from <mark>Counsel India</mark>
              </h2>
            </div>
            <div className="section-btn mt-4">
              <Link href="/courses" className="btn btn-light btn-hover-primary px-4 py-2 font-size-14 fw-semibold">
                View all
              </Link>
            </div>
          </div>

          {/* Right Column: Swiper Carousel */}
          <div className="col-xl-9">
            <div className="event-active swiper-button-style position-relative">
              <div className="swiper">
                <div className="swiper-wrapper py-2">
                  {shortCourses.map((course) => (
                    <div className="swiper-slide h-auto" key={course.id}>
                      {/* Event Item Start */}
                      <div className="event-item bg-white rounded-3 shadow-sm overflow-hidden d-flex flex-column h-100">
                        <div className="event-item__image">
                          <Link href={`/course/${course.slug}`} className="d-block overflow-hidden" style={{ height: "185px" }}>
                            <img
                              src={course.image}
                              alt={course.title}
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
                        <div className="event-item__content text-center p-4 d-flex flex-column justify-content-between flex-grow-1" style={{ backgroundColor: "#f8f9fa" }}>
                          <div>
                            <span className="event-item__date text-success font-size-13 fw-semibold d-block mb-1">
                              {course.date}
                            </span>
                            <h3 className="event-item__title font-size-16 fw-bold mb-2" style={{ minHeight: "48px" }}>
                              <Link href={`/course/${course.slug}`} className="text-dark hover-text-primary text-decoration-none">
                                {course.title}
                              </Link>
                            </h3>
                            <p className="event-item__location font-size-13 text-muted mb-3">
                              <i className="fas fa-map-marker-alt text-success me-1"></i> {course.location}
                            </p>
                          </div>
                          <Link
                            href={`/course/${course.slug}`}
                            className="btn btn-2 btn-primary btn-hover-primary w-100 font-size-14 py-2 fw-semibold mt-2"
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
        </div>
      </div>
    </div>
  );
}
