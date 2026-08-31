"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BlogItem } from "./data/blogsData";

interface DetailProps {
  blog: BlogItem;
  relatedBlogs: BlogItem[];
}

export default function BlogDetailContent({ blog, relatedBlogs }: DetailProps) {
  const [commentForm, setCommentForm] = useState({ name: "", email: "", mobile: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCommentForm({ name: "", email: "", mobile: "", message: "" });
    }, 4000);
  };

  return (
    <div className="blog-section section-padding-01" style={{ padding: "50px 0 90px" }}>
      <div className="container custom-container">
        {/* Breadcrumb Navigation */}
        <div style={{ marginBottom: "26px" }}>
          <div style={{ fontSize: "14px", color: "#64748b", display: "flex", alignItems: "center", gap: "8px" }}>
            <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" style={{ color: "#64748b", textDecoration: "none" }}>
              Blog
            </Link>
            <span>/</span>
            <span style={{ color: "#07a64b", fontWeight: 600 }}>{blog.title}</span>
          </div>
        </div>

        <div className="row gy-5">
          {/* Main Article Content (8 Cols) */}
          <div className="col-lg-8">
            <article
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.05)",
                border: "1px solid #edf2f7",
                padding: "36px 32px 45px",
              }}
            >
              {/* Cover Graphic */}
              <div style={{ borderRadius: "10px", overflow: "hidden", marginBottom: "28px", backgroundColor: "#f8fafc" }}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{ width: "100%", maxHeight: "440px", objectFit: "cover", display: "block" }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/assets/images/blog/skills.jpg";
                  }}
                />
              </div>

              {/* Author & Meta Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "14px",
                  borderBottom: "1px solid #f1f5f9",
                  paddingBottom: "18px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <img
                    src={blog.authorAvatar}
                    alt={blog.author}
                    style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/assets/images/author/author-01.jpg";
                    }}
                  />
                  <div>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#1e293b", display: "block" }}>
                      {blog.author}
                    </span>
                    <span style={{ fontSize: "12px", color: "#64748b" }}>Counsel India Editorial</span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "13px", color: "#64748b" }}>
                  <span>
                    <i className="far fa-calendar" style={{ color: "#07a64b", marginRight: "6px" }}></i>
                    {blog.date}
                  </span>
                  <span>
                    <i className="far fa-clock" style={{ color: "#07a64b", marginRight: "6px" }}></i>
                    {blog.readTime || "5 min read"}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontFamily: "Georgia, 'Playfair Display', serif",
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "#1e293b",
                  lineHeight: 1.3,
                  marginBottom: "20px",
                }}
              >
                {blog.title}
              </h1>

              {/* Article Body */}
              <div
                className="blog-content-body"
                style={{ fontSize: "16px", color: "#334155", lineHeight: "1.8", marginBottom: "36px" }}
              >
                {blog.content ? (
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                ) : (
                  <>
                    <p style={{ marginBottom: "18px" }}>
                      Psychology and human behavior are central to how we perceive, react, and navigate through our daily lives. In this comprehensive article, we explore practical frameworks, empirical insights, and psychotherapeutic principles designed to build emotional resilience and professional excellence.
                    </p>

                    <div
                      style={{
                        backgroundColor: "#f0fdf4",
                        borderLeft: "4px solid #07a64b",
                        padding: "20px 24px",
                        borderRadius: "0 8px 8px 0",
                        margin: "24px 0",
                      }}
                    >
                      <p style={{ fontStyle: "italic", color: "#166534", margin: 0, fontWeight: 500, fontSize: "16.5px" }}>
                        &ldquo;Understanding our emotional blueprints is not just about resolving distress—it is the catalyst for discovering authentic purpose and lifelong mental wellness.&rdquo;
                      </p>
                    </div>

                    <h3
                      style={{
                        fontFamily: "Georgia, 'Playfair Display', serif",
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#1e293b",
                        margin: "28px 0 14px",
                      }}
                    >
                      Core Psychological Insights &amp; Clinical Context
                    </h3>
                    <p style={{ marginBottom: "18px" }}>
                      Whether addressing anxiety regulation, interpersonal communication, or developmental counseling, structured psychological methodologies allow both practitioners and learners to understand underlying cognitive triggers.
                    </p>

                    <h3
                      style={{
                        fontFamily: "Georgia, 'Playfair Display', serif",
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#1e293b",
                        margin: "28px 0 14px",
                      }}
                    >
                      Key Takeaways for Mental Health Practitioners
                    </h3>
                    <ul style={{ paddingLeft: "22px", marginBottom: "24px" }}>
                      <li style={{ marginBottom: "10px" }}>
                        <strong>Evidence-Based Interventions:</strong> Applying Cognitive Behavioral and Humanistic methodologies effectively in real-world scenarios.
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <strong>Empathetic Rapport:</strong> Cultivating unconditional positive regard to establish psychological safety for clients.
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <strong>Continuous Learning:</strong> Staying abreast of modern psychometric testing standards and industry best practices.
                      </li>
                    </ul>
                  </>
                )}
              </div>

              {/* Consultation / Booking Banner */}
              <div
                style={{
                  background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                  borderRadius: "10px",
                  padding: "28px 24px",
                  color: "#ffffff",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "16px",
                  marginBottom: "40px",
                }}
              >
                <div>
                  <h4 style={{ fontSize: "19px", fontWeight: 700, color: "#ffffff", margin: "0 0 4px" }}>
                    Looking for Professional Mental Health Guidance?
                  </h4>
                  <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>
                    Connect with Counsel India&apos;s verified psychologists or explore certified psychology programs.
                  </p>
                </div>
                <Link
                  href="/counsellors-network"
                  style={{
                    backgroundColor: "#07a64b",
                    color: "#ffffff",
                    padding: "10px 22px",
                    borderRadius: "6px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Book a Session
                </Link>
              </div>

              {/* Comment / Inquiry Form matching PHP website.blog-details.blade.php */}
              <div style={{ borderTop: "1px solid #edf2f7", paddingTop: "32px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: "18px",
                  }}
                >
                  Leave a Comment or Inquiry
                </h3>

                {submitted ? (
                  <div
                    style={{
                      backgroundColor: "#e8f8ee",
                      color: "#07a64b",
                      padding: "14px 18px",
                      borderRadius: "6px",
                      fontWeight: 600,
                      fontSize: "14.5px",
                    }}
                  >
                    ✓ Thank you! Your comment/inquiry has been received by our editorial team.
                  </div>
                ) : (
                  <form onSubmit={handleSubmitComment}>
                    <div className="row g-3" style={{ marginBottom: "16px" }}>
                      <div className="col-md-6">
                        <input
                          type="text"
                          placeholder="Your Full Name*"
                          required
                          value={commentForm.name}
                          onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                          style={{
                            width: "100%",
                            height: "44px",
                            padding: "0 14px",
                            borderRadius: "6px",
                            border: "1px solid #cbd5e1",
                            fontSize: "14px",
                            outline: "none",
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          placeholder="Your Email Address*"
                          required
                          value={commentForm.email}
                          onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                          style={{
                            width: "100%",
                            height: "44px",
                            padding: "0 14px",
                            borderRadius: "6px",
                            border: "1px solid #cbd5e1",
                            fontSize: "14px",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <textarea
                        placeholder="Write your message or inquiry here..."
                        rows={4}
                        required
                        value={commentForm.message}
                        onChange={(e) => setCommentForm({ ...commentForm, message: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "6px",
                          border: "1px solid #cbd5e1",
                          fontSize: "14px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        backgroundColor: "#07a64b",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        padding: "10px 28px",
                        fontSize: "14.5px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Post Comment
                    </button>
                  </form>
                )}
              </div>
            </article>
          </div>

          {/* Related Articles Sidebar (4 Cols) */}
          <div className="col-lg-4">
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                padding: "26px 22px",
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.04)",
                border: "1px solid #edf2f7",
                position: "sticky",
                top: "100px",
              }}
            >
              <h4
                style={{
                  fontFamily: "Georgia, 'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1e293b",
                  margin: "0 0 20px",
                  borderBottom: "2px solid #07a64b",
                  paddingBottom: "8px",
                  display: "inline-block",
                }}
              >
                Recent Articles
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {relatedBlogs.slice(0, 5).map((rb) => (
                  <div
                    key={rb.id}
                    style={{
                      display: "flex",
                      gap: "14px",
                      alignItems: "center",
                      borderBottom: "1px solid #f1f5f9",
                      paddingBottom: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "65px",
                        borderRadius: "6px",
                        overflow: "hidden",
                        flexShrink: 0,
                        backgroundColor: "#f8fafc",
                      }}
                    >
                      <img
                        src={rb.image}
                        alt={rb.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/assets/images/blog/skills.jpg";
                        }}
                      />
                    </div>
                    <div>
                      <span style={{ fontSize: "11.5px", color: "#64748b", display: "block", marginBottom: "4px" }}>
                        {rb.date}
                      </span>
                      <Link
                        href={`/blog-detail/${rb.slug}`}
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: "#1e293b",
                          textDecoration: "none",
                          lineHeight: 1.3,
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {rb.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "24px" }}>
                <Link
                  href="/blog"
                  style={{
                    display: "block",
                    textAlign: "center",
                    backgroundColor: "#f8fafc",
                    color: "#07a64b",
                    padding: "10px",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  View All Articles →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
