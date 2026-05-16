import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { slugify } from "@/lib/posts";

const postsDirectory = path.join(process.cwd(), "content/posts");

type CreatePostPayload = {
  title?: string;
  description?: string;
  category?: string;
  tags?: string[];
  content?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as CreatePostPayload;
  const title = payload.title?.trim();
  const description = payload.description?.trim() || "Untitled learning note.";
  const category = payload.category?.trim() || "Notes";
  const tags = Array.isArray(payload.tags) ? payload.tags.map((tag) => tag.trim()).filter(Boolean) : [];
  const content = payload.content?.trim() || "";

  if (!title) {
    return NextResponse.json({ error: "Title is required." }, { status: 400 });
  }

  if (!content) {
    return NextResponse.json({ error: "Markdown content is required." }, { status: 400 });
  }

  const slug = slugify(title);
  if (!slug) {
    return NextResponse.json({ error: "Title must contain letters or numbers." }, { status: 400 });
  }

  await fs.mkdir(postsDirectory, { recursive: true });
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    await fs.access(filePath);
    return NextResponse.json({ error: "A post with this title already exists." }, { status: 409 });
  } catch {
    // File does not exist, so creation can continue.
  }

  const now = new Date().toISOString();
  const file = matter.stringify(`${content}\n`, {
    title,
    description,
    date: now.slice(0, 10),
    createdAt: now,
    updatedAt: now,
    category,
    tags
  });

  await fs.writeFile(filePath, file, "utf8");

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath("/tags");
  revalidatePath("/categories");
  revalidatePath("/search");
  revalidatePath(`/blog/${slug}`);

  return NextResponse.json({ slug, url: `/blog/${slug}` }, { status: 201 });
}
