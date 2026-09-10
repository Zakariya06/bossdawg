/**
 * LAND CLEARING PAGE
 * Purpose: Lot and acreage clearing for building sites, driveways, fence lines and shoreline access.
 *
 * STUB — route exists so the navigation works end to end. Replace
 * <PagePlaceholder /> with real sections once the design is approved.
 */

import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/PageHeader";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "Land Clearing",
  description: "Lot and acreage clearing for building sites, driveways, fence lines and shoreline access.",
};

export default function LandClearingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Land Clearing"
        description="Lot and acreage clearing for building sites, driveways, fence lines and shoreline access."
      />
      <PagePlaceholder note="The land clearing service page is being designed. Call us to talk through the acreage you need cleared." />
    </>
  );
}
