"use client";
import React, { useState } from "react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        borderBottom: "1px solid #e2e8f0",
        padding: "60px 0 50px",
        textAlign: "center",
      }}
    >
      <div className="container">
        <span
          style={{
            display: "inline-block",
            backgroundColor: "#e8f8ee",
            color: "#07a64b",
            fontWeight: 700,
            fontSize: "12px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: "20px",
            marginBottom: "16px",
          }}
        >
          Monthly Insights
        </span>

        <h1
          style={{
            fontFamily: "Georgia, 'Playfair Display', serif",
            fontSize: "40px",
            fontWeight: 700,
            color: "#1e293b",
            margin: "0 0 16px",
          }}
        >
          Counsel India <span style={{ color: "#07a64b" }}>Newsletter</span>
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#64748b",
            maxWidth: "680px",
            margin: "0 auto 30px",
            lineHeight: "1.6",
          }}
        >
          Stay informed with evidence-based psychology articles, case studies, career guidance, and clinical breakthroughs delivered directly to your inbox every month.
        </p>

        {/* Inline Subscribe Box */}
        <form
          onSubmit={handleSubscribe}
          style={{
            maxWidth: "520px",
            margin: "0 auto",
            display: "flex",
            gap: "8px",
            backgroundColor: "#ffffff",
            padding: "6px",
            borderRadius: "8px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
            border: "1px solid #cbd5e1",
          }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email to subscribe..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              padding: "10px 16px",
              fontSize: "14.5px",
              color: "#1e293b",
              backgroundColor: "transparent",
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#07a64b",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              padding: "0 24px",
              fontWeight: 600,
              fontSize: "14.5px",
              cursor: "pointer",
              transition: "background-color 0.2s ease",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#05873d";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#07a64b";
            }}
          >
            Subscribe Free
          </button>
        </form>

        {isSubscribed && (
          <p
            style={{
              color: "#07a64b",
              fontSize: "13.5px",
              fontWeight: 600,
              marginTop: "12px",
            }}
          >
            ✓ Thank you for subscribing! You will receive our latest monthly edition shortly.
          </p>
        )}
      </div>
    </div>
  );
}
