export type Status = "active" | "ongoing" | "completed";

export type ResearchVisual = "oasis" | "soil-profile" | "pipeline" | "none";

export interface ResearchProject {
  id: string;
  /** Short title shown large, e.g. "OASIS" */
  title: string;
  /** Optional long form / expansion shown under the title */
  subtitle?: string;
  /** Small footnote under the subtitle, e.g. a former name */
  note?: string;
  categories: string[];
  status: Status;
  /** One or two sentence summary */
  summary: string;
  /** Concise bullet points — keep to what is factually true */
  highlights?: string[];
  tech?: string[];
  /** Custom schematic drawn next to the card (featured projects only) */
  visual?: ResearchVisual;
  /** Featured projects get large cards; others render as compact "current research" cards */
  featured: boolean;
  links?: { label: string; href: string }[];
}

export type PublicationKind = "paper" | "oral" | "poster";

export interface Publication {
  id: string;
  year: number;
  title: string;
  /** Author list exactly as in the CV. Your name is highlighted automatically. */
  authors: string[];
  venue: string;
  /** Location and dates, if any */
  details?: string;
  kind: PublicationKind;
  /** Optional finer label shown on the entry, e.g. "Journal article", "3-Minute Presentation" */
  format?: string;
  /** DOI without the https://doi.org/ prefix. Only add when it exists. */
  doi?: string;
}

export interface Experience {
  id: string;
  role: string;
  org: string;
  unit?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  points: string[];
  tags?: string[];
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  start: string;
  end: string;
  note?: string;
  /** Which side of the CS → Ag transition this belongs to */
  domain: "cs" | "ag";
}

export interface LeadershipRole {
  id: string;
  role: string;
  org: string;
  period?: string;
  current?: boolean;
  description?: string;
  points?: string[];
  tier: "primary" | "earlier";
}

export interface FieldActivity {
  id: string;
  region: string;
  title: string;
  description: string;
  equipment: string[];
  /** Site id on the Oklahoma schematic map */
  site: "central" | "panhandle" | "southwest" | "statewide";
}

export interface FieldPhoto {
  /** Path inside /public, e.g. "/images/field/panhandle-sensor.jpg" */
  src?: string;
  alt: string;
  caption: string;
  /** Shown larger, spanning two rows on wide screens (best for portrait photos) */
  featured?: boolean;
  /** CSS object-position for cropping, e.g. "50% 30%" */
  position?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface EarlierProject {
  id: string;
  title: string;
  context: string;
  description: string;
  tech: string[];
  doi?: string;
}
