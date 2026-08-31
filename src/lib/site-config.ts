const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const fallbackSiteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";
const siteUrl = configuredSiteUrl || fallbackSiteUrl;

if (!configuredSiteUrl && process.env.VERCEL_ENV === "production") {
  throw new Error("NEXT_PUBLIC_SITE_URL must be set for production builds.");
}

export const siteConfig = {
  name: "SportsVentureX",
  shortName: "SVX",
  description:
    "SportsVentureX develops custom footballs, socks, bags, and sports goods programs for growing brands.",
  url: siteUrl.replace(/\/$/, ""),
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
