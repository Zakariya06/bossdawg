/**
 * TEAM SECTION
 * Purpose: Introduces the crew behind the owner — who turns up, what each part
 * of the team does, and the values the business closes on.
 *
 * Dark section on the shared forest backdrop: heading and copy on the left,
 * crew photograph on the right, three crew traits below, and a closing band of
 * brand lines along the bottom.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { siteConfig } from "@/lib/site-config";
import { ClimberIcon, CrewIcon, StumpIcon } from "@/components/ui/Icons";

const crewTraits = [
  {
    title: "Skilled Climbers",
    description: "Trained and equipped to reach high-risk and hard-to-access trees safely.",
    icon: ClimberIcon,
  },
  {
    title: "Dependable Ground Crew",
    description: "We rig, lower, and clear with precision, keeping your property and our crew safe.",
    icon: StumpIcon,
  },
  {
    title: "The Same Faces",
    description:
      "A tight-knit team that shows up together, job after job, so you always know who's on your property.",
    icon: CrewIcon,
  },
];

export function TeamSection() {
  return (
    <section id="our-crew" className="team section">
      <Image
        src="/assets/team-backdrop.webp"
        alt=""
        fill
        sizes="100vw"
        className="section-backdrop section-backdrop--center"
      />

      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ---------- Heading and copy ---------- */}
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <p className="eyebrow eyebrow--plain text-brand">A crew you can count on.</p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-4 text-h2 text-white"
              segments={[{ text: "The Team" }, { text: "David Built", newLine: true }]}
            />

            <Reveal delay={560}>
              <p className="mt-3 font-display text-h4 font-extrabold text-brand">
                Skilled. Safe. Dependable.
              </p>
            </Reveal>

            <Reveal delay={680} className="mt-6">
              <span className="brand-rule" aria-hidden="true" />
              <p className="mt-5 max-w-lg text-base leading-relaxed text-on-dark md:text-lg">
                From experienced climbers who go up on rope and harness, to a dependable ground crew
                who rig, lower, and clear — this is the team that gets it done. You&apos;ll see the
                same familiar faces on every job, working together with pride, skill, and a
                commitment to do things the right way.
              </p>
            </Reveal>
          </div>

          {/* ---------- Crew photograph ---------- */}
          <div className="lg:col-span-7">
            <Reveal delay={420} className="team__photo">
              <Image
                src="/assets/team-crew.webp"
                alt={`Three ${siteConfig.shortName} crew members standing behind a freshly cut stump with a chainsaw resting on it`}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-center"
              />
            </Reveal>
          </div>
        </div>

        {/* ---------- Crew traits ---------- */}
        <ul className="mt-11 grid gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {crewTraits.map((trait, index) => {
            const TraitIcon = trait.icon;

            return (
              <li key={trait.title}>
                <Reveal delay={index * 100} className="h-full">
                  <article className="surface-card flex items-start gap-4 px-5 py-5">
                    <TraitIcon className="size-10 shrink-0 text-brand" />
                    <div>
                      <h3 className="font-display text-base font-extrabold text-white md:text-lg">
                        {trait.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-snug text-on-dark-muted">
                        {trait.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>

        {/* ---------- Closing brand lines ---------- */}
        <Reveal delay={200} className="team__footer">
          <p className="team__motto">
            Stronger properties.
            <br />
            Safer communities.
          </p>
          <span className="brand-rule" aria-hidden="true" />
          <p className="team__motto">Local people. Real work. A greener tomorrow.</p>
        </Reveal>
      </Container>
    </section>
  );
}
