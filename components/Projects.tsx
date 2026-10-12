import { earlierProjects } from "@/data/skills";
import { ArrowUpRight } from "./Icons";
import { Section, SectionHeader } from "./ui";

export default function Projects() {
  return (
    <Section id="projects" className="border-y border-line bg-surface-2/40">
      <SectionHeader
        id="projects"
        index="08"
        eyebrow="Earlier projects"
        title="Foundations in computer science."
        intro="Software and machine-learning projects from before agricultural research — the foundation for today's work."
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

    </Section>
  );
}
