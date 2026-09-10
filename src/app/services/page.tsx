/**
 * OUR SERVICES PAGE
 * Purpose: Tree removal, stump grinding and land clearing for residential, cottage and rural properties across Eastern Ontario.
 *
 * STUB — route exists so the navigation works end to end. Replace
 * <PagePlaceholder /> with real sections once the design is approved.
 */

import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/PageHeader";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "Tree Services",
  description: "Tree removal, stump grinding and land clearing for residential, cottage and rural properties across Eastern Ontario.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Our Services"
        description="Tree removal, stump grinding and land clearing for residential, cottage and rural properties across Eastern Ontario."
      />
      <PagePlaceholder note="The full services overview is being designed. Call us in the meantime and we will walk you through what your property needs." />
    </>
  );
}
