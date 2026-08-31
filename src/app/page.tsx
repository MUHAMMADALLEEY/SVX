import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductCatalogueSection } from "@/components/sections/ProductCatalogueSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <ProductCatalogueSection />
      <SolutionsSection />
      <ProcessSection />
      <QualitySection />
      <ContactSection />
    </>
  );
}
