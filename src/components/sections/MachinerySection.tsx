/**
 * MACHINERY SECTION
 * Purpose: Shows the equipment fleet and the crew behind it, as a grid of
 * photo cards, closing with the primary conversion pair.
 *
 * Light section on the parchment backdrop, mirroring .properties-served, with
 * the heading centred as in the reference.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ArrowRightIcon, TwinFirIcon } from "@/components/ui/Icons";

const equipment = [
  {
    title: "Tracked Lift",
    description: "Can walk across a lawn and fit through a garden gate.",
    image: "/assets/machinery-tracked-lift.webp",
    alt: "Tracked spider lift set up on a back lawn with an arborist working from the raised basket",
  },
  {
    title: "Truck Boom",
    description: "Reaches over homes and into hard-to-access areas.",
    image: "/assets/machinery-truck-boom.webp",
    alt: "Bucket truck parked on a driveway with two arborists working from the elevated platform",
  },
  {
    title: "Chipper",
    description: "Turns limbs into mulch on site.",
    image: "/assets/machinery-chipper.webp",
    alt: "Red brush chipper feeding mulch into a dump truck beside a pile of cut branches",
  },
  {
    title: "Stump Grinder",
    description: "Removes stumps and grinds them below grade.",
    image: "/assets/machinery-stump-grinder.webp",
    alt: "Yellow stump grinder cutting into a stump and throwing wood chips across the lawn",
  },
  {
    title: "Small Excavator",
    description: "Helps with large removals, site cleanup and property restoration.",
    image: "/assets/machinery-excavator.webp",
    alt: "Compact orange excavator clearing large log sections from a residential yard",
  },
  {
    title: "Experienced Crew",
    description: "When machinery can't reach, our skilled climbers get the job done.",
    image: "/assets/machinery-crew.webp",
    alt: "Three Bossdawg crew members standing behind a freshly cut stump with a chainsaw",
  },
];

export function MachinerySection() {
  return (
    <section className="machinery section">
      {/* Torn edge cut into this section from the dark one above */}
      <div className="torn-edge-top" aria-hidden="true" />
      <Image
        src="/assets/machinery-backdrop.webp"
        alt=""
        fill
        sizes="100vw"
        className="section-backdrop"
      />

      <Container>
        {/* ---------- Heading ---------- */}
        <div className="flex flex-col items-center text-center">
          <Reveal delay={80}>
            <p className="eyebrow text-ink">The Right Equipment. The Right People.</p>
          </Reveal>

          <TextReveal
            as="h2"
            delay={180}
            className="heading-display mt-5 text-display text-ink"
            segments={[
              { text: "Real Machinery." },
              { text: "Real Results.", className: "text-brand", newLine: true },
            ]}
          />
        </div>

        {/* ---------- Equipment grid ---------- */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {equipment.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={(index % 3) * 100} className="group h-full">
                <article className="machinery-card">
                  <div className="relative aspect-[1.86] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  </div>

                  <div className="machinery-card__body">
                    <h3 className="machinery-card__title transition-colors duration-200 group-hover:text-brand">
                      {item.title}
                    </h3>
                    <p className="machinery-card__desc">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* ---------- Calls to action ---------- */}
        <Reveal delay={200}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4">
            <Button href="/contact" variant="primary" className="button--lg group">
              <TwinFirIcon className="size-7 text-[#160f03]" />
              Get a Free Quote
              <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button href="/services" variant="outline-dark" className="button--lg">
              View Our Services
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
