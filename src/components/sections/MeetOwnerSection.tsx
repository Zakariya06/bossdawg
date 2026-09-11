/**
 * MEET OWNER SECTION
 * Purpose: Puts a face and a name to the business — the owner answers the
 * phone, quotes the job and works the site — then hands off to the two calls
 * to action.
 *
 * Light two-column section: copy and proof points on the left; on the right, the
 * portrait extracted from the design plate, bleeding off the top and right edges.
 * Type follows the home page's statement sections (--text-display, large lede,
 * `button--lg`).
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { siteConfig } from "@/lib/site-config";
import { ArrowRightIcon, HardHatIcon, PhoneIcon, WalkIcon } from "@/components/ui/Icons";

const ownerPromises = [
  {
    title: "Answers the Phone",
    description: `Speak directly with ${siteConfig.owner.name} — no call centres.`,
    icon: PhoneIcon,
  },
  {
    title: "Walks Your Property",
    description: "On-site assessments for accurate, honest quotes.",
    icon: WalkIcon,
  },
  {
    title: "On Site Doing the Work",
    description: `You'll see ${siteConfig.owner.name} and his crew out there, not behind a desk.`,
    icon: HardHatIcon,
  },
];

export function MeetOwnerSection() {
  return (
    <section id="meet-david" className="section meet-owner">
      <Container>
        <div className="meet-owner__layout">
          {/* ---------- Copy, proof points and calls to action ---------- */}
          <div>
            <Reveal delay={80}>
              <p className="eyebrow eyebrow--plain eyebrow--lg text-brand">
                Local owner. On site. Every time.
              </p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-4 text-display text-ink"
              segments={[
                { text: `Meet ${siteConfig.owner.name}` },
                { text: "The Man Behind", className: "text-brand", newLine: true },
                { text: "Bossdawg", className: "text-brand", newLine: true },
              ]}
            />

            <Reveal delay={560}>
              <span className="brand-rule mt-6" aria-hidden="true" />
            </Reveal>

            <Reveal delay={640}>
              <p className="mt-6 max-w-xl text-lead-lg text-ink-soft">
                {siteConfig.owner.name} founded {siteConfig.name} to bring honest, hardworking, and
                reliable tree care to Southeast Ontario. He answers the phone, walks your property
                with you before quoting, and is on site doing the work — not sitting behind a desk.
                When you call Bossdawg, you&apos;re dealing directly with the owner.
              </p>
            </Reveal>

            <ul className="mt-9 flex flex-col gap-6">
              {ownerPromises.map((promise, index) => {
                const PromiseIcon = promise.icon;

                return (
                  <li key={promise.title}>
                    <Reveal delay={780 + index * 110} className="flex items-center gap-5">
                      <span className="icon-chip icon-chip--solid size-14 shrink-0">
                        <PromiseIcon className="size-7" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg leading-tight font-bold text-ink md:text-xl">
                          {promise.title}
                        </h3>
                        <p className="mt-1 max-w-md text-base leading-snug text-body md:text-lg">
                          {promise.description}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>

            <Reveal delay={1120}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button href="/contact" variant="primary" className="button--lg group">
                  Get a free estimate
                  <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <Button href={siteConfig.phone.href} variant="outline-dark" className="button--lg">
                  Talk to {siteConfig.owner.name} directly
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ---------- Portrait ----------
              The right side of the design plate as one image: photograph,
              wood-ring edge, overhanging trunk and name plate. Its name plate
              is part of the artwork, so the alt text carries what it says. */}
          <Reveal delay={420} className="meet-owner__portrait">
            <Image
              src="/assets/meet-david-portrait.webp"
              alt={`${siteConfig.owner.name}, ${siteConfig.owner.role} of ${siteConfig.name}, standing beside a mature tree in full safety gear with a chainsaw. Name plate: ${siteConfig.owner.name}, ${siteConfig.owner.role}, ${siteConfig.name}.`}
              fill
              sizes="(min-width: 1280px) 56rem, 36rem"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
