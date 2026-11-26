import type { Metadata } from "next";
import { fetchFromAdmin } from "./apiClient";

/** SEO saved for one page in Admin → Page SEO. */
interface PageSeo {
  path: string;
  metaTitle: string | null;
  metaDescription: string | null;
  metaKeywords: string | null;
  canonicalUrl: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  noIndex: boolean;
  noFollow: boolean;
}

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.counselindia.com").replace(
  /\/+$/,
  ""
);

async function getPageSeo(
  path: string
): Promise<{ page: PageSeo | null; defaults: PageSeo | null }> {
  try {
    const res = await fetchFromAdmin<{ page: PageSeo | null; defaults: PageSeo | null }>(
      `/api/page-seo?path=${encodeURIComponent(path)}`,
      { next: { revalidate: 60 } }
    );
    if (res.success && res.data) return res.data;
  } catch (error) {
    console.warn(`Could not fetch page SEO for ${path}, using built-in metadata:`, error);
  }
  return { page: null, defaults: null };
}

const keywordList = (v: string | null | undefined) =>
  (v || "")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

/**
 * Metadata for a fixed page. Priority for every field:
 *   1. what is saved for this page in Admin → Page SEO
 *   2. the page's own built-in metadata (`fallback`)
 *   3. the site-wide defaults saved in Admin → Page SEO
 * If the admin cannot be reached the page keeps its built-in metadata.
 *
 * Usage in a page:  export const generateMetadata = () => pageMetadata("/about", fallbackMetadata);
 */
export async function pageMetadata(
  path: string,
  fallback: Metadata = {},
  /** Address Google should treat as the main one, when it differs from `path`. */
  options: { canonicalPath?: string } = {}
): Promise<Metadata> {
  const { page, defaults } = await getPageSeo(path);

  const fallbackTitle = typeof fallback.title === "string" ? fallback.title : undefined;
  const title = page?.metaTitle || fallbackTitle || defaults?.metaTitle || undefined;
  const description =
    page?.metaDescription || fallback.description || defaults?.metaDescription || undefined;

  const keywords = keywordList(page?.metaKeywords);
  const fallbackKeywords = Array.isArray(fallback.keywords)
    ? fallback.keywords
    : keywordList(fallback.keywords as string | undefined);
  const finalKeywords = keywords.length
    ? keywords
    : fallbackKeywords.length
      ? fallbackKeywords
      : keywordList(defaults?.metaKeywords);

  const ownPath = options.canonicalPath || path;
  const canonical = page?.canonicalUrl || `${SITE_URL}${ownPath === "/" ? "" : ownPath}`;
  const image = page?.ogImage || defaults?.ogImage || undefined;
  const shareTitle = page?.ogTitle || title;
  const shareDescription = page?.ogDescription || description;

  return {
    ...fallback,
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    ...(finalKeywords.length ? { keywords: finalKeywords } : {}),
    alternates: { ...fallback.alternates, canonical },
    openGraph: {
      type: "website",
      siteName: "Counsel India",
      ...fallback.openGraph,
      url: canonical,
      ...(shareTitle ? { title: shareTitle } : {}),
      ...(shareDescription ? { description: shareDescription } : {}),
      ...(image ? { images: [image] } : {}),
    },
    twitter: {
      ...fallback.twitter,
      card: image ? "summary_large_image" : "summary",
      ...(shareTitle ? { title: shareTitle } : {}),
      ...(shareDescription ? { description: shareDescription } : {}),
      ...(image ? { images: [image] } : {}),
    },
    ...(page?.noIndex || page?.noFollow
      ? { robots: { index: !page.noIndex, follow: !page.noFollow } }
      : {}),
  };
}

/** Site-wide defaults, for the root layout. */
export async function defaultMetadata(fallback: Metadata): Promise<Metadata> {
  const { defaults } = await getPageSeo("*");
  const keywords = keywordList(defaults?.metaKeywords);
  return {
    ...fallback,
    metadataBase: new URL(SITE_URL),
    ...(defaults?.metaTitle ? { title: defaults.metaTitle } : {}),
    ...(defaults?.metaDescription ? { description: defaults.metaDescription } : {}),
    ...(keywords.length ? { keywords } : {}),
    ...(defaults?.ogImage
      ? { openGraph: { siteName: "Counsel India", images: [defaults.ogImage] } }
      : {}),
  };
}
