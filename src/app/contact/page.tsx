import { ContactSection } from "@/components/sections/ContactSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Request a Custom Sports Goods Quote", "Tell SportsVentureX about your custom footballs, socks, bags or T-shirts. Share your quantity, branding brief and target date to discuss samples and production.", "/contact");

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string; reference?: string }> }) {
  const params = await searchParams;
  const reference = typeof params.reference === "string" ? params.reference.slice(0, 200) : "";
  const product = typeof params.product === "string" ? params.product.slice(0, 100) : "";
  return <><header className="section-shell svx-page-intro svx-contact-intro"><p className="eyebrow">Let’s build something</p><h1>Your next product<br />starts here.</h1><p>Share your product reference, estimated quantity, branding requirements and target date. We’ll help define the next step.</p></header><ContactSection initialMessage={reference ? `I’m interested in ${reference} (${product}).\nEstimated quantity: \nBranding requirements: \nTarget date: ` : undefined} /></>;
}
