import MentalTestView from "@/components/mentalhealthtest/MentalTestView";
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

  const email = slug?.[0] ? decodeURIComponent(slug[0]) : "";
  const mobile = slug?.[1] ? decodeURIComponent(slug[1]) : "";
  const name = slug?.[2] ? decodeURIComponent(slug[2]) : "";
  const id = typeof sParams.id === "string" ? sParams.id : undefined;

  return <MentalTestView testNumber={1} initialUser={{ name, email, mobile, id }} />;
}
