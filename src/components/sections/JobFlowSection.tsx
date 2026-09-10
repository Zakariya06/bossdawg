/**
 * JOB FLOW SECTION
 * Purpose: The full job walkthrough, from the first phone call to the tidied
 * site, as six numbered step cards.
 *
 * Dark section over a near-black forest backdrop. Complements the lighter
 * .process section above it, which covers the same ground at a glance.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

const jobSteps = [
  {
    title: "You Get in Touch",
    description: "Tell us what's going on and we'll set up a time to come out.",
    image: "/assets/job-flow-get-in-touch.webp",
    alt: "Close-up of a homeowner holding a phone, about to call for a quote",
  },
  {
    title: "On Site Assessment",
    description:
      "We walk the property, look at what's there and put a figure on it before any saw is started.",
    image: "/assets/job-flow-site-assessment.webp",
    alt: "Crew member in high-visibility gear looking up at a tree while a lift is positioned behind",
  },
  {
    title: "Plan the Job",
    description:
      "We plan the drop zone, the way in and the safest method for the tree and your property.",
    image: "/assets/job-flow-plan-the-job.webp",
    alt: "Arborist reviewing a job assessment sheet on a tablet at the work site",
  },
  {
    title: "Take It Down",
    description: "The stem comes down in pieces, with care and control.",
    image: "/assets/job-flow-take-it-down.webp",
    alt: "Roped climber cutting into a large trunk partway up the tree",
  },
  {
    title: "Chip and Remove",
    description: "Brush is fed through the chipper where it lies. Wood and debris are hauled away.",
    image: "/assets/job-flow-chip-and-remove.webp",
    alt: "Crew member feeding branches into a chipper that is blowing mulch into a dump truck",
  },
  {
    title: "Leave It Tidy",
    description:
      "We rake over the area so what's left behind looks tended rather than worked on.",
    image: "/assets/job-flow-leave-it-tidy.webp",
    alt: "Cleared and raked yard in front of a house, with mature trees left standing",
  },
];

export function JobFlowSection() {
  return (
    <section className="job-flow section">
      <Image
        src="/assets/job-flow-backdrop.webp"
        alt=""
        fill
        sizes="100vw"
        className="job-flow__backdrop"
      />

      <Container>
        {/* ---------- Heading ---------- */}
        <Reveal delay={80}>
          <p className="eyebrow text-white">Our Process</p>
        </Reveal>

        <TextReveal
          as="h2"
          delay={180}
          className="heading-display mt-4 text-h2 text-white"
          segments={[
            { text: "From First Call to a" },
            { text: "Cleared Site", className: "text-brand" },
          ]}
        />

        <Reveal delay={620}>
          <p className="mt-4 max-w-2xl text-lead text-on-dark">
            A clear plan. The right equipment. A yard that&apos;s left tidy. Here&apos;s how a job
            runs.
          </p>
        </Reveal>

        {/* ---------- Steps ---------- */}
        <ol className="mt-11 grid gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {jobSteps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={(index % 3) * 100} className="group h-full">
                <article className="job-card">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                    />
                  </div>

                  <div className="px-5 py-5">
                    <div className="flex items-center gap-3">
                      <span className="process-step__number">{index + 1}</span>
                      <h3 className="font-display text-base leading-tight font-extrabold text-white md:text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-sm leading-snug text-on-dark-muted">
                      {step.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
