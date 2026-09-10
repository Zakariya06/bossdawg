"use client";

/**
 * REVIEWS SECTION
 * Purpose: Social proof — the rating badge, customer reviews in a carousel,
 * and the contact strip.
 *
 * Carousel is Swiper (swiper/react) with Navigation, Pagination, Autoplay and
 * A11y. Slides step 1 -> 2 -> 3 across the breakpoints.
 *
 * Two settings are tied to there being only 4 real reviews:
 *   - It tops out at 3 per view. At 4 there would be nothing left to scroll.
 *   - It uses rewind rather than loop. Loop needs roughly twice the visible
 *     slides to duplicate from, so with 4 slides Swiper disables it and warns.
 *     Rewind jumps back to the first slide at the end and works at any count.
 * Once enough genuine reviews exist (about 8), switch rewind -> loop and raise
 * the breakpoint to 4 per view.
 */

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { siteConfig } from "@/lib/site-config";
import {
  BbbTorchIcon,
  ChevronDownIcon,
  ClockIcon,
  GoogleGIcon,
  PhoneIcon,
  StarIcon,
} from "@/components/ui/Icons";

/**
 * Customer reviews as supplied in the design reference.
 *
 * Only add entries here that are real, attributable reviews — never write
 * filler testimonials to make the carousel longer.
 */
const reviews = [
  {
    quote:
      "Fast, professional and left the property cleaner than we expected. Highly recommend!",
    name: "Mark T.",
    location: "Kingston, ON",
    avatar: "/assets/machinery-tracked-lift.webp",
  },
  {
    quote:
      "They removed a large tree close to our cottage with no issues. Great crew and great service.",
    name: "Sarah L.",
    location: "Prince Edward County",
    avatar: "/assets/property-cottages.webp",
  },
  {
    quote: "Excellent work from start to finish. Fair quote, on time and very professional.",
    name: "David R.",
    location: "Deseronto, ON",
    avatar: "/assets/job-flow-leave-it-tidy.webp",
  },
  {
    quote:
      "They cleared a large area for us and the results are outstanding. Would definitely use them again.",
    name: "Lisa K.",
    location: "Greater Napanee, ON",
    avatar: "/assets/machinery-chipper.webp",
  },
];

const contactPoints = [
  {
    icon: PhoneIcon,
    label: "Call Us Today",
    value: siteConfig.phone.display,
    href: siteConfig.phone.href,
  },
  { icon: ClockIcon, label: siteConfig.hours.days, value: siteConfig.hours.time },
  { icon: StarIcon, label: "Free Estimates", value: "No Obligation" },
];

function StarRow({ className = "size-5" }: { className?: string }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} className={className} />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section className="reviews section">
      <Image
        src="/assets/reviews-backdrop.webp"
        alt=""
        fill
        sizes="100vw"
        className="reviews__backdrop"
      />
      <div className="reviews__scrim" aria-hidden="true" />

      <Container>
        {/* ---------- Heading ---------- */}
        <div className="flex flex-col items-center text-center">
          <Reveal delay={80}>
            <p className="eyebrow eyebrow--centered text-gold">Real People. Real Results.</p>
          </Reveal>

          <TextReveal
            as="h2"
            delay={180}
            className="heading-display mt-5 text-h2 text-white"
            segments={[
              { text: "Homeowners trust" },
              { text: "Bossdawg.", className: "text-brand", newLine: true },
            ]}
          />

          {/* ---------- Rating badge ---------- */}
          <Reveal delay={560}>
            <div className="rating-badge mt-8">
              <div className="flex items-center gap-3">
                <GoogleGIcon className="size-8" />
                <span className="font-display text-3xl font-extrabold text-white">
                  {siteConfig.rating.score}
                </span>
                <StarRow className="size-6" />
              </div>

              <span className="rating-badge__divider" aria-hidden="true" />

              <p className="text-base text-on-dark-muted">
                from {siteConfig.rating.count} reviews
              </p>

              <span className="rating-badge__divider" aria-hidden="true" />

              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded bg-white text-ink">
                  <BbbTorchIcon className="size-7" />
                </span>
                <p className="text-left font-display text-base leading-tight font-bold text-white">
                  BBB
                  <span className="block text-sm font-medium text-on-dark-muted">
                    Accredited Business
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- Review carousel ---------- */}
        <Reveal delay={220} className="mt-10 md:mt-12">
          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              className="reviews__nav hidden shrink-0 sm:flex"
              aria-label="Previous reviews"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronDownIcon className="size-5 rotate-90" />
            </button>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={20}
              slidesPerView={1}
              speed={700}
              grabCursor
              /* Drives the .swiper-slide-visible class the slide effect keys off */
              watchSlidesProgress
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              rewind
              autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              keyboard={{ enabled: true }}
              pagination={{ clickable: true }}
              a11y={{ containerMessage: "Customer reviews" }}
              className="!pb-11"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review.name}>
                  <figure className="review-card">
                    <StarRow />

                    <blockquote className="mt-4 flex-1 text-base leading-relaxed text-on-dark md:text-[1.0625rem]">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>

                    <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                      {/* Job-site photographs, not portraits — see the note above */}
                      <span className="review-card__avatar">
                        <Image
                          src={review.avatar}
                          alt=""
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </span>
                      <span>
                        <span className="block font-display text-base font-bold text-white">
                          {review.name}
                        </span>
                        <span className="block text-sm text-on-dark-muted">{review.location}</span>
                      </span>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              className="reviews__nav hidden shrink-0 sm:flex"
              aria-label="Next reviews"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronDownIcon className="size-5 -rotate-90" />
            </button>
          </div>
        </Reveal>

        {/* ---------- Contact strip ---------- */}
        <Reveal delay={200}>
          <ul className="reviews__contact mt-10 grid gap-6 pt-8 sm:grid-cols-3">
            {contactPoints.map((point) => {
              const PointIcon = point.icon;

              const content = (
                <>
                  <span className="icon-chip size-11">
                    <PointIcon className="size-5" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm text-on-dark-muted">{point.label}</span>
                    <span className="block font-display text-base font-bold text-white">
                      {point.value}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={point.value} className="flex items-center justify-center gap-3">
                  {point.href ? (
                    <a
                      href={point.href}
                      className="flex items-center gap-3 transition-opacity hover:opacity-80"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>

    </section>
  );
}
