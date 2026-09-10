/**
 * HOME PAGE
 *
 * Composed from shared section components. Sections are listed in visual
 * order; all styling lives in the components themselves (AGENTS.md §9).
 */

import { HeroSection } from "@/components/sections/HeroSection";
import { PropertyTypesBar } from "@/components/sections/PropertyTypesBar";
import { ServicesIntroSection } from "@/components/sections/ServicesIntroSection";
import { PropertiesServedSection } from "@/components/sections/PropertiesServedSection";
import { ToughJobsSection } from "@/components/sections/ToughJobsSection";
import { MachinerySection } from "@/components/sections/MachinerySection";
import { StormResponseSection } from "@/components/sections/StormResponseSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { LeaningTreeSection } from "@/components/sections/LeaningTreeSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { JobFlowSection } from "@/components/sections/JobFlowSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PropertyTypesBar />
      <ServicesIntroSection />
      <PropertiesServedSection />
      <ToughJobsSection />
      <MachinerySection />
      <StormResponseSection />
      <ServiceAreaSection />
      <LeaningTreeSection />
      <ProcessSection />
      <JobFlowSection />
      <FaqSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
