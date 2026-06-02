/**
 * Asset path helper. The site is served at the custom domain root
 * (www.midwesttintdetail.com), so BASE is empty and paths pass through.
 * If this ever moves back to a GitHub Pages project page, set BASE to
 * "/midwest-tint-detail" here and add basePath in next.config.ts.
 */
export const BASE = "";

export function asset(path: string): string {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  if (BASE && path.startsWith(BASE)) return path;
  if (path.startsWith("/")) return `${BASE}${path}`;
  return path;
}
