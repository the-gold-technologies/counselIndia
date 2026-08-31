"use client";
import React, { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { BLOGS_DATA, BLOG_CATEGORIES } from "@/components/blog/data/blogsData";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);

  const handleCategorySelect = (slug: string | null) => {
    setSelectedCategory(slug);
    setVisibleCount(12);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(12);
  };

  // Filter by search query AND category
  const filteredBlogs = BLOGS_DATA.filter((b) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      b.category.toLowerCase().includes(searchQuery.toLowerCase().trim());

    if (!selectedCategory) return matchesSearch;

    const normalizedSelected = selectedCategory.toLowerCase().replace(/[^a-z0-9]/g, "");
    const normalizedBlogCatSlug = (b.categorySlug || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    const normalizedBlogCatName = (b.category || "").toLowerCase().replace(/[^a-z0-9]/g, "");

    const matchesCategory =
      normalizedBlogCatSlug.includes(normalizedSelected) ||
      normalizedSelected.includes(normalizedBlogCatSlug) ||
      normalizedBlogCatName.includes(normalizedSelected);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="main-wrapper" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Main Content Area matching PHP layout */}
      <div className="blog-section" style={{ padding: "60px 0 100px" }}>
        <div className="container custom-container">
          <div className="row gy-5">
            {/* 1. Left Sidebar (3 Cols) */}
            <div className="col-lg-3">
              <BlogSidebar
                searchQuery={searchQuery}
                onSearchChange={handleSearchChange}
                categories={BLOG_CATEGORIES}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
              />
            </div>

            {/* 2. Right Cards Grid (9 Cols) */}
            <div className="col-lg-9">
              {filteredBlogs.length > 0 ? (
                <>
                  <div className="row g-4">
                    {filteredBlogs.slice(0, visibleCount).map((blog) => (
                      <div key={blog.id} className="col-xl-4 col-md-6">
                        <BlogCard blog={blog} />
                      </div>
                    ))}
                  </div>

                  {visibleCount < filteredBlogs.length && (
                    <div style={{ textAlign: "center", marginTop: "45px" }}>
                      <button
                        onClick={() => setVisibleCount((prev) => prev + 12)}
                        style={{
                          backgroundColor: "#00a651",
                          color: "#ffffff",
                          border: "none",
                          borderRadius: "6px",
                          padding: "12px 36px",
                          fontSize: "15px",
                          fontWeight: 700,
                          cursor: "pointer",
                          boxShadow: "0 4px 14px rgba(0, 166, 81, 0.2)",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#008f45";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#00a651";
                        }}
                      >
                        Load More Articles ({filteredBlogs.length - visibleCount} remaining)
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    padding: "60px 20px",
                    textAlign: "center",
                    border: "1px solid #edf2f7",
                  }}
                >
                  <h3 style={{ fontSize: "20px", color: "#1e293b", fontWeight: 700, marginBottom: "8px" }}>
                    No articles found
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "14px", margin: "0 0 16px" }}>
                    Try selecting another category or resetting the search filter.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory(null);
                    }}
                    style={{
                      backgroundColor: "#00a651",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "6px",
                      padding: "8px 20px",
                      fontSize: "14px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
