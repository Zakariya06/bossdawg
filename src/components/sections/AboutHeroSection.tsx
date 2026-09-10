/**
 * ABOUT HERO SECTION
 * Purpose: Opens the About page — who Bossdawg is, why a property owner can
 * trust the crew, and the two calls to action.
 *
 * Uses the shared `.hero` frame (globals.css §07), so it occupies exactly one
 * viewport at every size, same as the home hero. The trust card takes the slot
 * the home hero gives to its inset photographs; the services strip below is a
 * separate section and deliberately sits under the fold (AGENTS.md §13.1).
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ArrowRightIcon, ShieldCheckIcon } from "@/components/ui/Icons";

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
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* ---------- Headline and calls to action ---------- */}
          <div className="lg:col-span-7 xl:col-span-8">
            <Reveal delay={100}>
              <p className="eyebrow eyebrow--plain text-brand">
                Stronger properties. Safer communities.
              </p>
            </Reveal>

            <TextReveal
              as="h1"
              playOnMount
              delay={250}
              className="hero__headline heading-display max-w-[16ch] text-h1 text-white"
              segments={[
                { text: "About Bossdawg" },
                {
                  text: "Tree Removals",
                  className: "heading-accent",
                  newLine: true,
                  asBlock: true,
                },
              ]}
            />

            <Reveal delay={700}>
              <p className="hero__lede max-w-lg text-lead text-on-dark">
                Trusted local tree removal and land clearing in Southeast Ontario — real people,
                real work, safer properties.
              </p>
            </Reveal>

            <Reveal delay={850}>
              <div className="hero__actions flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Button href="/contact" variant="primary" className="group">
                  Get a free estimate
                  <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <Button href="#meet-david" variant="outline">
                  Learn more about us
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ---------- Trust card ---------- */}
          <div className="hidden lg:col-span-5 lg:block xl:col-span-4">
            <Reveal delay={600} className="ml-auto max-w-sm">
              <aside className="about-hero__card">
                <div className="flex items-center gap-4">
                  <ShieldCheckIcon className="size-11 shrink-0 text-brand" />
                  <h2 className="heading-section max-w-[9ch] text-h4">Before you trust us&hellip;</h2>
                </div>

                <p className="about-hero__card-body text-base leading-relaxed text-body">
                  We know inviting a tree crew to your property is a big decision. That&apos;s why we
                  show up on time, communicate clearly, work safely, and treat your property like
                  our own.
                </p>

                {/* Brand sign-off — rule and script line, as on the reference */}
                <p className="about-hero__signoff">
                  <span className="about-hero__signoff-rule" aria-hidden="true" />
                  <span className="font-script text-lg leading-tight text-brand">
                    Your property.
                    <br />
                    Our priority.
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
