/**
 * ABOUT HERO SECTION
 * Purpose: Opens the About page — who Bossdawg is, why a property owner can
 * trust the crew, and the two calls to action.
 *
 * Uses the shared `.hero` frame (globals.css §07), so it occupies exactly one
 * viewport at every size, same as the home hero. The trust card takes the slot
 * the home hero gives to its inset photographs; the services strip below is a
 * separate section and deliberately sits under the fold (AGENTS.md §13.1).
 *
 * Type follows the scale the home page's statement sections use —
 * --text-display-xl headline, large lede, `button--lg` — so the copy fills the
 * left of the photograph the way the design does.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function AboutHeroSection() {
  return (
    <section className="hero">
      {/* Background photograph + darkening gradient */}
      <Image
        src="/assets/about-hero-background.webp"
        alt="Bossdawg Tree Removals lead hand carrying a chainsaw across a residential lawn while a climber works the tree above and the grapple truck loads logs"
        fill
        priority
        sizes="100vw"
        className="hero__image object-cover object-center"
      />
      <div className="media-scrim media-scrim--under-header" aria-hidden="true" />

      <Container className="hero__content relative z-10">
        <div className="grid items-center gap-10 xl:grid-cols-12">
          {/* ---------- Headline and calls to action ---------- */}
          <div className="xl:col-span-8">
            <Reveal delay={100}>
              <p className="eyebrow eyebrow--plain eyebrow--lg text-brand">
                Stronger properties. Safer communities.
              </p>
            </Reveal>

            <TextReveal
              as="h1"
              playOnMount
              delay={250}
              className="hero__headline heading-display text-display-xl text-white"
              segments={[
                { text: "About Bossdawg" },
                { text: "Tree Removals", className: "text-brand", newLine: true },
              ]}
            />

            <Reveal delay={700}>
              <p className="hero__lede max-w-2xl text-lead-2xl text-on-dark">
                Trusted local tree removal and land clearing in Southeast Ontario — real people,
                real work, safer properties.
              </p>
            </Reveal>

            <Reveal delay={850}>
              <div className="hero__actions flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button href="/contact" variant="primary" className="button--lg group">
                  Get a free estimate
                  <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <Button href="#meet-david" variant="outline" className="button--lg">
                  Learn more about us
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ---------- Trust card ----------
              From xl only: beside a --text-display-xl headline, a 1024px screen
              leaves the card too narrow and wraps the headline to three lines. */}
          <div className="hidden xl:col-span-4 xl:block">
            <Reveal delay={600} className="about-hero__card-slot">
              <aside className="about-hero__card">
                <div className="flex items-center gap-5">
                  {/* Shield artwork extracted from the design plate */}
                  <Image
                    src="/assets/about-icon-shield-check.webp"
                    alt=""
                    width={55}
                    height={62}
                    unoptimized
                    className="about-hero__card-icon"
                  />
                  <h2 className="about-hero__card-title">
                    Before you
                    <br />
                    trust us&hellip;
                  </h2>
                </div>

                <p className="about-hero__card-body">
                  We know inviting a tree crew to your property is a big decision. That&apos;s why we
                  show up on time, communicate clearly, work safely, and treat your property like
                  our own.
                </p>

                {/* Brand sign-off — short rule, then the handwritten line */}
                <p className="about-hero__signoff">
                  <span className="brand-rule" aria-hidden="true" />
                  <span className="signature ml-auto text-brand">
                    Your property.
                    <span className="signature__line">Our priority.</span>
                  </span>
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
