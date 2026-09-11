/**
 * OUR WORK SECTION
 * Purpose: Shows the three kinds of job the crew is actually called out for,
 * so a visitor can recognise their own situation before they call.
 *
 * Light section with a centred heading and three project cards, set to the
 * design plate: photograph across the top, then the orange icon and label,
 * title and description on a white panel that lifts on hover. Type follows the
 * home page's statement sections (--text-display headline, large lede); the
 * icons are extracted from the design plate.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

/**
 * `icon` sizes are the extracted files' natural sizes; they are shown 20%
 * larger (the inline width below), matching their scale in the design.
 */
const projects = [
  {
    label: "Land Clearing",
    title: "Field-Scale Land Clearing",
    description:
      "From overgrown lots to full property preparation, we clear the way for what's next.",
    icon: { src: "/assets/about-icon-work-land-clearing.webp", width: 44, height: 39 },
    image: "/assets/our-work-land-clearing.webp",
    alt: "Excavator with a grapple attachment and a tracked loader clearing stumps and brush from a wooded lot, with two crew members looking on",
  },
  {
    label: "Waterfront Properties",
    title: "Shoreline & Limited Access",
    description:
      "Careful, professional tree removal in challenging locations, with minimal impact to your property.",
    icon: { src: "/assets/about-icon-work-waterfront.webp", width: 47, height: 33 },
    image: "/assets/our-work-waterfront.webp",
    alt: "Arborist in a harness felling a large tree on a rocky shoreline beside a dock, with a cottage across the water",
  },
  {
    label: "Storm Cleanup",
    title: "After Ice or Wind Damage",
    description:
      "Fast, safe cleanup when storms strike. We remove dangerous trees and debris so you can move forward with peace of mind.",
    icon: { src: "/assets/about-icon-work-storm-cleanup.webp", width: 43, height: 39 },
    image: "/assets/our-work-storm-cleanup.webp",
    alt: "Crew member cutting up a large wind-thrown tree that has come down across a lakeside home",
  },
];

export function OurWorkSection() {
  return (
    <section className="our-work section">
      <Container>
        {/* ---------- Heading ---------- */}
        <div className="flex flex-col items-center text-center">
          <Reveal delay={80}>
            <p className="eyebrow eyebrow--plain eyebrow--lg text-brand">
              Real projects. Real results.
            </p>
          </Reveal>

          <TextReveal
            as="h2"
            delay={180}
            /* No `newLine` here: that would give "Bossdawg" a line of its own.
               The measure is capped instead, so the line breaks after "work"
               and the orange word leads the second line, as in the reference.
               19ch sits between the two measured limits: the second line needs
               17.1ch, and 20.6ch would pull "Bossdawg" up onto the first. Both
               scale with the font, so the break holds at any size. */
            className="heading-display mt-4 max-w-[19ch] text-display text-ink"
            segments={[
              { text: "See the kind of work" },
              { text: "Bossdawg", className: "text-brand" },
              { text: "gets called for." },
            ]}
          />

          <Reveal delay={640}>
            <p className="mt-6 max-w-4xl text-lead-xl text-balance text-ink-soft">
              From large-scale land clearing to sensitive waterfront properties and urgent storm
              cleanup — we have the equipment, experience, and local knowledge to get it done right.
            </p>
          </Reveal>
        </div>

        {/* ---------- Projects ---------- */}
        {/* Two across until xl: three cards need ~1280px before the longest label
            and title fit on one line. */}
        <ul className="mt-12 grid gap-6 md:mt-14 md:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {projects.map((project, index) => (
            <li key={project.title}>
              <Reveal delay={(index % 3) * 110} className="h-full">
                <article className="panel-card work-card">
                  <div className="work-card__photo">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="work-card__body">
                    <p className="flex items-center gap-3 xl:gap-4">
                      <Image
                        src={project.icon.src}
                        alt=""
                        width={project.icon.width}
                        height={project.icon.height}
                        unoptimized
                        style={{ width: project.icon.width * 1.2, height: "auto" }}
                      />
                      <span className="eyebrow eyebrow--plain work-card__label text-brand">
                        {project.label}
                      </span>
                    </p>

                    <h3 className="heading-section mt-4 text-xl leading-tight text-ink xl:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-body xl:text-lg">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
