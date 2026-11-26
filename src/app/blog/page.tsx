"use client";
import React, { useState, useEffect, useRef } from "react";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { getBlogs, buildBlogCategories, slugifyCategory } from "@/services/blogService";
import type { BlogItem } from "@/types/blog";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Read initial category filter from URL query (?category=...)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, []);

  // Blogs are managed in the Admin panel (Blogs section)
  useEffect(() => {
    let isMounted = true;
    getBlogs()
      .then((data) => {
        if (isMounted) setBlogs(data);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = buildBlogCategories(blogs);

  const handleCategorySelect = (slug: string | null) => {
    setSelectedCategory(slug);
    setVisibleCount(12);
    const url = new URL(window.location.href);
    if (slug) {
      url.searchParams.set("category", slug);
    } else {
      url.searchParams.delete("category");
    }
    window.history.replaceState({}, "", url.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(12);
  };

  // Filter by search query AND exact category slug
  const filteredBlogs = blogs.filter((b) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === "" || b.title.toLowerCase().includes(q) || b.category.toLowerCase().includes(q);

    if (!selectedCategory) return matchesSearch;

    const blogSlug = b.categorySlug || slugifyCategory(b.category || "");
    const matchesCategory = blogSlug === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Infinite Scroll Trigger
  useEffect(() => {
    const currentTarget = observerRef.current;
    if (!currentTarget) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredBlogs.length) {
          setVisibleCount((prev) => Math.min(prev + 12, filteredBlogs.length));
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [visibleCount, filteredBlogs.length]);

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
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
              />
            </div>

            {/* 2. Right Cards Grid (9 Cols) */}
            <div className="col-lg-9">
              {isLoading ? (
                <div style={{ display: "flex", justifyContent: "center", padding: "80px 0" }}>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      border: "3px solid #e2e8f0",
                      borderTopColor: "#00a651",
                      borderRadius: "50%",
                      animation: "spin 0.8s linear infinite",
                    }}
                  />
                </div>
              ) : filteredBlogs.length > 0 ? (
                <>
                  <div className="row g-4">
                    {filteredBlogs.slice(0, visibleCount).map((blog) => (
                      <div
                        key={blog.id}
                        className="col-xl-4 col-md-6 d-flex justify-content-center"
                      >
                        <BlogCard blog={blog} />
                      </div>
                    ))}
                  </div>

                  {/* Infinite Scroll Sentinel Target (Auto loads next articles when scrolled into view) */}
                  {visibleCount < filteredBlogs.length && (
                    <div
                      ref={observerRef}
                      style={{
                        height: "40px",
                        margin: "30px 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "24px",
                          height: "24px",
                          border: "3px solid #e2e8f0",
                          borderTopColor: "#00a651",
                          borderRadius: "50%",
                          animation: "spin 0.8s linear infinite",
                        }}
                      />
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
                  <h3
                    style={{
                      fontSize: "20px",
                      color: "#1e293b",
                      fontWeight: 700,
                      marginBottom: "8px",
                    }}
                  >
                    No articles found
                  </h3>
                  <p style={{ color: "#64748b", fontSize: "14px", margin: "0 0 16px" }}>
                    Try selecting another category or resetting the search filter.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      handleCategorySelect(null);
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

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
