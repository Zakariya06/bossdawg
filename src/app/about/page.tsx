/**
 * ABOUT BOSSDAWG PAGE
 * Purpose: A local Eastern Ontario crew built on safe work, tidy sites and straight answers.
 *
 * STUB — route exists so the navigation works end to end. Replace
 * <PagePlaceholder /> with real sections once the design is approved.
 */

import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/PageHeader";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "About",
  description: "A local Eastern Ontario crew built on safe work, tidy sites and straight answers.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Are"
        title="About Bossdawg"
        description="A local Eastern Ontario crew built on safe work, tidy sites and straight answers."
      />
      <PagePlaceholder note="The about page is being written. In the meantime, call us and speak to the crew directly." />
    </>
  );
}
