const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "SportsVentureX",
  shortName: "SVX",
  description:
    "Buyer-focused product development, manufacturing, and sourcing for socks, footballs, bags, and apparel.",
  contactEmail: "sales@sportsventurex.com",
  url: (configuredSiteUrl || "https://www.sportsventurex.com").replace(/\/$/, ""),
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
