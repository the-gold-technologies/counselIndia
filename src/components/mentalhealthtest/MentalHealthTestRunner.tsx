"use client";
import React from "react";
import { TestData } from "./MentalHealthTestCard";

interface RunnerProps {
  test: TestData;
  answers: { [key: number]: number };
  onOptionSelect: (questionId: number, points: number) => void;
  onSubmit: () => void;
  onExit: () => void;
}

export default function MentalHealthTestRunner({
  test,
  answers,
  onOptionSelect,
  onSubmit,
  onExit,
}: RunnerProps) {
  const isComplete = Object.keys(answers).length >= test.questions.length;

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "14px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
            padding: "40px 35px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #e2e8f0",
              paddingBottom: "16px",
              marginBottom: "24px",
            }}
          >
            <div>
              <span style={{ fontSize: "12px", color: "#07a64b", fontWeight: 700, textTransform: "uppercase" }}>
                Assessment in Progress
              </span>
              <h2
                style={{
                  fontFamily: "Georgia, 'Playfair Display', serif",
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#1e293b",
                  margin: "4px 0 0",
                }}
              >
                {test.title}
              </h2>
            </div>
            <button
              onClick={onExit}
              style={{
                background: "none",
                border: "1px solid #cbd5e1",
                borderRadius: "6px",
                padding: "6px 14px",
                fontSize: "13.5px",
                color: "#64748b",
                cursor: "pointer",
              }}
            >
              Exit Test
            </button>
          </div>

          {/* Question List */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            {test.questions.map((q) => (
              <div
                key={q.id}
                style={{
                  marginBottom: "24px",
                  padding: "20px 22px",
                  backgroundColor: "#f8fafc",
                  borderRadius: "10px",
                  border: "1px solid #edf2f7",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: "16px", color: "#1e293b", marginBottom: "14px" }}>
                  {q.text}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "10px" }}>
                  {q.options.map((opt) => {
                    const isSelected = answers[q.id] === opt.points;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => onOptionSelect(q.id, opt.points)}
                        style={{
                          padding: "12px 14px",
                          borderRadius: "8px",
                          border: isSelected ? "2px solid #07a64b" : "1px solid #cbd5e1",
                          backgroundColor: isSelected ? "#e8f8ee" : "#ffffff",
                          color: isSelected ? "#07a64b" : "#334155",
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: "14px",
                          cursor: "pointer",
                          textAlign: "left",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <button
                type="submit"
                disabled={!isComplete}
                style={{
                  backgroundColor: isComplete ? "#07a64b" : "#94a3b8",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "14px 44px",
                  fontSize: "16px",
                  fontWeight: 700,
                  cursor: isComplete ? "pointer" : "not-allowed",
                  boxShadow: isComplete ? "0 4px 16px rgba(7, 166, 75, 0.25)" : "none",
                  transition: "all 0.2s ease",
                }}
              >
                Submit &amp; View Results ({Object.keys(answers).length}/{test.questions.length})
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
