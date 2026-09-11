"use client";

/**
 * CONTACT SECTION
 * Purpose: Final conversion point — contact details beside a quote request
 * form, over the sunset plate.
 *
 * The plate is framed as the design has it: full width, pinned to the top,
 * nothing layered over it. See `.contact` in globals.css for how the section
 * height is tied to the plate so its dark treeline meets the footer.
 *
 * ⚠ THE FORM IS NOT CONNECTED TO ANYTHING YET.
 *
 * There is no backend, no email service and no API route behind it, so a
 * submission has nowhere to go. Rather than accept the details and silently
 * drop them — which would lose real enquiries — submitting shows a notice
 * pointing the visitor at the phone number.
 *
 * To make it live, replace `handleSubmit` with a POST to whichever destination
 * you choose (a Next.js route handler, Formspree, Resend, etc.) and swap the
 * notice for a real success state.
 */

import { useState, type FormEvent } from "react";
import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { siteConfig } from "@/lib/site-config";
import {
  ArrowRightIcon,
  DocumentIcon,
  MapPinSolidIcon,
  PhoneSolidIcon,
} from "@/components/ui/Icons";

const contactPoints = [
  {
    icon: PhoneSolidIcon,
    title: siteConfig.phone.display,
    detail: `${siteConfig.hours.time}, ${siteConfig.hours.days.replace(",", "")}`,
    href: siteConfig.phone.href,
  },
  {
    icon: MapPinSolidIcon,
    title: siteConfig.address.street,
    detail: siteConfig.address.cityPostal,
  },
  {
    icon: DocumentIcon,
    title: "Free Estimates",
    detail: "No Obligation",
  },
];

export function ContactSection() {
  const [isBlocked, setIsBlocked] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No destination is configured — see the note at the top of this file.
    setIsBlocked(true);
  }

  return (
    <section className="contact" id="contact">
      {/* Torn edge cut into this section from the dark one above */}
      <div className="torn-edge-top" aria-hidden="true" />
      <Image
        src="/assets/contact-sunset-plate.webp"
        alt=""
        width={1387}
        height={1134}
        sizes="101vw"
        className="contact__backdrop"
      />

      {/* Desktop padding: top clears the torn edge; bottom is the height of the
          plate's dark band inside the section (its visual top sits at ~62.9vw) */}
      <Container className="relative z-10 pt-16 pb-20 lg:pt-[clamp(1.75rem,4vw,4.5rem)] lg:pb-[calc(0.6vw+2.5rem)]">
        {/* The card takes the plate's share of the width; the copy the rest */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,51.3%)]">
          {/* ---------- Copy and contact details ---------- */}
          <div className="lg:pt-3 xl:pl-8">
            <Reveal delay={80}>
              <p className="eyebrow contact__eyebrow text-ink">Get in Touch</p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="text-reveal--tight heading-display contact__heading mt-6 md:mt-7"
              segments={[
                { text: "Let’s talk about" },
                { text: "your trees.", className: "text-ember", newLine: true },
              ]}
            />

            <Reveal delay={560}>
              <p className="contact__lede mt-6 max-w-[35rem] text-ink">
                Have a question or ready for a free quote? Fill out the form and we&apos;ll get back
                to you as soon as possible.
              </p>
            </Reveal>

            <ul className="contact__points mt-5">
              {contactPoints.map((point, index) => {
                const PointIcon = point.icon;

                const inner = (
                  <>
                    <span className="contact-point__icon">
                      <PointIcon className="size-1/2" />
                    </span>
                    <span>
                      <span className="contact-point__title">{point.title}</span>
                      <span className="contact-point__detail">{point.detail}</span>
                    </span>
                  </>
                );

                return (
                  <li key={point.title}>
                    <Reveal delay={700 + index * 100}>
                      {point.href ? (
                        <a href={point.href} className="contact-point">
                          {inner}
                        </a>
                      ) : (
                        <span className="contact-point">{inner}</span>
                      )}
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ---------- Quote form ---------- */}
          <Reveal delay={320}>
            <div className="quote-card">
              <h3 className="heading-display quote-card__title">
                Request a <span className="text-ember">Free Quote</span>
              </h3>
              <p className="quote-card__subtitle mt-2">
                Tell us about your tree project and we&apos;ll be in touch shortly.
              </p>

              <form className="quote-card__form mt-6" onSubmit={handleSubmit}>
                <div className="quote-card__row">
                  <div>
                    <label htmlFor="quote-name" className="sr-only">
                      Your name
                    </label>
                    <input
                      id="quote-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your Name"
                      className="form-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="quote-phone" className="sr-only">
                      Telephone number
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="Telephone Number"
                      className="form-field"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email Address"
                    className="form-field"
                  />
                </div>

                <div>
                  <label htmlFor="quote-town" className="sr-only">
                    Town or city the tree is in
                  </label>
                  <input
                    id="quote-town"
                    name="town"
                    type="text"
                    required
                    autoComplete="address-level2"
                    placeholder="Town / City (tree is in)"
                    className="form-field"
                  />
                </div>

                <div>
                  <label htmlFor="quote-details" className="sr-only">
                    Short description of the job
                  </label>
                  <textarea
                    id="quote-details"
                    name="details"
                    rows={4}
                    placeholder="Short Description of the Job"
                    className="form-field form-field--textarea block resize-y"
                  />
                </div>

                <button type="submit" className="button quote-card__submit group">
                  Get My Free Quote
                  <ArrowRightIcon className="size-[1em] transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                {isBlocked && (
                  <p
                    role="alert"
                    className="rounded-lg border border-ember/40 bg-ember/10 px-4 py-3 text-sm text-ink"
                  >
                    This form isn&apos;t connected yet, so your message wasn&apos;t sent. Please
                    call{" "}
                    <a href={siteConfig.phone.href} className="font-bold text-ember underline">
                      {siteConfig.phone.display}
                    </a>{" "}
                    and we&apos;ll get straight back to you.
                  </p>
                )}

                <p className="quote-card__note">Free estimates. No obligation.</p>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
