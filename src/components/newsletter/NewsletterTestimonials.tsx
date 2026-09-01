"use client";
import React, { useEffect } from "react";

const TESTIMONIALS = [
  {
    id: 1,
    title: "Great quality!",
    comment:
      "After my first session with Mrs. Priyanka Bhattacharjee I was very happy that I chose her. She was very easy to talk to and made me feel comfortable. I trusted her with everything I said and never felt pressured while with her. She taught me the most valuable piece of information – that I am in control of my life, everything is my decision and my choice. I left every session amazed with the results.",
    name: "Priyanka Bhattacharjee",
    designation: "Client",
    image: "/assets/images/author/author-01.jpg",
  },
  {
    id: 2,
    title: "Insightful & Refreshing!",
    comment:
      "Potential treatment were discussed and plans for the future considered. I feel very positive now that with the support of a Counsel India I will be able to address certain mental health issues and refocus on my future. Thanks!",
    name: "Nidhi Priya",
    designation: "Course Participant",
    image: "https://prod-s3.counselindia.com/images/4340_Nidhi-Priya.jpg",
  },
  {
    id: 3,
    title: "Great quality!",
    comment:
      "I thoroughly enjoyed my sessions with Mr. Bobby Thakur. He is the most considerate and patient person I could imagine. His passionate opposition against black and white thinking and labeling was a huge eye opener for me. It made for a most welcoming atmosphere in his sessions and gradually led to an inner reconciliation with my anxiety and sleep issues. His many practical suggestions extremely helpful and played an important role in my day to day anxiety management.",
    name: "Priya Aher",
    designation: "Course Participant",
    image: "https://prod-s3.counselindia.com/images/2924_client1.jpg",
  },
];

export default function NewsletterTestimonials() {
  useEffect(() => {
    let swiperInstance: any = null;
    const initSwiper = () => {
      if (typeof window !== "undefined" && (window as any).Swiper) {
        swiperInstance = new (window as any).Swiper(".testimonial-active-02 .swiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          autoplay: { delay: 4000, disableOnInteraction: false },
          pagination: {
            el: ".testimonial-active-02 .swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 15 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          },
        });
      }
    };

    initSwiper();
    const timer = setTimeout(initSwiper, 400);

    return () => {
      clearTimeout(timer);
      if (swiperInstance?.destroy) swiperInstance.destroy(true, true);
    };
  }, []);

  return (
    <div className="testimonial-section bg-color-01 section-padding-01 scene position-relative">
      <div className="container">
        <div className="section-title" style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 className="section-title__title custom-title-underline">
            See What Our Subscribers Are Saying
          </h2>
          <h5 style={{ marginTop: "4%", color: "#6c757d", fontWeight: "normal" }}>
            &quot;Discover Insights Directly from Our Clients about Their Experience with Our
            Services and Products.&quot;
          </h5>
        </div>

        <div className="testimonial-active-02 swiper-dots-style">
          <div className="swiper">
            <div className="swiper-wrapper pb-5">
              {TESTIMONIALS.map((item) => (
                <div className="swiper-slide" style={{ height: "auto" }} key={item.id}>
                  <div
                    className="testimonial-item bg-white p-4 rounded-3 h-100 shadow-sm d-flex flex-column justify-content-between"
                    style={{ border: "1px solid #e2e8f0" }}
                  >
                    <div className="testimonial-quote-icon mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="50px"
                        height="40px"
                        viewBox="0 0 50 40"
                        fill="#0DA74B"
                      >
                        <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z" />
                        <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z" />
                      </svg>
                    </div>
                    <div className="testimonial-main-content">
                      <div className="testimonial-caption">
                        <h3 className="testimonial-caption__title font-size-18 fw-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="font-size-14 text-muted" style={{ lineHeight: "1.6" }}>
                          {item.comment}
                        </p>
                      </div>
                      <div className="testimonial-info d-flex align-items-center gap-3 mt-4 pt-3 border-top">
                        <div className="testimonial-info__image">
                          <img
                            src={item.image}
                            alt="Avatar"
                            width="50"
                            height="50"
                            className="rounded-circle"
                            style={{ objectFit: "cover" }}
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = "/assets/images/author/author-01.jpg";
                            }}
                          />
                        </div>
                        <div className="testimonial-info__caption">
                          <h5 className="testimonial-info__name m-0 font-size-15 fw-bold text-dark">
                            {item.name}
                          </h5>
                          <p className="testimonial-info__designation m-0 font-size-12 text-muted">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination mt-4"></div>
          </div>
        </div>
      </div>

      <div className="testimonial-section__shape-01" data-depth="-0.5"></div>
      <div className="testimonial-section__shape-02" data-depth="0.7"></div>
      <div className="testimonial-section__shape-03" data-depth="-0.5"></div>
      <img
        className="testimonial-section__shape-04"
        data-depth="0.7"
        src="/assets/images/shape/edumall-shape-01.png"
        alt="Shape"
        width="179"
        height="178"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <style jsx>{`
        .custom-title-underline {
          margin: 0;
          display: inline-block;
          position: relative;
        }

        .custom-title-underline::after {
          content: "";
          display: block;
          width: calc(100% + 20px);
          height: 4px;
          background-color: green;
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
}
