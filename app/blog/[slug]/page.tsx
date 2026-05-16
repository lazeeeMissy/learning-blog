import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/MdxComponents";
import { formatDate } from "@/lib/format";
import { getPostBySlug, getPostSlugs, slugify } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) {
    return {};
  }

  const post = getPostBySlug(slug);
  return {
    title: post.title,
    description: post.description
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) {
    notFound();
  }

  const post = getPostBySlug(slug);
  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]]
      }
    }
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-sm font-medium text-ocean hover:underline">
        Back to blog
      </Link>
      <article className="content-card mt-8 rounded-[28px] p-5 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-ink/58">
          <span>{formatDate(post.date)}</span>
          <span aria-hidden="true">/</span>
          <Link href={`/categories/${slugify(post.category)}`} className="text-ocean hover:underline">
            {post.category}
          </Link>
          <span aria-hidden="true">/</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-ink/72">{post.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/tags/${slugify(tag)}`} className="rounded-md border border-line bg-white px-2.5 py-1 text-sm text-ink/70 hover:border-clay hover:text-clay">
              {tag}
            </Link>
          ))}
        </div>
        <div className="prose prose-stone mt-10 max-w-none prose-headings:font-semibold prose-headings:text-ink prose-p:leading-8 prose-a:text-ocean prose-code:text-clay">
          {content}
        </div>
      </article>
    </main>
  );
}
