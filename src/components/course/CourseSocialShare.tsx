"use client";
import React, { useState } from "react";

export default function CourseSocialShare() {
  const [open, setOpen] = useState(false);

  const shareUrls = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      color: "#1877f2",
      url: "https://www.facebook.com/sharer/sharer.php?u=",
    },
    {
      name: "Twitter / X",
      icon: "fab fa-twitter",
      color: "#1da1f2",
      url: "https://twitter.com/intent/tweet?url=",
    },
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin-in",
      color: "#0077b5",
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
    {
      name: "WhatsApp",
      icon: "fab fa-whatsapp",
      color: "#25d366",
      url: "https://api.whatsapp.com/send?text=",
    },
  ];

  const handleShare = (baseUrl: string) => {
    if (typeof window !== "undefined") {
      const currentUrl = encodeURIComponent(window.location.href);
      window.open(baseUrl + currentUrl, "_blank", "width=600,height=450");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: "20px",
        transform: "translateY(-50%)",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {/* Trigger Toggle */}
      <button
        onClick={() => setOpen(!open)}
        title="Share this course"
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "50%",
          backgroundColor: "#07a64b",
          color: "#ffffff",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 14px rgba(7, 166, 75, 0.4)",
          transition: "transform 0.2s, background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      </button>

      {/* Share Items */}
      {open && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            backgroundColor: "#ffffff",
            padding: "8px",
            borderRadius: "30px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            animation: "fadeIn 0.2s ease-out",
          }}
        >
          {shareUrls.map((s) => (
            <button
              key={s.name}
              onClick={() => handleShare(s.url)}
              title={`Share on ${s.name}`}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                backgroundColor: s.color,
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 700,
                transition: "transform 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {s.name.charAt(0)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
