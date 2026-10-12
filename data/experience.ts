import type { Education, Experience } from "./types";

export const experience: Experience[] = [
  {
    id: "osu-gra",
    role: "Graduate Research Assistant",
    org: "Oklahoma State University",
    unit: "Biosystems & Agricultural Engineering · RISE Lab — Research in Irrigation Scheduling and Engineering (Dr. Sumon Datta)",
    location: "Stillwater, OK",
    start: "May 2024",
    end: "Present",
    current: true,
    summary:
      "Building the software, data pipelines and models behind irrigation decision support — and helping instrument the fields that feed them.",
    points: [
      "Develop OASIS (Operational Agriculture and Soil Information System), a full-stack irrigation decision support platform (React, FastAPI, Plotly).",
      "Built and compared five ML models for multi-depth soil moisture prediction.",
      "Engineered NOAA NDFD GRIB2 pipelines producing daily 7-day forecasts across Mesonet stations.",
      "Field instrumentation and bi-weekly data collection across Oklahoma research sites.",
    ],
    tags: ["Irrigation", "ML", "Full-stack", "Field work"],
  },
  {
    id: "federal-soft",
    role: "Software Developer Intern",
    org: "Federal Soft Systems",
    location: "Tirupati, AP, India",
    start: "Nov 2022",
    end: "Jul 2023",
    summary: "Media sentiment analysis for marketing insights.",
    points: [
      "Designed a Python, R and SQL pipeline to collect, clean and analyze Twitter and Facebook data.",
      "Processed over 100,000 data points with Pandas and scikit-learn for sentiment classification.",
      "Built Matplotlib visualizations to surface sentiment trends and popular topics.",
    ],
    tags: ["Data pipelines", "NLP", "Python"],
  },
  {
    id: "svec-student-assistant",
    role: "Student Assistant",
    org: "Sree Vidyanikethan Engineering College",
    unit: "Computer Science & Engineering",
    location: "Tirupati, AP, India",
    start: "Jan 2022",
    end: "Nov 2022",
    summary: "Web-based natural disaster prediction tool.",
    points: [
      "Developed the tool with HTML5, JavaScript and Flask APIs, backed by a Random Forest model.",
      "Responsive interface with dynamic data visualization.",
    ],
    tags: ["Web", "ML", "Flask"],
  },
];

export const education: Education[] = [
  {
    id: "phd",
    degree: "PhD",
    field: "Biosystems & Agricultural Engineering",
    institution: "Oklahoma State University",
    location: "Stillwater, OK",
    start: "Jan 2026",
    end: "May 2029 (expected)",
    domain: "ag",
  },
  {
    id: "ms",
    degree: "MS",
    field: "Computer Science",
    institution: "Oklahoma State University",
    location: "Stillwater, OK",
    start: "Aug 2023",
    end: "Dec 2025",
    domain: "cs",
  },
  {
    id: "btech",
    degree: "B.Tech",
    field: "Computer Science & Engineering",
    institution: "Sree Vidyanikethan Engineering College",
    location: "Tirupati, AP, India",
    start: "Aug 2019",
    end: "May 2023",
    domain: "cs",
  },
];
