import type { CSSProperties } from "react";
import { site } from "@/data/site";
import FieldToGrid from "./graphics/FieldToGrid";
import OrbitSystem from "./graphics/OrbitSystem";
import { ArrowDown, ArrowUpRight, Download, MapPin } from "./Icons";
import { btn } from "./ui";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const PILLARS = [
  { label: "Irrigation", color: "text-water", dot: "bg-water" },
  { label: "Agriculture", color: "text-field", dot: "bg-field" },
  { label: "Technology", color: "text-ink", dot: "bg-ink" },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="band-dark relative isolate overflow-hidden bg-bg pt-16">
      <div className="absolute inset-0 -z-10 opacity-50">
        <FieldToGrid />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_75%_45%,rgba(147,208,166,0.10),transparent_70%),radial-gradient(50%_50%_at_10%_30%,rgba(140,196,232,0.08),transparent_70%)]" />

      <div className="container-page grid items-center gap-12 pb-20 pt-12 sm:pt-16 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24 lg:pt-6">
        <div className="max-w-2xl">
          <ul className="rise mb-7 flex flex-wrap gap-2" style={d(0)} aria-label="Focus areas">
            {PILLARS.map((p) => (
              <li key={p.label} className={`inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] ${p.color}`}>
                <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${p.dot}`} />
                {p.label}
              </li>
            ))}
          </ul>

          <p className="rise text-lg font-medium tracking-tight text-ink-2 sm:text-xl" style={d(80)}>
            Abinava Yeshwanth <span className="text-field">KJ</span>
          </p>

          <h1
            id="hero-title"
            className="rise mt-3 text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.03em] text-ink sm:text-[3.3rem] lg:text-[3.75rem]"
            style={d(160)}
          >
            Bridging irrigation, agriculture{" "}
            <span className="bg-gradient-to-r from-field via-water to-ink bg-clip-text text-transparent">&amp; technology.</span>
          </h1>

          <p className="rise mt-6 max-w-xl font-serif text-lg leading-relaxed text-ink-2 sm:text-xl" style={d(260)}>
            I use <span className="text-ink">machine learning</span> and <span className="text-ink">software development</span> to
            close the gap between field data and farm decisions — building decision support tools that help growers
            irrigate at the right time, with the right amount of water.
          </p>

          <div className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={d(360)}>
            <a href="#expertise" className={btn.primary}>
              Explore my skills <ArrowDown width={16} height={16} />
            </a>
            <a href="#research" className={btn.secondary}>
              View research
            </a>
            <a href={site.cvPath} download className={btn.ghost}>
              <Download width={16} height={16} /> Download CV
            </a>
          </div>

          <div className="rise mt-10 space-y-2 text-sm text-muted" style={d(440)}>
            <p className="flex items-start gap-2">
              <MapPin width={16} height={16} className="mt-0.5 shrink-0" />
              <span>PhD Researcher · {site.affiliation}</span>
            </p>
            <p className="pl-6">
              {site.lab.name} ·{" "}
              <a href={site.lab.piUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 text-ink-2 underline decoration-line-strong underline-offset-4 hover:text-field">
                {site.lab.pi}
                <ArrowUpRight width={12} height={12} />
              </a>
            </p>
          </div>
        </div>

        <div className="rise mx-auto w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[540px]" style={d(220)}>
          <OrbitSystem />
        </div>
      </div>
    </section>
  );
}
