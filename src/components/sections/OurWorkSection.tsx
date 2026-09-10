/**
 * OUR WORK SECTION
 * Purpose: Shows the three kinds of job the crew is actually called out for,
 * so a visitor can recognise their own situation before they call.
 *
 * Light section with a centred heading and a three-up photo grid. The cards
 * are photograph-led — no panel behind them — so the section reads lighter
 * than the dark ones either side of it.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ExcavatorIcon, WavesIcon, WindIcon } from "@/components/ui/Icons";

const projects = [
  {
    label: "Land Clearing",
    title: "Field-Scale Land Clearing",
    description:
      "From overgrown lots to full property preparation, we clear the way for what's next.",
    icon: ExcavatorIcon,
    image: "/assets/our-work-land-clearing.webp",
    alt: "Excavator with a grapple attachment and a tracked loader clearing stumps and brush from a wooded lot, with two crew members looking on",
  },
  {
    label: "Waterfront Properties",
    title: "Shoreline & Limited Access",
    description:
      "Careful, professional tree removal in challenging locations, with minimal impact to your property.",
    icon: WavesIcon,
    image: "/assets/our-work-waterfront.webp",
    alt: "Arborist in a harness felling a large tree on a rocky shoreline beside a dock, with a cottage across the water",
  },
  {
    label: "Storm Cleanup",
    title: "After Ice or Wind Damage",
    description:
      "Fast, safe cleanup when storms strike. We remove dangerous trees and debris so you can move forward with peace of mind.",
    icon: WindIcon,
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
            <p className="eyebrow eyebrow--plain text-brand">Real projects. Real results.</p>
          </Reveal>

          <TextReveal
            as="h2"
            delay={180}
            /* No `newLine` here: that would give "Bossdawg" a line of its own.
               The measure is capped instead, so the line breaks after "work"
               and the orange word leads the second line, as in the reference.
               19ch sits between the two measured limits: the second line needs
               17.1ch, and 20.6ch would pull "Bossdawg" up onto the first. */
            className="heading-display mt-4 max-w-[19ch] text-h2"
            segments={[
              { text: "See the kind of work" },
              { text: "Bossdawg", className: "text-brand" },
              { text: "gets called for." },
            ]}
          />

          <Reveal delay={640}>
            <p className="mt-5 max-w-2xl text-lead text-body">
              From large-scale land clearing to sensitive waterfront properties and urgent storm
              cleanup — we have the equipment, experience, and local knowledge to get it done right.
            </p>
          </Reveal>
        </div>

        {/* ---------- Projects ---------- */}
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <li key={project.title}>
                <Reveal delay={(index % 3) * 110} className="group h-full">
                  <article className="flex h-full flex-col">
                    <div className="photo-frame aspect-[3/2]">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                      />
                    </div>

                    <p className="mt-5 flex items-center gap-2.5">
                      <ProjectIcon className="size-6 shrink-0 text-brand" />
                      <span className="eyebrow eyebrow--plain text-brand">{project.label}</span>
                    </p>

                    <h3 className="heading-section mt-3 text-h4">{project.title}</h3>
                    <p className="mt-2 text-base leading-snug text-body-muted">
                      {project.description}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
