"use client";
import React from "react";

interface Props {
  highlights: {
    title: string;
    desc: string;
  }[];
}

export default function CourseHighlights({ highlights }: Props) {
  return (
    <div className="tutor-course-main-content" style={{ padding: "45px 0 10px", backgroundColor: "#ffffff" }}>
      <div className="container custom-container" style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}>
        <div className="why-choose-wrapper tutor-course-segment">
          <div className="row gy-6 gx-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="col-lg-3 col-sm-6" style={{ marginBottom: "24px" }}>
                <div
                  className="choose-box-item"
                  style={{
                    padding: "28px 28px 32px",
                    backgroundColor: "#f8f8f8",
                    borderRadius: "8px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.08)";
                    e.currentTarget.style.backgroundColor = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.backgroundColor = "#f8f8f8";
                  }}
                >
                  <div className="choose-box-item__caption">
                    <h4
                      className="choose-box-item__title"
                      style={{
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#212529",
                        lineHeight: "1.3",
                        marginBottom: "12px",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13.5px",
                        color: "#7e7e7e",
                        lineHeight: "1.65",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
