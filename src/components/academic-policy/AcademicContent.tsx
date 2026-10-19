"use client";
import React from "react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

interface AcademicContentProps {
  content?: string;
}

export default function AcademicContent({ content }: AcademicContentProps) {
  const { settings, loading } = useSiteSettings();
  const htmlContent = settings.academicPolicy || content || "";

  return (
    <div className="blog-section section-padding-01">
      <div className="container custom-container">
        <div className="row gy-10">
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
