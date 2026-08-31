const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "SportsVentureX",
  shortName: "SVX",
  description:
    "SportsVentureX develops custom footballs, socks, bags, and sports goods programs for growing brands.",
  url: (configuredSiteUrl || "https://svx-phi.vercel.app").replace(/\/$/, ""),
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
