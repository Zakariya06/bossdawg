/**
 * TEAM SECTION
 * Purpose: Introduces the crew behind the owner — who turns up, what each part
 * of the team does, and the values the business closes on.
 *
 * Dark section on the shared forest backdrop: heading and copy on the left,
 * crew photograph on the right, three crew traits below, and a closing band of
 * brand lines along the bottom. Type follows the home page's statement sections
 * (--text-display headline, larger lede); the trait icons are extracted from the
 * design plate.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { siteConfig } from "@/lib/site-config";

/**
 * Icon artwork cut out of the design plate onto transparency. `width`/`height`
 * are the files' natural sizes; each is shown 25% larger (the inline width
 * below), which keeps the three at the design's relative scale.
 */
const crewTraits = [
  {
    title: "Skilled Climbers",
    description: "Trained and equipped to reach high-risk and hard-to-access trees safely.",
    icon: { src: "/assets/about-icon-skilled-climbers.webp", width: 53, height: 81 },
  },
  {
    title: "Dependable Ground Crew",
    description: "We rig, lower, and clear with precision, keeping your property and our crew safe.",
    icon: { src: "/assets/about-icon-dependable-ground-crew.webp", width: 71, height: 61 },
  },
  {
    title: "The Same Faces",
    description:
      "A tight-knit team that shows up together, job after job, so you always know who's on your property.",
    icon: { src: "/assets/about-icon-same-faces.webp", width: 64, height: 50 },
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
        {/* Side by side from xl; below that the copy column is too narrow for the
            display headline and strapline, so copy and photograph stack. */}
        <div className="grid items-center gap-10 xl:grid-cols-12 xl:gap-x-12">
          {/* ---------- Heading and copy ---------- */}
          <div className="xl:col-span-5">
            <Reveal delay={80}>
              <p className="eyebrow eyebrow--plain eyebrow--lg text-brand">
                A crew you can count on.
              </p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-4 text-display text-white"
              segments={[{ text: "The Team" }, { text: "David Built", newLine: true }]}
            />

            <Reveal delay={560}>
              <p className="mt-2 font-display text-h3 leading-tight font-extrabold text-brand">
                Skilled. Safe. Dependable.
              </p>
            </Reveal>

            <Reveal delay={680} className="mt-6">
              <span className="brand-rule" aria-hidden="true" />
              <p className="mt-6 max-w-xl text-lead text-on-dark">
                From experienced climbers who go up on rope and harness, to a dependable ground crew
                who rig, lower, and clear — this is the team that gets it done. You&apos;ll see the
                same familiar faces on every job, working together with pride, skill, and a
                commitment to do things the right way.
              </p>
            </Reveal>
          </div>

          {/* ---------- Crew photograph ---------- */}
          <div className="xl:col-span-7">
            <Reveal delay={420} className="team__photo">
              <Image
                src="/assets/team-crew.webp"
                alt={`Three ${siteConfig.shortName} crew members standing behind a freshly cut stump with a chainsaw resting on it`}
                fill
                sizes="(min-width: 1280px) 58vw, 100vw"
                className="object-cover object-center"
              />
            </Reveal>
          </div>
        </div>

        {/* ---------- Crew traits ---------- */}
        {/* One card per row until xl: three across need ~1280px before each card
            has room for its description beside the icon. */}
        <ul className="mt-8 grid gap-5 xl:grid-cols-3 xl:gap-6">
          {crewTraits.map((trait, index) => (
            <li key={trait.title}>
              <Reveal delay={index * 100} className="h-full">
                <article className="surface-card surface-card--glass team-card">
                  <span className="team-card__icon">
                    <Image
                      src={trait.icon.src}
                      alt=""
                      width={trait.icon.width}
                      height={trait.icon.height}
                      unoptimized
                      style={{ width: trait.icon.width * 1.25, height: "auto" }}
                    />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg leading-tight font-bold text-white xl:text-xl">
                      {trait.title}
                    </h3>
                    <p className="mt-2 text-base leading-snug text-on-dark-muted xl:text-lg">
                      {trait.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* ---------- Closing brand lines ---------- */}
        <Reveal delay={200} className="team__footer">
          <div className="team__footer-group">
            <span className="team__footer-divider" aria-hidden="true" />
            <p className="team__motto">
              Stronger properties.
              <br />
              Safer communities.
            </p>
          </div>
          <div className="team__footer-group">
            <span className="brand-rule" aria-hidden="true" />
            <p className="team__motto team__motto--muted">
              Local people. Real work. A greener tomorrow.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
