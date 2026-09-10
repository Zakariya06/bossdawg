/**
 * SERVICES INTRO SECTION
 * Purpose: Introduces the service range below the hero, and lists the five
 * services in a solid strip along the bottom.
 *
 * Structure follows the reference:
 *   - Flat dark panel (--color-ink-deep) as the base surface.
 *   - Photograph inset to the top-right, faded into the panel on its left and
 *     lower edges so the copy sits on solid colour, not on the image.
 *   - Full-width service strip on the same solid colour, divided by hairlines.
 *   - Shared torn edge closing the section into the white below.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ArrowRightIcon } from "@/components/ui/Icons";

/**
 * Supplied icon artwork. SVG is vector, so it is used as-is rather than being
 * converted to WebP (AGENTS.md §14.1 covers raster images only).
 */
const services = [
  { title: "Tree Removal", description: "Safe, efficient removal", icon: "tree-removal" },
  { title: "Stump Grinding", description: "Clean, usable space", icon: "stump-grinding" },
  { title: "Canopy Pruning", description: "Healthier, stronger trees", icon: "canopy-pruning" },
  {
    title: "Hazardous Tree Removal",
    description: "High-risk trees, handled with care",
    icon: "hazardous-tree-removal",
  },
  {
    title: "Land Clearing",
    description: "From small lots to large acreage",
    icon: "land-clearing",
  },
];

export function ServicesIntroSection() {
  return (
    <section className="services-intro">
      {/* ---------- Panel: photograph top-right, copy on solid colour ---------- */}
      <div className="photo-panel">
        <div className="photo-panel__media" aria-hidden="true">
          <Image
            src="/assets/services-intro-bucket-chainsaw.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-center"
          />
          <div className="photo-panel__fade" />
        </div>

        <Container className="relative z-10 py-14 md:py-16">
          <div className="max-w-xl lg:max-w-lg">
            <Reveal delay={80}>
              <p className="eyebrow text-white">Trees • Stumps • Land Clearing</p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-5 text-h2 text-white"
              segments={[
                { text: "Everything From" },
                { text: "Dangerous Removals", newLine: true },
                { text: "to Clean Ground.", className: "text-brand", newLine: true },
              ]}
            />

            <Reveal delay={620}>
              <p className="mt-5 max-w-sm text-lead text-on-dark">
                Safe, professional tree care for homes, cottages and properties across Kingston, the
                Bay of Quinte and Frontenac County.
              </p>
            </Reveal>

            <Reveal delay={760}>
              <Button href="/services" variant="primary" className="group mt-8">
                Explore Our Services
                <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* ---------- Service strip ---------- */}
      <div className="services-intro__strip">
        <Container>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-9 sm:grid-cols-3 md:grid-cols-5 md:gap-x-0">
            {services.map((service, index) => (
              <li key={service.title} className="service-strip__item">
                <Reveal delay={index * 90} className="flex flex-col items-center">
                  <Image
                    src={`/assets/icons/${service.icon}.svg`}
                    alt=""
                    width={64}
                    height={64}
                    unoptimized
                    className="size-14 md:size-16"
                  />
                  <h3 className="mt-4 font-display text-base leading-tight font-extrabold text-white md:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-[20ch] text-sm leading-snug text-on-dark-muted md:text-[0.9375rem]">
                    {service.description}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </div>

    </section>
  );
}
