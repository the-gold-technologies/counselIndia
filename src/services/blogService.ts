import { fetchFromAdmin } from "./apiClient";
import type { BlogCategoryItem, BlogItem } from "@/types/blog";

/** Blog row as returned by the Admin Panel API (/api/blogs). */
interface DbBlog {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: string;
  coverImage?: string | null;
  authorName?: string | null;
  category?: string | null;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  canonicalUrl?: string | null;
  ogImage?: string | null;
  tags?: string | null;
  publishedAt: string;
}

const DEFAULT_AUTHOR_AVATAR = "/assets/images/author/author-01.jpg";
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function slugifyCategory(name: string): string {
  return name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return `${String(d.getDate()).padStart(2, "0")} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function readTime(html: string): string {
  const words = html
    .replace(/<[^>]*>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

function mapBlog(b: DbBlog): BlogItem {
  const category = (b.category || "General").trim();
  return {
    id: b.id,
    title: b.title,
    slug: b.slug,
    image: b.coverImage ? encodeURI(decodeURI(b.coverImage)) : "",
    date: formatDate(b.publishedAt),
    author: b.authorName || "Counsel India",
    authorAvatar: DEFAULT_AUTHOR_AVATAR,
    category,
    categorySlug: slugifyCategory(category),
    readTime: b.content ? readTime(b.content) : undefined,
    excerpt: b.excerpt || undefined,
    content: b.content,
    metaTitle: b.metaTitle || undefined,
    metaDescription: b.metaDescription || undefined,
    metaKeywords: b.metaKeywords || undefined,
    canonicalUrl: b.canonicalUrl || undefined,
    ogImage: b.ogImage ? encodeURI(decodeURI(b.ogImage)) : undefined,
    tags: (b.tags || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
  };
}

/**
 * All published blogs (newest first) from the Admin Panel, without the post body (summary mode keeps
 * list pages fast). Returns [] if the API is unreachable.
 */
export async function getBlogs(): Promise<BlogItem[]> {
  try {
    const res = await fetchFromAdmin<DbBlog[]>("/api/blogs?summary=1");
    return Array.isArray(res?.data) ? res.data.map(mapBlog) : [];
  } catch (err) {
    console.warn("Failed to fetch blogs from Admin API:", err);
    return [];
  }
}

/** A single published blog by its web address (slug), or null if not found. */
export async function getBlogBySlug(slug: string): Promise<BlogItem | null> {
  try {
    const clean = decodeURIComponent(slug).trim();
    const res = await fetchFromAdmin<DbBlog>(`/api/blogs/${encodeURIComponent(clean)}`);
    return res?.data ? mapBlog(res.data) : null;
  } catch {
    return null;
  }
}

/** Category list with post counts, built from the blogs themselves (most posts first). */
export function buildBlogCategories(blogs: BlogItem[]): BlogCategoryItem[] {
  const map = new Map<string, BlogCategoryItem>();
  for (const b of blogs) {
    const item = map.get(b.categorySlug) || { name: b.category, slug: b.categorySlug, count: 0 };
    item.count++;
    map.set(b.categorySlug, item);
  }
  return [...map.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}
