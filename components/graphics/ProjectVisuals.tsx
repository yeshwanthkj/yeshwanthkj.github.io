/**
 * Schematic illustrations for featured research cards.
 * They depict the *idea* of each system — not results or real data.
 */

const Label = ({ x, y, children, anchor = "start", color = "var(--muted)" }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end"; color?: string }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize="9.5" letterSpacing="0.8" className="font-mono" fill={color}>
    {children}
  </text>
);

export function OasisVisual() {
  // Root-zone depletion: rises day by day, irrigation resets it before crossing the threshold
  const days = 22;
  const x0 = 196;
  const w = 188;
  const yTop = 52;
  const h = 150;
  const dx = w / (days - 1);
  const irrigateOn = new Set([7, 15]);
  let d = 0.18;
  const pts: string[] = [];
  const bars: number[] = [];
  for (let i = 0; i < days; i++) {
    if (irrigateOn.has(i)) {
      d = 0.14;
      bars.push(i);
    } else if (i > 0) d += 0.072 + 0.02 * Math.sin(i * 1.7);
    pts.push(`${i === 0 ? "M" : "L"}${(x0 + i * dx).toFixed(1)},${(yTop + d * h).toFixed(1)}`);
  }
  const mad = yTop + 0.66 * h;

  return (
    <svg viewBox="0 0 400 240" role="img" aria-label="Schematic: centre-pivot field with sensors and a root-zone soil water balance chart" className="h-auto w-full">
      {/* Field map */}
      <g>
        <rect x="14" y="30" width="160" height="176" rx="10" fill="var(--surface-2)" />
        <g stroke="var(--line)" strokeWidth="1">
          {Array.from({ length: 10 }, (_, i) => (
            <line key={i} x1="14" y1={46 + i * 16} x2="174" y2={46 + i * 16} />
          ))}
        </g>
        <circle cx="94" cy="118" r="66" fill="var(--field-soft)" stroke="var(--field)" strokeWidth="1.25" />
        <g className="pivot-arm" style={{ transformOrigin: "94px 118px" }}>
          <line x1="94" y1="118" x2="160" y2="118" stroke="var(--water)" strokeWidth="1.5" />
        </g>
        <circle cx="94" cy="118" r="3" fill="var(--field)" />
        {[
          [70, 92],
          [122, 140],
          [110, 84],
        ].map(([x, y]) => (
          <g key={`${x}`}>
            <circle cx={x} cy={y} r="4" fill="var(--water)" className="sensor-pulse" />
            <circle cx={x} cy={y} r="3" fill="var(--water)" />
          </g>
        ))}
        <Label x={18} y={22}>FIELD · SENSORS</Label>
      </g>

      {/* Water balance chart */}
      <g>
        <Label x={x0} y={22}>ROOT-ZONE DEPLETION</Label>
        <line x1={x0} y1={yTop} x2={x0} y2={yTop + h} stroke="var(--line-strong)" />
        <line x1={x0} y1={yTop + h} x2={x0 + w} y2={yTop + h} stroke="var(--line-strong)" />
        <line x1={x0} y1={mad} x2={x0 + w} y2={mad} stroke="var(--soil)" strokeDasharray="4 4" />
        <Label x={x0 + w} y={mad - 6} anchor="end" color="var(--soil)">THRESHOLD</Label>
        {bars.map((i) => (
          <g key={i}>
            <rect x={x0 + i * dx - 4} y={yTop - 2} width="8" height="26" rx="2" fill="var(--water)" opacity="0.75" />
          </g>
        ))}
        <Label x={x0 + 7 * dx + 9} y={yTop + 34} color="var(--water)">IRRIGATE</Label>
        <path d={pts.join(" ")} fill="none" stroke="var(--field)" strokeWidth="2" strokeLinejoin="round" className="draw-line" />
        <Label x={x0} y={yTop + h + 18}>DAYS →</Label>
      </g>
    </svg>
  );
}

