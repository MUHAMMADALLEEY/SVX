const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
// Canonicals always default to the public brand domain, including preview builds.
const siteUrl = configuredSiteUrl || "https://www.sportsventurex.com";

export const siteConfig = {
  name: "SportsVentureX",
  shortName: "SVX",
  description:
    "Custom footballs, sports socks, bags and T-shirts for brands and teams. Explore product development, custom branding, sampling and production with SportsVentureX.",
  url: siteUrl.replace(/\/$/, ""),
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
