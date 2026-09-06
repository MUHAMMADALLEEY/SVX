import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About Our Sports Product Development", "Learn how SportsVentureX connects sports product development, custom branding, sample review and production support for footballs, socks, bags and T-shirts.", "/about");

export default function AboutPage() {
  return <><header className="section-shell svx-page-intro"><p className="eyebrow">About SportsVentureX</p><h1>A product partner.<br />From brief to finish.</h1><p>We connect product development, branding and production support across footballs, socks, bags and T-shirts. Your brief guides the materials, construction and details.</p><a className="svx-button" href="/contact">Tell us about your project ↗</a></header><WhyChooseUsSection /><SolutionsSection /><ProcessSection /></>;
}