export function SoilProfileVisual() {
  const layers = [
    { label: "D1", fill: "var(--soil-soft)" },
    { label: "D2", fill: "color-mix(in oklab, var(--soil) 22%, var(--surface))" },
    { label: "D3", fill: "color-mix(in oklab, var(--soil) 34%, var(--surface))" },
    { label: "D4", fill: "color-mix(in oklab, var(--soil) 46%, var(--surface))" },
  ];
  const top = 44;
  const lh = 44;
  const x0 = 120;
  const w = 262;
  const series = (i: number, phase: number) => {
    const pts: string[] = [];
    for (let k = 0; k <= 40; k++) {
      const x = x0 + (k / 40) * w;
      const amp = 12 - i * 2.4;
      const y = top + i * lh + lh / 2 + amp * Math.sin(k / 5 + phase + i * 0.6) * Math.exp(-i * 0.05) + (i * 0.6 * Math.sin(k / 11));
      pts.push(`${k === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return pts.join(" ");
  };
  return (
    <svg viewBox="0 0 400 240" role="img" aria-label="Schematic: soil profile with four depths and observed versus predicted soil moisture curves" className="h-auto w-full">
      <Label x={14} y={24}>SOIL PROFILE</Label>
      <Label x={x0} y={24}>VOLUMETRIC WATER CONTENT</Label>
      {/* crop line */}
      <g stroke="var(--field)" strokeWidth="1.5" strokeLinecap="round">
        {[30, 54, 78].map((x) => (
          <path key={x} d={`M${x},${top} v-10 m0,4 l-6,-6 m6,6 l6,-6`} fill="none" />
        ))}
      </g>
      {layers.map((l, i) => (
        <g key={l.label}>
          <rect x="14" y={top + i * lh} width="90" height={lh} fill={l.fill} />
          <Label x={22} y={top + i * lh + lh / 2 + 4} color="var(--ink-2)">{l.label}</Label>
          <circle cx="86" cy={top + i * lh + lh / 2} r="3.5" fill="var(--water)" />
          <line x1="90" y1={top + i * lh + lh / 2} x2={x0 - 6} y2={top + i * lh + lh / 2} stroke="var(--line-strong)" strokeDasharray="2 3" />
          <line x1={x0} y1={top + (i + 1) * lh} x2={x0 + w} y2={top + (i + 1) * lh} stroke="var(--line)" />
          <path d={series(i, 0)} fill="none" stroke="var(--ink-2)" strokeWidth="1.25" opacity="0.55" />
          <path d={series(i, 0.35)} fill="none" stroke="var(--water)" strokeWidth="1.75" strokeDasharray="4 3" />
        </g>
      ))}
      <g transform={`translate(${x0}, 226)`}>
        <line x1="0" y1="-3" x2="16" y2="-3" stroke="var(--ink-2)" opacity="0.55" strokeWidth="1.25" />
        <Label x={22} y={0}>OBSERVED</Label>
        <line x1="96" y1="-3" x2="112" y2="-3" stroke="var(--water)" strokeWidth="1.75" strokeDasharray="4 3" />
        <Label x={118} y={0} color="var(--water)">PREDICTED</Label>
      </g>
    </svg>
  );
}

const PIPELINE = ["NOAA NDFD", "GRIB2", "Python", "UTC → CST", "Daily aggregation", "Ag variables", "Irrigation models"];

export function PipelineVisual() {
  return (
    <div role="img" aria-label={`Pipeline: ${PIPELINE.join(" to ")}`} className="w-full">
      <p className="eyebrow mb-4">Forecast → Field pipeline</p>
      <ol className="relative grid gap-2">
        <span aria-hidden className="absolute bottom-4 left-[15px] top-4 w-px bg-line-strong" />
        {PIPELINE.map((s, i) => {
          const end = i === 0 || i === PIPELINE.length - 1;
          return (
            <li key={s} className="relative flex items-center gap-3">
              <span
                className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] ${
                  end ? "border-field bg-field-soft text-field" : "border-line-strong bg-surface text-muted"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`rounded-md border px-3 py-1.5 font-mono text-[12px] ${
                  end ? "border-field/40 bg-surface text-ink" : "border-line bg-surface text-ink-2"
                }`}
              >
                {s}
              </span>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 font-mono text-[11px] leading-relaxed text-muted">
        TMAX · TMIN · RHMAX · RHMIN · QPF · DEW POINT · WIND · SKY COVER → SRAD
      </p>
    </div>
  );
}
