/**
 * TOUGH JOBS SECTION
 * Purpose: Positions the crew on difficult, high-risk removals and repeats the
 * primary conversion pair.
 *
 * Full-bleed photograph filled on both edges with --color-ink-deep, the same
 * colour as the service strip above, so the photographic and solid-colour
 * sections read as one surface. Typography follows the shared eyebrow /
 * headline / lede / CTA rhythm used by every other section.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ArrowRightIcon, TwinFirIcon } from "@/components/ui/Icons";

export function ToughJobsSection() {
  return (
    <section className="tough-jobs">
      <Image
        src="/assets/tough-jobs-crane-climber.webp"
        alt="Climber roped into a tall spar while a spider lift crane lowers a cut log section into a tight backyard"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="media-scrim media-scrim--deep media-scrim--edges" aria-hidden="true" />

      <Container className="tough-jobs__content relative z-10">
        <div className="max-w-4xl">
          <Reveal delay={80}>
            <p className="eyebrow text-white">No Job Too Tough</p>
          </Reveal>

          <TextReveal
            as="h2"
            delay={180}
            className="heading-display mt-6 text-display text-white"
            segments={[
              { text: "The Hardest Tree Jobs." },
              { text: "That’s Our Specialty.", className: "text-brand", newLine: true },
            ]}
          />

          <Reveal delay={720}>
            <p className="mt-7 max-w-xl text-lead-lg text-on-dark">
              Big, complex tree removals in tight spaces. Done safely, and done right.
            </p>
          </Reveal>

          <Reveal delay={860}>
            <div className="mt-10 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4">
              <Button href="/contact" variant="primary" className="button--lg group">
                <TwinFirIcon className="size-7 text-[#160f03]" />
                Get a Free Quote
                <ArrowRightIcon className="size-6 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button href="/services" variant="outline" className="button--lg">
                View Our Services
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
