"use client";

/**
 * CONTACT SECTION
 * Purpose: Final conversion point — contact details beside a quote request
 * form, over the sunset plate.
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
import { ArrowRightIcon, DocumentIcon, MapPinIcon, PhoneIcon } from "@/components/ui/Icons";

const contactPoints = [
  {
    icon: PhoneIcon,
    title: siteConfig.phone.display,
    detail: `${siteConfig.hours.time}, ${siteConfig.hours.days.replace(",", "")}`,
    href: siteConfig.phone.href,
  },
  {
    icon: MapPinIcon,
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
    <section className="contact section" id="contact">
      {/* Torn edge cut into this section from the dark one above */}
      <div className="torn-edge-top" aria-hidden="true" />
      <Image
        src="/assets/contact-sunset-plate.webp"
        alt=""
        fill
        sizes="100vw"
        className="contact__backdrop"
      />
      <div className="contact__fade" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ---------- Copy and contact details ---------- */}
          <div>
            <Reveal delay={80}>
              <p className="eyebrow text-heading">Get in Touch</p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-4 text-h2"
              segments={[
                { text: "Let's talk about" },
                { text: "your trees.", className: "text-brand", newLine: true },
              ]}
            />

            <Reveal delay={560}>
              <p className="mt-5 max-w-md text-lead text-body">
                Have a question or ready for a free quote? Fill out the form and we&apos;ll get back
                to you as soon as possible.
              </p>
            </Reveal>

            <ul className="mt-9 flex flex-col gap-6">
              {contactPoints.map((point, index) => {
                const PointIcon = point.icon;

                const inner = (
                  <>
                    <span className="contact-point__icon">
                      <PointIcon className="size-6" />
                    </span>
                    <span className="leading-tight">
                      <span className="block font-display text-lg font-extrabold text-heading">
                        {point.title}
                      </span>
                      <span className="block text-sm text-body">{point.detail}</span>
                    </span>
                  </>
                );

                return (
                  <li key={point.title}>
                    <Reveal delay={700 + index * 100}>
                      {point.href ? (
                        <a
                          href={point.href}
                          className="flex items-center gap-4 transition-opacity hover:opacity-75"
                        >
                          {inner}
                        </a>
                      ) : (
                        <span className="flex items-center gap-4">{inner}</span>
                      )}
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ---------- Quote form ---------- */}
          <Reveal delay={320}>
            <div className="quote-card p-6 md:p-8">
              <h3 className="heading-display text-h3">
                Request a <span className="text-brand">Free Quote</span>
              </h3>
              <p className="mt-2 text-sm text-body-muted">
                Tell us about your tree project and we&apos;ll be in touch shortly.
              </p>

              <form className="mt-6 flex flex-col gap-3.5" onSubmit={handleSubmit} noValidate={false}>
                <div className="grid gap-3.5 sm:grid-cols-2">
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
                    className="form-field resize-y"
                  />
                </div>

                <button type="submit" className="button button--primary group mt-1 w-full">
                  Get My Free Quote
                  <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                {isBlocked && (
                  <p
                    role="alert"
                    className="rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-heading"
                  >
                    This form isn&apos;t connected yet, so your message wasn&apos;t sent. Please
                    call{" "}
                    <a href={siteConfig.phone.href} className="font-bold text-brand underline">
                      {siteConfig.phone.display}
                    </a>{" "}
                    and we&apos;ll get straight back to you.
                  </p>
                )}

                <p className="text-center text-xs text-body-muted">
                  Free estimates. No obligation.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
