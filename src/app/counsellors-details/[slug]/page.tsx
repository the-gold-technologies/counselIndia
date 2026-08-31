"use client";
import React, { useState, use } from "react";
import Link from "next/link";
import { COUNSELLORS_DATA, CounselorItem } from "@/components/counsellors-network/data/counsellorsData";
import BookSessionModal from "@/components/counsellors-network/BookSessionModal";
import LoginModal from "@/components/auth/LoginModal";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CounsellorDetailsPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  // Login Modal & Booking Modal State
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Extract ID from slug
  const parts = slug.split("-");
  const parsedId = parseInt(parts[parts.length - 1], 10);

  // Find counselor by ID or matching name
  let counselor: CounselorItem | undefined;
  if (!isNaN(parsedId)) {
    counselor = COUNSELLORS_DATA.find((c) => c.id === parsedId);
  }

  if (!counselor) {
    const normalizedSlug = slug.toLowerCase();
    counselor = COUNSELLORS_DATA.find((c) =>
      normalizedSlug.includes(c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"))
    );
  }

  if (!counselor) {
    counselor = COUNSELLORS_DATA[0];
  }

  return (
    <div className="main-wrapper" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* 1. Header Banner: Learn from the best */}
      <div className="edumall-box-section section-padding-01" style={{ paddingTop: "60px", paddingBottom: "25px" }}>
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-0">
                <h2
                  className="section-title__title-03 fw-bold mb-3"
                  style={{ fontSize: "36px", color: "#1e293b" }}
                >
                  Learn from the{" "}
                  <mark
                    style={{
                      backgroundColor: "transparent",
                      color: "#07a64b",
                      fontWeight: 700,
                    }}
                  >
                    best
                  </mark>
                </h2>
                <p style={{ color: "#64748b", lineHeight: "1.7", fontSize: "15px" }}>
                  Counsel India is aiming to be India&apos;s biggest employer for mental health
                  professionals and has already employed top-notch RCI recognized psychologists for its
                  55+ products and services. Here are the list of some psychologists for its one of the
                  educational products. It has its own network of mental health professionals with close
                  to 2000+ in numbers and increasing everyday. Counsel India has aim to offer stage and
                  career these professionals deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Profile Details Section (Matching Screenshot) */}
      <div
        className="event-section section-padding-01"
        style={{
          paddingTop: "40px",
          paddingBottom: "70px",
        }}
      >
        <div className="container custom-container">
          <div className="row g-5 align-items-start">
            {/* Left Column: Counselor Profile Card */}
            <div className="col-lg-4 col-md-5">
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 6px 25px rgba(0, 0, 0, 0.07)",
                  border: "1px solid #edf2f7",
                  padding: "32px 24px 28px",
                  textAlign: "center",
                }}
              >
                {/* Speaker Image */}
                <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
                  <img
                    src={counselor.image}
                    alt={counselor.name}
                    style={{
                      width: "115px",
                      height: "115px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "3px solid #f1f5f9",
                      backgroundColor: "#ffffff",
                    }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/assets/images/avatar-placeholder.jpg";
                    }}
                  />
                </div>

                {/* Name */}
                <h3
                  style={{
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "4px",
                    fontFamily: "'Montserrat', 'Inter', sans-serif",
                  }}
                >
                  {counselor.name}
                </h3>

                {/* Designation in Green */}
                <p
                  style={{
                    color: "#00a651",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  {counselor.designation || "COUNSELLING PSYCHOLOGIST"}
                </p>

                {/* Star Rating (Centered) */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    color: "#f59e0b",
                    fontSize: "14px",
                    marginBottom: "24px",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className={star <= (counselor.rating || 4) ? "fas fa-star" : "far fa-star"}
                    ></i>
                  ))}
                </div>

                {/* Meta Rows (Left Icon + Label, Right Value) */}
                <div
                  style={{
                    borderTop: "1px solid #f1f5f9",
                    paddingTop: "12px",
                    marginBottom: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {/* Experience */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14.5px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#475569" }}>
                      <i className="fas fa-graduation-cap" style={{ width: "18px", color: "#1e293b", fontSize: "15px" }}></i>
                      Experience
                    </span>
                    <span style={{ color: "#1e293b", fontWeight: 500 }}>{counselor.experience}</span>
                  </div>

                  {/* Language */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14.5px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#475569" }}>
                      <i className="fas fa-globe" style={{ width: "18px", color: "#1e293b", fontSize: "15px" }}></i>
                      Language
                    </span>
                    <span style={{ color: "#1e293b", fontWeight: 500, maxWidth: "160px", textAlign: "right" }}>
                      {counselor.language}
                    </span>
                  </div>

                  {/* Fee */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14.5px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#475569" }}>
                      <i className="fas fa-rupee-sign" style={{ width: "18px", color: "#1e293b", fontSize: "15px" }}></i>
                      Fee
                    </span>
                    <span style={{ color: "#00a651", fontWeight: 700, fontSize: "15px" }}>
                      Rs. {counselor.fees}
                    </span>
                  </div>

                  {/* Location */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "14.5px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px", color: "#475569" }}>
                      <i className="fas fa-map-marker-alt" style={{ width: "18px", color: "#1e293b", fontSize: "15px" }}></i>
                      Location
                    </span>
                    <span style={{ color: "#1e293b", fontWeight: 500, maxWidth: "150px", textAlign: "right" }}>
                      {counselor.location}
                    </span>
                  </div>
                </div>

                {/* Book a Session Button (Opens Login Modal matching PHP) */}
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  style={{
                    width: "100%",
                    height: "46px",
                    backgroundColor: "#00a651",
                    color: "#ffffff",
                    borderRadius: "6px",
                    fontSize: "15px",
                    fontWeight: 600,
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 12px rgba(0, 166, 81, 0.2)",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  Book a session
                </button>
              </div>
            </div>

            {/* Right Column: Clean Content Typography (Direct on Page Background) */}
            <div className="col-lg-8 col-md-7 ps-lg-4">
              {/* What I Bring */}
              <div style={{ marginBottom: "26px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  What I bring to you.
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.75", fontSize: "14.5px", margin: 0 }}>
                  {counselor.whatBringsYou ||
                    "If I may work with the company i would like to offer all my dedication and loyalty for the benefit and betterment of the company by being a usefull counsellor for the clients ."}
                </p>
              </div>

              {/* About */}
              <div style={{ marginBottom: "26px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  About
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.75", fontSize: "14.5px", margin: 0 }}>
                  {counselor.about ||
                    "I m a dedicated psychologist.I m very passionate about my work and career. I have 1 year of experience in field of counselling and psychology"}
                </p>
              </div>

              {/* Education */}
              <div style={{ marginBottom: "26px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Education
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.75", fontSize: "14.5px", margin: 0 }}>
                  {counselor.education || "Post Graduate"}
                </p>
              </div>

              {/* Experience */}
              <div style={{ marginBottom: "26px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Experience
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.75", fontSize: "14.5px", margin: 0 }}>
                  {counselor.experienceDetails || counselor.experience || "1 Years"}
                </p>
              </div>

              {/* Achievements */}
              <div style={{ marginBottom: "10px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    color: "#1e293b",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "8px",
                  }}
                >
                  Achievements
                </h3>
                <p style={{ color: "#4b5563", lineHeight: "1.75", fontSize: "14.5px", margin: 0 }}>
                  {counselor.achievements ||
                    "I have done my masters in psychology. I have also done practical internship in counseling."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Testimonial / Success Stories Section */}
      <div className="testimonial-section section-padding-01 py-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="container custom-container">
          {/* Left-Aligned Section Title with Green Curve Underline */}
          <div className="section-title text-start mb-5">
            <h2 className="section-title__title" style={{ fontFamily: "Georgia, 'Playfair Display', serif", fontSize: "32px", color: "#1e293b" }}>
              Success <mark style={{ backgroundColor: "transparent", color: "inherit", padding: 0 }}>Stories</mark>
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Great quality!",
                review:
                  "I am working as a counselling psychologist. this course was helpful for me as it accelerated my growth in career as a psychologist. The trainers at Counsel India are very knowledgeable, professional and helpful. They shape the course according to the trainee.",
                name: "Ankita Rai",
                location: "Hyderabad",
                image: "/assets/images/avatar/ankita.jpg",
              },
              {
                title: "Great quality!",
                review:
                  "I attended counsel India's CLEP, it was worth every penny. Very informative and quick workable solutions provided for budding entrepreneurs. Thank you Counsel India.",
                name: "Hitesh Rawat",
                location: "Dehradun",
                image: "/assets/images/avatar/hitesh.jpg",
              },
              {
                title: "Great quality!",
                review:
                  "I was searching for such a program and got to know about the Counsellors Entrepreneurship Program offered by Counsel India. At first I was very hesitated and scared if the program would be useful or not. But after the program had been completed I was very much amazed by the level of deep understandings and learnings I got to learn.",
                name: "Komal Saxena",
                location: "Noida",
                image: "/assets/images/avatar/komal.jpg",
              },
            ].map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 mb-4">
                <div
                  className="testimonial-item h-100 d-flex flex-column"
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: "14px",
                    padding: "36px 32px 30px",
                    position: "relative",
                  }}
                >
                  {/* Decorative Quote Icon */}
                  <div
                    style={{
                      position: "absolute",
                      top: "24px",
                      right: "26px",
                      color: "#e2e8f0",
                      fontSize: "36px",
                      lineHeight: 1,
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="42px"
                      height="34px"
                      viewBox="0 0 50 40"
                      fill="#e2e8f0"
                    >
                      <path d="M21.8750977,2.18046875 C22.4503906,2.18046875 22.9167969,1.7140625 22.9167969,1.13876953 C22.9167969,0.563476562 22.4503906,0.0970703125 21.8750977,0.0970703125 C9.79960938,0.110839844 0.0138671875,9.89658203 2.76635467e-06,21.9720703 L2.76635467e-06,28.2220703 C-0.01796875,34.56875 5.11230469,39.728418 11.4588867,39.7465793 C17.8055664,39.7645508 22.9652344,34.6342773 22.9833957,28.2876953 C23.0013672,21.9410156 17.8710938,16.7813477 11.5245117,16.7632813 C7.77705078,16.7526367 4.25966797,18.5698242 2.10009766,21.6325195 C2.29296875,10.8446289 11.0853516,2.19580078 21.8750977,2.18046875 Z"></path>
                      <path d="M38.5416992,16.7638672 C34.8157227,16.7667969 31.3244141,18.5832031 29.1833984,21.6326172 C29.3763672,10.8446289 38.16875,2.19580078 48.9583984,2.18056641 C49.5336914,2.18056641 50.0000977,1.71416016 50.0000977,1.13886719 C50.0000977,0.563574219 49.5336914,0.0971679688 48.9583984,0.0971679688 C36.8829102,0.1109375 27.097168,9.89667969 27.0833984,21.972168 L27.0833984,28.222168 C27.0833984,34.5503906 32.2134766,39.6804687 38.5416992,39.6804687 C44.8699219,39.6804687 50.0000977,34.5503906 50.0000977,28.222168 C50.0000977,21.8939453 44.8700195,16.7638672 38.5416992,16.7638672 Z"></path>
                    </svg>
                  </div>

                  {/* Header Title in Green */}
                  <h4
                    style={{
                      color: "#07a64b",
                      fontWeight: 700,
                      fontSize: "19px",
                      marginBottom: "14px",
                    }}
                  >
                    {item.title}
                  </h4>

                  {/* Review Text */}
                  <p
                    style={{
                      color: "#555555",
                      fontSize: "14.5px",
                      lineHeight: "1.7",
                      marginBottom: "28px",
                      flex: 1,
                    }}
                  >
                    {item.review}
                  </p>

                  {/* Author Info */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      marginTop: "auto",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "54px",
                        height: "54px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      onError={(e) => {
                        e.currentTarget.src = "/assets/images/avatar/avatar-01.jpg";
                      }}
                    />
                    <div>
                      <h5
                        style={{
                          fontWeight: 700,
                          fontSize: "15.5px",
                          color: "#1e293b",
                          marginBottom: "2px",
                          lineHeight: 1.2,
                        }}
                      >
                        {item.name}
                      </h5>
                      <span style={{ fontSize: "13.5px", color: "#64748b" }}>
                        {item.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Login Modal (Opens on Click matching PHP) */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSuccess={() => setIsBookingModalOpen(true)}
      />

      {/* Booking Form Modal */}
      <BookSessionModal
        counselor={counselor}
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}
