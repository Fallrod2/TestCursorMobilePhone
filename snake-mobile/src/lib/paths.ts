export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!base || base === "/") return normalized;
  const trimmedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${trimmedBase}${normalized}`;
}

