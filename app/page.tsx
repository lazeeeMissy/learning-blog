import Image from "next/image";
import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { getAllCategories, getAllPosts, getAllTags } from "@/lib/posts";

export default function HomePage() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 4);
  const tags = getAllTags().slice(0, 10);
  const categories = getAllCategories();

  return (
    <main>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.25fr_0.75fr] md:items-center lg:px-8 lg:py-16">
          <div className="content-card rounded-[28px] p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">Personal learning path</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
              Notes, tutorials, and reflections from what I am learning.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/72">
              A lightweight knowledge base for structured blog posts, quick references, categories, and searchable MDX notes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/blog" className="rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper hover:bg-clay">
                Read posts
              </Link>
              <Link href="/search" className="rounded-md border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink hover:border-ocean hover:text-ocean">
                Search notes
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <Image
              src="/learning-map.svg"
              alt="A learning map made of connected notes"
              width={560}
              height={420}
              priority
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8">
        <div className="content-card rounded-[28px] p-5 sm:p-7">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-moss">Latest</p>
              <h2 className="mt-2 text-3xl font-semibold text-ink">Recent notes</h2>
            </div>
            <Link href="/blog" className="text-sm font-medium text-ocean hover:underline">
              View all
            </Link>
          </div>
          <div>
            {latestPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>

        <aside className="content-card space-y-8 rounded-[28px] p-5 sm:p-7 lg:mt-16">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/55">Categories</h2>
            <div className="mt-4 space-y-2">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="flex items-center justify-between rounded-md border border-line bg-white px-3 py-2 text-sm text-ink/75 hover:border-ocean hover:text-ocean"
                >
                  <span>{category.name}</span>
                  <span>{category.count}</span>
                </Link>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-ink/55">Tags</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Link key={tag.slug} href={`/tags/${tag.slug}`} className="rounded-md border border-line bg-white px-2.5 py-1 text-sm text-ink/70 hover:border-clay hover:text-clay">
                  {tag.name}
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
