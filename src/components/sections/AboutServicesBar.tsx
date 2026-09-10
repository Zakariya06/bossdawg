/**
 * ABOUT SERVICES BAR
 * Purpose: Sits directly beneath the about hero. Names the three services and
 * the service area, so the first scroll answers "what do they actually do?".
 *
 * Deliberately below the fold: the hero owns exactly one viewport, and this bar
 * is what the first scroll reveals (AGENTS.md §13.1).
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { MapPinIcon } from "@/components/ui/Icons";

/**
 * Supplied icon artwork, reused from the home page's services strip. SVG is
 * vector, so it is used as-is rather than converted to WebP (AGENTS.md §14.1
 * covers raster images only). The service area uses the inline `MapPinIcon`,
 * as it does in the home page's property types bar.
 */
const highlights = [
  {
    title: "Tree Removal",
    description: "Dangerous, dead or unwanted trees",
    iconAsset: "tree-removal",
  },
  {
    title: "Stump Grinding",
    description: "Clean, safe, usable spaces",
    iconAsset: "stump-grinding",
  },
  {
    title: "Land Clearing",
    description: "From small lots to large properties",
    iconAsset: "land-clearing",
  },
  {
    title: "Proudly Serving",
    description: "Southeast Ontario",
    icon: MapPinIcon,
  },
] as const;

export function AboutServicesBar() {
  return (
    <section id="what-we-do" className="about-services-bar" aria-label="What we do">
      <Container>
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <li
              key={highlight.title}
              className={index > 0 ? "lg:border-l lg:border-white/15 lg:pl-8" : undefined}
            >
              <Reveal delay={index * 90} className="flex items-center gap-4">
                {"icon" in highlight ? (
                  <highlight.icon className="size-11 shrink-0 text-brand md:size-12" />
                ) : (
                  <Image
                    src={`/assets/icons/${highlight.iconAsset}.svg`}
                    alt=""
                    width={64}
                    height={64}
                    unoptimized
                    className="size-11 shrink-0 md:size-12"
                  />
                )}
                <div>
                  <h2 className="font-display text-base leading-tight font-bold text-white md:text-lg">
                    {highlight.title}
                  </h2>
                  <p className="mt-1 text-sm leading-snug text-on-dark-muted">
                    {highlight.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
