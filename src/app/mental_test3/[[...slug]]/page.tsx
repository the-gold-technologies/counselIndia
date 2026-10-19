import MentalTestView from "@/components/mentalhealthtest/MentalTestView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "General Health Questionnaire | Counsel India",
  description:
    "A quick psychological assessment to evaluate your concentration, vitality, and health.",
};

interface PageProps {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function MentalTest3Page({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const sParams = await searchParams;

  const email = slug?.[0] ? decodeURIComponent(slug[0]) : "";
  const mobile = slug?.[1] ? decodeURIComponent(slug[1]) : "";
  const name = slug?.[2] ? decodeURIComponent(slug[2]) : "";
  const id = typeof sParams.id === "string" ? sParams.id : undefined;

  return <MentalTestView testNumber={3} initialUser={{ name, email, mobile, id }} />;
}
