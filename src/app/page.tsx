import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CollectionsSection } from "@/components/sections/CollectionsSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionsSection />
      <WhyChooseUsSection />
      <SolutionsSection />
      <ProcessSection />
      <QualitySection />
      <ContactSection />
    </>
  );
}
