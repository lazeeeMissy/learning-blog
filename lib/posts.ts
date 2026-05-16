import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  createdAt?: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  draft?: boolean;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
  readingTime: string;
};

export type PostSummary = Omit<Post, "content">;

function assertFrontmatter(data: Record<string, unknown>, slug: string): PostFrontmatter {
  const required = ["title", "description", "date", "category"];
  for (const key of required) {
    if (typeof data[key] !== "string" || !data[key]) {
      throw new Error(`Post "${slug}" is missing frontmatter field "${key}".`);
    }
  }

  if (!Array.isArray(data.tags) || data.tags.some((tag) => typeof tag !== "string")) {
    throw new Error(`Post "${slug}" needs a string array frontmatter field "tags".`);
  }

  return {
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    createdAt: typeof data.createdAt === "string" ? data.createdAt : undefined,
    updatedAt: typeof data.updatedAt === "string" ? data.updatedAt : undefined,
    category: data.category as string,
    tags: data.tags as string[],
    draft: Boolean(data.draft)
  };
}

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = assertFrontmatter(data, slug);

  return {
    slug,
    content,
    readingTime: readingTime(content).text,
    ...frontmatter
  };
}

export function getAllPosts(): PostSummary[] {
  return getPostSlugs()
    .map(getPostBySlug)
    .filter((post) => !post.draft)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .map(({ content: _content, ...summary }) => summary);
}

export function getAllTags() {
  const counts = new Map<string, number>();

  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count, slug: slugify(name) }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getAllCategories() {
  const counts = new Map<string, number>();

  for (const post of getAllPosts()) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count, slug: slugify(name) }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getPostsByTag(tagSlug: string) {
  return getAllPosts().filter((post) => post.tags.some((tag) => slugify(tag) === tagSlug));
}

export function getPostsByCategory(categorySlug: string) {
  return getAllPosts().filter((post) => slugify(post.category) === categorySlug);
}

export function getSearchIndex() {
  return getPostSlugs()
    .map(getPostBySlug)
    .filter((post) => !post.draft)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      category: post.category,
      tags: post.tags,
      date: post.date,
      updatedAt: post.updatedAt,
      body: stripMdx(post.content)
    }));
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function stripMdx(value: string) {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_[\]()-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
