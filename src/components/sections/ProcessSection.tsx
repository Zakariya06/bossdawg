/**
 * PROCESS SECTION
 * Purpose: Walks through the job from arrival to cleanup, as four numbered
 * steps with a photograph each.
 *
 * Light section on the shared parchment backdrop, mirroring .machinery, with
 * the heading and calls to action centred as in the reference.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ArrowRightIcon } from "@/components/ui/Icons";

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
    title: "You're Left with a Clean, Safe Space",
    description: "No mess, no stress — just a safer, cleaner property.",
    image: "/assets/process-clean-safe-space.webp",
    alt: "Neatly stacked log rounds on a tidy front lawn after a completed removal",
  },
];

export function ProcessSection() {
  return (
    <section className="process section">
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
            <p className="eyebrow text-heading">Our Process</p>
          </Reveal>

          <TextReveal
            as="h2"
            delay={180}
            className="heading-display mt-5 text-h2"
            segments={[
              { text: "What the job" },
              { text: "actually looks like.", className: "text-brand" },
            ]}
          />

          <Reveal delay={560}>
            <p className="mt-5 max-w-2xl text-lead text-body">
              From the first cut to the final cleanup, we handle the heavy work so you don&apos;t
              have to. Here&apos;s a look at how we take your tree removal from start to finish.
            </p>
          </Reveal>
        </div>

        {/* ---------- Steps ---------- */}
        <ol className="mt-12 grid gap-7 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 100} className="group">
                <div className="process-step__photo aspect-[4/5]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <span className="process-step__number">{index + 1}</span>
                  <h3 className="font-display text-base leading-tight font-extrabold text-heading transition-colors duration-200 group-hover:text-brand md:text-lg">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-2.5 text-sm leading-snug text-body-muted md:text-base">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* ---------- Call to action ---------- */}
        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <Button href="/contact" variant="primary" className="button--lg group">
              Get a Free Quote
              <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-9 text-center font-display text-xs font-semibold tracking-[0.22em] text-body-muted uppercase">
            Trees removed. Properties improved.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
