import type { Metadata } from "next";
import { NewPostEditor } from "@/components/NewPostEditor";

export const metadata: Metadata = {
  title: "New Post"
};

export default function NewPostPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-clay">Write</p>
        <h1 className="mt-3 text-4xl font-semibold text-ink">Create a new learning note</h1>
        <p className="mt-4 max-w-2xl text-ink/70">
          Write Markdown, add category and tags, then save it as an MDX post with automatic timestamps.
        </p>
      </div>
      <NewPostEditor />
    </main>
  );
}
