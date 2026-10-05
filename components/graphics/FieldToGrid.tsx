/**
 * Hero background: curved crop-row / field-contour lines on the left that
 * gradually straighten into a structured data grid with sensor nodes on the right.
 * Computed at build time — zero client JS.
 */
const W = 1440;
const H = 720;
const ROWS = 18;
const GAP = H / (ROWS + 1);

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function rowPath(i: number) {
  const y0 = GAP * (i + 1);
  const pts: string[] = [];
  for (let x = 0; x <= W; x += 24) {
    const straight = smooth(380, 1040, x);
    const amp = 22 * (1 - straight);
    const y = y0 + amp * Math.sin(x / 150 + i * 0.42) + (1 - straight) * 10 * Math.sin(x / 63 + i);
    pts.push(`${x === 0 ? "M" : "L"}${x},${y.toFixed(1)}`);
  }
  return pts.join(" ");
}

const COLS = Array.from({ length: 12 }, (_, k) => 1000 + k * 40);

export default function FieldToGrid() {
  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="ftg-fade-x" x1="0" x2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.9" />
          <stop offset="0.45" stopColor="white" stopOpacity="0.45" />
          <stop offset="1" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="ftg-fade-y" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0" />
          <stop offset="0.18" stopColor="white" stopOpacity="1" />
          <stop offset="0.8" stopColor="white" stopOpacity="1" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="ftg-mask">
          <rect width={W} height={H} fill="url(#ftg-fade-x)" />
        </mask>
        <mask id="ftg-mask-y">
          <rect width={W} height={H} fill="url(#ftg-fade-y)" />
        </mask>
        <linearGradient id="ftg-cols" x1="0" x2="1">
          <stop offset="0" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id="ftg-mask-cols">
          <rect x="960" width="480" height={H} fill="url(#ftg-cols)" />
        </mask>
      </defs>

      <g mask="url(#ftg-mask-y)">
        <g mask="url(#ftg-mask)" stroke="var(--line-strong)" strokeWidth="1" fill="none" opacity="0.75">
          {Array.from({ length: ROWS }, (_, i) => (
            <path key={i} d={rowPath(i)} />
          ))}
        </g>
        {/* Grid columns emerge on the right */}
        <g mask="url(#ftg-mask-cols)" stroke="var(--line-strong)" strokeWidth="1" opacity="0.7">
          {COLS.map((x) => (
            <line key={x} x1={x} y1={0} x2={x} y2={H} />
          ))}
        </g>
        {/* Sensor nodes at a few grid intersections */}
        <g fill="var(--water)" mask="url(#ftg-mask-cols)">
          {[
            [1120, 4],
            [1240, 7],
            [1360, 3],
            [1200, 12],
            [1320, 10],
            [1400, 15],
          ].map(([x, r]) => (
            <circle key={`${x}-${r}`} cx={x} cy={GAP * (r + 1)} r={2.5} opacity="0.8" />
          ))}
        </g>
      </g>
    </svg>
  );
}
