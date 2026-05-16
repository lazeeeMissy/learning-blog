"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { formatDate } from "@/lib/format";

type SearchItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  body: string;
};

export function SearchClient({ items }: { items: SearchItem[] }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) {
      return items;
    }

    return items.filter((item) =>
      [item.title, item.description, item.category, item.tags.join(" "), item.body]
        .join(" ")
        .toLowerCase()
        .includes(value)
    );
  }, [items, query]);

  return (
    <div className="space-y-8">
      <label className="block">
        <span className="sr-only">Search notes</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search posts, tags, categories, and notes..."
          className="w-full rounded-lg border border-line bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-ink/40 focus:border-ocean focus:ring-4 focus:ring-ocean/10"
        />
      </label>

      <div className="text-sm text-ink/60">{results.length} result{results.length === 1 ? "" : "s"}</div>

      <div className="divide-y divide-line">
        {results.map((item) => (
          <article key={item.slug} className="py-5">
            <div className="mb-2 text-sm text-ink/58">
              {formatDate(item.date)} / {item.category}
            </div>
            <h2 className="text-xl font-semibold text-ink">
              <Link href={`/blog/${item.slug}`} className="hover:text-clay">
                {item.title}
              </Link>
            </h2>
            <p className="mt-2 text-ink/70">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
