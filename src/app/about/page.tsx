/**
 * ABOUT PAGE
 * Purpose: A local Southeast Ontario crew built on safe work, tidy sites and
 * straight answers.
 *
 * Composed from shared section components, in visual order. The remaining
 * sections are still to be designed; the hero and services bar are live.
 */

import type { Metadata } from "next";

import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { AboutServicesBar } from "@/components/sections/AboutServicesBar";
import { MeetOwnerSection } from "@/components/sections/MeetOwnerSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { AboutServiceAreaSection } from "@/components/sections/AboutServiceAreaSection";
import { OurWorkSection } from "@/components/sections/OurWorkSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Trusted local tree removal and land clearing in Southeast Ontario — real people, real work, safer properties.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutServicesBar />
      <MeetOwnerSection />
      <TeamSection />
      <AboutServiceAreaSection />
      <OurWorkSection />
      <FaqSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
