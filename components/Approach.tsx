import type { ReactNode } from "react";
import Contours from "./graphics/Contours";
import { ArrowRight } from "./Icons";
import { Section, SectionHeader } from "./ui";

const ic = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

const icons: Record<string, ReactNode> = {
  sense: (
    <svg {...ic}>
      <path d="M12 3v13" />
      <path d="M9 16h6l-1 5h-4z" />
      <path d="M3 21h18" />
      <path d="M6.5 7.5a7 7 0 0 1 11 0M8.8 10a4 4 0 0 1 6.4 0" />
    </svg>
  ),
  forecast: (
    <svg {...ic}>
      <path d="M7 17h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.1 10.5 3.5 3.5 0 0 0 7 17Z" />
      <path d="M9 20l-1 2M13 20l-1 2M17 20l-1 2" />
    </svg>
  ),
  model: (
    <svg {...ic}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="12" cy="12" r="2.2" />
      <circle cx="19" cy="7" r="2" />
      <circle cx="19" cy="17" r="2" />
      <path d="M7 6.8 10 11M7 17.2l3-4.2M14 11l3-3M14 13l3 3" />
    </svg>
  ),
  decide: (
    <svg {...ic}>
      <path d="M12 3s-6 6.6-6 11a6 6 0 0 0 12 0c0-4.4-6-11-6-11Z" />
      <path d="m9.5 14.5 1.8 1.8 3.4-3.6" />
    </svg>
  ),
};

const STEPS = [
  {
    key: "sense",
    title: "Sense",
    text: "Soil moisture probes, rain gauges, canopy temperature sensors and weather stations measure what is happening in the field.",
    link: { label: "Field research", href: "#field" },
    color: "text-water",
  },
  {
    key: "forecast",
    title: "Forecast",
    text: "Weather forecasts and satellite data add what is coming next and what is happening across the wider landscape.",
    link: { label: "Forecast pipeline", href: "#ndfd-pipeline" },
    color: "text-water",
  },
  {
    key: "model",
    title: "Model",
    text: "Machine learning and FAO-56 water-balance models estimate crop water use and how much water is left in the root zone.",
    link: { label: "Soil moisture ML", href: "#soil-moisture-ml" },
    color: "text-field",
  },
  {
    key: "decide",
    title: "Decide",
    text: "A web-based decision support tool turns it all into a clear recommendation: when to irrigate, and how much.",
    link: { label: "OASIS platform", href: "#oasis" },
    color: "text-field",
  },
];

export default function Approach() {
  return (
    <Section id="approach" className="relative overflow-hidden">
      <Contours className="absolute -right-40 -top-20 -z-10 w-[640px] opacity-40" />
      <SectionHeader
        id="approach"
        index="02"
        eyebrow="Decision support for irrigation"
        title={
          <>
            From field data to a <span className="text-field">clear irrigation decision.</span>
          </>
        }
        intro="Good irrigation depends on what is happening in the soil, the crop and the sky. A decision support system brings those signals together and turns them into practical guidance for growers."
      />

      <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* connecting line on large screens */}
        <span aria-hidden className="absolute left-[12%] right-[12%] top-[52px] hidden h-px lg:block">
          <span className="block h-full w-full bg-gradient-to-r from-water/60 via-water/40 to-field/70" />
        </span>
        {STEPS.map((s, i) => (
          <li
            key={s.key}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
            className="lift group relative flex flex-col rounded-2xl border border-line bg-surface p-6 hover:border-line-strong"
          >
            <div className="flex items-center justify-between">
              <span className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-bg ${s.color} transition-transform duration-300 group-hover:scale-105`}>
                {icons[s.key]}
              </span>
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{s.title}</h3>
            <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-2">{s.text}</p>
            <a href={s.link.href} className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-field">
              {s.link.label}
              <ArrowRight width={14} height={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </li>
        ))}
      </ol>

      <p data-reveal className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-muted">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden className="text-soil">
          <path d="M3 12a9 9 0 0 1 15.5-6.2M21 12a9 9 0 0 1-15.5 6.2" />
          <path d="M18 2v4h-4M6 22v-4h4" />
        </svg>
        Feedback from growers and new field data keep improving the models.
      </p>
    </Section>
  );
}
