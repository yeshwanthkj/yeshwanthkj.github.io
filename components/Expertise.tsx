import type { CSSProperties, ReactNode } from "react";
import { skills } from "@/data/skills";
import { Code, Database, Droplet, Neural, Satellite, Tower } from "./graphics/DomainIcons";
import { Section, SectionHeader } from "./ui";

/**
 * Bento grid of expertise (layout adapted from 21st.dev "bento grid 01"),
 * each tile with a small themed animation. CSS only — no animation library.
 */
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

function IrrigationViz() {
  return (
    <div className="relative mx-auto h-44 w-48 [--fall:58px] md:h-60 md:w-60 md:[--fall:82px]" aria-hidden>
      {/* drops */}
      {[18, 50, 82].map((x, i) => (
        <span key={x} className="drip absolute top-0 h-3.5 w-2.5 rounded-b-full rounded-t-[60%] bg-water" style={{ left: `${x}%`, ...delay(i * 0.7) }} />
      ))}
      {/* soil profile */}
      <div className="absolute inset-x-0 bottom-0 h-[62%] overflow-hidden rounded-xl border border-line">
        {["var(--soil-soft)", "color-mix(in oklab, var(--soil) 22%, var(--surface))", "color-mix(in oklab, var(--soil) 36%, var(--surface))"].map((c, i) => (
          <div key={i} className="h-1/3" style={{ background: c }} />
        ))}
        <div className="wet-front absolute inset-x-0 top-0 h-full bg-gradient-to-b from-water/45 via-water/20 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-1.5 bg-field" />
      </div>
    </div>
  );
}

function MLViz() {
  const layers = [
    [20, 50, 80],
    [12, 37, 63, 88],
    [35, 65],
  ];
  const xs = [12, 50, 88];
  return (
    <svg viewBox="0 0 100 60" className="h-24 w-full" aria-hidden>
      <g stroke="var(--line-strong)" strokeWidth="0.4">
        {layers.slice(0, -1).map((l, li) =>
          l.flatMap((y1) => layers[li + 1].map((y2) => <line key={`${li}-${y1}-${y2}`} x1={xs[li]} y1={y1 * 0.6} x2={xs[li + 1]} y2={y2 * 0.6} />)),
        )}
      </g>
      {layers.map((l, li) =>
        l.map((y, ni) => (
          <circle key={`${li}-${y}`} cx={xs[li]} cy={y * 0.6} r="3.2" fill={li === 2 ? "var(--field)" : "var(--water)"} className="node-pulse" style={delay(li * 0.4 + ni * 0.15)} />
        )),
      )}
    </svg>
  );
}

function FieldViz() {
  return (
    <div className="relative mx-auto flex h-44 w-44 items-center justify-center md:h-60 md:w-60" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span key={i} className="ping absolute h-16 w-16 rounded-full border border-field/60 md:h-20 md:w-20" style={delay(i)} />
      ))}
      <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-surface text-field">
        <Tower width={28} height={28} />
      </span>
    </div>
  );
}

function CodeViz() {
  const lines = [
    { w: "70%", c: "bg-water/70", d: 0 },
    { w: "45%", c: "bg-field/70", d: 0.4 },
    { w: "85%", c: "bg-ink-2/40", d: 0.8 },
    { w: "55%", c: "bg-soil/70", d: 1.2 },
  ];
  return (
    <div className="mx-auto w-full max-w-[220px] rounded-lg border border-line bg-bg p-3" aria-hidden>
      <div className="mb-2.5 flex gap-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-line-strong" />
        ))}
      </div>
      <div className="space-y-1.5">
        {lines.map((l, i) => (
          <div key={i} className="h-1.5" style={{ width: l.w }}>
            <div className={`type-line h-full rounded-full ${l.c}`} style={delay(l.d)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineViz() {
  const steps = ["Ingest", "Clean", "Align", "Aggregate", "Serve"];
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5" aria-hidden>
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-1.5">
          <span className="stage rounded-md px-2.5 py-1.5 font-mono text-[10.5px]" style={delay(i * 0.55)}>
            {s}
          </span>
          {i < steps.length - 1 && <span className="text-line-strong">→</span>}
        </div>
      ))}
    </div>
  );
}

