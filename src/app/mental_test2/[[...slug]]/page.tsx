import MentalTestView from "@/components/mentalhealthtest/MentalTestView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality of Life Test | Counsel India",
  description:
    "Assess your satisfaction across key life domains including health, security, relationships, and purpose.",
};

interface PageProps {
  params: Promise<{ slug?: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function MentalTest2Page({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const sParams = await searchParams;

  const email = slug?.[0] ? decodeURIComponent(slug[0]) : "";
  const mobile = slug?.[1] ? decodeURIComponent(slug[1]) : "";
  const name = slug?.[2] ? decodeURIComponent(slug[2]) : "";
  const id = typeof sParams.id === "string" ? sParams.id : undefined;

  return <MentalTestView testNumber={2} initialUser={{ name, email, mobile, id }} />;
}
