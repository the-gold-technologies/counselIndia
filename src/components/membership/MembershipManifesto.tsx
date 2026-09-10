"use client";
import React from "react";

export default function MembershipManifesto() {
  return (
    <>
      <div className="section-2nd custom-background">
        <div className="container custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Section Title Start */}
              <div
                className="section-title text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <h2
                  className="section-title__title-03"
                  style={{ marginTop: "5%" }}
                >
                  At Counsel India, People get Transformed
                </h2>

                <h6 className="mt-2">
                  At Counsel India, we are committed to transforming lives by
                  fostering emotional well-being. Our mission is to tackle the
                  alarming rise in mental health issues like anxiety,
                  depression, stress, and suicide by making emotional health a
                  priority. Backed by hundreds of expert psychologists, we know
                  that emotional wellness can significantly improve the quality
                  of your life. This belief inspired us to launch the &ldquo;Har
                  Ghar Counsellor&rdquo; initiative, which aims to bring mental
                  health awareness to every home. Through tools like our
                  membership program, we strive to make mental health support
                  accessible to all, creating lasting positive change.
                </h6>

                <h5 className="mb-4 fw-bold" style={{ marginTop: "3%" }}>
                  <strong>The idea is simple</strong>
                </h5>

                <h6 className="mt-2">
                  How much ever you try, you cannot live a stress-free life, the
                  nature of life is such that it will catch you off guard with
                  challenges. Such situations are likely to create all the
                  mental health issues. These mental health issues become
                  hurdles for you in your personal and professional growth
                  journey. Having an emotionally healthy routine can help you
                  tackle these hurdles and move forward as a confident and
                  stronger individual. That is why we have carefully curated a
                  set of emotional well-being tools, so your growth doesn&apos;t
                  stop!
                </h6>
              </div>
              {/* Section Title End */}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .custom-background {
          background-image: url('https://prod-s3.counselindia.com/mastergalaxyimages/Green+Watercolour+Opening+(2).png');
          background-size: cover;
          background-position: center;
        }
      `}</style>
    </>
  );
}
