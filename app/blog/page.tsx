import type { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog"
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="content-card rounded-[28px] p-5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-moss">Blog</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">All learning notes</h1>
      <p className="mt-4 max-w-2xl text-ink/70">
        Browse tutorials, summaries, experiments, and reflections in reverse chronological order.
      </p>
      <div className="mt-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      </div>
    </main>
  );
}
