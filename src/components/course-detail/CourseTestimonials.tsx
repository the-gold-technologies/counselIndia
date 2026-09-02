"use client";
import React from "react";

const TESTIMONIALS = [
  {
    role: "Entrepreneur",
    name: "Vishal Reddy",
    content:
      "Counsel India's business courses helped me gain practical knowledge that was crucial in starting my own company. The guidance I received allowed me to scale my business efficiently and create a stable income for my family. I can't thank them enough!",
  },
  {
    role: "Fashion Designer",
    name: "Shreya Kapoor",
    content:
      "I was struggling to get my designs noticed, but Counsel India's courses on marketing and design helped me expand my reach. The knowledge I gained helped me create a unique brand that resonated with clients, enabling me to start my own fashion label and create a better future for my family.",
  },
  {
    role: "Aspiring Lawyer",
    name: "Sarah T.",
    content:
      "Taking Counsel India's self-paced course was like finding a treasure of knowledge! The interactive lessons kept me interested, and I could learn at my own speed. I felt like I had a personal guide. I'm more confident now!",
  },
  {
    role: "Legal Professional",
    name: "Raj P.",
    content:
      "As a busy professional, I worried about fitting in more study. These self-paced courses made it easy! I could learn during my lunch breaks or at night, and the short lessons were perfect for my schedule. I gained useful insights for my work!",
  },
  {
    role: "Civil Engineer",
    name: "Ravi Kumar",
    content:
      "Counsel India's courses were a game-changer for me. I was able to learn new engineering techniques while working, which helped me take on more challenging projects. These projects have not only advanced my career but also given me the financial freedom to support my family better.",
  },
  {
    role: "Teacher",
    name: "Neelam Singh",
    content:
      "Being a teacher, I was always looking for ways to expand my knowledge and improve my teaching methods. Counsel India's courses offered practical insights and up-to-date knowledge that helped me become more effective in the classroom and increase my earning potential.",
  },
  {
    role: "Doctor",
    name: "Dr. Suresh Patel",
    content:
      "As a healthcare professional, I needed to stay updated with the latest medical advancements. Counsel India helped me enhance my medical knowledge and patient care practices. The training also helped me secure a better position that benefited my career and my family.",
  },
  {
    role: "Marketing Manager",
    name: "Priya Verma",
    content:
      "I enrolled in Counsel India's marketing courses and they truly transformed my career. The insights I gained have helped me become more strategic in my approach. I landed a job that not only brought stability to my family but also opened new avenues for me to help other businesses grow.",
  },
];

export default function CourseTestimonials() {
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div
      className="testimonial-section position-relative overflow-hidden"
      style={{
        backgroundColor: "#f7f7f8",
        paddingTop: "90px",
        paddingBottom: "100px",
      }}
    >
      <div className="container custom-container">
        {/* Title with 5% left margin matching PHP */}
        <div style={{ marginLeft: "5%", marginBottom: "35px" }}>
          <h2
            className="countdown-title__title mb-0"
            style={{
              fontSize: "clamp(34px, 4.2vw, 44px)",
              fontWeight: 700,
              fontFamily:
                "Georgia, 'Playfair Display', 'Times New Roman', serif",
              color: "#1e293b",
            }}
          >
            Testimonials
          </h2>
        </div>

        {/* Continuous Smooth Horizontal Marquee */}
        <div className="testimonials-marquee-wrapper overflow-hidden position-relative">
          <div className="testimonials-track d-flex gap-4">
            {duplicatedTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="testimonial-card-item bg-white d-flex flex-column"
                style={{
                  width: "360px",
                  minWidth: "360px",
                  flexShrink: 0,
                  borderRadius: "12px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #f1f5f9",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.05)",
                  minHeight: "360px",
                  padding: "36px 30px 30px 30px",
                  boxSizing: "border-box",
                }}
              >
                {/* Header: Green Serif Role + SVG Double Quote */}
                <div className="d-flex align-items-start justify-content-between mb-3">
                  <h5
                    className="mb-0 fw-bold"
                    style={{
                      color: "#00a651",
                      fontFamily: "Georgia, 'Playfair Display', serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {item.role}
                  </h5>

                  {/* SVG Double Quote from PHP */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32px"
                    height="26px"
                    viewBox="0 0 50 40"
                    fill="#E2E8F0"
                    style={{ flexShrink: 0, marginLeft: "12px" }}
                  >
                    <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z" />
                    <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z" />
                  </svg>
                </div>

                {/* Body Content */}
                <p
                  className="font-size-15 text-dark mb-4 flex-grow-1"
                  style={{
                    lineHeight: "1.75",
                    color: "#374151",
                  }}
                >
                  &ldquo;{item.content}&rdquo;
                </p>

                {/* Author Name */}
                <div className="mt-auto pt-2">
                  <h6
                    className="mb-0 fw-bold"
                    style={{
                      color: "#1e293b",
                      fontSize: "16px",
                      fontWeight: 700,
                    }}
                  >
                    {item.name}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 50s linear infinite;
        }

        .testimonials-marquee-wrapper:hover .testimonials-track {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
