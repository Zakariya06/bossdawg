/**
 * GALLERY PAGE
 * Purpose: Removals, grinding and clearing jobs from across the region.
 *
 * STUB — route exists so the navigation works end to end. Replace
 * <PagePlaceholder /> with real sections once the design is approved.
 */

import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/PageHeader";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Removals, grinding and clearing jobs from across the region.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Recent Work"
        title="Gallery"
        description="Removals, grinding and clearing jobs from across the region."
      />
      <PagePlaceholder note="The gallery is awaiting project photographs. Send us your job and we will add it here once complete." />
    </>
  );
}
