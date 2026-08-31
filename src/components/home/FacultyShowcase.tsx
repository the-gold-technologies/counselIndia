"use client";
import React from "react";

export default function FacultyShowcase() {
  const faculty = [
    {
      name: "Ayushi Madaan",
      designation: "Child & Adolescent Psychologist",
      experience: "8+ Years Experience",
      image: "/assets/images/4009_BR3A4158.jpg",
      specialization: "CBT & Child Guidance",
    },
    {
      name: "Anastasiia Maksymovska",
      designation: "International Clinical Consultant",
      experience: "10+ Years Experience",
      image: "/assets/images/8798_31_Medhavi-Sood_11zon.webp",
      specialization: "Trauma & Crisis Counseling",
    },
    {
      name: "Darline Gonzalez",
      designation: "Behavioral Therapy Specialist",
      experience: "12+ Years Experience",
      image: "/assets/images/7040_5805_Ms.Monica_11zon.webp",
      specialization: "Family Systems Therapy",
    },
    {
      name: "Dr. Swati Sharma",
      designation: "Senior Psychotherapist & Mentor",
      experience: "15+ Years Experience",
      image: "/assets/images/Trainer1.png",
      specialization: "Clinical Supervision",
    },
  ];

  return (
    <div className="section-padding-01 bg-white">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h4 className="section-title__sub-title text-success fw-bold">
            FACULTY &amp; MENTORS
          </h4>
          <h2 className="section-title__title-02">
            Learn from the Leading <mark>Industry Experts</mark>
          </h2>
          <p className="text-muted mt-2">
            Our esteemed faculty combines academic rigor with practical clinical casework to guide your journey.
          </p>
        </div>

        <div className="row g-4">
          {faculty.map((f, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="card h-100 border-0 shadow-sm rounded-3 overflow-hidden text-center">
                <div
                  className="position-relative"
                  style={{ height: "260px", backgroundColor: "#f8f9fa" }}
                >
                  <img
                    src={f.image}
                    alt={f.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <span className="badge bg-success position-absolute bottom-0 start-50 translate-middle-x mb-2 px-3 py-1 font-size-12">
                    {f.experience}
                  </span>
                </div>
                <div className="card-body p-3">
                  <h4 className="card-title fw-bold text-dark font-size-18 mb-1">
                    {f.name}
                  </h4>
                  <p className="text-muted font-size-14 mb-2">{f.designation}</p>
                  <div className="pt-2 border-top">
                    <span className="badge bg-light text-dark font-size-12">
                      <i className="fas fa-star text-warning me-1"></i> {f.specialization}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
