import type { APIRoute } from "astro";
import { seo } from "../data";

const body = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap-index.xml", seo.siteUrl).toString()}
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
