import type { LeadershipRole } from "./types";

export const leadership: LeadershipRole[] = [
  {
    id: "bae-gsa",
    role: "Vice Treasurer",
    org: "BAE Graduate Student Association",
    period: "Current",
    current: true,
    description: "Oklahoma State University",
    tier: "primary",
  },
  {
    id: "isa",
    role: "Sports Secretary",
    org: "Indian Student Association (ISA)",
    period: "Aug 2025 – May 2026",
    description: "Oklahoma State University",
    tier: "primary",
  },
  {
    id: "iste",
    role: "CSE Executive",
    org: "ISTE Student Chapter",
    period: "Jun 2021 – Jan 2023",
    points: [
      "Organized and conducted technical and student events.",
      "Helped run a techno-cultural fest in a leadership capacity.",
    ],
    tier: "earlier",
  },
  {
    id: "iucee",
    role: "Campus Ambassador",
    org: "IUCEE",
    period: "Jun 2021 – Jan 2023",
    points: ["Promoted campus activities.", "Contributed to club development and student engagement."],
    tier: "earlier",
  },
  {
    id: "ceta",
    role: "Social Media Handler",
    org: "CETA",
    period: "Jun 2021 – Jan 2023",
    points: ["Supported social-media communication.", "Conducted outreach activities within the college."],
    tier: "earlier",
  },
];

/** Professional activities — membership IDs intentionally not published. */
export const professional = [
  { title: "ASABE", detail: "Member, American Society of Agricultural & Biological Engineers" },
  { title: "IEEE", detail: "Member, Institute of Electrical and Electronics Engineers" },
  { title: "FE Exam", detail: "Passed the Fundamentals of Engineering exam on the first attempt" },
  {
    title: "Master Irrigator Program",
    detail: "Participated and gathered grower feedback to improve the usability of OASIS",
  },
  {
    title: "PhD Interview Panel",
    detail:
      "Panel member for BAE PhD applicant interviews (Irrigation Research Laboratory); set tasks to evaluate conceptual and written skills",
  },
] as const;
