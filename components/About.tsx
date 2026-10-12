import Image from "next/image";
import { journey, researchInterests, site } from "@/data/site";
import { Section, SectionHeader } from "./ui";

/** Colour drifts from computing (water/ink) to agriculture (field) along the journey. */
const stepColor = ["var(--ink-2)", "var(--water)", "var(--water)", "var(--field)", "var(--field)"];

export default function About() {
  return (
    <Section id="about" className="border-t border-line">
      <SectionHeader
        id="about"
        index="03"
        eyebrow="About"
        title={
          <>
            A computer scientist <span className="text-field">working on agricultural water.</span>
          </>
        }
      />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Portrait */}
        <figure data-reveal className="lg:sticky lg:top-24 lg:self-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line sm:aspect-[4/5]">
            <Image
              src="/images/field/kj-in-the-field.jpg"
              alt="Abinava Yeshwanth KJ standing in a green crop field under a blue sky"
              fill
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover transition-transform duration-[1.5s] ease-out hover:scale-[1.03]"
              style={{ objectPosition: "50% 35%" }}
            />
            <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
            <figcaption className="absolute bottom-4 left-5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/90">
              In the field
            </figcaption>
          </div>
        </figure>

        <div>
          <div data-reveal className="space-y-5 text-[1.05rem] leading-relaxed text-ink-2">
            <p>
              My background is in computer science — software, data pipelines and machine learning. Today I apply
              those skills to a practical question:{" "}
              <span className="text-ink">how can growers use soil, weather and sensor data to decide when and how
              much to irrigate?</span>
            </p>
            <p>
              As a PhD researcher in Biosystems &amp; Agricultural Engineering at Oklahoma State University, I build
              irrigation decision support tools, develop machine-learning models for soil moisture, process weather
              forecasts for crop-water models, and work in the field installing the sensors that make it all possible.
            </p>
            <p>
              I&apos;m part of the <span className="text-ink">{site.lab.name}</span>, led by{" "}
              <a
                href={site.lab.piUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-field underline decoration-field/40 underline-offset-4 hover:decoration-field"
              >
                {site.lab.pi}
              </a>
              , where I work on irrigation decision support with him and the team.
            </p>
          </div>

          <div data-reveal className="mt-8">
            <h3 className="eyebrow mb-4">Research interests</h3>
            <ul className="flex flex-wrap gap-2">
              {researchInterests.map((r) => (
                <li key={r} className="rounded-full border border-line bg-surface px-3 py-1 text-[13px] text-ink-2 transition-colors hover:border-field/50 hover:text-ink">
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Journey track */}
          <h3 data-reveal className="eyebrow mb-6 mt-12">The journey</h3>
          <ol data-reveal className="relative" aria-label="Career journey">
            <span aria-hidden className="absolute bottom-3 left-[11px] top-3 w-px bg-line" />
            <span
              aria-hidden
              className="timeline-progress absolute bottom-3 left-[11px] top-3 w-px"
              style={{ background: "linear-gradient(to bottom, var(--ink-2), var(--water) 45%, var(--field))" }}
            />
            {journey.map((j, i) => (
              <li key={j.step} className="relative grid grid-cols-[24px_1fr] gap-5 pb-7 last:pb-0">
                <span className="relative z-10 mt-1 flex h-6 w-6 items-center justify-center rounded-full border bg-bg" style={{ borderColor: stepColor[i] }}>
                  <span className="h-2 w-2 rounded-full" style={{ background: stepColor[i] }} />
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-lg font-semibold tracking-tight text-ink">{j.step}</h4>
                    <span className="font-mono text-xs text-muted">{j.period}</span>
                  </div>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{j.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
