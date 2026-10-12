import { research } from "@/data/research";
import { CurrentResearchCard, FeaturedResearchCard } from "./ResearchCard";
import { Section, SectionHeader } from "./ui";

export default function Research() {
  const featured = research.filter((r) => r.featured);
  const current = research.filter((r) => !r.featured);

  return (
    <Section id="research" className="border-y border-line bg-surface-2/40">
      <SectionHeader
        id="research"
        index="04"
        eyebrow="Research & projects"
        title="Building decision support for irrigation."
        intro="Projects that connect software, machine learning and field data to everyday irrigation decisions."
      />

      <div className="space-y-6 sm:space-y-8">
        {featured.map((p, i) => (
          <FeaturedResearchCard key={p.id} project={p} index={i} />
        ))}
      </div>

      {current.length > 0 && (
        <div className="mt-16 sm:mt-20">
          <div data-reveal className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-ink">Current research directions</h3>
              <p className="mt-1 text-sm text-muted">Work in progress — findings will be shared once complete.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {current.map((p) => (
              <CurrentResearchCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
