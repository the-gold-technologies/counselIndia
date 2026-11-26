import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailContent from "@/components/blog/BlogDetailContent";
import { getBlogBySlug, getBlogs, buildBlogCategories } from "@/services/blogService";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const plainText = (html = "") =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

// Public site address used to build the default canonical URL for each post.
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.counselindia.com").replace(
  /\/+$/,
  ""
);

// SEO comes from the blog's SEO fields in the Admin panel (meta title, description, keywords,
// canonical URL, share image), falling back to the title, opening text and cover image.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Counsel India",
      description: "The requested article could not be found.",
    };
  }

  const title = blog.metaTitle || `${blog.title} | Counsel India`;
  const description = (blog.metaDescription || blog.excerpt || plainText(blog.content)).slice(
    0,
    160
  );

  const canonical = blog.canonicalUrl || `${SITE_URL}/blog-detail/${blog.slug}`;
  const shareImage = blog.ogImage || blog.image;
  const keywords = (blog.metaKeywords || "")
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);

  return {
    title,
    description,
    ...(keywords.length ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      siteName: "Counsel India",
      authors: [blog.author],
      ...(blog.tags?.length ? { tags: blog.tags } : {}),
      ...(shareImage ? { images: [shareImage] } : {}),
    },
    twitter: {
      card: shareImage ? "summary_large_image" : "summary",
      title,
      description,
      ...(shareImage ? { images: [shareImage] } : {}),
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [blog, allBlogs] = await Promise.all([getBlogBySlug(slug), getBlogs()]);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = allBlogs.filter((b) => b.slug !== blog.slug);

  return (
    <div className="main-wrapper" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <BlogDetailContent
        blog={blog}
        relatedBlogs={relatedBlogs}
        categories={buildBlogCategories(allBlogs)}
      />
    </div>
  );
}
