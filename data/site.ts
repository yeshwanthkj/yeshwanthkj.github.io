/**
 * Site-wide identity, contact details and links.
 * Change values here — every component reads from this file.
 */
export const site = {
  name: "Abinava Yeshwanth KJ",
  fullName: "Abinava Yeshwanth Kalayambakam Janardhan",
  shortName: "KJ",
  tagline: "AI • Agriculture • Water",
  roles: ["Irrigation Science", "Machine Learning", "Software Engineering"],
  intro:
    "I build AI-powered decision support systems that help growers irrigate at the right time, with the right amount of water.",
  affiliation: "Biosystems & Agricultural Engineering, Oklahoma State University",
  location: "Stillwater, Oklahoma",

  /** Public URL of the deployed site (used for SEO / OpenGraph). No trailing slash. */
  url: "https://yeshwanthkj.github.io",

  /**
   * The CV served by every "Download CV" button.
   * To update: replace the file at public/cv/Abinava-Yeshwanth-KJ-CV.pdf (keep the same name).
   */
  cvPath: "/cv/Abinava-Yeshwanth-KJ-CV.pdf",
  cvUpdated: "September 2026",

  email: "akalaya@okstate.edu",
  links: {
    linkedin: "https://www.linkedin.com/in/abinavayeshwanth07/",
    github: "https://github.com/yeshwanthkj",
  },

  /** Research group and advisor */
  lab: {
    name: "RISE Lab",
    fullName: "Research in Irrigation Scheduling and Engineering",
    pi: "Dr. Sumon Datta",
    piUrl: "https://experts.okstate.edu/sumon.datta",
  },

  interests: ["Cricket", "Badminton", "Chess", "Carrom", "Reading"],
} as const;

export const nav = [
  { label: "Skills", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Field Work", href: "#field" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
] as const;

/** The narrative spine of the site: how the work evolved. */
export const journey = [
  {
    step: "Computer Science",
    period: "2019 – 2023",
    detail: "B.Tech in Computer Science & Engineering — algorithms, systems and the first ML projects.",
  },
  {
    step: "Software Engineering",
    period: "2022 – 2023",
    detail: "Building web tools and data pipelines as a student assistant and software developer intern.",
  },
  {
    step: "Machine Learning",
    period: "2022 – 2025",
    detail: "Applying ML to real data — disaster prediction, sentiment analysis, soil fertility — then an MS in Computer Science.",
  },
  {
    step: "Agricultural Engineering",
    period: "2024 – now",
    detail: "Graduate research in Biosystems & Agricultural Engineering; PhD from January 2026.",
  },
  {
    step: "Irrigation & Water",
    period: "now",
    detail: "Soil moisture, weather and decision-support systems that help producers use water well.",
  },
] as const;

export const researchInterests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Soil Moisture Modeling",
  "Irrigation Scheduling",
  "Decision Support Systems",
  "Evapotranspiration",
  "Weather Data Processing",
  "Remote Sensing",
  "Geospatial Data",
  "Sustainable Water Management",
] as const;
