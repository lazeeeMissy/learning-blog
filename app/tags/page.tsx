import type { Metadata } from "next";
import Link from "next/link";
import { getAllCategories, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Tags and Categories"
};

export default function TagsPage() {
  const tags = getAllTags();
  const categories = getAllCategories();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="content-card rounded-[28px] p-5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-moss">Browse</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">Tags and categories</h1>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-2xl font-semibold text-ink">Tags</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag.slug} href={`/tags/${tag.slug}`} className="rounded-md border border-line bg-white px-3 py-2 text-sm text-ink/75 hover:border-clay hover:text-clay">
                {tag.name} ({tag.count})
              </Link>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-ink">Categories</h2>
          <div className="mt-5 space-y-2">
            {categories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`} className="flex items-center justify-between rounded-md border border-line bg-white px-3 py-2 text-sm text-ink/75 hover:border-ocean hover:text-ocean">
                <span>{category.name}</span>
                <span>{category.count}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
      </div>
    </main>
  );
}
