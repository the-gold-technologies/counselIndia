"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BlogItem, BLOG_CATEGORIES } from "./data/blogsData";

interface DetailProps {
  blog: BlogItem;
  relatedBlogs: BlogItem[];
}

export default function BlogDetailContent({ blog, relatedBlogs }: DetailProps) {
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    country: "India (+91)",
    mobile: "",
    state: "",
    city: "",
    comment: "",
    hearAbout: "",
    termsAgreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentForm.name || !commentForm.email || !commentForm.mobile || !commentForm.termsAgreed) {
      alert("Please fill in all required fields and accept the Terms & Conditions.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCommentForm({
        name: "",
        email: "",
        country: "India (+91)",
        mobile: "",
        state: "",
        city: "",
        comment: "",
        hearAbout: "",
        termsAgreed: false,
      });
    }, 4000);
  };

  // Static related posts matching exact screenshots
  const topRelatedPosts = [
    {
      title: "Frequently confused terms in psychology: Important differences you must know",
      date: "27 Jun 2022",
      image: "/assets/images/blog/skills.jpg",
      slug: "what-is-colour-psychology",
    },
    {
      title: "The importance of knowing the human mind: How does studying psychology benefit your life",
      date: "11 Jul 2022",
      image: "/assets/images/blog/skills.jpg",
      slug: "what-is-colour-psychology",
    },
    {
      title: "Top 10 reasons: Why do people choose psychology as a career?",
      date: "06 Oct 2022",
      image: "/assets/images/blog/skills.jpg",
      slug: "what-is-colour-psychology",
    },
  ];

  return (
    <div className="blog-section section-padding-01" style={{ padding: "40px 0 90px", backgroundColor: "#ffffff" }}>
      <div className="container custom-container">
        <div className="row gy-5">
          {/* ============================================================ */}
          {/* LEFT MAIN COLUMN (col-lg-8) Matching Screenshots 1, 2, 3, 4, 5 */}
          {/* ============================================================ */}
          <div className="col-lg-8">
            <article className="blog-details" style={{ backgroundColor: "#ffffff" }}>
              {/* 1. Featured Cover Image with black TAG badge */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "8px",
                  overflow: "hidden",
                  marginBottom: "20px",
                  backgroundColor: "#f8fafc",
                }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{
                    width: "100%",
                    maxHeight: "440px",
                    objectFit: "cover",
                    display: "block",
                  }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/assets/images/blog/skills.jpg";
                  }}
                />
                {/* Black TAG pill badge on bottom left of image matching screenshot */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "16px",
                    left: "16px",
                    backgroundColor: "#111827",
                    color: "#ffffff",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  TAG
                </div>
              </div>

              {/* 2. Author & Date Meta Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  fontSize: "13.5px",
                  color: "#64748b",
                  marginBottom: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <img
                    src="/assets/images/favicon.png"
                    alt="Counsel India"
                    style={{ width: "16px", height: "16px", objectFit: "contain" }}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <span>Author</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{blog.date}</span>
                </div>
              </div>

              {/* 3. Main Title */}
              <h1
                style={{
                  fontFamily: "Georgia, 'Playfair Display', serif",
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#1e293b",
                  lineHeight: 1.25,
                  margin: "0 0 24px",
                }}
              >
                {blog.title}
              </h1>

              {/* 4. Rich Article Content */}
              <div
                className="blog-details-body"
                style={{
                  fontSize: "16.5px",
                  color: "#212529",
                  lineHeight: 1.85,
                  marginBottom: "40px",
                }}
              >
                {blog.content ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: blog.content
                        .replace(/<div class="blog-details__meta"[\s\S]*?<\/div>/gi, "")
                        .replace(/<h3 class="blog-details__title"[\s\S]*?<\/h3>/gi, "")
                        .trim(),
                    }}
                  />
                ) : (
                  <>
                    <h3
                      style={{
                        fontFamily: "Georgia, 'Playfair Display', serif",
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#00a651",
                        margin: "0 0 16px",
                      }}
                    >
                      Understanding Color Psychology: How Colors Influence Our Emotions and Decisions
                    </h3>
                    <p style={{ marginBottom: "20px" }}>
                      Color psychology is the study of how colors affect human behavior, emotions, and decision-making. It plays a significant role in our everyday choices, from the clothes we choose to wear to the products we buy and the environments we feel most comfortable in.
                    </p>

                    <h3
                      style={{
                        fontFamily: "Georgia, 'Playfair Display', serif",
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#00a651",
                        margin: "28px 0 16px",
                      }}
                    >
                      The Power of Color in Marketing and Branding
                    </h3>
                    <p style={{ marginBottom: "20px" }}>
                      Colors evoke emotions and perceptions, which can significantly influence consumer behavior. For example, studies show that 85% of consumers base their purchasing decisions on color alone. This makes color psychology an essential tool for marketers and brand strategists.
                    </p>

                    <ol style={{ paddingLeft: "22px", marginBottom: "26px" }}>
                      <li style={{ marginBottom: "12px" }}>
                        <strong>Red:</strong> This bold and energetic color is associated with excitement, passion, and urgency. Brands like Coca-Cola and YouTube use red to capture attention and stimulate action.
                      </li>
                      <li style={{ marginBottom: "12px" }}>
                        <strong>Blue:</strong> Often linked to trust, reliability, and calmness, blue is a popular choice for financial institutions and tech companies, such as Facebook and PayPal.
                      </li>
                      <li style={{ marginBottom: "12px" }}>
                        <strong>Yellow:</strong> This cheerful and warm color symbolizes happiness and optimism. Brands like McDonald&apos;s use yellow to create a sense of friendliness and positivity.
                      </li>
                    </ol>

                    <h3
                      style={{
                        fontFamily: "Georgia, 'Playfair Display', serif",
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#1e293b",
                        margin: "28px 0 14px",
                      }}
                    >
                      Conclusion
                    </h3>
                    <p style={{ marginBottom: "20px" }}>
                      Color psychology is a powerful tool that shapes how we perceive brands, products, and environments. By understanding the emotional and psychological effects of different colors, businesses can enhance customer engagement and drive sales. Whether you are designing a logo, creating a website, or planning an advertising campaign, leveraging color psychology can give you a competitive edge.
                    </p>
                  </>
                )}
              </div>

              {/* 5. Thin Divider Line */}
              <hr style={{ borderColor: "#f1f5f9", margin: "40px 0 35px" }} />

              {/* 6. Horizontal Related Posts Grid (3 Cards) Matching Screenshot 3 */}
              <div style={{ marginBottom: "45px" }}>
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#1e293b",
                    marginBottom: "24px",
                  }}
                >
                  Related Posts
                </h3>

                <div className="row g-4">
                  {topRelatedPosts.map((rp, idx) => (
                    <div key={idx} className="col-md-4">
                      <div
                        style={{
                          backgroundColor: "#ffffff",
                          borderRadius: "8px",
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <div
                          style={{
                            height: "140px",
                            borderRadius: "8px",
                            overflow: "hidden",
                            backgroundColor: "#f8fafc",
                            marginBottom: "14px",
                          }}
                        >
                          <Link href={`/blog-detail/${rp.slug}`}>
                            <img
                              src={rp.image}
                              alt={rp.title}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          </Link>
                        </div>
                        <h4
                          style={{
                            fontFamily: "Georgia, 'Playfair Display', serif",
                            fontSize: "15px",
                            fontWeight: 700,
                            lineHeight: 1.35,
                            margin: "0 0 8px",
                          }}
                        >
                          <Link
                            href={`/blog-detail/${rp.slug}`}
                            style={{ color: "#1e293b", textDecoration: "none" }}
                          >
                            {rp.title}
                          </Link>
                        </h4>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "12.5px",
                            color: "#64748b",
                            marginTop: "auto",
                          }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#64748b"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          <span>{rp.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Leave Your Thought Here Comment Box Matching Screenshots 4 & 5 */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "0.8px solid #1e293b",
                  borderRadius: "6px",
                  boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.18)",
                  padding: "36px 32px",
                  marginTop: "30px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "#1e293b",
                    margin: "0 0 6px",
                  }}
                >
                  Leave your thought here
                </h3>
                <p style={{ fontSize: "13.5px", color: "#64748b", margin: "0 0 24px" }}>
                  Your email address will not be published. Required fields are marked *
                </p>

                {submitted ? (
                  <div
                    style={{
                      backgroundColor: "#e8f8ee",
                      color: "#00a651",
                      padding: "16px 20px",
                      borderRadius: "6px",
                      fontWeight: 600,
                      fontSize: "15px",
                    }}
                  >
                    ✓ Thank you! Your comment/inquiry has been submitted successfully.
                  </div>
                ) : (
                  <form onSubmit={handleSubmitComment}>
                    {/* Full Name */}
                    <div style={{ marginBottom: "16px" }}>
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        required
                        value={commentForm.name}
                        onChange={(e) => setCommentForm({ ...commentForm, name: e.target.value })}
                        style={{
                          width: "100%",
                          height: "48px",
                          padding: "0 16px",
                          borderRadius: "5px",
                          border: "0.8px solid #1e293b",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.18)",
                          backgroundColor: "#ffffff",
                          fontSize: "14.5px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: "16px" }}>
                      <input
                        type="email"
                        placeholder="Your Email Address"
                        required
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({ ...commentForm, email: e.target.value })}
                        style={{
                          width: "100%",
                          height: "48px",
                          padding: "0 16px",
                          borderRadius: "5px",
                          border: "0.8px solid #1e293b",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.18)",
                          backgroundColor: "#ffffff",
                          fontSize: "14.5px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    {/* Country Select */}
                    <div style={{ marginBottom: "16px" }}>
                      <select
                        value={commentForm.country}
                        onChange={(e) => setCommentForm({ ...commentForm, country: e.target.value })}
                        style={{
                          width: "100%",
                          height: "48px",
                          padding: "0 16px",
                          borderRadius: "5px",
                          border: "0.8px solid #1e293b",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.18)",
                          backgroundColor: "#ffffff",
                          fontSize: "14.5px",
                          outline: "none",
                          boxSizing: "border-box",
                          color: "#334155",
                        }}
                      >
                        <option value="India (+91)">India (+91)</option>
                        <option value="United States (+1)">United States (+1)</option>
                        <option value="United Kingdom (+44)">United Kingdom (+44)</option>
                        <option value="United Arab Emirates (+971)">United Arab Emirates (+971)</option>
                        <option value="Canada (+1)">Canada (+1)</option>
                        <option value="Australia (+61)">Australia (+61)</option>
                        <option value="Singapore (+65)">Singapore (+65)</option>
                        <option value="Other">Other Country</option>
                      </select>
                    </div>

                    {/* Mobile */}
                    <div style={{ marginBottom: "16px" }}>
                      <input
                        type="tel"
                        placeholder="Your Mobile Number"
                        required
                        value={commentForm.mobile}
                        onChange={(e) => setCommentForm({ ...commentForm, mobile: e.target.value })}
                        style={{
                          width: "100%",
                          height: "48px",
                          padding: "0 16px",
                          borderRadius: "5px",
                          border: "0.8px solid #1e293b",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.18)",
                          backgroundColor: "#ffffff",
                          fontSize: "14.5px",
                          outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    {/* State */}
                    <div style={{ marginBottom: "16px" }}>
                      <select
                        value={commentForm.state}
                        onChange={(e) => setCommentForm({ ...commentForm, state: e.target.value })}
                        style={{
                          width: "100%",
                          height: "48px",
                          padding: "0 16px",
                          borderRadius: "5px",
                          border: "0.8px solid #1e293b",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.18)",
                          backgroundColor: "#ffffff",
                          fontSize: "14.5px",
                          outline: "none",
                          boxSizing: "border-box",
                          color: commentForm.state ? "#334155" : "#64748b",
                        }}
                      >
                        <option value="">Please Select State</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="West Bengal">West Bengal</option>
                        <option value="Other">Other State</option>
                      </select>
                    </div>

                    {/* City */}
                    <div style={{ marginBottom: "16px" }}>
                      <select
                        value={commentForm.city}
                        onChange={(e) => setCommentForm({ ...commentForm, city: e.target.value })}
                        style={{
                          width: "100%",
                          height: "48px",
                          padding: "0 16px",
                          borderRadius: "5px",
                          border: "0.8px solid #1e293b",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.18)",
                          backgroundColor: "#ffffff",
                          fontSize: "14.5px",
                          outline: "none",
                          boxSizing: "border-box",
                          color: commentForm.city ? "#334155" : "#64748b",
                        }}
                      >
                        <option value="">Please Select City</option>
                        <option value="New Delhi">New Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Noida">Noida</option>
                        <option value="Gurugram">Gurugram</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pune">Pune</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Other">Other City</option>
                      </select>
                    </div>

                    {/* Comment Textarea */}
                    <div style={{ marginBottom: "16px" }}>
                      <textarea
                        placeholder="Your Comment"
                        rows={5}
                        required
                        value={commentForm.comment}
                        onChange={(e) => setCommentForm({ ...commentForm, comment: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "14px 16px",
                          borderRadius: "5px",
                          border: "0.8px solid #1e293b",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.18)",
                          backgroundColor: "#ffffff",
                          fontSize: "14.5px",
                          outline: "none",
                          boxSizing: "border-box",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    {/* How Did You Hear About Us */}
                    <div style={{ marginBottom: "18px" }}>
                      <label style={{ fontSize: "14px", fontWeight: 500, color: "#334155", display: "block", marginBottom: "6px" }}>
                        How Did You Hear About Us.*
                      </label>
                      <select
                        required
                        value={commentForm.hearAbout}
                        onChange={(e) => setCommentForm({ ...commentForm, hearAbout: e.target.value })}
                        style={{
                          width: "100%",
                          height: "48px",
                          padding: "0 16px",
                          borderRadius: "5px",
                          border: "0.8px solid #1e293b",
                          boxShadow: "0 0 5px rgba(0, 0, 0, 0.18)",
                          backgroundColor: "#ffffff",
                          fontSize: "14.5px",
                          outline: "none",
                          boxSizing: "border-box",
                          color: commentForm.hearAbout ? "#334155" : "#64748b",
                        }}
                      >
                        <option value="">Please Select</option>
                        <option value="Google">Google</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Blogs">Blogs</option>
                        <option value="Email">Email</option>
                        <option value="Whatsapp">Whatsapp</option>
                        <option value="Reference">Reference</option>
                        <option value="YouTube">YouTube</option>
                      </select>
                    </div>

                    {/* Terms Checkbox */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "24px" }}>
                      <input
                        type="checkbox"
                        id="commentTerms"
                        required
                        checked={commentForm.termsAgreed}
                        onChange={(e) => setCommentForm({ ...commentForm, termsAgreed: e.target.checked })}
                        style={{ marginTop: "4px", width: "16px", height: "16px", accentColor: "#00a651", cursor: "pointer" }}
                      />
                      <label htmlFor="commentTerms" style={{ fontSize: "13.5px", color: "#334155", lineHeight: 1.5, cursor: "pointer" }}>
                        By submitting this form, I agree to Counsel India&apos;s{" "}
                        <Link href="/terms-condition" style={{ color: "#00a651", textDecoration: "none", fontWeight: 600 }}>
                          Terms &amp; Conditions
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy-policy" style={{ color: "#00a651", textDecoration: "none", fontWeight: 600 }}>
                          Privacy Policy.
                        </Link>{" "}
                        <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        style={{
                          backgroundColor: "#00a651",
                          color: "#ffffff",
                          border: "none",
                          borderRadius: "6px",
                          padding: "12px 36px",
                          fontSize: "16px",
                          fontWeight: 700,
                          cursor: "pointer",
                          boxShadow: "0 2px 6px rgba(0, 166, 81, 0.25)",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#008f45";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#00a651";
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </article>
          </div>

          {/* ============================================================ */}
          {/* RIGHT SIDEBAR COLUMN (col-lg-4) Matching Screenshot 1 */}
          {/* ============================================================ */}
          <div className="col-lg-4">
            <div style={{ paddingLeft: "10px" }}>
              {/* 1. Categories List with bullets matching Screenshot 1 */}
              <div style={{ marginBottom: "35px" }}>
                <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: 0 }}>
                  {BLOG_CATEGORIES.map((c) => (
                    <li key={c.slug} style={{ marginBottom: "8px" }}>
                      <Link
                        href={`/blog`}
                        style={{
                          fontSize: "14.5px",
                          color: "#334155",
                          textDecoration: "none",
                          transition: "color 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#00a651";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#334155";
                        }}
                      >
                        <span>{c.name}</span>{" "}
                        <span style={{ color: "#64748b" }}>({c.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Related Posts in Sidebar matching Screenshot 1 */}
              <div>
                <h4
                  style={{
                    fontFamily: "Georgia, 'Playfair Display', serif",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "#1e293b",
                    margin: "0 0 20px",
                    borderBottom: "1px solid #e5e7eb",
                    paddingBottom: "8px",
                  }}
                >
                  Related Posts
                </h4>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {topRelatedPosts.map((rp, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        gap: "14px",
                        alignItems: "flex-start",
                        borderBottom: "1px solid #f1f5f9",
                        paddingBottom: "16px",
                      }}
                    >
                      {/* Thumbnail with grey TIPS overlay */}
                      <div
                        style={{
                          width: "95px",
                          height: "64px",
                          borderRadius: "4px",
                          overflow: "hidden",
                          position: "relative",
                          flexShrink: 0,
                          backgroundColor: "#f1f5f9",
                        }}
                      >
                        <Link href={`/blog-detail/${rp.slug}`} style={{ display: "block", height: "100%" }}>
                          <img
                            src={rp.image}
                            alt={rp.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              backgroundColor: "#94a3b8",
                              color: "#ffffff",
                              fontSize: "9px",
                              fontWeight: 700,
                              textAlign: "center",
                              textTransform: "uppercase",
                              padding: "2px 0",
                              letterSpacing: "0.5px",
                            }}
                          >
                            TIPS
                          </div>
                        </Link>
                      </div>

                      {/* Title and Date */}
                      <div>
                        <h5
                          style={{
                            fontFamily: "Georgia, 'Playfair Display', serif",
                            fontSize: "14px",
                            fontWeight: 700,
                            lineHeight: 1.35,
                            margin: "0 0 4px",
                          }}
                        >
                          <Link
                            href={`/blog-detail/${rp.slug}`}
                            style={{
                              color: "#1e293b",
                              textDecoration: "none",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#00a651";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#1e293b";
                            }}
                          >
                            {rp.title}
                          </Link>
                        </h5>
                        <span style={{ fontSize: "12px", color: "#94a3b8" }}>{rp.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
