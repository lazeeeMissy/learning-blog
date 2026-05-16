import Link from "next/link";
import { formatDate } from "@/lib/format";
import { slugify, type PostSummary } from "@/lib/posts";

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <article className="border-b border-line py-7 first:pt-0">
      <div className="mb-3 flex flex-wrap items-center gap-2 text-sm text-ink/60">
        <span>{formatDate(post.date)}</span>
        <span aria-hidden="true">/</span>
        <Link href={`/categories/${slugify(post.category)}`} className="text-ocean hover:underline">
          {post.category}
        </Link>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="text-2xl font-semibold tracking-normal text-ink">
        <Link href={`/blog/${post.slug}`} className="hover:text-clay">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-7 text-ink/72">{post.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${slugify(tag)}`}
            className="rounded-md border border-line bg-white px-2.5 py-1 text-sm text-ink/70 hover:border-ocean hover:text-ocean"
          >
            {tag}
          </Link>
        ))}
      </div>
    </article>
  );
}
