export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  author: string;
  authorAvatar: string;
  category: string;
  categorySlug: string;
  readTime?: string;
  excerpt?: string;
  content?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  tags?: string[];
}

export interface BlogCategoryItem {
  name: string;
  slug: string;
  count: number;
}
