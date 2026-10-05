import type { Publication } from "./types";

/** Name variants highlighted inside author lists. */
export const selfNames = ["Kalayambakam Janardhan, A. Y.", "Abinava Yeshwanth, K. J."];

/**
 * Papers, oral presentations and posters — newest first is applied automatically.
 * kind: "paper" | "oral" | "poster". Only add `doi` when one exists.
 */
export const publications: Publication[] = [
  // ── Papers ───────────────────────────────────────────────
  {
    id: "dcas-2026-soil-moisture",
    year: 2026,
    title: "Data-Driven Modeling of Soil Moisture in Irrigated Fields",
    authors: ["Kalayambakam Janardhan, A. Y.", "Datta, S.", "Taghvaeian, S.", "Crick, C.", "Palash Kumar, K."],
    venue: "19th IEEE Dallas Circuits and Systems Conference (DCAS)",
    details: "Dallas, TX · April 10–12, 2026",
    kind: "paper",
    format: "Conference paper",
    doi: "10.1109/DCAS69364.2026.11544580",
  },
  {
    id: "dcas-2026-canopy",
    year: 2026,
    title: "Canopy Temperature Sensor Data Optimization for Irrigation Scheduling",
    authors: ["Meadi, S.", "Kalayambakam Janardhan, A. Y.", "Datta, S.", "Das, H."],
    venue: "2026 IEEE Dallas Circuits and Systems Conference (DCAS)",
    details: "Dallas, TX · April 10–12, 2026",
    kind: "paper",
    format: "Conference paper",
    doi: "10.1109/DCAS69364.2026.11545108",
  },
  {
    id: "jpnr-2022-soil-fertility",
    year: 2022,
    title: "Extreme Learning Mechanism for Classification & Prediction of Soil Fertility Index",
    authors: [
      "Ganesh, D.",
      "Abinava Yeshwanth, K. J.",
      "Meadi, S.",
      "Guru Sai Vignesh Reddy, M.",
      "Chirudeep, T.",
      "Naveen Kumar Polisetty, S.",
    ],
    venue: "Journal of Pharmaceutical Negative Results",
    details: "13 (Special Issue 06), 37–43",
    kind: "paper",
    format: "Journal article",
    doi: "10.47750/pnr.2022.13.S06.006",
  },

  // ── Oral presentations ───────────────────────────────────
  {
    id: "asabe-2026-multidepth",
    year: 2026,
    title: "Data-Driven Modeling of Multi-Depth Soil Moisture in Irrigated Fields",
    authors: ["Kalayambakam Janardhan, A. Y.", "Datta, S.", "Taghvaeian, S.", "Crick, C.", "Palash Kumar, K."],
    venue: "ASABE 119th Annual International Meeting",
    details: "Indianapolis, IN · July 12–15, 2026",
    kind: "oral",
  },
  {
    id: "asabe-2026-canopy-height",
    year: 2026,
    title: "Can We Accurately Estimate Canopy Temperature Without Adjusting Sensor Heights to Reduce Labor Requirements?",
    authors: ["Meadi, S.", "Kalayambakam Janardhan, A. Y.", "Datta, S."],
    venue: "ASABE 119th Annual International Meeting",
    details: "Indianapolis, IN · July 12–15, 2026",
    kind: "oral",
  },
  {
    id: "asabe-2026-pyfao56",
    year: 2026,
    title: "Paving the Path Forward to a National Scale Irrigation Scheduler by Leveraging PyFAO56",
    authors: ["Datta, S.", "Meadi, S.", "Kalayambakam Janardhan, A. Y."],
    venue: "ASABE 119th Annual International Meeting",
    details: "Indianapolis, IN · July 12–15, 2026",
    kind: "oral",
  },
  {
    id: "dcas-2026-canopy-oral",
    year: 2026,
    title: "Canopy Temperature Sensor Data Optimization for Irrigation Scheduling",
    authors: ["Meadi, S.", "Kalayambakam Janardhan, A. Y.", "Datta, S.", "Das, H."],
    venue: "19th IEEE Dallas Circuits and Systems Conference",
    details: "Dallas, TX · April 10–12, 2026",
    kind: "oral",
  },
  {
    id: "owc-2025-oral",
    year: 2025,
    title: "Data-Driven Modeling of Soil Moisture for Irrigation Scheduling",
    authors: ["Kalayambakam Janardhan, A. Y.", "Datta, S.", "Taghvaeian, S.", "Crick, C.", "Palash Kumar, K."],
    venue: "2025 Oklahoma Governor's Water Conference & Research Symposium",
    details: "Midwest City, OK · December 3–4, 2025",
    kind: "oral",
  },
  {
    id: "asabe-ok-2025-3mt",
    year: 2025,
    title: "Oklahoma Irrigation Scheduler: Paving the Path for Sustainable Water Management",
    authors: ["Kalayambakam Janardhan, A. Y.", "Datta, S."],
    venue: "2025 ASABE Oklahoma Sectional Meeting",
    details: "Stillwater, OK · March 7, 2025",
    kind: "oral",
    format: "3-Minute Presentation",
  },

  // ── Posters ──────────────────────────────────────────────
  {
    id: "dcas-2026-poster",
    year: 2026,
    title: "Data-Driven Modeling of Soil Moisture in Irrigated Fields",
    authors: ["Kalayambakam Janardhan, A. Y.", "Datta, S.", "Taghvaeian, S.", "Crick, C.", "Palash Kumar, K."],
    venue: "19th IEEE Dallas Circuits and Systems Conference",
    details: "Dallas, TX · April 10–12, 2026",
    kind: "poster",
  },
  {
    id: "owc-2024-poster",
    year: 2024,
    title: "Oklahoma Agricultural Scientific Irrigation Scheduler",
    authors: ["Kalayambakam Janardhan, A. Y.", "Datta, S."],
    venue: "2024 Oklahoma Governor's Water Conference & Research Symposium",
    details: "Midwest City, OK · November 19–20, 2024",
    kind: "poster",
  },
];
