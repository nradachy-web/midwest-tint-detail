import type { NextConfig } from "next";

/**
 * Midwest Tint & Detail - static export for GitHub Pages.
 * Served at the custom domain root (www.midwesttintdetail.com), so no basePath.
 * public/CNAME sets the GitHub Pages custom domain on deploy.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
