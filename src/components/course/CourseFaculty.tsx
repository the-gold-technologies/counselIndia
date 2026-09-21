"use client";
import React, { useState, useEffect, useRef } from "react";

interface FacultyItem {
  name: string;
  title: string;
  image: string;
}

interface Props {
  faculty: FacultyItem[];
}

export default function CourseFaculty({ faculty }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setVisibleCount(1);
      } else if (width < 768) {
        setVisibleCount(2);
      } else if (width < 992) {
        setVisibleCount(3);
      } else if (width < 1200) {
        setVisibleCount(4);
      } else {
        setVisibleCount(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!faculty || faculty.length === 0) return null;

  const totalItems = faculty.length;
  const shouldScroll = totalItems > visibleCount;
  const maxIndex = shouldScroll ? totalItems - visibleCount : 0;

  // Keep index within bounds if window resizes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Continuous auto-slider timer
  useEffect(() => {
    if (!shouldScroll) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 2800);

    return () => clearInterval(timer);
  }, [shouldScroll, maxIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;

    if (diffX > 40) {
      // swipe left -> next
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    } else if (diffX < -40) {
      // swipe right -> prev
      setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    }
  };

  const gap = 20;

  return (
    <section
      style={{
        padding: "45px 0 55px",
        backgroundColor: "#ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        className="container custom-container"
        style={{ maxWidth: "1170px", margin: "0 auto", padding: "0 16px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "28px",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: 700,
              color: "#1c2d3a",
              lineHeight: "1.3",
            }}
          >
            Course Faculty
          </h3>
        </div>

        {/* Viewport for carousel / grid */}
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            width: "100%",
            padding: "8px 0 12px",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            style={{
              display: "flex",
              gap: `${gap}px`,
              transform: shouldScroll
                ? `translateX(calc(-${currentIndex} * ((100% + ${gap}px) / ${visibleCount})))`
                : "none",
              transition: "transform 0.45s ease-in-out",
              justifyContent: "flex-start",
            }}
          >
            {faculty.map((f, idx) => (
              <div
                key={idx}
                style={{
                  flex: `0 0 calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`,
                  minWidth: `calc((100% - ${(visibleCount - 1) * gap}px) / ${visibleCount})`,
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  padding: "36px 14px 40px",
                  minHeight: "330px",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 4px 18px rgba(0, 0, 0, 0.04)",
                  border: "1px solid #f1f2f4",
                  transition: "all 0.25s ease",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 24px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 18px rgba(0, 0, 0, 0.04)";
                }}
              >
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginBottom: "22px",
                    backgroundColor: "#f4f6fb",
                    border: "1px solid #eaeaea",
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={f.image}
                    alt={f.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <h4
                  style={{
                    margin: "0 0 6px",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#1c2d3a",
                    fontFamily: "'Playfair Display', Georgia, serif",
                    lineHeight: "1.3",
                  }}
                >
                  {f.name}
                </h4>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12.5px",
                    color: "#6c757d",
                    fontWeight: 400,
                    lineHeight: "1.4",
                  }}
                >
                  {f.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots (Swiper style) */}
        {shouldScroll && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              marginTop: "24px",
            }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                style={{
                  width: dotIdx === currentIndex ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor:
                    dotIdx === currentIndex ? "#07a64b" : "#cbd5e1",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
