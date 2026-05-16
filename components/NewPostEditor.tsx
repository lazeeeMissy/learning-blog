"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Section = {
  id: string;
  level: number;
  title: string;
  lines: string[];
};

const starterMarkdown = `## What I learned

Write the main idea here.

## Notes

- Add details
- Add examples
- Add links

## Questions

What should I review next?`;

export function NewPostEditor() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Notes");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState(starterMarkdown);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const sections = useMemo(() => parseSections(content), [content]);

  async function savePost() {
    setIsSaving(true);
    setStatus(null);

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        category,
        tags: tags.split(",").map((tag) => tag.trim()).filter(Boolean),
        content
      })
    });

    const result = (await response.json()) as { error?: string; url?: string };
    setIsSaving(false);

    if (!response.ok) {
      setStatus(result.error ?? "Unable to create post.");
      return;
    }

    router.push(result.url ?? "/blog");
    router.refresh();
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
      <section className="content-card rounded-[28px] p-5 sm:p-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className="text-sm font-medium text-ink/70">Title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="What did you learn?"
              className="mt-2 w-full rounded-lg border border-line bg-white/90 px-4 py-3 text-base text-ink outline-none focus:border-ocean focus:ring-4 focus:ring-ocean/10"
            />
          </label>

          <label>
            <span className="text-sm font-medium text-ink/70">Category</span>
            <input
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="mt-2 w-full rounded-lg border border-line bg-white/90 px-4 py-3 text-base text-ink outline-none focus:border-ocean focus:ring-4 focus:ring-ocean/10"
            />
          </label>

          <label>
            <span className="text-sm font-medium text-ink/70">Tags</span>
            <input
              value={tags}
              onChange={(event) => setTags(event.target.value)}
              placeholder="Next.js, TypeScript, Notes"
              className="mt-2 w-full rounded-lg border border-line bg-white/90 px-4 py-3 text-base text-ink outline-none focus:border-ocean focus:ring-4 focus:ring-ocean/10"
            />
          </label>

          <label className="sm:col-span-2">
            <span className="text-sm font-medium text-ink/70">Description</span>
            <input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="One sentence summary"
              className="mt-2 w-full rounded-lg border border-line bg-white/90 px-4 py-3 text-base text-ink outline-none focus:border-ocean focus:ring-4 focus:ring-ocean/10"
            />
          </label>
        </div>

        <label className="mt-5 block">
          <span className="text-sm font-medium text-ink/70">Markdown</span>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="mt-2 min-h-[520px] w-full resize-y rounded-lg border border-line bg-white/92 px-4 py-4 font-mono text-sm leading-7 text-ink outline-none focus:border-ocean focus:ring-4 focus:ring-ocean/10"
            spellCheck={false}
          />
        </label>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={savePost}
            disabled={isSaving}
            className="rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-paper hover:bg-clay disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSaving ? "Saving..." : "Create post"}
          </button>
          {status ? <p className="text-sm text-clay">{status}</p> : null}
        </div>
      </section>

      <aside className="content-card rounded-[28px] p-5 sm:p-7">
        <div className="mb-5">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-moss">Preview</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink">{title || "Untitled note"}</h2>
          <p className="mt-2 text-sm text-ink/62">Headings can be expanded and collapsed.</p>
        </div>

        <div className="space-y-3">
          {sections.map((section) => {
            const isCollapsed = collapsed[section.id] ?? false;
            return (
              <section key={section.id} className="rounded-lg border border-line bg-white/78 p-3">
                <button
                  type="button"
                  onClick={() => setCollapsed((current) => ({ ...current, [section.id]: !isCollapsed }))}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className={section.level === 2 ? "font-semibold text-ink" : "text-sm font-semibold text-ink/78"}>
                    {section.title}
                  </span>
                  <span className="text-lg leading-none text-ink/50">{isCollapsed ? "+" : "-"}</span>
                </button>
                {!isCollapsed ? <MarkdownLines lines={section.lines} /> : null}
              </section>
            );
          })}
        </div>
      </aside>
    </div>
  );
}

function parseSections(markdown: string): Section[] {
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const line of markdown.split("\n")) {
    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (heading) {
      current = {
        id: `${sections.length}-${heading[2].toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        level: heading[1].length,
        title: heading[2],
        lines: []
      };
      sections.push(current);
      continue;
    }

    if (!current) {
      current = {
        id: "intro",
        level: 2,
        title: "Intro",
        lines: []
      };
      sections.push(current);
    }

    current.lines.push(line);
  }

  return sections;
}

function MarkdownLines({ lines }: { lines: string[] }) {
  const visibleLines = lines.filter((line) => line.trim());

  if (visibleLines.length === 0) {
    return <p className="mt-3 text-sm text-ink/42">Empty section</p>;
  }

  return (
    <div className="mt-3 space-y-2 text-sm leading-6 text-ink/68">
      {visibleLines.map((line, index) => (
        <p key={`${line}-${index}`}>{line.replace(/^[-*]\s+/, "• ")}</p>
      ))}
    </div>
  );
}
