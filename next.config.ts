import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export → deployable to GitHub Pages (output in /out)
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
