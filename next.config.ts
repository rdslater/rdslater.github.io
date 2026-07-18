import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required: tells Next.js to generate static HTML/CSS/JS files
  images: {
    unoptimized: true, // Required: standard Next.js image optimization won't work on static hosting
  },
};

export default nextConfig;
