const sitePath = process.env.NEXT_PUBLIC_SITE_PATH ?? "";

export function withSitePath(path: string) {
  return `${sitePath}${path}`;
}
