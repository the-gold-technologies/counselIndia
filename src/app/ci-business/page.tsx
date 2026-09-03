import React from "react";
import { Metadata } from "next";
import CiBusinessView from "@/components/ci-business/CiBusinessView";

export const metadata: Metadata = {
  title: "CI for Business | Corporate Mental Wellness & Training | Counsel India",
  description:
    "Transform your workplace with Counsel India's corporate wellness programs. Empower employees with Emotional Intelligence, stress management, and productivity training.",
};

export default function CiBusinessPage() {
  return <CiBusinessView />;
}
