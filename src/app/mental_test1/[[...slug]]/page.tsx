import MentalTestView from "@/components/mentalhealthtest/MentalTestView";
import { getPersonalityEntry } from "@/services/personalityService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emotional Well-Being Test | Counsel India",
  description: "Evaluate your emotional resilience, inner peace, and psychological well-being.",
};

interface PageProps {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function MentalTest1Page({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const sParams = await searchParams;

  const leadId =
    typeof sParams.id === "string"
      ? sParams.id
      : slug?.[0] && !slug[0].includes("@")
        ? slug[0]
        : undefined;
  let name =
    typeof sParams.name === "string"
      ? decodeURIComponent(sParams.name)
      : slug?.[2]
        ? decodeURIComponent(slug[2])
        : "";
  let email =
    typeof sParams.email === "string"
      ? decodeURIComponent(sParams.email)
      : slug?.[0]?.includes("@")
        ? decodeURIComponent(slug[0])
        : "";
  let mobile =
    typeof sParams.mobile === "string"
      ? decodeURIComponent(sParams.mobile)
      : slug?.[1]
        ? decodeURIComponent(slug[1])
        : "";
  let state = typeof sParams.state === "string" ? decodeURIComponent(sParams.state) : "";
  
  if (leadId && (!name || !email || !mobile)) {
    try {
      const entry = await getPersonalityEntry(leadId);
      if (entry) {
        if (!name && entry.name && entry.name !== "-") name = entry.name;
        if (!email && entry.email && entry.email !== "-") email = entry.email;
        if (!mobile && entry.mobile && entry.mobile !== "-") mobile = entry.mobile;
        if (!state && entry.state && entry.state !== "-") state = entry.state;
      }
    } catch (e) {
      console.error("Failed to load lead entry for mental test:", e);
    }
  }

  return <MentalTestView testNumber={1} initialUser={{ name, email, mobile, state, id: leadId }} />;
}
