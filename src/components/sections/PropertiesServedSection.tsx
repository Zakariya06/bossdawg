/**
 * PROPERTIES SERVED SECTION
 * Purpose: Shows the four property types the crew works on, each with a
 * photograph, icon and short line, over the illustrated parchment backdrop.
 *
 * Sits below the services intro. Light counterpart to the dark section above
 * it, using the same eyebrow / headline / lede / CTA rhythm.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import {
  ArrowRightIcon,
  BarnIcon,
  HomeIcon,
  TentIcon,
  WavesIcon,
} from "@/components/ui/Icons";

const propertyTypes = [
  {
    title: "Homes",
    description: "Safe, reliable tree care",
    icon: HomeIcon,
    image: "/assets/property-homes.webp",
    alt: "Craftsman-style family home surrounded by mature shade trees and a tidy lawn",
  },
  {
    title: "Cottages",
    description: "Keep your property clear and ready to enjoy",
    icon: WavesIcon,
    image: "/assets/property-cottages.webp",
    alt: "Timber cottage with a wraparound deck set among tall pines",
  },
  {
    title: "Rural Properties",
    description: "Land clearing for farms and acreages",
    icon: BarnIcon,
    image: "/assets/property-rural.webp",
    alt: "Red barn behind a split-rail fence on open farmland",
  },
  {
    title: "Campgrounds & Businesses",
    description: "Safe, clean and accessible spaces",
    icon: TentIcon,
    image: "/assets/property-campgrounds.webp",
    alt: "Lakeside campsite with a travel trailer, picnic table and fire pit under mature trees",
  },
];

export function PropertiesServedSection() {
  return (
    <section className="properties-served section">
      {/* Torn edge cut into this section from the dark one above */}
      <div className="torn-edge-top" aria-hidden="true" />
      <Image
        src="/assets/properties-backdrop.webp"
        alt=""
        fill
        sizes="100vw"
        className="section-backdrop"
      />

      <Container>
        {/* ---------- Heading ---------- */}
        <Reveal delay={80}>
          <p className="eyebrow text-heading">Homes • Cottages • Acreages • Businesses</p>
        </Reveal>

        <TextReveal
          as="h2"
          delay={180}
          className="heading-display mt-4 text-h2"
          segments={[{ text: "The Properties" }, { text: "We Serve.", className: "text-brand" }]}
        />

        <Reveal delay={520}>
          <p className="mt-4 max-w-xl text-lead text-body">
            Trusted by homeowners, cottage owners, rural landowners, campgrounds and businesses
            across the region.
          </p>
        </Reveal>

        {/* ---------- Property types ---------- */}
        <ul className="mt-12 grid gap-x-12 gap-y-12 md:mt-14 lg:grid-cols-2">
          {propertyTypes.map((property, index) => {
            const PropertyIcon = property.icon;

            return (
              <li key={property.title}>
                <Reveal delay={index * 110} className="group flex items-center gap-6">
                  <div className="photo-frame aspect-[4/3] w-[52%] max-w-[400px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_44px_rgba(20,51,43,0.26)] sm:w-[55%]">
                    <Image
                      src={property.image}
                      alt={property.alt}
                      fill
                      sizes="(min-width: 1024px) 400px, 55vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <PropertyIcon className="size-10 text-brand transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 md:size-12" />
                    <h3 className="mt-4 font-display text-xl leading-tight font-extrabold text-heading transition-colors duration-200 group-hover:text-brand md:text-2xl">
                      {property.title}
                    </h3>
                    <p className="mt-2.5 max-w-[26ch] text-base leading-snug text-body-muted md:text-lg">
                      {property.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal delay={520}>
          <Button href="/contact" variant="primary" className="group mt-12">
            Get Started Today
            <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
