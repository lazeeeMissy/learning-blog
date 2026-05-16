import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/PostCard";
import { getAllTags, getPostsByTag } from "@/lib/posts";

type PageProps = {
  params: Promise<{ tag: string }>;
};

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag: tag.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  const tagInfo = getAllTags().find((item) => item.slug === tag);
  return {
    title: tagInfo ? `Tag: ${tagInfo.name}` : "Tag"
  };
}

export default async function TagDetailPage({ params }: PageProps) {
  const { tag } = await params;
  const tagInfo = getAllTags().find((item) => item.slug === tag);
  const posts = getPostsByTag(tag);

  if (!tagInfo || posts.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="content-card rounded-[28px] p-5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">Tag</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">{tagInfo.name}</h1>
      <div className="mt-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      </div>
    </main>
  );
}
