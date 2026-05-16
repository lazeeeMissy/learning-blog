import type { Metadata } from "next";
import { SearchClient } from "@/components/SearchClient";
import { getSearchIndex } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Search"
};

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="content-card rounded-[28px] p-5 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-moss">Search</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink">Find a note</h1>
      <div className="mt-8">
        <SearchClient items={getSearchIndex()} />
      </div>
      </div>
    </main>
  );
}
