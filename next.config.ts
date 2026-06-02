import type { NextConfig } from "next";

/**
 * Midwest Tint & Detail - static export for GitHub Pages.
 * Served as a project page at /midwest-tint-detail, so basePath matches.
 * When moving to the client's domain (midwesttintdetail.com) at root, set
 * basePath to "" here and in src/lib/asset.ts, and add a public/CNAME file.
 */
const repoBase = "/midwest-tint-detail";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBase,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
