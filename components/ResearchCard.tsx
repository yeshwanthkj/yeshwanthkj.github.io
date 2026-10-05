import type { ResearchProject } from "@/data/types";
import { OasisVisual, PipelineVisual, SoilProfileVisual } from "./graphics/ProjectVisuals";
import { ArrowUpRight } from "./Icons";
import { StatusBadge, Tag } from "./ui";

function Visual({ kind }: { kind: ResearchProject["visual"] }) {
  switch (kind) {
    case "oasis":
      return <OasisVisual />;
    case "soil-profile":
      return <SoilProfileVisual />;
    case "pipeline":
      return <PipelineVisual />;
    default:
      return null;
  }
}

export function FeaturedResearchCard({ project, index }: { project: ResearchProject; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article
      id={project.id}
      data-reveal
      aria-labelledby={`r-${project.id}`}
      className="group scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-surface shadow-[var(--shadow)] transition-colors duration-300 hover:border-line-strong"
    >
      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        <div className={`p-6 sm:p-8 lg:p-10 ${flip ? "lg:order-2" : "lg:order-1"}`}>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-xs text-muted">{String(index + 1).padStart(2, "0")}</span>
            <StatusBadge status={project.status} />
          </div>
          <p className="mt-5 font-mono text-[11.5px] uppercase tracking-[0.08em] text-field">{project.categories.join(" • ")}</p>
          <h3 id={`r-${project.id}`} className="mt-2 font-serif text-[1.9rem] font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {project.title}
          </h3>
          {project.subtitle && <p className="mt-1.5 text-[15px] text-muted">{project.subtitle}</p>}
          <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-2">{project.summary}</p>

          {project.highlights && (
            <ul className="mt-6 space-y-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-2">
                  <span aria-hidden className="mt-[9px] h-px w-3 shrink-0 bg-field" />
                  {h}
                </li>
              ))}
            </ul>
          )}

          {project.tech && (
            <ul className="mt-7 flex flex-wrap gap-1.5" aria-label="Technologies">
              {project.tech.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          )}

          {project.links && project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-4">
              {project.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-field hover:underline">
                  {l.label} <ArrowUpRight width={14} height={14} />
                </a>
              ))}
            </div>
          )}
        </div>

        <div
          className={`relative order-first flex items-center border-b border-line bg-bg/60 p-6 sm:p-8 lg:border-b-0 lg:p-10 ${
            flip ? "lg:order-1 lg:border-r" : "lg:order-2 lg:border-l"
          }`}
        >
          <div aria-hidden className="grid-texture absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="relative mx-auto w-full max-w-md">
            <Visual kind={project.visual} />
            {project.visual !== "pipeline" && <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-wider text-muted">Schematic</p>}
          </div>
        </div>
      </div>
    </article>
  );
}

export function CurrentResearchCard({ project }: { project: ResearchProject }) {
  return (
    <article
      data-reveal
      aria-labelledby={`r-${project.id}`}
      className="lift flex h-full flex-col rounded-2xl border border-dashed border-line-strong bg-surface/60 p-6 transition-colors duration-300 hover:border-soil/60 hover:bg-surface"
    >
      <StatusBadge status={project.status} />
      <h3 id={`r-${project.id}`} className="mt-4 font-serif text-xl font-semibold leading-snug tracking-tight text-ink">
        {project.title}
      </h3>
      {project.subtitle && <p className="mt-1 text-sm text-muted">{project.subtitle}</p>}
      <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-2">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.categories.map((c) => (
          <li key={c}>
            <Tag tone="soil">{c}</Tag>
          </li>
        ))}
      </ul>
    </article>
  );
}
