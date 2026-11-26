import type { Metadata } from "next";
import { pageMetadata } from "@/services/pageSeoService";
import { getCounselorByIdOrSlug } from "@/services/counselorService";

interface LayoutProps {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}

// The page itself is a client component, so its SEO is set here.
// Counsellor SEO is saved in Admin → Page SEO under /counsellors-details/<counsellor ID>
// (the last part of the address), so it survives a change of name or designation.
export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  // Last part of the address: "name-designation-94" → "94" (the counsellor's ID)
  const id = slug.split("-").pop() || slug;
  const counselor = await getCounselorByIdOrSlug(slug).catch(() => null);

  return pageMetadata(
    `/counsellors-details/${id}`,
    counselor
      ? {
          title: `${counselor.name}${counselor.designation ? ` - ${counselor.designation}` : ""} | Counsel India`,
          ...(counselor.image ? { openGraph: { images: [counselor.image] } } : {}),
        }
      : { title: "Counsellor Profile | Counsel India" },
    { canonicalPath: `/counsellors-details/${counselor?.slug || slug}` }
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
