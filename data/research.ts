import type { ResearchProject } from "./types";

/**
 * Research & projects. Order here = order on the page.
 * featured: true  → large card with a schematic
 * featured: false → compact "current research" card
 * status "ongoing" is labelled as work in progress — no results are implied.
 */
export const research: ResearchProject[] = [
  {
    id: "oasis",
    title: "OASIS",
    subtitle: "Oklahoma Agricultural Scientific Irrigation Scheduler",
    categories: ["Decision Support", "Irrigation", "Full-Stack Engineering"],
    status: "active",
    featured: true,
    visual: "oasis",
    summary:
      "An irrigation decision-support platform that brings soil, weather and crop information together to give producers irrigation recommendations.",
    highlights: [
      "Automated soil and weather data extraction, using the Rosetta model to estimate soil hydraulic properties.",
      "React front end and FastAPI back end with interactive Plotly charts for producers.",
      "REST and SOAP integrations pull weather, soil and other external data sources into one workflow.",
      "Containerized with Docker, hosted on a DASNR IT virtual machine, with AWS SES email notifications.",
      "Usability feedback gathered from growers through the Master Irrigator Program.",
    ],
    tech: ["React", "FastAPI", "Python", "Plotly", "Rosetta", "PyFAO56", "Mesonet", "REST / SOAP", "Docker", "AWS SES"],
  },
  {
    id: "soil-moisture-ml",
    title: "Multi-Depth Soil Moisture Prediction",
    subtitle: "Machine learning for irrigated fields",
    categories: ["Machine Learning", "Soil Moisture", "Irrigation"],
    status: "active",
    featured: true,
    visual: "soil-profile",
    summary:
      "Predicting soil moisture at several depths so irrigation decisions can be supported where sensors are sparse or absent.",
    highlights: [
      "Built and compared five models — Random Forest, LightGBM, XGBoost, LSTM and Transformer.",
      "Lag-based temporal features (up to three lags) capture soil-water memory.",
      "Fully autoregressive prediction without relying on in-situ sensor inputs.",
      "Scaling toward a model that generalizes across diverse agricultural regions of Oklahoma.",
    ],
    tech: ["Python", "scikit-learn", "XGBoost", "LightGBM", "PyTorch", "TensorFlow", "Pandas"],
  },
  {
    id: "ndfd-pipeline",
    title: "NOAA NDFD Forecast Pipeline",
    subtitle: "From GRIB2 forecasts to agronomic inputs",
    categories: ["Data Engineering", "Weather", "Agricultural Modeling"],
    status: "completed",
    featured: true,
    visual: "pipeline",
    summary:
      "A Python pipeline that turns high-frequency National Digital Forecast Database files into daily, locally-aligned forecasts for irrigation models.",
    highlights: [
      "Processes GRIB2 forecast files from NOAA's NDFD S3 bucket into daily CSVs.",
      "7-day forecasts of TMAX, TMIN, RHMAX, RHMIN, QPF, dew point, wind speed and sky cover across Mesonet stations.",
      "UTC → Central Time alignment so forecasts match daily agronomic models.",
      "Computes solar radiation from sky cover with FAO radiation equations using station elevation and latitude.",
    ],
    tech: ["Python", "GRIB2", "AWS S3", "Pandas", "FAO-56", "Mesonet"],
  },
  {
    id: "openet",
    title: "OpenET Root-Zone Depletion Evaluation",
    categories: ["Remote Sensing", "Evapotranspiration"],
    status: "ongoing",
    featured: false,
    visual: "none",
    summary:
      "Comparing OpenET-based root-zone depletion estimates against soil-moisture sensor observations in irrigated agricultural fields.",
  },
  {
    id: "lugert-altus",
    title: "Historical Irrigation Water Requirements",
    subtitle: "Lugert-Altus Irrigation District",
    categories: ["FAO-56 Modeling", "Water Resources"],
    status: "ongoing",
    featured: false,
    visual: "none",
    summary:
      "Using long-term weather, soil, field and crop information with FAO-56 / PyFAO56 modeling to study historical irrigation water requirements.",
  },
  {
    id: "oasis-expansion",
    title: "OASIS Kansas–Texas Expansion",
    categories: ["Decision Support", "Regional Scaling"],
    status: "ongoing",
    featured: false,
    visual: "none",
    summary:
      "Extending the OASIS scheduler beyond Oklahoma — automating weather, soil and crop inputs for irrigation decision support across a wider region.",
  },
];
