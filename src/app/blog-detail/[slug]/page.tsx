import React from "react";
import { notFound } from "next/navigation";
import BlogDetailContent from "@/components/blog/BlogDetailContent";
import { BLOGS_DATA } from "@/components/blog/data/blogsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOGS_DATA.slice(0, 30).map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const blog = BLOGS_DATA.find((b) => b.slug === slug);

  if (!blog) {
    // If not found in static snapshot, fallback to first blog or 404
    notFound();
  }

  const relatedBlogs = BLOGS_DATA.filter((b) => b.slug !== slug);

  return (
    <div className="main-wrapper" style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <BlogDetailContent blog={blog} relatedBlogs={relatedBlogs} />
    </div>
  );
}
