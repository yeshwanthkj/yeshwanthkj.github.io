/**
 * Research ecosystem drawn as a centre-pivot field seen from above.
 * Data sources sit on the field boundary and flow inward through a
 * machine-learning ring to decision support; irrigation flows back out.
 */
const C = 260;
const R_OUT = 196;
const R_ML = 94;
const R_CORE = 50;

const polar = (deg: number, r: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: C + r * Math.cos(a), y: C + r * Math.sin(a) };
};

type Node = { label: string; angle: number; dir: "in" | "out"; labelPos: "above" | "below" | "left" | "right" };

const NODES: Node[] = [
  { label: "Satellite", angle: -90, dir: "in", labelPos: "above" },
  { label: "Sensors", angle: -18, dir: "in", labelPos: "right" },
  { label: "Soil", angle: 54, dir: "in", labelPos: "below" },
  { label: "Irrigation", angle: 126, dir: "out", labelPos: "below" },
  { label: "Weather", angle: 198, dir: "in", labelPos: "left" },
];

function connector(angle: number) {
  const start = polar(angle, R_OUT - 10);
  const end = polar(angle, R_CORE + 4);
  const ctrl = polar(angle + 14, (R_OUT + R_CORE) / 2);
  return `M${start.x.toFixed(1)},${start.y.toFixed(1)} Q${ctrl.x.toFixed(1)},${ctrl.y.toFixed(1)} ${end.x.toFixed(1)},${end.y.toFixed(1)}`;
}

function labelProps(n: Node) {
  const p = polar(n.angle, R_OUT);
  switch (n.labelPos) {
    case "above":
      return { x: p.x, y: p.y - 18, textAnchor: "middle" as const };
    case "below":
      return { x: p.x, y: p.y + 28, textAnchor: "middle" as const };
    case "left":
      return { x: p.x - 16, y: p.y + 4, textAnchor: "end" as const };
    case "right":
      return { x: p.x + 16, y: p.y + 4, textAnchor: "start" as const };
  }
}

export default function Ecosystem({ className = "" }: { className?: string }) {
  const rows = Array.from({ length: 23 }, (_, i) => C - R_OUT + i * 18);
  return (
    <figure className={className}>
      <svg
        viewBox="-20 0 560 520"
        role="img"
        aria-labelledby="eco-title eco-desc"
        className="h-auto w-full overflow-visible"
      >
        <title id="eco-title">Research ecosystem</title>
        <desc id="eco-desc">
          Weather, satellite, sensor and soil data flow through machine learning into irrigation decision support,
          which feeds irrigation management — drawn as a centre-pivot irrigated field.
        </desc>
        <defs>
          <clipPath id="eco-field">
            <circle cx={C} cy={C} r={R_OUT} />
          </clipPath>
          <radialGradient id="eco-core" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="var(--field-soft)" />
            <stop offset="1" stopColor="var(--surface)" />
          </radialGradient>
          <linearGradient id="eco-wet" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--water)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--water)" stopOpacity="0.1" />
          </linearGradient>
          <path id="eco-ml-arc" d={`M ${C - R_ML + 9},${C} A ${R_ML - 9},${R_ML - 9} 0 0,1 ${C + R_ML - 9},${C}`} />
        </defs>

        {/* Field: crop rows clipped to the pivot circle */}
        <g clipPath="url(#eco-field)">
          <rect x={C - R_OUT} y={C - R_OUT} width={R_OUT * 2} height={R_OUT * 2} fill="var(--surface)" />
          <g stroke="var(--line)" strokeWidth="1">
            {rows.map((y) => (
              <line key={y} x1={C - R_OUT} y1={y} x2={C + R_OUT} y2={y} />
            ))}
          </g>
          {/* Rotating pivot arm with a soft wetted wake */}
          <g className="pivot-arm">
            <path d={`M${C},${C} L${C + R_OUT},${C} A${R_OUT},${R_OUT} 0 0,0 ${polar(-28, R_OUT).x},${polar(-28, R_OUT).y} Z`} fill="url(#eco-wet)" />
            <line x1={C} y1={C} x2={C + R_OUT} y2={C} stroke="var(--water)" strokeWidth="1.5" opacity="0.55" />
            {[0.35, 0.55, 0.75, 0.95].map((t) => (
              <circle key={t} cx={C + R_OUT * t} cy={C} r="2" fill="var(--water)" opacity="0.6" />
            ))}
          </g>
        </g>

        {/* Field boundary + rings */}
        <circle cx={C} cy={C} r={R_OUT} fill="none" stroke="var(--line-strong)" strokeWidth="1.25" />
        <circle cx={C} cy={C} r={(R_OUT + R_ML) / 2} fill="none" stroke="var(--line)" strokeDasharray="2 5" />

        {/* Connectors */}
        <g fill="none" strokeWidth="1.5" strokeLinecap="round">
          {NODES.map((n) => (
            <path
              key={n.label}
              d={connector(n.angle)}
              stroke={n.dir === "in" ? "var(--water)" : "var(--field)"}
              className={n.dir === "in" ? "flow-in" : "flow-out"}
              opacity="0.85"
            />
          ))}
        </g>

        {/* Machine learning ring */}
        <circle cx={C} cy={C} r={R_ML} fill="var(--bg)" fillOpacity="0.85" stroke="var(--water)" strokeWidth="1" strokeOpacity="0.5" />
        <text className="font-mono" fontSize="9.5" letterSpacing="2.2" fill="var(--water)" textAnchor="middle">
          <textPath href="#eco-ml-arc" startOffset="50%">
            MACHINE LEARNING
          </textPath>
        </text>
        <circle cx={C} cy={C} r={R_ML - 22} fill="none" stroke="var(--line)" strokeDasharray="1 4" />

        {/* Core */}
        <circle cx={C} cy={C} r={R_CORE} fill="url(#eco-core)" stroke="var(--field)" strokeWidth="1.25" />
        <text x={C} y={C - 3} textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">
          Decision
        </text>
        <text x={C} y={C + 13} textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ink)">
          support
        </text>

        {/* Nodes */}
        {NODES.map((n) => {
          const p = polar(n.angle, R_OUT);
          const lp = labelProps(n);
          const color = n.dir === "in" ? "var(--water)" : "var(--field)";
          return (
            <g key={n.label}>
              <circle cx={p.x} cy={p.y} r="6" fill={color} className="sensor-pulse" />
              <circle cx={p.x} cy={p.y} r="9" fill="var(--bg)" stroke={color} strokeWidth="1.5" />
              <circle cx={p.x} cy={p.y} r="3.5" fill={color} />
              <text {...lp} className="font-mono" fontSize="12" letterSpacing="0.6" fill="var(--ink-2)">
                {n.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="sr-only">Schematic of the research ecosystem.</figcaption>
    </figure>
  );
}
