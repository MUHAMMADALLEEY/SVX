import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <WhyChooseUsSection />
      <ProductSection />
      <SolutionsSection />
      <ProcessSection />
      <QualitySection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
