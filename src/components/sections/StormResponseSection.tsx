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
  ArrowRightIcon,
  StormFallenTreeIcon,
  StormHazardIcon,
  StormHouseIcon,
  StormRoadIcon,
} from "@/components/ui/Icons";

const priorities = [
  { label: "Hazardous trees removed first", icon: StormHazardIcon },
  { label: "Access reopened quickly", icon: StormRoadIcon },
  { label: "Downed trees and limbs cleared", icon: StormFallenTreeIcon },
  { label: "Homes, cottages and driveways made safe", icon: StormHouseIcon },
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
      {/* ---------- Full-bleed photograph behind the whole section ---------- */}
      <div className="storm-response__media" aria-hidden="true">
        <Image
              src="/assets/storm-response-main.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
      </div>
      {/* Soft dark ellipses: a larger one behind the copy, a smaller one behind the gallery */}
      <div className="storm-response__glow" aria-hidden="true" />

      {/* ---------- Copy ---------- */}
      <div className="photo-panel">

        <Container className="relative z-10 py-14 md:py-16">
          <div className="max-w-xl lg:max-w-3xl">
            <Reveal delay={80}>
              <p className="eyebrow eyebrow--plain text-brand">Storm Response</p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-4 text-display-xl text-white"
              segments={[
                { text: "When Trees" },
                { text: "Don’t Wait,", className: "text-brand", newLine: true },
                { text: "Neither Do We.", newLine: true },
              ]}
            />

            <Reveal delay={640}>
              <p className="mt-6 max-w-xl text-lead-lg font-medium text-on-dark">
                Storms bring down limbs, tops and whole trees. Our crew moves fast to make your
                property safe, reopen access and remove the danger before anything else.
              </p>
            </Reveal>

            {/* ---------- What gets handled first ---------- */}
            <ul className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
              {priorities.map((priority, index) => {
                const PriorityIcon = priority.icon;

                return (
                  <li key={priority.label}>
                    <Reveal delay={760 + index * 90} className="storm-priority">
                      <PriorityIcon className="storm-priority__icon" />
                      <p className="storm-priority__label max-w-[14ch]">
                        {priority.label}
                      </p>
                    </Reveal>
                  </li>
                );
              })}
            </ul>

            <Reveal delay={1140}>
              <Button href="/contact" variant="primary" className="button--lg group mt-10">
                Get a Free Quote
                <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </Reveal>
          </div>
        </Container>
      </div>

      {/* ---------- Storm work gallery ---------- */}
      <Container className="relative z-10 pb-14 md:pb-16">
        <ul className="grid gap-4 sm:grid-cols-3">
          {gallery.map((item, index) => (
            <li key={item.caption}>
              <Reveal delay={index * 100} className="group">
                <figure>
                  <div className="storm-gallery__figure relative aspect-[3/2]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 640px) 32vw, 92vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  </div>
                  <figcaption className="storm-gallery__caption">
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
