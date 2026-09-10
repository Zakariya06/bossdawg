/**
 * GET A FREE QUOTE PAGE
 * Purpose: Tell us what needs to come down and we will get back to you with a no-obligation quote.
 *
 * STUB — route exists so the navigation works end to end. Replace
 * <PagePlaceholder /> with real sections once the design is approved.
 */

import type { Metadata } from "next";

import { PageHeader } from "@/components/sections/PageHeader";
import { PagePlaceholder } from "@/components/sections/PagePlaceholder";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell us what needs to come down and we will get back to you with a no-obligation quote.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a Free Quote"
        description="Tell us what needs to come down and we will get back to you with a no-obligation quote."
      />
      <PagePlaceholder note="The quote form is being built. Until it is live, calling is the fastest way to reach us." />
    </>
  );
}
