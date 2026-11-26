"use client";
import React, { useState, useEffect } from "react";
import { CORE_TEAM } from "./data/aboutData";

interface TeamMemberItem {
  id: string | number;
  name: string;
  designation: string;
  image?: string | null;
  category?: string;
}

export default function AboutTeamSlider() {
  const [coreTeam, setCoreTeam] = useState<TeamMemberItem[]>(CORE_TEAM);
  const [advisors, setAdvisors] = useState<TeamMemberItem[]>([]);

  useEffect(() => {
    let isMounted = true;
    const adminUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;
    if (!adminUrl) return;

    fetch(`${adminUrl}/api/team`)
      .then((res) => res.json())
      .then((json) => {
        if (!isMounted || !json.success || !Array.isArray(json.data)) return;
        const all: any[] = json.data;

        const dynamicCore = all.filter((m) => m.category === "core" && m.isActive !== false);
        const dynamicAdvisors = all.filter(
          (m) => (m.category === "advisor" || m.category === "consultant") && m.isActive !== false
        );

        if (dynamicCore.length > 0) {
          setCoreTeam(dynamicCore);
        }
        setAdvisors(dynamicAdvisors);
      })
      .catch((err) => {
        console.warn("Could not load dynamic team members:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {/* Core Team Section */}
      <div className="team-section section-padding-02">
        <div className="container custom-container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                <h2 className="section-title__title">
                  Meet <mark>Our Core Team</mark>
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-4 justify-content-start">
            {coreTeam.map((member) => (
              <div key={member.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                <div className="speaker-item text-center">
                  <div className="speaker-item__thumbnail">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        width={170}
                        height={170}
                        style={{
                          width: "170px",
                          height: "170px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "170px",
                          height: "170px",
                          borderRadius: "50%",
                          backgroundColor: "#e8f7ee",
                          color: "#07a64b",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "36px",
                          fontWeight: "700",
                          margin: "0 auto",
                          border: "3px solid #d1fae5",
                        }}
                      >
                        {member.name
                          .replace(/^Dr\.\s*|^Mr\.\s*/i, "")
                          .split(" ")
                          .map((n: string) => n[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="speaker-item__content">
                    <h6 className="speaker-item__name">{member.name}</h6>
                    <p className="speaker-item__designation mb-0">{member.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advisors and Consultants Section (formerly Our Legal Team) */}
      {advisors.length > 0 && (
        <div className="team-section section-padding-02">
          <div className="container custom-container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title" data-aos="fade-up" data-aos-duration="1000">
                  <h2 className="section-title__title">
                    Our <mark>Advisors &amp; Consultants</mark>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row g-4 justify-content-start">
              {advisors.map((member) => (
                <div key={member.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                  <div className="speaker-item text-center">
                    <div className="speaker-item__thumbnail">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          width={170}
                          height={170}
                          style={{
                            width: "170px",
                            height: "170px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "170px",
                            height: "170px",
                            borderRadius: "50%",
                            backgroundColor: "#e8f7ee",
                            color: "#07a64b",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "36px",
                            fontWeight: "700",
                            margin: "0 auto",
                            border: "3px solid #d1fae5",
                          }}
                        >
                          {member.name
                            .replace(/^Dr\.\s*|^Mr\.\s*/i, "")
                            .split(" ")
                            .map((n: string) => n[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="speaker-item__content">
                      <h6 className="speaker-item__name">{member.name}</h6>
                      <p className="speaker-item__designation mb-0">{member.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .section-padding-02 {
          padding-top: 50px;
        }

        .custom-container {
          max-width: 1200px;
          padding-left: 15px;
          padding-right: 15px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          margin-bottom: 37px;
        }

        .section-title__title {
          font-family: "Playfair Display", serif;
          font-size: 28px;
          line-height: 1.5;
          font-weight: 700;
          color: #232937;
        }

        .section-title__title mark {
          position: relative;
          z-index: 0;
          padding: 0 0 10px;
          color: inherit;
          background-color: transparent;
          display: inline-block;
        }

        .section-title__title mark::after {
          content: "";
          position: absolute;
          width: 91px;
          height: 12px;
          bottom: 0;
          left: 50%;
          z-index: -1;
          transform: translate(-45px);
          background-color: #07a64b;
          mask-repeat: no-repeat;
          mask-size: contain;
          mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
          -webkit-mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          -webkit-mask-image: url("https://www.counselindia.com/assets/images/headline-curve-02.svg");
        }

        .speaker-item__content {
          margin-top: 15px;
        }

        .speaker-item__name {
          font-family: "Poppins", sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 26px;
          color: #232937;
          margin-bottom: 0;
        }

        .speaker-item__designation {
          font-family: "Poppins", sans-serif;
          font-size: 14px;
          color: #777;
          margin-top: 0;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}
