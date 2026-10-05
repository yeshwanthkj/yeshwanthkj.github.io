import { leadership, professional } from "@/data/leadership";
import { site } from "@/data/site";
import { Section, SectionHeader } from "./ui";

export default function Leadership() {
  const primary = leadership.filter((l) => l.tier === "primary");
  const earlier = leadership.filter((l) => l.tier === "earlier");

  return (
    <Section id="leadership">
      <SectionHeader id="leadership" index="07" eyebrow="Beyond research" title="Leadership & community." />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <h3 className="eyebrow mb-5">At Oklahoma State</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {primary.map((l) => (
              <article key={l.id} data-reveal className="rounded-2xl border border-line bg-surface p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[11px] text-muted">{l.period}</p>
                  {l.current && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-field">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-field" /> Current
                    </span>
                  )}
                </div>
                <h4 className="mt-3 text-lg font-semibold tracking-tight text-ink">{l.role}</h4>
                <p className="mt-0.5 text-[15px] text-ink-2">{l.org}</p>
                {l.description && <p className="mt-1 text-sm text-muted">{l.description}</p>}
              </article>
            ))}
          </div>

          <h3 className="eyebrow mb-4 mt-12">Undergraduate</h3>
          <ul data-reveal className="divide-y divide-line border-y border-line">
            {earlier.map((l) => (
              <li key={l.id} className="grid gap-1 py-4 sm:grid-cols-[200px_1fr] sm:gap-6">
                <div>
                  <p className="text-[15px] font-medium text-ink">{l.role}</p>
                  <p className="text-sm text-muted">{l.org}</p>
                  {l.period && <p className="mt-0.5 font-mono text-[11px] text-muted">{l.period}</p>}
                </div>
                {l.points && <p className="text-[14px] leading-relaxed text-ink-2">{l.points.join(" ")}</p>}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Professional activities</h3>
          <ul data-reveal className="space-y-3">
            {professional.map((p) => (
              <li key={p.title} className="rounded-xl border border-line bg-surface px-5 py-4">
                <p className="text-[15px] font-semibold text-ink">{p.title}</p>
                <p className="mt-0.5 text-[14px] leading-relaxed text-ink-2">{p.detail}</p>
              </li>
            ))}
          </ul>

          <div data-reveal className="mt-10">
            <h3 className="eyebrow mb-3">Off the clock</h3>
            <p className="text-[15px] text-ink-2">
              {site.interests.map((i, idx) => (
                <span key={i}>
                  {i}
                  {idx < site.interests.length - 1 && <span aria-hidden className="mx-2 text-line-strong">/</span>}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