function GeoViz() {
  return (
    <div className="relative mx-auto h-20 w-full max-w-[260px] overflow-hidden rounded-lg border border-line" aria-hidden>
      <div className="grid h-full grid-cols-8 grid-rows-3">
        {Array.from({ length: 24 }, (_, i) => (
          <div
            key={i}
            className="border-[0.5px] border-bg"
            style={{ background: `color-mix(in oklab, var(--field) ${18 + ((i * 37) % 50)}%, var(--soil-soft))` }}
          />
        ))}
      </div>
      <div className="sweep absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-transparent via-water/40 to-transparent" />
    </div>
  );
}

const TILES: Record<string, { viz: ReactNode; icon: ReactNode; span: string; blurb: string; accent: string }> = {
  irrigation: {
    viz: <IrrigationViz />,
    icon: <Droplet width={18} height={18} />,
    span: "md:col-span-2 md:row-span-2",
    blurb: "Modeling how water moves through soil and crops to decide when and how much to irrigate.",
    accent: "text-water",
  },
  ml: {
    viz: <MLViz />,
    icon: <Neural width={18} height={18} />,
    span: "md:col-span-2",
    blurb: "Predictive models for soil moisture and crop-water use.",
    accent: "text-water",
  },
  field: {
    viz: <FieldViz />,
    icon: <Tower width={18} height={18} />,
    span: "md:col-span-2 md:row-span-2",
    blurb: "Installing and maintaining the sensors that feed the models.",
    accent: "text-field",
  },
  swe: {
    viz: <CodeViz />,
    icon: <Code width={18} height={18} />,
    span: "md:col-span-2",
    blurb: "Full-stack tools that put models in growers' hands.",
    accent: "text-ink",
  },
  data: {
    viz: <PipelineViz />,
    icon: <Database width={18} height={18} />,
    span: "md:col-span-3",
    blurb: "Pipelines that turn raw weather and sensor data into model-ready inputs.",
    accent: "text-water",
  },
  geo: {
    viz: <GeoViz />,
    icon: <Satellite width={18} height={18} />,
    span: "md:col-span-3",
    blurb: "Forecasts, station networks and satellite data across the landscape.",
    accent: "text-field",
  },
};

const ORDER = ["irrigation", "ml", "field", "swe", "data", "geo"];

export default function Expertise() {
  const groups = ORDER.map((id) => skills.find((s) => s.id === id)).filter(Boolean) as typeof skills;
  return (
    <Section id="expertise" className="relative">
      <SectionHeader
        id="expertise"
        index="01"
        eyebrow="Skills & expertise"
        title={
          <>
            Where <span className="text-water">irrigation</span>, <span className="text-field">agriculture</span> and{" "}
            technology meet.
          </>
        }
        intro="Machine learning and software development are the bridge — connecting field measurements and water science to tools growers can use."
      />

      <div className="grid grid-cols-1 gap-4 md:auto-rows-[minmax(230px,auto)] md:grid-cols-6">
        {groups.map((g, i) => {
          const t = TILES[g.id];
          return (
            <article
              key={g.id}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
              className={`lift group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 hover:border-line-strong ${t.span}`}
            >
              <div className="flex flex-1 items-center justify-center py-3">{t.viz}</div>
              <div className="mt-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-ink">
                  <span className={t.accent}>{t.icon}</span>
                  {g.title}
                </h3>
                <p className="mt-1 text-[14px] leading-relaxed text-muted">{t.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${g.title} skills`}>
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full border border-line bg-bg px-2.5 py-0.5 text-[12px] text-ink-2 transition-colors group-hover:border-line-strong">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
