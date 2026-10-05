/** Decorative topographic contour lines (terrain / field elevation). Build-time SVG. */
function loop(cx: number, cy: number, r: number, seed: number) {
  const pts: string[] = [];
  const n = 72;
  for (let k = 0; k <= n; k++) {
    const a = (k / n) * Math.PI * 2;
    const wob = 1 + 0.12 * Math.sin(a * 3 + seed) + 0.07 * Math.sin(a * 5 + seed * 1.7) + 0.04 * Math.cos(a * 7 + seed);
    const x = cx + r * wob * Math.cos(a) * 1.25;
    const y = cy + r * wob * Math.sin(a);
    pts.push(`${k ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return pts.join(" ") + "Z";
}

export default function Contours({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 600 600" className={`pointer-events-none ${className}`} fill="none">
      <g stroke="var(--line-strong)" strokeWidth="1">
        {Array.from({ length: 11 }, (_, i) => (
          <path key={`a${i}`} d={loop(300, 300, 26 + i * 24, 0.6 + i * 0.22)} opacity={1 - i * 0.07} />
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <path key={`b${i}`} d={loop(470, 120, 14 + i * 16, 2.1 + i * 0.3)} opacity={0.7 - i * 0.1} />
        ))}
      </g>
    </svg>
  );
}
