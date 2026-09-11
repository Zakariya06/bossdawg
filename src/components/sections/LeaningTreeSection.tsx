/**
 * LEANING TREE SECTION
 * Purpose: Explains how high-risk removals are handled, in three steps, beside
 * an angled crew photograph.
 *
 * Laid out as the design has it: the copy sits over a soft dark ellipse on the
 * full-bleed photograph, and the crew photo card sits right beside the three
 * steps rather than out at the far edge, carrying an amber sign-written tag.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { BrandLockup } from "@/components/ui/BrandLockup";

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
      {/* Soft dark ellipse behind the copy, with a light shadow from the top-left */}
      <div className="leaning-tree__glow" aria-hidden="true" />

      <Container className="relative z-10 py-16 md:py-20 lg:py-24">
        <div className="max-w-5xl">
          <Reveal delay={80}>
            <p className="eyebrow text-white">Safe • Controlled • No Surprises</p>
          </Reveal>

          <TextReveal
            as="h2"
            delay={180}
            className="heading-display mt-5 text-display text-white"
            segments={[
              { text: "When the tree is" },
              { text: "leaning the wrong way.", className: "text-brand", newLine: true },
            ]}
          />

          <Reveal delay={620}>
            <p className="mt-6 max-w-2xl text-lead-lg text-on-dark">
              We handle high-risk tree removals around homes, cottages, driveways and shoreline
              properties with care and precision. Our crew uses proven techniques to cut and lower
              trees safely, placing every piece on the ground without touching what{" "}
              <strong className="font-bold text-white">matters</strong>.
            </p>
          </Reveal>

          {/* ---------- Steps with the crew photo beside them ---------- */}
          <div className="mt-10 grid items-start gap-x-10 gap-y-14 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:max-w-5xl">
            <ul className="flex flex-col gap-7">
              {steps.map((step, index) => (
                <li key={step.title}>
                  <Reveal delay={760 + index * 110} className="step-item">
                    <h3 className="step-item__title">{step.title}</h3>
                    <p className="step-item__desc">{step.description}</p>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={520} className="mx-auto w-full max-w-[460px] sm:mx-0">
              <figure className="relative -rotate-[3deg]">
                <div className="photo-card aspect-[4/5]">
                  <Image
                    src="/assets/leaning-tree-crew.webp"
                    alt="Crew member carrying a large chainsaw past the work truck on a job site"
                    fill
                    sizes="460px"
                    className="object-cover"
                  />
                </div>
                {/* Amber sign-written tag on a painted brush plate */}
                <figcaption className="absolute -right-4 -bottom-9 -rotate-[5deg]">
                  <BrandLockup
                    tone="amber"
                    lines={["Experienced Crew.", "Real Results."]}
                    showRule={false}
                  />
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
