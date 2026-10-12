import type { ComponentType, CSSProperties, SVGProps } from "react";
import AerialFields from "./AerialFields";
import {
  Tower,
  Cloud,
  Code,
  Database,
  Droplet,
  Gauge,
  Neural,
  Pivot,
  Satellite,
  SoilLayers,
  Sprinkler,
  Sprout,
  SunCloud,
} from "./DomainIcons";

/**
 * Concentric orbits (adapted from 21st.dev "Orbit Rotation", re-built with CSS only):
 * agriculture, irrigation and technology circle a centre-pivot field, with machine
 * learning + software at the centre as the bridge between them.
 */
type Item = { Icon: ComponentType<SVGProps<SVGSVGElement>>; label: string };
type Ring = { key: string; title: string; size: number; duration: number; reverse?: boolean; color: string; items: Item[]; offset: number };

const RINGS: Ring[] = [
  {
    key: "tech",
    title: "Technology",
    size: 58,
    duration: 38,
    color: "var(--ink)",
    offset: 20,
    items: [
      { Icon: Neural, label: "ML" },
      { Icon: Code, label: "Software" },
      { Icon: Cloud, label: "Cloud" },
      { Icon: Database, label: "Data" },
    ],
  },
  {
    key: "water",
    title: "Irrigation",
    size: 80,
    duration: 54,
    reverse: true,
    color: "var(--water)",
    offset: 65,
    items: [
      { Icon: Droplet, label: "Water" },
      { Icon: Pivot, label: "Pivot" },
      { Icon: Gauge, label: "Rain" },
      { Icon: Sprinkler, label: "Scheduling" },
    ],
  },
  {
    key: "ag",
    title: "Agriculture",
    size: 100,
    duration: 72,
    color: "var(--field)",
    offset: 0,
    items: [
      { Icon: Sprout, label: "Crops" },
      { Icon: SoilLayers, label: "Soil" },
      { Icon: SunCloud, label: "Weather" },
      { Icon: Satellite, label: "Satellite" },
      { Icon: Tower, label: "Sensors" },
    ],
  },
];

export default function OrbitSystem({ className = "" }: { className?: string }) {
  return (
    <figure className={className} aria-label="Irrigation, agriculture and technology connected by machine learning and software">
      <div className="relative aspect-square w-full">
        <div className="absolute inset-[6%]">
        {/* faint radial glow */}
        <div aria-hidden className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(147,208,166,0.14),transparent_70%)]" />

        {RINGS.map((ring) => {
          const inset = (100 - ring.size) / 2;
          return (
            <div
              key={ring.key}
              aria-hidden
              className={`absolute rounded-full border border-dashed ${ring.reverse ? "orbit-ccw" : "orbit-cw"}`}
              style={
                {
                  inset: `${inset}%`,
                  borderColor: `color-mix(in oklab, ${ring.color} 32%, transparent)`,
                  "--dur": `${ring.duration}s`,
                } as CSSProperties
              }
            >
              {ring.items.map(({ Icon, label }, i) => {
                const a = ((i / ring.items.length) * 360 + ring.offset) * (Math.PI / 180);
                const x = 50 + 50 * Math.cos(a);
                const y = 50 + 50 * Math.sin(a);
                return (
                  <div key={label} className="absolute" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}>
                    <div className={ring.reverse ? "orbit-cw" : "orbit-ccw"} style={{ "--dur": `${ring.duration}s` } as CSSProperties}>
                      <div className="flex flex-col items-center gap-1">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-full border bg-[#0a1512]/90 shadow-lg backdrop-blur-sm sm:h-12 sm:w-12"
                          style={{ color: ring.color, borderColor: `color-mix(in oklab, ${ring.color} 40%, transparent)` }}
                        >
                          <Icon width={20} height={20} />
                        </span>
                        <span className="hidden font-mono text-[9px] uppercase tracking-[0.12em] text-muted sm:block">{label}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Centre: a pivot-irrigated field with the ML + software bridge */}
        <div className="absolute inset-[31%] overflow-hidden rounded-full border border-white/15 shadow-[0_0_60px_-10px_rgba(147,208,166,0.45)]">
          <AerialFields className="absolute inset-0 h-full w-full scale-150" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(10,21,18,0.55),rgba(10,21,18,0.85))]" />
          <div className="relative flex h-full flex-col items-center justify-center text-center">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-field sm:text-[10px]">Bridge</span>
            <span className="mt-1 text-[13px] font-semibold leading-tight text-ink sm:text-base">
              ML +<br />
              Software
            </span>
          </div>
        </div>
        </div>
      </div>

      <figcaption className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em]">
        {RINGS.slice()
          .reverse()
          .map((r) => (
            <span key={r.key} className="inline-flex items-center gap-2 text-ink-2">
              <span aria-hidden className="h-2 w-2 rounded-full" style={{ background: r.color }} />
              {r.title}
            </span>
          ))}
      </figcaption>
    </figure>
  );
}
