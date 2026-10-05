import { education, experience } from "@/data/experience";
import { Section, SectionHeader, Tag } from "./ui";

export default function Experience() {
  return (
    <Section id="experience" className="border-y border-line bg-surface-2/40">
      <SectionHeader
        id="experience"
        index="05"
        eyebrow="Experience & education"
        title="Where I've worked and studied."
      />

      <div className="grid gap-16 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        {/* Experience timeline */}
        <div>
          <h3 className="eyebrow mb-8">Experience</h3>
          <ol data-reveal className="relative">
            <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-line" />
            <span aria-hidden className="timeline-progress absolute bottom-2 left-[7px] top-2 w-px bg-field" />
            {experience.map((e) => (
              <li key={e.id} className="relative grid grid-cols-[16px_1fr] gap-6 pb-12 last:pb-0">
                <span className="relative z-10 mt-1.5 flex h-4 w-4 items-center justify-center">
                  {e.current && <span aria-hidden className="sensor-pulse absolute h-4 w-4 rounded-full bg-field" />}
                  <span className={`h-3 w-3 rounded-full border-2 ${e.current ? "border-field bg-field" : "border-line-strong bg-bg"}`} />
                </span>
                <div>
                  <p className="font-mono text-xs text-muted">
                    {e.start} — {e.end}
                    {e.current && <span className="ml-2 text-field">● Current</span>}
                  </p>
                  <h4 className="mt-1.5 text-xl font-semibold tracking-tight text-ink">{e.role}</h4>
                  <p className="mt-0.5 text-[15px] text-ink-2">
                    {e.org}
                    {e.unit && <span className="text-muted"> · {e.unit}</span>}
                  </p>
                  <p className="text-sm text-muted">{e.location}</p>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink">{e.summary}</p>
                  <ul className="mt-3 space-y-2">
                    {e.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-2">
                        <span aria-hidden className="mt-[9px] h-px w-3 shrink-0 bg-line-strong" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {e.tags && (
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {e.tags.map((t) => (
                        <li key={t}>
                          <Tag>{t}</Tag>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Education: the CS → Ag transition */}
        <div>
          <h3 className="eyebrow mb-8">Education</h3>
          <ol data-reveal className="space-y-3">
            {education.map((ed) => (
              <li
                key={ed.id}
                className={`rounded-2xl border bg-surface p-5 sm:p-6 ${ed.domain === "ag" ? "border-field/40" : "border-line"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className={`font-mono text-[11px] uppercase tracking-[0.08em] ${ed.domain === "ag" ? "text-field" : "text-water"}`}>
                      {ed.domain === "ag" ? "Agricultural engineering" : "Computer science"}
                    </p>
                    <h4 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-ink">
                      {ed.degree} <span className="font-normal text-ink-2">in {ed.field}</span>
                    </h4>
                    <p className="mt-1 text-[14.5px] text-ink-2">{ed.institution}</p>
                    <p className="text-sm text-muted">{ed.location}</p>
                  </div>
                  <span className="shrink-0 pt-0.5 text-right font-mono text-[11.5px] leading-5 text-muted">
                    {ed.start}
                    <br />– {ed.end}
                  </span>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Two computer science degrees, then a PhD that applies them to agricultural water.
          </p>
        </div>
      </div>
    </Section>
  );
}
