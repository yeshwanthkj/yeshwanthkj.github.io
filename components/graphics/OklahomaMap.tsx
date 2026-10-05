/**
 * Simplified Oklahoma outline (schematic, not survey-accurate) with field sites.
 * Coordinates are approximate lon/lat projected at build time.
 */
const K = 48;
const PAD = 14;
const px = (lon: number) => PAD + (lon + 103) * 0.81 * K;
const py = (lat: number) => PAD + (37 - lat) * K;

const OUTLINE: [number, number][] = [
  [-103.0, 37.0], [-94.62, 37.0], [-94.43, 35.4], [-94.48, 33.64], [-94.9, 33.8], [-95.3, 33.88],
  [-95.75, 33.85], [-96.0, 33.84], [-96.35, 33.7], [-96.6, 33.85], [-96.95, 33.75], [-97.2, 33.75],
  [-97.45, 33.85], [-97.6, 33.95], [-97.95, 33.98], [-98.1, 34.13], [-98.35, 34.14], [-98.6, 34.15],
  [-98.95, 34.21], [-99.2, 34.37], [-99.45, 34.38], [-99.7, 34.4], [-100.0, 34.56], [-100.0, 36.5],
  [-103.0, 36.5],
];
const path = OUTLINE.map(([lon, lat], i) => `${i ? "L" : "M"}${px(lon).toFixed(1)},${py(lat).toFixed(1)}`).join(" ") + " Z";

export const SITES = {
  panhandle: { lon: -101.6, lat: 36.62, label: "Panhandle" },
  central: { lon: -97.55, lat: 35.45, label: "Central" },
  southwest: { lon: -99.33, lat: 34.62, label: "Southwest" },
} as const;

const HOME = { lon: -97.06, lat: 36.12, label: "Stillwater · OSU" };

export default function OklahomaMap({ className = "" }: { className?: string }) {
  return (
    <figure className={className}>
      <svg viewBox="0 0 370 200" role="img" aria-labelledby="okmap-t" className="h-auto w-full">
        <title id="okmap-t">Schematic map of Oklahoma field research sites: Panhandle, Central and Southwest Oklahoma, with Stillwater</title>
        <defs>
          <pattern id="ok-rows" width="6" height="6" patternUnits="userSpaceOnUse">
            <line x1="0" y1="6" x2="6" y2="0" stroke="var(--line)" strokeWidth="0.8" />
          </pattern>
        </defs>
        <path d={path} fill="var(--surface)" stroke="var(--line-strong)" strokeWidth="1.25" strokeLinejoin="round" />
        <path d={path} fill="url(#ok-rows)" />

        {/* Home base */}
        <g>
          <rect x={px(HOME.lon) - 4} y={py(HOME.lat) - 4} width="8" height="8" fill="var(--ink)" transform={`rotate(45 ${px(HOME.lon)} ${py(HOME.lat)})`} />
          <text x={px(HOME.lon) + 9} y={py(HOME.lat) - 6} fontSize="9" className="font-mono" fill="var(--ink-2)">
            {HOME.label.toUpperCase()}
          </text>
        </g>

        {Object.entries(SITES).map(([key, s]) => {
          const x = px(s.lon);
          const y = py(s.lat);
          return (
            <g key={key}>
              <circle cx={x} cy={y} r="5" fill="var(--field)" className="sensor-pulse" />
              <circle cx={x} cy={y} r="5.5" fill="var(--bg)" stroke="var(--field)" strokeWidth="1.5" />
              <circle cx={x} cy={y} r="2.5" fill="var(--field)" />
              <text x={x} y={y + 17} textAnchor="middle" fontSize="9" className="font-mono" fill="var(--field)">
                {s.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted">Schematic · not to scale</figcaption>
    </figure>
  );
}
