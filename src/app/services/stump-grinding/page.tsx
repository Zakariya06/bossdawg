/**
 * STUMP GRINDING PAGE
 * Purpose: Stumps ground below grade so you can re-seed, landscape or build over the area without obstruction.
 *
 * STUB — route exists so the navigation works end to end. Replace
 * <PagePlaceholder /> with real sections once the design is approved.
 */

import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/PageHeader";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "Stump Grinding",
  description: "Stumps ground below grade so you can re-seed, landscape or build over the area without obstruction.",
};

export default function StumpGrindingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Stump Grinding"
        description="Stumps ground below grade so you can re-seed, landscape or build over the area without obstruction."
      />
      <PagePlaceholder note="The stump grinding service page is being designed. Call us to discuss your stumps and get a quote." />
    </>
  );
}
