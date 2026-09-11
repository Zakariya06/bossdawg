/**
 * PROCESS SECTION
 * Purpose: Walks through a job in four numbered steps, each a rough-edged
 * photograph with a large counter, then closes on a single amber call to action.
 *
 * The flat paper colour and the dry-grass texture along the bottom are taken
 * from the design plate (see `.process` and `.process__texture` in globals.css).
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrushStroke } from "@/components/ui/BrushStroke";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ChevronRightIcon } from "@/components/ui/Icons";

const steps = [
  {
    title: "We Show Up",
    description: "On time, with the right equipment and a clear plan for your property.",
    image: "/assets/process-we-show-up.webp",
    alt: "Crew member carrying a chainsaw from the work truck at the start of a job",
  },
  {
    title: "We Get to Work",
    description: "Skilled, careful removals — even in tight spaces and around valuable property.",
    image: "/assets/process-we-get-to-work.webp",
    alt: "Arborist cutting through a large felled trunk with a chainsaw, sawdust flying",
  },
  {
    title: "We Clear It All",
    description: "We cut, chip, and remove branches, logs and debris off your property.",
    image: "/assets/process-we-clear-it-all.webp",
    alt: "Crew member feeding leafy branches into a red chipper beside the truck",
  },
  {
    // Non-breaking space keeps "a Clean" together, so the title breaks after "with" as in the design
    title: "You're Left with a Clean, Safe Space",
    description: "No mess, no stress — just a safer, cleaner property.",
    image: "/assets/process-clean-safe-space.webp",
    alt: "Neatly stacked log rounds on a tidy front lawn after a completed removal",
  },
];

export function ProcessSection() {
  return (
    <section className="process">
      {/* Torn edge cut into this section from the dark one above */}
      <div className="torn-edge-top" aria-hidden="true" />
      <Image
        src="/assets/process-grass-texture.webp"
        alt=""
        width={2048}
        height={312}
        sizes="100vw"
        className="process__texture object-cover object-bottom"
      />

      <Container className="relative pt-16 pb-14 md:pt-20 md:pb-16">
        {/* ---------- Heading ---------- */}
        <Reveal delay={80} className="text-center">
          <p className="eyebrow eyebrow--lg eyebrow--centered text-ink-soft">Our Process</p>
        </Reveal>

        <TextReveal
          as="h2"
          delay={180}
          className="heading-display mt-4 text-center text-display-wide text-ink md:mt-5"
          segments={[
            { text: "What the job" },
            { text: "actually looks like.", className: "text-ember" },
          ]}
        />

        {/* Measure is set in em so the first line ends at "have to." as in the design */}
        <Reveal delay={560}>
          <p className="mx-auto mt-4 max-w-[41.5em] text-center text-lead-lg text-pretty text-ink-soft">
            From the first cut to the final cleanup, we handle the heavy work so you don&apos;t
            have to. Here&apos;s a look at how we take your tree removal from start to finish.
          </p>
        </Reveal>

        {/* ---------- Steps ---------- */}
        <ol className="mt-9 grid gap-x-5 gap-y-10 sm:grid-cols-2 md:mt-10 lg:mt-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 100} className="group">
                <div className="process-step__frame">
                  <div className="process-step__photo">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-4 pl-1.5 xl:gap-5">
                  <span className="process-step__count" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="process-step__title">{step.title}</h3>
                    <p className="process-step__desc">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* ---------- Call to action ---------- */}
        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-center md:mt-6">
            <Button
              href="/contact"
              variant="amber"
              className="button--amber-solid button--xl group"
            >
              Get a Free Quote
              <ChevronRightIcon className="size-[1.25em] transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <BrushStroke className="process__brush mt-1.5 text-ember" />
            <p className="process__tagline mt-4">Trees removed. Properties improved.</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
