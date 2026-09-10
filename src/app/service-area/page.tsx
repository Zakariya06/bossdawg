/**
 * SERVICE AREA PAGE
 * Purpose: Based in Deseronto and serving Kingston, the Bay of Quinte and Frontenac County.
 *
 * STUB — route exists so the navigation works end to end. Replace
 * <PagePlaceholder /> with real sections once the design is approved.
 */

import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/PageHeader";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Based in Deseronto and serving Kingston, the Bay of Quinte and Frontenac County.",
};

export default function ServiceAreaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Where We Work"
        title="Service Area"
        description="Based in Deseronto and serving Kingston, the Bay of Quinte and Frontenac County."
      />
      <PagePlaceholder note="A detailed service area map and community list is being prepared. Call us to confirm we cover your address." />
    </>
  );
}
