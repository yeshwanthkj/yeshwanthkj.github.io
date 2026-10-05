import type { CSSProperties, ReactNode } from "react";
import { site } from "@/data/site";
import AerialFields from "./graphics/AerialFields";
import FieldToGrid from "./graphics/FieldToGrid";
import { ArrowDown, Download, MapPin } from "./Icons";
import { btn } from "./ui";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function Hud({ label, children, className = "", delay = 0 }: { label: string; children: ReactNode; className?: string; delay?: number }) {
  return (
    <div
      className={`float-y absolute rounded-xl border border-white/10 bg-[#0a1512]/80 px-3.5 py-3 shadow-2xl backdrop-blur-md ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

/** Small illustrative bar sparkline */
function Bars({ values, color }: { values: number[]; color: string }) {
  return (
    <div className="flex h-7 items-end gap-[3px]" aria-hidden>
      {values.map((v, i) => (
        <span key={i} className="w-[5px] rounded-sm" style={{ height: `${v * 100}%`, background: color, opacity: 0.4 + v * 0.6 }} />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="band-dark relative isolate overflow-hidden bg-bg pt-16">
      <div className="absolute inset-0 -z-10 opacity-60">
        <FieldToGrid />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_15%_40%,rgba(147,208,166,0.10),transparent_70%)]" />

      <div className="container-page grid items-center gap-12 pb-20 pt-12 sm:pt-16 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24 lg:pt-6">
        {/* Copy */}
        <div className="max-w-2xl">
          <p className="rise eyebrow mb-6 flex flex-wrap items-center gap-x-3 gap-y-1" style={d(0)}>
            <span className="text-field">AI</span>
            <span aria-hidden>•</span>
            <span className="text-water">Agriculture</span>
            <span aria-hidden>•</span>
            <span className="text-soil">Water</span>
          </p>

          <p className="rise text-lg font-medium tracking-tight text-ink-2 sm:text-xl" style={d(80)}>
            Abinava Yeshwanth <span className="text-field">KJ</span>
          </p>

          <h1
            id="hero-title"
            className="rise mt-3 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3.4rem] lg:text-[3.9rem]"
            style={d(160)}
          >
            Smarter irrigation decisions, powered by{" "}
            <span className="bg-gradient-to-r from-field to-water bg-clip-text text-transparent">data &amp; AI.</span>
          </h1>

          <p className="rise mt-6 max-w-xl font-serif text-lg leading-relaxed text-ink-2 sm:text-xl" style={d(260)}>
            I build decision support systems for irrigation — combining field sensors, weather forecasts, satellite data
            and machine learning to help growers know <em className="text-ink not-italic">when</em> and{" "}
            <em className="text-ink not-italic">how much</em> to irrigate.
          </p>

          <div className="rise mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={d(360)}>
            <a href="#approach" className={btn.primary}>
              See how it works <ArrowDown width={16} height={16} />
            </a>
            <a href="#research" className={btn.secondary}>
              Explore research
            </a>
            <a href={site.cvPath} download className={btn.ghost}>
              <Download width={16} height={16} /> Download CV
            </a>
          </div>

          <p className="rise mt-10 flex items-start gap-2 text-sm text-muted" style={d(440)}>
            <MapPin width={16} height={16} className="mt-0.5 shrink-0" />
            <span>PhD Researcher · {site.affiliation}</span>
          </p>
        </div>

        {/* Field intelligence visual */}
        <div className="rise relative mx-auto w-full max-w-[560px]" style={d(200)}>
          <div className="relative aspect-square overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]">
            <AerialFields className="absolute inset-0 h-full w-full" />
            <div aria-hidden className="scan-line pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent via-[rgba(140,196,232,0.16)] to-transparent">
              <div className="absolute inset-x-0 bottom-1/2 h-px bg-[rgba(140,196,232,0.55)]" />
            </div>
            <p className="absolute bottom-3 right-4 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">Illustration</p>
          </div>

          <Hud label="Soil moisture · 3 depths" className="left-3 top-5 sm:-left-6 sm:top-10" delay={0}>
            <Bars values={[0.8, 0.72, 0.66, 0.6, 0.52, 0.47, 0.41, 0.36]} color="var(--water)" />
          </Hud>
          <Hud label="7-day forecast" className="right-3 top-[38%] hidden sm:block sm:-right-6" delay={1200}>
            <Bars values={[0.3, 0.5, 0.2, 0.15, 0.6, 0.35, 0.25]} color="var(--soil)" />
          </Hud>
          <Hud label="Decision support" className="bottom-5 left-1/2 -translate-x-1/2 sm:bottom-8 sm:left-auto sm:right-10 sm:translate-x-0" delay={600}>
            <p className="flex items-center gap-2 text-[13px] font-medium text-ink">
              <span className="relative flex h-2 w-2">
                <span className="sensor-pulse absolute inset-0 rounded-full bg-field" />
                <span className="relative h-2 w-2 rounded-full bg-field" />
              </span>
              When &amp; how much to irrigate
            </p>
          </Hud>
        </div>
      </div>
    </section>
  );
}
