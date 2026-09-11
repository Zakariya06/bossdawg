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
import {
  ArrowRightIcon,
  ServiceBulldozerIcon,
  ServiceHazardIcon,
  ServicePruningIcon,
  ServiceStumpIcon,
  ServiceTreeIcon,
} from "@/components/ui/Icons";

/**
 * Titles and descriptions are split into the lines the design breaks them on.
 * Icons are inline SVGs redrawn from the design plate (see Icons.tsx).
 */
const services = [
  { title: ["Tree", "Removal"], description: ["Safe, efficient", "removal"], icon: ServiceTreeIcon },
  { title: ["Stump", "Grinding"], description: ["Clean, usable", "space"], icon: ServiceStumpIcon },
  {
    title: ["Canopy", "Pruning"],
    description: ["Healthier, stronger", "trees"],
    icon: ServicePruningIcon,
  },
  {
    title: ["Hazardous Tree", "Removal"],
    description: ["High-risk trees,", "handled with care"],
    icon: ServiceHazardIcon,
  },
  {
    title: ["Land Clearing"],
    description: ["From small lots", "to large acreage"],
    icon: ServiceBulldozerIcon,
  },
];

export function ServicesIntroSection() {
  return (
    <section className="services-intro">
      {/* ---------- Panel: full-bleed photograph, copy on a soft dark ellipse ---------- */}
      <div className="photo-panel photo-panel--full">
        <div className="photo-panel__media" aria-hidden="true">
          <Image
            src="/assets/services-intro-bucket-chainsaw.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
        </div>
        <div className="services-intro__glow" aria-hidden="true" />

        <Container className="relative z-10 pt-28 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-xl lg:max-w-2xl">
            <Reveal delay={80}>
              <p className="eyebrow text-white">Trees • Stumps • Land Clearing</p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-6 text-h1 text-white"
              segments={[
                { text: "Everything From" },
                { text: "Dangerous Removals", newLine: true },
                { text: "to Clean Ground.", className: "text-brand", newLine: true },
              ]}
            />

            <Reveal delay={620}>
              <p className="mt-6 max-w-md text-lead-lg text-on-dark">
                Safe, professional tree care for homes, cottages and properties across Kingston, the
                Bay of Quinte and Frontenac County.
              </p>
            </Reveal>

            <Reveal delay={760}>
              <Button href="/services" variant="amber" className="button--lg group mt-9">
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
            {services.map((service, index) => {
              const ServiceIcon = service.icon;

              return (
                <li key={service.title.join(" ")} className="service-strip__item">
                  <Reveal delay={index * 90} className="flex flex-col items-center">
                    <ServiceIcon className="service-strip__icon" />
                    <h3 className="service-strip__title">
                      {service.title.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                    <p className="service-strip__desc">
                      {service.description.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </div>

    </section>
  );
}
