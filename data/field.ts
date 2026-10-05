import type { FieldActivity, FieldPhoto } from "./types";

export const fieldActivities: FieldActivity[] = [
  {
    id: "panhandle-producers",
    region: "Oklahoma Panhandle",
    title: "Producer-field monitoring network",
    description:
      "Assisted in installing soil moisture sensors and rain gauges in 15 producers' fields in 2025 and 2026 as part of a USDA-funded project.",
    equipment: ["Soil moisture sensors", "Rain gauges"],
    site: "panhandle",
  },
  {
    id: "panhandle-flux",
    region: "Oklahoma Panhandle Research & Extension Center",
    title: "Eddy covariance flux tower",
    description: "Assisted the LI-COR team with the installation of an eddy covariance flux tower.",
    equipment: ["Eddy covariance", "LI-COR"],
    site: "panhandle",
  },
  {
    id: "southwest-canopy",
    region: "Southwest Oklahoma Research & Extension Station",
    title: "Canopy temperature & soil moisture",
    description: "Assisted with installation of IRT canopy temperature sensors and Acclima soil moisture sensors.",
    equipment: ["IRT sensors", "Acclima"],
    site: "southwest",
  },
  {
    id: "central-sentek",
    region: "Central Oklahoma",
    title: "Profile soil moisture",
    description: "Soil moisture sensor and rain gauge installation.",
    equipment: ["Sentek Drill & Drop", "Rain gauge"],
    site: "central",
  },
  {
    id: "statewide-loggers",
    region: "Across Oklahoma",
    title: "Data logger collection",
    description: "Bi-weekly data collection from ZL6 data loggers across multiple regions of Oklahoma.",
    equipment: ["ZL6 loggers"],
    site: "statewide",
  },
];

/**
 * Field photographs. Drop images into public/images/field/ and set `src`.
 * Entries without `src` render as labelled placeholders.
 */
export const fieldPhotos: FieldPhoto[] = [
  {
    src: "/images/field/kj-in-the-field.jpg",
    alt: "Abinava Yeshwanth KJ standing in a green crop field under a blue sky",
    caption: "In the field",
    featured: true,
    position: "50% 35%",
  },
  { alt: "", caption: "Eddy covariance flux tower" },
  { alt: "", caption: "Canopy temperature sensors — Southwest Oklahoma" },
];
