import type { SVGProps } from "react";

/** Line icons for irrigation, agriculture and technology. 24×24, currentColor. */
type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...p,
});

// Irrigation
export const Droplet = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3s-6 6.6-6 11a6 6 0 0 0 12 0c0-4.4-6-11-6-11Z" />
    <path d="M9 14.5a3 3 0 0 0 3 3" />
  </svg>
);
export const Pivot = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 12 19.5 7" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    <path d="M14.5 10.4v1.6M17 8.8v1.6" />
  </svg>
);
export const Gauge = (p: P) => (
  <svg {...base(p)}>
    <path d="M8 3h8v6a4 4 0 0 1-8 0Z" />
    <path d="M12 13v8M9 21h6M10 6h4" />
  </svg>
);
export const Sprinkler = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21v-8M9 21h6" />
    <path d="M12 13c-3-1-5-3.5-6-7M12 13c3-1 5-3.5 6-7M12 13V5" />
    <path d="M5 4h.01M19 4h.01M12 3h.01M8 6h.01M16 6h.01" />
  </svg>
);

// Agriculture
export const Sprout = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21v-9" />
    <path d="M12 12c0-4 3-7 8-7 0 4-3 7-8 7Z" />
    <path d="M12 14c0-3-2.5-5.5-7-5.5 0 3 2.5 5.5 7 5.5Z" />
  </svg>
);
export const SoilLayers = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 8h18M3 13h18M3 18h18" />
    <path d="M6 10.5h.01M11 10.5h.01M17 10.5h.01M8 15.5h.01M14 15.5h.01M19 15.5h.01" />
    <path d="M12 3v3M10 4.5l2 1.5 2-1.5" />
  </svg>
);
export const Satellite = (p: P) => (
  <svg {...base(p)}>
    <rect x="9" y="9" width="6" height="6" rx="1" transform="rotate(45 12 12)" />
    <path d="m4 4 4 4M16 16l4 4M3 8l5-5M16 21l5-5" />
    <path d="M17 7a4 4 0 0 1 0 0M18.5 3.5a6 6 0 0 1 2 2" />
  </svg>
);
export const SunCloud = (p: P) => (
  <svg {...base(p)}>
    <path d="M8 4V2M3.5 6 2 4.5M13 4.5 14.5 3M2 10H4" />
    <path d="M5.6 11a3.5 3.5 0 1 1 6.3-3" />
    <path d="M9 20h9a3.5 3.5 0 0 0 .5-7 5 5 0 0 0-9.6 1.3A2.9 2.9 0 0 0 9 20Z" />
  </svg>
);

// Technology
export const Neural = (p: P) => (
  <svg {...base(p)}>
    <circle cx="5" cy="6" r="2" />
    <circle cx="5" cy="18" r="2" />
    <circle cx="12" cy="12" r="2.2" />
    <circle cx="19" cy="7" r="2" />
    <circle cx="19" cy="17" r="2" />
    <path d="M7 6.8 10 11M7 17.2l3-4.2M14 11l3-3M14 13l3 3" />
  </svg>
);
export const Code = (p: P) => (
  <svg {...base(p)}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
  </svg>
);
export const Cloud = (p: P) => (
  <svg {...base(p)}>
    <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.1 11.5 3.3 3.3 0 0 0 7 18Z" />
    <path d="M10 14h4M12 12v4" />
  </svg>
);
export const Database = (p: P) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
    <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
  </svg>
);
export const Chart = (p: P) => (
  <svg {...base(p)}>
    <path d="M3 3v18h18" />
    <path d="m7 15 4-4 3 3 5-6" />
  </svg>
);
export const Tower = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21V5M8 21l4-9 4 9" />
    <path d="M7 6h10M15 6l1.5-2.5M9 6 7.5 3.5" />
    <circle cx="12" cy="4" r="1" />
  </svg>
);
