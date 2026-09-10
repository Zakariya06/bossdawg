/**
 * LEANING TREE SECTION
 * Purpose: Explains how high-risk removals are handled, in three steps, beside
 * an angled crew photograph.
 *
 * Full-bleed photograph anchored to the top: the source has a white torn edge
 * baked along its lower edge, which the crop removes, so the shared .torn-edge
 * overlay can close the section across the full width instead.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

const steps = [
  {
    title: "Plan It Right",
    description: "We assess the risks and plan the safest approach.",
  },
  {
    title: "Cut With Control",
    description: "Experienced operators use proper rigging and techniques.",
  },
  {
    title: "Protect What Matters",
    description: "Your home, cottage, driveway and property stay safe.",
  },
];

export function LeaningTreeSection() {
  return (
    <section className="leaning-tree">
      <Image
        src="/assets/leaning-tree-main.webp"
        alt="Arborist standing on a freshly cut stump holding a chainsaw, with the felled tree beside him"
        fill
        sizes="100vw"
        className="object-cover object-top"
      />
      <div className="media-scrim media-scrim--deep" aria-hidden="true" />

      <Container className="relative z-10 py-14 md:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* ---------- Copy and steps ---------- */}
          <div className="lg:col-span-7 xl:col-span-6">
            <Reveal delay={80}>
              <p className="eyebrow text-white">Safe • Controlled • No Surprises</p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-4 text-h2 text-white"
              segments={[
                { text: "When the tree is" },
                { text: "leaning the wrong way.", className: "text-brand", newLine: true },
              ]}
            />

            <Reveal delay={620}>
              <p className="mt-5 max-w-lg text-lead text-on-dark">
                We handle high-risk tree removals around homes, cottages, driveways and shoreline
                properties with care and precision. Our crew uses proven techniques to cut and lower
                trees safely, placing every piece on the ground without touching what matters.
              </p>
            </Reveal>

            <ul className="mt-9 flex flex-col gap-6">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <Reveal delay={760 + index * 110} className="step-item">
                    <h3 className="font-display text-base font-extrabold text-white md:text-lg">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-snug text-on-dark-muted md:text-base">
                      {step.description}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Angled crew photograph ---------- */}
          <div className="lg:col-span-5 xl:col-span-6">
            <Reveal delay={520} className="mx-auto w-full max-w-[330px] lg:ml-auto lg:mr-0">
              <figure className="relative rotate-[2deg]">
                <div className="photo-card aspect-[3/4]">
                  <Image
                    src="/assets/leaning-tree-crew.webp"
                    alt="Crew member carrying a large chainsaw past the work truck on a job site"
                    fill
                    sizes="330px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="photo-tag absolute -bottom-5 left-1/2 -translate-x-1/2 -rotate-[4deg] text-center font-script text-sm leading-tight whitespace-nowrap">
                  Experienced Crew.
                  <br />
                  Real Results.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>

    </section>
  );
}
