import type { EarlierProject, SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    id: "ml",
    title: "AI & Machine Learning",
    items: ["Python", "scikit-learn", "TensorFlow", "PyTorch", "Random Forest", "XGBoost", "LightGBM", "LSTM", "Transformers", "OpenCV", "Generative AI"],
  },
  {
    id: "swe",
    title: "Software Engineering",
    items: ["React", "FastAPI", "Flask", "REST / SOAP APIs", "Docker", "Git", "Linux", "AWS", "JavaScript", "C++", "Java"],
  },
  {
    id: "data",
    title: "Data Engineering",
    items: ["Pandas", "NumPy", "SQL / SQLite", "Plotly", "Batch processing", "Parallel processing", "HPC"],
  },
  {
    id: "ag",
    title: "Agricultural & Geospatial",
    items: ["PyFAO56 / FAO-56", "Rosetta", "NOAA NDFD / GRIB2", "Oklahoma Mesonet", "ArcGIS", "Google Earth Engine", "Irrigation modeling"],
  },
];

export const earlierProjects: EarlierProject[] = [
  {
    id: "soil-fertility",
    title: "Soil Fertility Prediction",
    context: "Undergraduate · published 2022",
    description: "Extreme Learning Machine approach for classification and prediction of a soil fertility index — an early link between computing and agriculture.",
    tech: ["ELM", "Classification"],
    doi: "10.47750/pnr.2022.13.S06.006",
  },
  {
    id: "disaster",
    title: "Natural Disaster Prediction",
    context: "Student Assistant · 2022",
    description: "Web application predicting natural disasters with a Random Forest model served through Flask APIs.",
    tech: ["Random Forest", "Flask", "JavaScript"],
  },
  {
    id: "sentiment",
    title: "Media Sentiment Analysis",
    context: "Internship · 2022–23",
    description: "Data pipeline and sentiment classification over social-media data to inform marketing strategy.",
    tech: ["Python", "R", "SQL", "scikit-learn"],
  },
  {
    id: "vali-doc",
    title: "Vali-Doc",
    context: "Undergraduate project",
    description: "Document validation using digital signatures and SHA-512 hashing for authentication and integrity.",
    tech: ["Digital signatures", "SHA-512"],
  },
];
