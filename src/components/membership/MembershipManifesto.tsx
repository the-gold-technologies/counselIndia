"use client";
import React from "react";

export default function MembershipManifesto() {
  return (
    <>
      <div className="section-2nd custom-background">
        <div className="container custom-container" style={{ padding: "70px 0" }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center">
                <h2
                  className="section-title__title-03"
                  style={{
                    fontSize: "40px",
                    color: "#1a2638",
                    fontWeight: 700,
                    marginBottom: "20px",
                  }}
                >
                  At Counsel India, People get Transformed
                </h2>

                <h6
                  className="mt-2"
                  style={{
                    color: "#212529",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.75",
                    maxWidth: "980px",
                    margin: "0 auto",
                  }}
                >
                  At Counsel India, we are committed to transforming lives by fostering emotional well-being. Our mission is to tackle the alarming rise in mental health issues like anxiety, depression, stress, and suicide by making emotional health a priority. Backed by hundreds of expert psychologists, we know that emotional wellness can significantly improve the quality of your life. This belief inspired us to launch the “Har Ghar Counsellor” initiative, which aims to bring mental health awareness to every home. Through tools like our membership program, we strive to make mental health support accessible to all, creating lasting positive change.
                </h6>

                <h5
                  className="mb-4 fw-bold"
                  style={{
                    marginTop: "35px",
                    marginBottom: "15px",
                    color: "#1a2638",
                    fontSize: "22px",
                  }}
                >
                  <strong>The idea is simple</strong>
                </h5>

                <h6
                  className="mt-2"
                  style={{
                    color: "#212529",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "1.75",
                    maxWidth: "980px",
                    margin: "0 auto",
                  }}
                >
                  How much ever you try, you cannot live a stress-free life, the nature of life is such that it will catch you off guard with challenges. Such situations are likely to create all the mental health issues. These mental health issues become hurdles for you in your personal and professional growth journey. Having an emotionally healthy routine can help you tackle these hurdles and move forward as a confident and stronger individual. That is why we have carefully curated a set of emotional well-being tools, so your growth doesn’t stop!
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-background {
          background-image: url("https://counselindiastudymaterial.s3.ap-south-1.amazonaws.com/mastergalaxyimages/Green+Watercolour+Opening+(2).png");
          background-size: cover;
          background-position: center;
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
