"use client";
import React, { useEffect, useState } from "react";

export default function IndustryExperts() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const experts = [
    {
      id: 1,
      name: "Ayushi Madaan",
      role: "RCI Certified Psychologist",
      image: "https://prod-s3.counselindia.com/images/3241_shopping-designify.png",
      shortAbout:
        "Ayushi Madaan, has an experience of around 8 years in this field. I have completed my Graduation and Masters's from Delhi University. I was the rank holder in all my academic years. I have done my M.Phil from Gautam Buddha University.",
      fullAbout:
        " I have worked with multi-specialty hospitals, clinics, and online mental health platforms and currently working as a Consultant Clinical Psychologist in Rehabilitation Centre. I am also a certified NLP Practitioner and work extensively in the Clinical as well as an academic field of Clinical Psychology.",
    },
    {
      id: 2,
      name: "Anastasiia Maksymovska",
      role: "Psychologist – Psychotherapist – Sexologist",
      image: "https://prod-s3.counselindia.com/images/654_D402990F-A501-4AFF-BE6B-F14B2C4ABE27.jpg",
      shortAbout:
        "I am a psychologist-psychotherapist-sexologist, all my life I have been fond of education. Human nature is my passion. I believe that every person can do their best if they are willing to ask themselves the right questions.",
      fullAbout: "",
    },
    {
      id: 3,
      name: "Darline Gonzalez",
      role: "Cognitive psychology",
      image: "https://prod-s3.counselindia.com/images/6564_8061E0FC-D47C-4E6C-8CAB-4AE815622A0A.png",
      shortAbout:
        "Doctor of Philosophy in Psychology with an Emphasis in Cognition and Instruction (Ph.D.) – Grand Canyon University (GCU), Phoenix, Arizona (AZ)- 2021. Master of Science in Psychology with an Emphasis in General Psychology- 2015 GCU, Phoenix, AZ Bachelor",
      fullAbout: "",
    },
    {
      id: 4,
      name: "Swati",
      role: "Clinical Psychologist",
      image: "https://prod-s3.counselindia.com/images/swati.png",
      shortAbout:
        "I am RCI Licensed Clinical Psychologist. I specialized in providing psychotherapy for various emotional, behavioral, and psychological issues among adults and children as depression, anxiety, panic attacks, OCD, phobias, marital /couple",
      fullAbout: "",
    },
  ];

  useEffect(() => {
    let swiperInstance: any = null;
    const init = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".experts-active .swiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          autoplay: { delay: 3000, disableOnInteraction: false },
          speed: 1000,
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
    <div className="edumall-box-section section-padding-01 bg-white">
      <div className="container custom-container">
        {/* Section Title Start */}
        <div className="section-title mb-5">
          <h2 className="section-title__title">
            Learn from the leading <mark>industry Experts</mark>
          </h2>
          <p className="mt-2 text-muted" style={{ maxWidth: "800px" }}>
            We partner with top-notch RCI-certified psychologists and global experts who teach 55+ courses and programs. With close to 1,000+ members, our extensive network of psychologists, counsellors, and mental health professionals is ever-growing.
          </p>
        </div>
        {/* Section Title End */}

        <div className="experts-active swiper-dots-style">
          <div className="swiper">
            <div className="swiper-wrapper py-3">
              {experts.map((expert) => (
                <div className="swiper-slide h-auto" key={expert.id}>
                  {/* Box Item Start */}
                  <div className="edumall-box-item-03 w-100 d-flex flex-column justify-content-between">
                    <div>
                      <div className="speaker-item__thumbnail text-center mb-4">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          style={{
                            width: "140px",
                            height: "140px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            display: "block",
                            margin: "0 auto",
                            border: "3px solid #f0f2f5",
                          }}
                        />
                      </div>

                      <div className="edumall-box-item-03__content">
                        <h3 className="edumall-box-item-03__title font-size-18 fw-bold text-dark mb-1">
                          {expert.name}
                        </h3>
                        <span className="primary-text-color d-block font-size-14 fw-semibold text-success mb-3">
                          {expert.role}
                        </span>

                        <p className="text font-size-13 text-muted" style={{ textAlign: "justify", lineHeight: "1.6" }}>
                          {expert.shortAbout}
                          {expert.fullAbout && expanded[expert.id] && (
                            <span>{expert.fullAbout}</span>
                          )}
                        </p>

                        {expert.fullAbout && (
                          <button
                            type="button"
                            onClick={() => toggleExpand(expert.id)}
                            className="read-more-btn btn btn-link p-0 text-success font-size-13 fw-semibold text-decoration-none mb-3 d-block"
                          >
                            {expanded[expert.id] ? "Read Less" : "Read More"}
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 mt-auto">
                      <a
                        href="/counselling"
                        className="edumall-box-item-03__btn btn btn-light btn-hover-primary w-100 d-flex align-items-center justify-content-center gap-2"
                      >
                        Let&apos;s Talk <i className="fas fa-angle-right font-size-12"></i>
                      </a>
                    </div>
                  </div>
                  {/* Box Item End */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
