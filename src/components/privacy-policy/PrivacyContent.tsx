"use client";
import React from "react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

interface PrivacyContentProps {
  content?: string;
}

export default function PrivacyContent({ content }: PrivacyContentProps) {
  const { settings, loading } = useSiteSettings();
  const htmlContent = settings.privacy || content || "";

  return (
    <div
      className="blog-section"
      style={{ paddingTop: "35px", paddingBottom: "60px", backgroundColor: "#ffffff" }}
    >
      <div
        className="container custom-container"
        style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-details">
              {loading && !htmlContent ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div
                  className="blog-details__content"
                  style={{
                    paddingTop: "0",
                    color: "#52565b",
                    fontSize: "15px",
                    lineHeight: "1.75",
                  }}
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
