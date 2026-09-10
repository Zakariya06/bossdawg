/**
 * STORM RESPONSE SECTION
 * Purpose: Covers emergency storm work — what the crew prioritises after a
 * storm, and what that work looks like.
 *
 * Built on the shared .photo-panel (same construction as the services intro):
 * flat dark surface with the photograph inset to the right, faded into the
 * colour so the copy sits on solid ground. A three-image gallery follows.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import {
  AccessRoadIcon,
  AlertTriangleIcon,
  ArrowRightIcon,
  FallenTreeIcon,
  HouseOutlineIcon,
} from "@/components/ui/Icons";

const priorities = [
  { label: "Hazardous trees removed first", icon: AlertTriangleIcon },
  { label: "Access reopened quickly", icon: AccessRoadIcon },
  { label: "Downed trees and limbs cleared", icon: FallenTreeIcon },
  { label: "Homes, cottages and driveways made safe", icon: HouseOutlineIcon },
];

const gallery = [
  {
    caption: "Wind damage cleanup",
    image: "/assets/storm-wind-damage.webp",
    alt: "Large limb snapped from a maple and lying across a back lawn beside a brush pile",
  },
  {
    caption: "Ice storm response",
    image: "/assets/storm-ice-response.webp",
    alt: "Ice-laden tree collapsed against the side of a house after a freezing rain storm",
  },
  {
    caption: "Dangerous trees removed",
    image: "/assets/storm-dangerous-removal.webp",
    alt: "Arborist in a bucket lift sectioning a tall dead tree away from overhead power lines",
  },
];

export function StormResponseSection() {
  return (
    <section className="storm-response">
      {/* ---------- Panel: photograph right, copy on solid colour ---------- */}
      <div className="photo-panel">
        <div className="photo-panel__media" aria-hidden="true">
          <Image
            src="/assets/storm-response-main.webp"
            alt=""
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-center"
          />
          <div className="photo-panel__fade" />
        </div>

        <Container className="relative z-10 py-14 md:py-16">
          <div className="max-w-xl lg:max-w-2xl">
            <Reveal delay={80}>
              <p className="eyebrow eyebrow--plain text-brand">Storm Response</p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-4 text-h2 text-white"
              segments={[
                { text: "When Trees" },
                // No newLine: stays on the first line beside "When Trees"
                { text: "Don’t Wait,", className: "text-brand" },
                { text: "Neither Do We.", newLine: true },
              ]}
            />

            <Reveal delay={640}>
              <p className="mt-5 max-w-md text-lead text-on-dark">
                Storms bring down limbs, tops and whole trees. Our crew moves fast to make your
                property safe, reopen access and remove the danger before anything else.
              </p>
            </Reveal>

            {/* ---------- What gets handled first ---------- */}
            <ul className="mt-9 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4">
              {priorities.map((priority, index) => {
                const PriorityIcon = priority.icon;

                return (
                  <li key={priority.label}>
                    <Reveal delay={760 + index * 90}>
                      <PriorityIcon className="size-8 text-brand" />
                      <p className="mt-3 max-w-[15ch] text-sm leading-snug text-on-dark-muted">
                        {priority.label}
                      </p>
                    </Reveal>
                  </li>
                );
              })}
            </ul>

            <Reveal delay={1140}>
              <Button href="/contact" variant="primary" className="group mt-9">
                Get a Free Quote
                <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* ---------- Storm work gallery ---------- */}
      <Container className="relative z-10 pb-14 md:pb-16">
        <ul className="grid gap-5 sm:grid-cols-3">
          {gallery.map((item, index) => (
            <li key={item.caption}>
              <Reveal delay={index * 100} className="group">
                <figure>
                  <div className="storm-gallery__figure relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 640px) 32vw, 92vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  </div>
                  <figcaption className="mt-3.5 text-center font-display text-sm font-semibold text-white md:text-base">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
