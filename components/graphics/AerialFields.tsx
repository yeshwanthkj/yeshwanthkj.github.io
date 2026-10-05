/**
 * Top-down "satellite view" of Great Plains farmland: section roads, centre-pivot
 * circles, row crops and fallow ground — overlaid with sensor nodes that stream
 * into a decision-support hub. Generated at build time (no client JS).
 */
const SIZE = 600;
const N = 4;
const ROAD = 7;
const CELL = SIZE / N;

const GREENS = ["#1c4630", "#225238", "#2a5f41", "#336d47", "#3f7b4d", "#4c8853"];
const SOILS = ["#352b1f", "#3f3324", "#4a3b29"];

// deterministic pseudo-random
const rand = (i: number) => {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

type Cell = { x: number; y: number; kind: "pivot" | "rows" | "fallow" | "split"; g: string; g2: string; s: string; i: number };

const cells: Cell[] = [];
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    const i = r * N + c;
    const v = rand(i + 3);
    const kind = v < 0.5 ? "pivot" : v < 0.68 ? "split" : v < 0.86 ? "rows" : "fallow";
    cells.push({
      x: c * CELL + ROAD / 2,
      y: r * CELL + ROAD / 2,
      kind,
      g: GREENS[Math.floor(rand(i + 11) * GREENS.length)],
      g2: GREENS[Math.floor(rand(i + 29) * GREENS.length)],
      s: SOILS[Math.floor(rand(i + 5) * SOILS.length)],
      i,
    });
  }
}

const W = CELL - ROAD;
const R = W / 2 - 4;

// Sensor nodes (cell index) and the hub they report to
const SENSORS = [1, 4, 6, 9, 11, 14];
const center = (i: number) => ({ x: (i % N) * CELL + CELL / 2, y: Math.floor(i / N) * CELL + CELL / 2 });
const HUB = { x: SIZE / 2, y: SIZE / 2 };

export default function AerialFields({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <pattern id="af-rows" width="6" height="6" patternUnits="userSpaceOnUse">
          <line x1="0" y1="3" x2="6" y2="3" stroke="#000" strokeOpacity="0.22" strokeWidth="1.4" />
        </pattern>
        <pattern id="af-rows-v" width="5" height="5" patternUnits="userSpaceOnUse">
          <line x1="2.5" y1="0" x2="2.5" y2="5" stroke="#000" strokeOpacity="0.25" strokeWidth="1.3" />
        </pattern>
        <radialGradient id="af-vignette" cx="0.5" cy="0.5" r="0.7">
          <stop offset="0.55" stopColor="#0a1512" stopOpacity="0" />
          <stop offset="1" stopColor="#0a1512" stopOpacity="0.85" />
        </radialGradient>
        <radialGradient id="af-hub" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#8cc4e8" stopOpacity="0.45" />
          <stop offset="1" stopColor="#8cc4e8" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width={SIZE} height={SIZE} fill="#0e1a15" />

      <g transform={`rotate(-7 ${SIZE / 2} ${SIZE / 2}) scale(1.18) translate(${-SIZE * 0.076} ${-SIZE * 0.076})`}>
        {cells.map((c) => {
          const cx = c.x + W / 2;
          const cy = c.y + W / 2;
          if (c.kind === "fallow")
            return (
              <g key={c.i}>
                <rect x={c.x} y={c.y} width={W} height={W} fill={c.s} />
                <rect x={c.x} y={c.y} width={W} height={W} fill="url(#af-rows)" opacity="0.6" />
              </g>
            );
          if (c.kind === "rows")
            return (
              <g key={c.i}>
                <rect x={c.x} y={c.y} width={W} height={W} fill={c.g} />
                <rect x={c.x} y={c.y} width={W} height={W} fill="url(#af-rows-v)" />
              </g>
            );
          // pivot / split pivot: dry corners + irrigated circle
          return (
            <g key={c.i}>
              <rect x={c.x} y={c.y} width={W} height={W} fill={c.s} />
              {c.kind === "split" ? (
                <>
                  <path d={`M${cx},${cy - R} A${R},${R} 0 0,1 ${cx},${cy + R} Z`} fill={c.g} />
                  <path d={`M${cx},${cy + R} A${R},${R} 0 0,1 ${cx},${cy - R} Z`} fill={c.g2} />
                </>
              ) : (
                <circle cx={cx} cy={cy} r={R} fill={c.g} />
              )}
              <circle cx={cx} cy={cy} r={R} fill="url(#af-rows)" opacity="0.5" />
              {[0.33, 0.66].map((t) => (
                <circle key={t} cx={cx} cy={cy} r={R * t} fill="none" stroke="#000" strokeOpacity="0.12" />
              ))}
              <circle cx={cx} cy={cy} r="2.5" fill="#cfd8d2" opacity="0.7" />
              {c.i % 3 === 0 && (
                <g className="pivot-arm" style={{ transformOrigin: `${cx}px ${cy}px`, animationDuration: `${40 + c.i * 3}s` }}>
                  <line x1={cx} y1={cy} x2={cx + R} y2={cy} stroke="#cfe6f5" strokeWidth="1.6" opacity="0.75" />
                </g>
              )}
            </g>
          );
        })}
      </g>

      {/* Data grid overlay */}
      <g stroke="#8cc4e8" strokeOpacity="0.07">
        {Array.from({ length: 13 }, (_, k) => (
          <g key={k}>
            <line x1={k * 50} y1="0" x2={k * 50} y2={SIZE} />
            <line x1="0" y1={k * 50} x2={SIZE} y2={k * 50} />
          </g>
        ))}
      </g>

      <rect width={SIZE} height={SIZE} fill="url(#af-vignette)" />

      {/* Sensor network → decision hub */}
      <g fill="none" strokeWidth="1.4" strokeLinecap="round">
        {SENSORS.map((s) => {
          const p = center(s);
          const mx = (p.x + HUB.x) / 2 + (p.y - HUB.y) * 0.18;
          const my = (p.y + HUB.y) / 2 - (p.x - HUB.x) * 0.18;
          return <path key={s} d={`M${p.x},${p.y} Q${mx},${my} ${HUB.x},${HUB.y}`} stroke="#8cc4e8" opacity="0.7" className="flow-in" />;
        })}
      </g>
      {SENSORS.map((s) => {
        const p = center(s);
        return (
          <g key={s}>
            <circle cx={p.x} cy={p.y} r="6" fill="#8cc4e8" className="sensor-pulse" />
            <circle cx={p.x} cy={p.y} r="5" fill="#0a1512" stroke="#8cc4e8" strokeWidth="1.6" />
            <circle cx={p.x} cy={p.y} r="2" fill="#8cc4e8" />
          </g>
        );
      })}
      <circle cx={HUB.x} cy={HUB.y} r="46" fill="url(#af-hub)" />
      <circle cx={HUB.x} cy={HUB.y} r="15" fill="#0a1512" stroke="#93d0a6" strokeWidth="1.8" />
      <circle cx={HUB.x} cy={HUB.y} r="5" fill="#93d0a6" />
    </svg>
  );
}
