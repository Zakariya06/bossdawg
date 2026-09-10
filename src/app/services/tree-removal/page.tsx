/**
 * TREE REMOVAL PAGE
 * Purpose: Safe removal of large, damaged and hard-to-reach trees using tracked lift equipment and experienced climbers.
 *
 * STUB — route exists so the navigation works end to end. Replace
 * <PagePlaceholder /> with real sections once the design is approved.
 */

import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/PageHeader";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "Tree Removal",
  description: "Safe removal of large, damaged and hard-to-reach trees using tracked lift equipment and experienced climbers.",
};

export default function TreeRemovalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Tree Removal"
        description="Safe removal of large, damaged and hard-to-reach trees using tracked lift equipment and experienced climbers."
      />
      <PagePlaceholder note="The tree removal service page is being designed. Call us for a free assessment of your property." />
    </>
  );
}
