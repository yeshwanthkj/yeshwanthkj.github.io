import { earlierProjects, skills } from "@/data/skills";
import { ArrowUpRight } from "./Icons";
import { Section, SectionHeader } from "./ui";

const groupAccent: Record<string, string> = {
  ml: "text-water",
  swe: "text-ink-2",
  data: "text-water",
  ag: "text-field",
};

export default function Projects() {
  return (
    <Section id="projects" className="border-y border-line bg-surface-2/40">
      <SectionHeader
        id="projects"
        index="06"
        eyebrow="Toolkit & foundations"
        title="The computer-science foundation underneath."
        intro="Earlier projects from my undergraduate years and internship — the work that led to agricultural research — and the tools I use today."
      />

      {/* Earlier projects */}
      <div className="grid gap-4 sm:grid-cols-2">
        {earlierProjects.map((p) => (
          <article key={p.id} data-reveal className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
            <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{p.context}</p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">{p.title}</h3>
            <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-2">{p.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <p className="font-mono text-[11.5px] text-muted">{p.tech.join(" · ")}</p>
              {p.doi && (
                <a
                  href={`https://doi.org/${p.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1 font-mono text-[11.5px] text-field hover:underline"
                >
                  DOI <ArrowUpRight width={12} height={12} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h3 data-reveal className="eyebrow mb-6">Toolkit</h3>
        <div data-reveal className="grid overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 1 }}>
          {skills.map((g) => (
            <div key={g.id} className="bg-surface p-6">
              <h4 className={`text-sm font-semibold tracking-tight ${groupAccent[g.id] ?? "text-ink"}`}>{g.title}</h4>
              <ul className="mt-4 space-y-1.5">
                {g.items.map((s) => (
                  <li key={s} className="text-[14px] text-ink-2">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
