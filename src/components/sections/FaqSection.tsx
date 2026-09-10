"use client";

/**
 * FAQ SECTION
 * Purpose: Answers the questions homeowners ask before booking.
 *
 * Light section over the full-bleed crew photograph, which already fades to
 * white on its left so the accordion sits on clean ground.
 *
 * The accordion opens one item at a time. Height is animated with a
 * 0fr -> 1fr grid row (AGENTS.md §22 rule 11) so no measurement is needed and
 * the answer can be any length.
 */

import { useState } from "react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

const faqs = [
  {
    question: "How much does tree removal cost?",
    answer:
      "It depends on the size, species, location and complexity of the job. We look at what's actually there during the on site assessment and put a clear figure in before any work starts.",
  },
  {
    question: "What factors affect the price?",
    answer:
      "Height and spread, how close the tree is to buildings or wires, whether we can get equipment in, and how much wood and brush has to leave the property. A tree in an open field costs far less than the same tree over a roof.",
  },
  {
    question: "Do I need a permit to remove a tree?",
    answer:
      "Sometimes. It depends on your municipality, the size of the tree and whether the property is inside a designated area. We will tell you what applies at your address and what needs to be filed before we start.",
  },
  {
    question: "Which tree species are protected?",
    answer:
      "Protections vary by municipality and can cover heritage trees, certain native species and anything inside a conservation area. We check before quoting so there are no surprises partway through the job.",
  },
  {
    question: "Do nearby townships have bylaws?",
    answer:
      "Yes, and they differ between them. Rules in Deseronto, Napanee, Kingston and the surrounding townships are not the same, so we work to whichever set applies to your property.",
  },
  {
    question: "Will the stump be removed as well?",
    answer:
      "Only if you ask for it. Removal and stump grinding are quoted separately, so you can take the tree down now and deal with the stump later if you prefer.",
  },
  {
    question: "What time of year is the cheapest?",
    answer:
      "Late autumn through winter is usually quieter, and frozen ground means less impact from equipment. Emergency and storm work is priced the same whenever it happens.",
  },
  {
    question: "How much will it affect my lawn and garden?",
    answer:
      "We plan the route in and the drop zone to keep disturbance down, and use tracked equipment that spreads its weight. Some marking on the grass is normal; we rake the area over before we leave.",
  },
  {
    question: "How quickly can you be on site for an urgent job?",
    answer:
      "For hazards — a tree on a house, blocking a driveway or hung up over something — we prioritise it and get out as fast as the crew can travel. Call us rather than sending a message.",
  },
];

export function FaqSection() {
  // Single-open accordion; the first question starts open, as in the reference.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq section">
      <Image
        src="/assets/faq-backdrop.webp"
        alt=""
        fill
        sizes="100vw"
        className="faq__backdrop"
      />

      <Container>
        {/* ---------- Heading ---------- */}
        <Reveal delay={80}>
          <p className="eyebrow text-heading">Frequently Asked Questions</p>
        </Reveal>

        <TextReveal
          as="h2"
          delay={180}
          className="heading-display mt-4 text-h2"
          segments={[
            { text: "Straight Answers" },
            { text: "Before You Decide", className: "text-brand", newLine: true },
          ]}
        />

        <Reveal delay={560}>
          <p className="mt-4 max-w-xl text-lead text-body">
            The things homeowners ask about most, answered here.
          </p>
        </Reveal>

        {/* ---------- Accordion ---------- */}
        <ul className="mt-10 flex max-w-2xl flex-col gap-2.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <li key={faq.question} className="faq-item" data-open={isOpen}>
                <h3>
                  <button
                    type="button"
                    className="faq-item__question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-sm md:text-base">{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true" />
                  </button>
                </h3>

                <div
                  className="faq-item__body"
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div>
                    <p className="faq-item__answer text-sm leading-relaxed text-body md:text-[0.9375rem]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
