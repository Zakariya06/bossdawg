"use client";

/**
 * REVIEWS SECTION
 * Purpose: Social proof — the rating badge, customer reviews in a carousel,
 * and the contact strip.
 *
 * Carousel is Swiper (swiper/react) with Autoplay, Keyboard and A11y. Slides
 * step 1 -> 2 -> 3 -> 4 across the breakpoints; the arrows and dots are custom
 * controls driven through the Swiper instance.
 *
 * The design shows four cards at once with four dots and working arrows, but
 * there are only four real reviews. Swiper's loop mode needs at least twice the
 * slides in view, so the same four reviews are rendered twice and the dots
 * track `realIndex % reviews.length`. Nothing is added — never write filler
 * testimonials to fill the carousel.
 */

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper/types";

import "swiper/css";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { siteConfig } from "@/lib/site-config";
import {
  BbbTorchIcon,
  ChevronDownIcon,
  ClockIcon,
  DocumentIcon,
  GoogleGIcon,
  PhoneIcon,
  StarIcon,
} from "@/components/ui/Icons";

/**
 * Customer reviews as supplied in the design reference.
 *
 * Only add entries here that are real, attributable reviews.
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

/** The same reviews twice, so loop mode has enough slides at four per view. */
const loopSlides = [...reviews, ...reviews];

const contactPoints = [
  {
    icon: PhoneIcon,
    label: "Call Us Today",
    value: siteConfig.phone.display,
    href: siteConfig.phone.href,
  },
  // The shared hours string ends in a comma for inline use; this strip sets it on its own line
  { icon: ClockIcon, label: siteConfig.hours.days.replace(/,$/, ""), value: siteConfig.hours.time },
  { icon: DocumentIcon, label: "Free Estimates", value: "No Obligation" },
];

function StarRow({ className = "" }: { className?: string }) {
  return (
    <div className={`star-row ${className}`.trim()} aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="reviews">
      <Image
        src="/assets/reviews-backdrop.webp"
        alt=""
        fill
        sizes="100vw"
        className="reviews__backdrop"
      />
      <div className="reviews__scrim" aria-hidden="true" />

      <Container className="relative pt-16 pb-12 md:pt-20 lg:pt-[5.5rem] lg:pb-9">
        {/* ---------- Heading ---------- */}
        <div className="flex flex-col items-center text-center">
          <Reveal delay={80}>
            <p className="eyebrow eyebrow--centered reviews__eyebrow text-white">
              Real People. Real Results.
            </p>
          </Reveal>

          <TextReveal
            as="h2"
            delay={180}
            className="text-reveal--tight heading-display mt-4 text-display-2xl text-white"
            segments={[
              { text: "Homeowners trust" },
              { text: "Bossdawg.", className: "text-brand", newLine: true },
            ]}
          />

          {/* ---------- Rating badge ---------- */}
          <Reveal delay={560}>
            <div className="rating-badge mt-8 md:mt-10">
              <div className="rating-badge__group">
                <GoogleGIcon className="rating-badge__google" />
                <span className="rating-badge__score">
                  {siteConfig.rating.score}
                  <span className="sr-only"> out of 5 on Google</span>
                </span>
                <StarRow className="rating-badge__stars" />
              </div>

              <span className="rating-badge__divider" aria-hidden="true" />

              <p className="rating-badge__count">from {siteConfig.rating.count} reviews</p>

              <span className="rating-badge__divider" aria-hidden="true" />

              <div className="rating-badge__bbb">
                <span className="rating-badge__bbb-logo" aria-hidden="true">
                  <BbbTorchIcon />
                  BBB
                </span>
                <p className="rating-badge__bbb-text">
                  <span className="sr-only">BBB </span>
                  Accredited
                  <br />
                  Business
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ---------- Review carousel ---------- */}
        {/* Breaks slightly out of the container at xl, as the plate's row runs wider */}
        <Reveal delay={220} className="mt-7 xl:-mx-7">
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              className="reviews__nav hidden shrink-0 sm:flex"
              aria-label="Previous review"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronDownIcon className="size-6 rotate-90" />
            </button>

            <Swiper
              modules={[Autoplay, Keyboard, A11y]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onRealIndexChange={(swiper) => setActiveIndex(swiper.realIndex % reviews.length)}
              spaceBetween={20}
              slidesPerView={1}
              speed={700}
              grabCursor
              loop
              /* Drives the .swiper-slide-visible class the slide effect keys off */
              watchSlidesProgress
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              keyboard={{ enabled: true }}
              a11y={{ containerMessage: "Customer reviews", slideLabelMessage: "Customer review" }}
              className="min-w-0 flex-1"
            >
              {loopSlides.map((review, index) => (
                <SwiperSlide key={`${review.name}-${index}`}>
                  <figure className="review-card">
                    <StarRow className="review-card__stars" />

                    <blockquote className="review-card__quote">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>

                    <figcaption className="review-card__author">
                      {/* Job-site photographs, not portraits — see the note above */}
                      <span className="review-card__avatar">
                        <Image
                          src={review.avatar}
                          alt=""
                          fill
                          sizes="88px"
                          className="object-cover"
                        />
                      </span>
                      <span>
                        <span className="review-card__name">{review.name}</span>
                        <span className="review-card__location">{review.location}</span>
                      </span>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              className="reviews__nav hidden shrink-0 sm:flex"
              aria-label="Next review"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronDownIcon className="size-6 -rotate-90" />
            </button>
          </div>

          <div className="reviews__dots" role="group" aria-label="Choose a review">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                className="reviews__dot"
                data-active={activeIndex === index}
                aria-label={`Show review ${index + 1} of ${reviews.length}`}
                aria-current={activeIndex === index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
              />
            ))}
          </div>
        </Reveal>

        {/* ---------- Contact strip ---------- */}
        <Reveal delay={200}>
          <ul className="reviews__contact mt-8 md:mt-9">
            {contactPoints.map((point) => {
              const PointIcon = point.icon;

              const content = (
                <>
                  <span className="reviews__contact-icon">
                    <PointIcon className="size-[46%]" />
                  </span>
                  <span className="text-left">
                    <span className="reviews__contact-label">{point.label}</span>
                    <span className="reviews__contact-value">{point.value}</span>
                  </span>
                </>
              );

              return (
                <li key={point.value} className="reviews__contact-item">
                  {point.href ? <a href={point.href}>{content}</a> : content}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
