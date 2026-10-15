const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteConfig = {
  name: "SportsVentureX",
  shortName: "SVX",
  description:
    "Buyer-focused OEM/ODM product development, manufacturing, and global sourcing partner for custom socks, footballs, and bags.",
  contactEmail: "sales@sportsventurex.com",
  url: (configuredSiteUrl || "https://www.sportsventurex.com").replace(/\/$/, ""),
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
