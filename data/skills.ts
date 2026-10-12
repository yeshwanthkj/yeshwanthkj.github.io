import type { EarlierProject, SkillGroup } from "./types";

export const skills: SkillGroup[] = [
  {
    id: "irrigation",
    title: "Irrigation Science",
    items: ["Irrigation scheduling", "FAO-56 / PyFAO56", "Soil water balance", "Evapotranspiration", "Rosetta soil properties", "Decision support systems"],
  },
  {
    id: "ml",
    title: "Machine Learning & AI",
    items: ["Random Forest", "XGBoost", "LightGBM", "LSTM", "Transformers", "scikit-learn", "TensorFlow", "PyTorch", "OpenCV", "Generative AI"],
  },
  {
    id: "swe",
    title: "Software Development",
    items: ["React", "FastAPI", "Flask", "REST / SOAP APIs", "Docker", "AWS", "Git", "Linux", "JavaScript", "C++", "Java"],
  },
  {
    id: "data",
    title: "Data Engineering",
    items: ["Python", "Pandas", "NumPy", "SQL / SQLite", "Plotly", "Batch & parallel processing", "HPC"],
  },
  {
    id: "field",
    title: "Field Instrumentation",
    items: ["Soil moisture sensors", "Rain gauges", "IRT canopy temperature", "Eddy covariance", "ZL6 data loggers"],
  },
  {
    id: "geo",
    title: "Weather & Geospatial",
    items: ["NOAA NDFD / GRIB2", "Oklahoma Mesonet", "Google Earth Engine", "ArcGIS", "OpenET"],
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
