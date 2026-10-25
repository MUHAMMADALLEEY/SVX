const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const configuredLinkedInUrl = (
  process.env.NEXT_PUBLIC_LINKEDIN_URL ||
  process.env.LinkedIn_URL ||
  process.env.LINKEDIN_URL
)?.trim();
const configuredFacebookUrl = (
  process.env.NEXT_PUBLIC_FACEBOOK_URL ||
  process.env.FacebookPage_URL ||
  process.env.FACEBOOK_URL
)?.trim();

export const siteConfig = {
  name: "SportsVentureX",
  shortName: "SVX",
  description:
    "Buyer-focused OEM/ODM product development, manufacturing, and global sourcing partner for custom socks, footballs, and bags.",
  contactEmail: "sales@sportsventurex.com",
  url: (configuredSiteUrl || "https://www.sportsventurex.com").replace(/\/$/, ""),
  linkedinUrl:
    configuredLinkedInUrl || "https://www.linkedin.com/company/sportsventurex",
  facebookUrl: configuredFacebookUrl || "",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
