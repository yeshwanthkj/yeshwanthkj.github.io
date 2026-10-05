import { journey, researchInterests } from "@/data/site";
import { Section, SectionHeader } from "./ui";

/** Colour drifts from computing (water/ink) to agriculture (field) along the journey. */
const stepColor = ["var(--ink-2)", "var(--water)", "var(--water)", "var(--field)", "var(--field)"];

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        id="about"
        index="01"
        eyebrow="About · The journey"
        title={
          <>
            From computer science <span className="text-muted">to</span>{" "}
            <span className="text-field">agricultural water.</span>
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div data-reveal className="space-y-5 text-[1.05rem] leading-relaxed text-ink-2">
          <p>
            I started in computer science — writing software, building data pipelines and training machine-learning
            models. During my MS at Oklahoma State University I joined the Biosystems &amp; Agricultural Engineering
            department as a graduate research assistant, and the questions changed:{" "}
            <span className="text-ink">how much water does this field need this week, and how can soil, weather and
            sensor data answer that reliably?</span>
          </p>
          <p>
            Now a PhD student, I work where the two fields meet. I build the irrigation decision-support platform
            OASIS, model multi-depth soil moisture with machine learning, turn weather forecasts into agronomic inputs,
            and help instrument producer fields across Oklahoma.
          </p>

          <div className="pt-4">
            <h3 className="eyebrow mb-4">Research interests</h3>
            <ul className="flex flex-wrap gap-2">
              {researchInterests.map((r) => (
                <li key={r} className="rounded-full border border-line bg-surface px-3 py-1 text-[13px] text-ink-2">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Journey track */}
        <ol data-reveal className="relative" aria-label="Career journey">
          <span aria-hidden className="absolute bottom-3 left-[11px] top-3 w-px bg-line" />
          <span
            aria-hidden
            className="timeline-progress absolute bottom-3 left-[11px] top-3 w-px"
            style={{ background: "linear-gradient(to bottom, var(--ink-2), var(--water) 45%, var(--field))" }}
          />
          {journey.map((j, i) => (
            <li key={j.step} className="relative grid grid-cols-[24px_1fr] gap-5 pb-8 last:pb-0">
              <span className="relative z-10 mt-1 flex h-6 w-6 items-center justify-center rounded-full border bg-bg" style={{ borderColor: stepColor[i] }}>
                <span className="h-2 w-2 rounded-full" style={{ background: stepColor[i] }} />
              </span>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-semibold tracking-tight text-ink">{j.step}</h3>
                  <span className="font-mono text-xs text-muted">{j.period}</span>
                </div>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{j.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
