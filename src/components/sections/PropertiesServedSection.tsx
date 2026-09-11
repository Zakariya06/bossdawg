/**
 * PROPERTIES SERVED SECTION
 * Purpose: Shows the four property types the crew works on, each as a card of
 * photograph, icon, title and short description, over the illustrated
 * parchment backdrop.
 *
 * Card layout follows the design: photograph on the left, then the icon beside
 * the title and description. Titles and descriptions are broken onto the lines
 * the design uses. Icons are traced from the design plate (see Icons.tsx).
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import {
  ArrowRightIcon,
  PropertyBarnIcon,
  PropertyHomeIcon,
  PropertyTentIcon,
  PropertyWavesIcon,
} from "@/components/ui/Icons";

const propertyTypes = [
  {
    title: ["Homes"],
    description: ["Safe, reliable", "tree care"],
    icon: PropertyHomeIcon,
    image: "/assets/property-homes.webp",
    alt: "Craftsman-style family home surrounded by mature shade trees and a tidy lawn",
  },
  {
    title: ["Cottages"],
    description: ["Keep your property", "clear and ready", "to enjoy"],
    icon: PropertyWavesIcon,
    image: "/assets/property-cottages.webp",
    alt: "Timber cottage with a wraparound deck set among tall pines",
  },
  {
    title: ["Rural Properties"],
    description: ["Land clearing for", "farms and acreages"],
    icon: PropertyBarnIcon,
    image: "/assets/property-rural.webp",
    alt: "Red barn behind a split-rail fence on open farmland",
  },
  {
    title: ["Campgrounds", "& Businesses"],
    description: ["Safe, clean and", "accessible spaces"],
    icon: PropertyTentIcon,
    image: "/assets/property-campgrounds.webp",
    alt: "Lakeside campsite with a travel trailer, picnic table and fire pit under mature trees",
  },
];

export function PropertiesServedSection() {
  return (
    <section className="properties-served section">
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
          <p className="eyebrow text-ink">Homes • Cottages • Acreages • Businesses</p>
        </Reveal>

        <TextReveal
          as="h2"
          delay={180}
          className="heading-display mt-4 text-display text-ink"
          segments={[{ text: "The Properties" }, { text: "We Serve.", className: "text-brand" }]}
        />

        <Reveal delay={520}>
          <p className="mt-5 max-w-2xl text-lead-lg text-body">
            Trusted by homeowners, cottage owners, rural landowners, campgrounds and businesses
            across the region.
          </p>
        </Reveal>

        {/* ---------- Property cards ---------- */}
        <ul className="mt-10 grid gap-x-[clamp(2rem,5vw,5rem)] gap-y-8 md:mt-12 md:gap-y-10 lg:grid-cols-2">
          {propertyTypes.map((property, index) => {
            const PropertyIcon = property.icon;

            return (
              <li key={property.title.join(" ")}>
                <Reveal delay={index * 110} className="property-card group">
                  <div className="property-card__photo">
                    <Image
                      src={property.image}
                      alt={property.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  </div>

                  <div className="property-card__body">
                    <PropertyIcon className="property-card__icon" />
                    <div className="min-w-0">
                      <h3 className="property-card__title">
                        {property.title.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </h3>
                      <p className="property-card__desc">
                        {property.description.map((line) => (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal delay={200}>
          <Button href="/contact" variant="amber" className="button--lg group mt-12">
            Get Started Today
            <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
