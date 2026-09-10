/**
 * MEET OWNER SECTION
 * Purpose: Puts a face and a name to the business — the owner answers the
 * phone, quotes the job and works the site — then hands off to the two calls
 * to action.
 *
 * Light two-column section: copy and proof points on the left, portrait with a
 * name plate on the right. Mirrors the layout of `LeaningTreeSection`, on a
 * plain surface instead of a photographic one.
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
        {/* Two columns at lg, but only the first is filled: the second reserves
           the space the full-bleed portrait covers. */}
        <div className="grid lg:grid-cols-2 lg:gap-14">
          {/* ---------- Copy, proof points and calls to action ---------- */}
          <div>
            <Reveal delay={80}>
              <p className="eyebrow eyebrow--plain text-brand">
                Local owner. On site. Every time.
              </p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-4 text-h2"
              segments={[
                { text: `Meet ${siteConfig.owner.name}` },
                { text: "The Man Behind", className: "text-brand", newLine: true },
                { text: "Bossdawg", className: "text-brand", newLine: true },
              ]}
            />

            <Reveal delay={640}>
              <p className="mt-6 max-w-xl text-lead">
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
                    <Reveal delay={780 + index * 110} className="flex items-start gap-4">
                      <span className="icon-chip icon-chip--solid size-11 shrink-0">
                        <PromiseIcon className="size-5" />
                      </span>
                      <div>
                        <h3 className="heading-section text-base md:text-lg">{promise.title}</h3>
                        <p className="mt-1 max-w-md text-sm leading-snug text-body-muted md:text-base">
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
                <Button href="/contact" variant="primary" className="group">
                  Get a free estimate
                  <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <Button href={siteConfig.phone.href} variant="outline-dark">
                  Talk to {siteConfig.owner.name} directly
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------- Portrait and name plate ----------
             Flush to the right edge and covering the right half of the section at
             lg and above; stacks under the copy below that. */}
        <Reveal delay={420} className="meet-owner__portrait">
          <figure className="owner-portrait">
            <Image
              src="/assets/about-owner-david.webp"
              alt={`${siteConfig.owner.name}, ${siteConfig.owner.role} of ${siteConfig.name}, standing beside a mature tree in full safety gear with a chainsaw`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />

            <figcaption className="owner-plate">
              <p className="owner-plate__name">{siteConfig.owner.name}</p>
              <p className="owner-plate__role">{siteConfig.owner.role}</p>
              <p className="owner-plate__role">{siteConfig.name}</p>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
