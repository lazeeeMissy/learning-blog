import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/PostCard";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = getAllCategories().find((item) => item.slug === category);
  return {
    title: categoryInfo ? `Category: ${categoryInfo.name}` : "Category"
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { category } = await params;
  const categoryInfo = getAllCategories().find((item) => item.slug === category);
  const posts = getPostsByCategory(category);

  if (!categoryInfo || posts.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="content-card rounded-[28px] p-5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ocean">Category</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">{categoryInfo.name}</h1>
      <div className="mt-10">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
      </div>
    </main>
  );
}
