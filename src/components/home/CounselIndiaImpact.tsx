"use client";
import React from "react";

export default function CounselIndiaImpact() {
  return (
    <div className="features-section-02 section-padding-02">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-6">
            {/* Feature Title Start */}
            <div className="feature-title">
              {/* Section Title Start */}
              <div className="section-title">
                <h2 className="section-title__title-03">The Counsel India Impact</h2>
              </div>
              {/* Section Title End */}
            </div>
            {/* Feature Title End */}

            {/* Feature Image Start */}
            <div className="feature-image">
              <div className="feature-image__image">
                <img
                  src="/assets/images/impact.svg"
                  alt="Psychology Impact"
                  width="372"
                  height="366"
                />
              </div>
            </div>
            {/* Feature Image End */}
          </div>

          <div className="col-lg-6">
            <div className="row gy-6">
              <div className="col-sm-6 mt-sm-10">
                {/* Feature Item 1 */}
                <div className="features-item-02">
                  <div className="features-item-02__icon color-01">
                    <i>96%</i>
                  </div>
                  <div className="features-item-02__content">
                    <h4 className="features-item-02__title">
                      say our courses helped to shape their careers
                    </h4>
                  </div>
                </div>

                {/* Feature Item 2 */}
                <div className="features-item-02">
                  <div className="features-item-02__icon color-02">
                    <i>95%</i>
                  </div>
                  <div className="features-item-02__content">
                    <h4 className="features-item-02__title">
                      of our learners are Working Professionals and Entrepreneurs
                    </h4>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                {/* Feature Item 3 */}
                <div className="features-item-02">
                  <div className="features-item-02__icon color-02">
                    <i>66%</i>
                  </div>
                  <div className="features-item-02__content">
                    <h4 className="features-item-02__title">
                      find our courses engaging and attest to their excellence.
                    </h4>
                  </div>
                </div>

                {/* Feature Item 4 */}
                <div className="features-item-02">
                  <div className="features-item-02__icon color-01">
                    <i>6-12 Months</i>
                  </div>
                  <div className="features-item-02__content">
                    <h4 className="features-item-02__title">
                      course duration is most popularly sought after
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
