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

/**
 * Icon artwork extracted from the about design plate (light illustrations and
 * the orange pin, each cut out onto transparency and run through the WebP
 * intake). Served unoptimised: they are already tiny, and re-encoding would
 * soften the fine edges. Width and height are each file's natural size.
 */
const highlights = [
  {
    title: "Tree Removal",
    description: "Dangerous, dead or unwanted trees",
    icon: { src: "/assets/about-icon-tree-removal.webp", width: 54, height: 71 },
  },
  {
    title: "Stump Grinding",
    description: "Clean, safe, usable spaces",
    icon: { src: "/assets/about-icon-stump-grinding.webp", width: 73, height: 66 },
  },
  {
    title: "Land Clearing",
    description: "From small lots to large properties",
    icon: { src: "/assets/about-icon-land-clearing.webp", width: 70, height: 62 },
  },
  {
    title: "Proudly Serving",
    description: "Southeast Ontario",
    icon: { src: "/assets/about-icon-map-pin.webp", width: 45, height: 60 },
    /* The design sets both lines of the service area at title weight. */
    emphasised: true,
  },
];

export function AboutServicesBar() {
  return (
    <section id="what-we-do" className="about-services-bar" aria-label="What we do">
      <Container>
        <ul className="about-services-bar__list">
          {highlights.map((highlight, index) => (
            <li
              key={highlight.title}
              className={
                index === 0
                  ? "xl:pr-3"
                  : index === highlights.length - 1
                    ? "xl:border-l xl:border-white/25 xl:pl-7"
                    : "xl:border-l xl:border-white/25 xl:pr-3 xl:pl-7"
              }
            >
              <Reveal delay={index * 90} className="flex items-center gap-4">
                <span className="about-services-bar__icon">
                  <Image
                    src={highlight.icon.src}
                    alt=""
                    width={highlight.icon.width}
                    height={highlight.icon.height}
                    unoptimized
                  />
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-lg leading-tight font-bold text-white md:text-xl">
                    {highlight.title}
                  </h2>
                  <p
                    className={
                      highlight.emphasised
                        ? "mt-1 font-display text-lg leading-snug font-bold text-white md:text-xl"
                        : "mt-1.5 text-base leading-snug text-on-dark-muted"
                    }
                  >
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
