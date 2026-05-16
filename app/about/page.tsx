import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="content-card rounded-[28px] p-5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">About</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">A living notebook for learning in public.</h1>
      <div className="prose prose-stone mt-8 max-w-none prose-headings:text-ink prose-a:text-ocean">
        <p>
          This site is designed as a personal learning trail: part blog, part reference shelf, and part searchable note system.
          Each post is written in MDX, so notes can include code, links, structured headings, and reusable components later.
        </p>
        <p>
          The first version focuses on keeping the writing loop simple. Add a file to <code>content/posts</code>, set the frontmatter,
          and it appears in the blog list, category pages, tag pages, and search.
        </p>
      </div>
      </div>
    </main>
  );
}
