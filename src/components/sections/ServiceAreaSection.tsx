/**
 * SERVICE AREA SECTION
 * Purpose: Shows where the crew works, over the illustrated map plate.
 *
 * The supplied artwork already contains the map, the town pins and the
 * shoreline photograph, so this section adds only the copy and a corner wash
 * that keeps it legible when the image crop shifts at other viewport ratios.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function ServiceAreaSection() {
  return (
    <section className="service-area">
      <Image
        src="/assets/service-area-map.webp"
        alt="Illustrated map of the Bay of Quinte and Frontenac County service area, pinned at Deseronto and marking Napanee, Belleville, Kingston, Gananoque, Brockville, Perth and Prince Edward County"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="service-area__scrim" aria-hidden="true" />

      <Container className="relative z-10 py-14 md:py-16">
        <div className="max-w-xl lg:max-w-lg">
          <Reveal delay={80}>
            <p className="eyebrow eyebrow--plain text-brand">Service Area</p>
          </Reveal>

          <TextReveal
            as="h2"
            delay={180}
            className="heading-display mt-4 text-h2"
            segments={[
              { text: "Proudly Serving" },
              { text: "Eastern Ontario.", className: "text-brand", newLine: true },
            ]}
          />

          <Reveal delay={560}>
            <p className="mt-5 max-w-md text-lead text-body">
              From Deseronto to Kingston, the Bay of Quinte and Frontenac County, and beyond. We
              help homeowners, cottages and properties across the region keep their land safe and
              clear.
            </p>
          </Reveal>

          <Reveal delay={700}>
            <Button href="/service-area" variant="dark" className="group mt-8">
              View Our Service Area
              <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
