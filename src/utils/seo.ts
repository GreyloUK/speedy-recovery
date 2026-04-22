import { seo } from "../data/seo";

export function composeTitle(pageTitle: string): string {
  if (!pageTitle) return seo.defaultTitle;
  return `${pageTitle} | ${seo.titleSuffix}`;
}

export function canonicalFor(pathname: string): string {
  const clean = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return new URL(clean, seo.siteUrl).toString();
}
