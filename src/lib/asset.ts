/**
 * GitHub Pages serves this repo as a project page at /midwest-tint-detail, so
 * root-relative asset paths on plain <img> tags need the basePath prefixed.
 * next/link and next/font are basePath-aware automatically; plain <img> is not,
 * so route raw image src values through asset().
 *
 * When the site moves to its own domain (midwesttintdetail.com) at the root,
 * set BASE to "" here and in next.config.ts, and add a public/CNAME file.
 */
export const BASE = "/midwest-tint-detail";

export function asset(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  if (path.startsWith(BASE)) return path;
  if (path.startsWith("/")) return `${BASE}${path}`;
  return path;
}
