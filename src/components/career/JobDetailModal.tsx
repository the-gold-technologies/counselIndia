"use client";
import React, { useEffect } from "react";
import { JobOpening } from "./data/careerData";

interface Props {
  job: JobOpening | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function JobDetailModal({ job, isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !job) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px 16px",
      }}
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg"
        style={{
          width: "100%",
          maxWidth: "850px",
          position: "relative",
          margin: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="modal-wrapper"
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "40px",
          }}
        >
          {/* Top-Right White Close Button */}
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              padding: 0,
              lineHeight: 1,
              width: "40px",
              height: "40px",
              fontSize: "32px",
              border: 0,
              background: "none",
              color: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Close modal"
          >
            <span style={{ fontWeight: 300, lineHeight: 1 }}>&times;</span>
          </button>

          {/* Modal Content */}
          <div
            className="modal-content"
            style={{
              padding: "35px 45px 45px",
              borderRadius: "5px",
              maxHeight: "calc(100vh - 120px)",
              overflowY: "auto",
              backgroundColor: "#ffffff",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.25)",
              border: "none",
            }}
          >
            <div
              className="modal-body"
              style={{
                padding: 0,
                fontSize: "14px",
                lineHeight: "1.75",
                color: "#4b5563",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
              }}
            >
              {job.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
