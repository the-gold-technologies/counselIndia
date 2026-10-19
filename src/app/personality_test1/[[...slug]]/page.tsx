import React from "react";
import { Metadata } from "next";
import PersonalityTestRunner from "@/components/eligibility-test/PersonalityTestRunner";
import { getPersonalityEntry } from "@/services/personalityService";

export const metadata: Metadata = {
  title: "Personality Test | Eligibility Assessment | Counsel India",
  description:
    "Assess your psychological traits, decision making, and career readiness in psychology.",
};

interface PageProps {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function PersonalityTestPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const sParams = await searchParams;

  const leadId = slug?.[0] || (typeof sParams.id === "string" ? sParams.id : undefined);
  const nameParam = typeof sParams.name === "string" ? decodeURIComponent(sParams.name) : "";
  const emailParam = typeof sParams.email === "string" ? decodeURIComponent(sParams.email) : "";
  const mobileParam = typeof sParams.mobile === "string" ? decodeURIComponent(sParams.mobile) : "";

  let candidateData = {
    name: nameParam,
    email: emailParam,
    mobile: mobileParam,
  };

  // If leadId is passed in URL path (e.g. /personality_test1/73827), try loading lead details
  if (leadId) {
    try {
      const entry = await getPersonalityEntry(leadId);
      if (entry) {
        candidateData = {
          name: entry.name || candidateData.name,
          email: entry.email || candidateData.email,
          mobile: entry.mobile || candidateData.mobile,
        };
      }
    } catch {
      // Fallback to params
    }
  }

  return <PersonalityTestRunner leadId={leadId} initialUser={candidateData} />;
}
