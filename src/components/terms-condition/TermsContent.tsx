"use client";
import React from "react";
import { useSiteSettings } from "@/hooks/useSiteSettings";

interface TermsContentProps {
  content?: string;
}

export default function TermsContent({ content }: TermsContentProps) {
  const { settings, loading } = useSiteSettings();
  const htmlContent = settings.termsCondition || content || "";

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
