"use client";
import React, { useEffect } from "react";

export default function AlumniCounselors() {
  const alumni = [
    {
      name: "Brinda Chugh",
      designation: "Software Developer",
      image: "/assets/images/brinda-chugh.jpg",
    },
    {
      name: "Jainendra Prasad",
      designation: "School Teacher-Counsellor",
      image: "/assets/images/jainendra-prasad.jpg",
    },
    {
      name: "Pousali Das",
      designation: "Physiotherapist and Yoga Therapist",
      image: "/assets/images/pousali-das.jpg",
    },
    {
      name: "Prerna Kundu",
      designation: "Counsellor",
      image: "/assets/images/prerna-kundu.jpg",
    },
    {
      name: "Shikha Sharma",
      designation: "Life Coach- Counsellor",
      image: "/assets/images/shikha-sharma.jpg",
    },
    {
      name: "Shivani Pawar",
      designation: "Dietician-Tedex Speaker",
      image: "/assets/images/shivani-pawar.jpg",
    },
    {
      name: "Arpita Chatterjee",
      designation: "Music Teacher",
      image: "/assets/images/arpita-chatterjee.jpg",
    },
    {
      name: "BC Nigam",
      designation: "Ex IFS Officer",
      image: "/assets/images/bc-nigam.jpg",
    },
  ];

  useEffect(() => {
    let swiperInstance: any = null;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".instructor-active .swiper", {
          slidesPerView: 5,
          spaceBetween: 24,
          loop: true,
          autoplay: { delay: 2500, disableOnInteraction: false },
          speed: 1000,
          pagination: {
            el: ".instructor-active .swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 15 },
            576: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            992: { slidesPerView: 4, spaceBetween: 20 },
            1200: { slidesPerView: 5, spaceBetween: 24 },
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
    <div className="courses-section section-padding-01 bg-color-13">
      <div className="container custom-container">
        {/* Section Title Start */}
        <div className="section-title text-center mb-5">
          <h2 className="section-title__title">
            Our Esteemed <mark>alumni &amp; dedicated counselors</mark>
          </h2>
        </div>
        {/* Section Title End */}

        <div className="instructor-active swiper-dots-style">
          <div className="swiper">
            <div className="swiper-wrapper py-3">
              {alumni.map((item, idx) => (
                <div className="swiper-slide h-auto" key={idx}>
                  {/* Alumni Card Start */}
                  <div
                    className="bg-white w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center"
                    style={{
                      padding: "32px 16px 28px",
                      borderRadius: "12px",
                      border: "1px solid #f0f2f5",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                  >
                    <div
                      className="mb-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        border: "1px solid #dcdfe4",
                        padding: "2px",
                        background: "#fff",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>

                    <div className="w-100">
                      <h3
                        className="mb-1"
                        style={{
                          fontSize: "16px",
                          fontWeight: 500,
                          color: "#212529",
                          lineHeight: "1.4",
                        }}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="mb-0"
                        style={{
                          fontSize: "13px",
                          color: "#6c757d",
                          lineHeight: "1.4",
                          maxWidth: "160px",
                          margin: "0 auto",
                        }}
                      >
                        {item.designation}
                      </p>
                    </div>
                  </div>
                  {/* Alumni Card End */}
                </div>
              ))}
            </div>
            <div
              className="swiper-pagination mt-4 d-flex justify-content-center gap-2"
              style={{ position: "relative", bottom: "0" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
