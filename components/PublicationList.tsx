"use client";

import { useMemo, useState } from "react";
import type { Publication, PublicationKind } from "@/data/types";
import { ArrowUpRight } from "./Icons";

const FILTERS: { key: "all" | PublicationKind; label: string }[] = [
  { key: "all", label: "All" },
  { key: "paper", label: "Papers" },
  { key: "oral", label: "Oral" },
  { key: "poster", label: "Posters" },
];

const KIND_LABEL: Record<PublicationKind, string> = { paper: "Paper", oral: "Oral", poster: "Poster" };
const KIND_CLS: Record<PublicationKind, string> = {
  paper: "bg-field-soft text-field",
  oral: "bg-water-soft text-water",
  poster: "bg-soil-soft text-soil",
};

function Authors({ authors, self }: { authors: string[]; self: string[] }) {
  return (
    <>
      {authors.map((a, i) => (
        <span key={a}>
          {self.includes(a) ? <strong className="font-semibold text-ink">{a}</strong> : a}
          {i < authors.length - 2 ? ", " : i === authors.length - 2 ? ", & " : ""}
        </span>
      ))}
    </>
  );
}

export default function PublicationList({ items, selfNames }: { items: Publication[]; selfNames: string[] }) {
  const [filter, setFilter] = useState<"all" | PublicationKind>("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: items.length, paper: 0, oral: 0, poster: 0 };
    items.forEach((p) => (c[p.kind] += 1));
    return c;
  }, [items]);

  const groups = useMemo(() => {
    const list = items
      .filter((p) => filter === "all" || p.kind === filter)
      .sort((a, b) => b.year - a.year);
    const byYear = new Map<number, Publication[]>();
    list.forEach((p) => byYear.set(p.year, [...(byYear.get(p.year) ?? []), p]));
    return Array.from(byYear.entries());
  }, [items, filter]);

  return (
    <div>
      <div role="group" aria-label="Filter publications" className="-mx-1 mb-10 flex gap-1 overflow-x-auto px-1 pb-1">
        {FILTERS.map((f) => {
          const on = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f.key)}
              className={`inline-flex min-h-10 shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm transition-colors ${
                on ? "border-ink bg-ink text-bg" : "border-line bg-surface text-ink-2 hover:border-line-strong hover:text-ink"
              }`}
            >
              {f.label}
              <span className={`font-mono text-[11px] ${on ? "opacity-70" : "text-muted"}`}>{counts[f.key]}</span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="space-y-12">
        {groups.map(([year, pubs]) => (
          <section key={year} aria-labelledby={`y-${year}`} className="grid gap-4 md:grid-cols-[96px_1fr] md:gap-8">
            <h3 id={`y-${year}`} className="font-mono text-sm text-muted md:sticky md:top-24 md:self-start md:pt-1">
              {year}
            </h3>
            <ol className="divide-y divide-line border-y border-line">
              {pubs.map((p) => (
                <li key={p.id} className="py-6 first:pt-5">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] leading-5 ${KIND_CLS[p.kind]}`}>
                      {KIND_LABEL[p.kind]}
                    </span>
                    {p.format && <span className="font-mono text-[11px] text-muted">{p.format}</span>}
                  </div>
                  <h4 className="font-serif text-[1.15rem] font-semibold leading-snug text-ink sm:text-[1.25rem]">{p.title}</h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    <Authors authors={p.authors} self={selfNames} />
                  </p>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-2">
                    <span className="italic">{p.venue}</span>
                    {p.details && <span className="text-muted"> · {p.details}</span>}
                  </p>
                  {p.doi && (
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line px-3 font-mono text-[11.5px] text-ink-2 transition-colors hover:border-field hover:text-field"
                      aria-label={`DOI ${p.doi} for ${p.title} (opens in new tab)`}
                    >
                      DOI <span className="max-w-[60vw] truncate sm:max-w-none">{p.doi}</span>
                      <ArrowUpRight width={13} height={13} />
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
