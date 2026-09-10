/**
 * ABOUT SERVICE AREA SECTION
 * Purpose: Names the region the crew covers, the towns inside it, and closes
 * the about page with the two calls to action.
 *
 * The map artwork is the section's full-bleed background. Because a full-bleed
 * image is cropped by `object-fit: cover`, the town labels cannot simply be
 * placed as percentages of the section — they would slide off their pins as the
 * crop changes. They ride on `.about-service-area__plate` instead, a box that
 * reproduces the same cover geometry, so a percentage inside it always lands
 * where the pin is actually painted.
 *
 * Pin coordinates were measured from the artwork itself, not estimated by eye.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import {
  ArrowRightIcon,
  CrewIcon,
  HandshakeIcon,
  MapPinIcon,
  NorthArrowIcon,
  ShieldCheckIcon,
  TreeIcon,
} from "@/components/ui/Icons";

const areaPromises = [
  { title: "Local people", description: "Local service", icon: CrewIcon },
  { title: "Safe properties", description: "Stronger communities", icon: ShieldCheckIcon },
  { title: "Experienced crew", description: "Trusted results", icon: TreeIcon },
  { title: "Here when you need us", description: null, icon: HandshakeIcon },
];

/**
 * Town pins, as percentages of the artwork. Taken from the centroids of the
 * orange pins in the image, so a label cannot drift off its pin.
 */
const mapPins = [
  { town: "Stone Mills", x: 68.4, y: 22.2 },
  { town: "Tamworth", x: 84.7, y: 23.9 },
  { town: "Kingston", x: 87.2, y: 38.0 },
  { town: "Napanee", x: 68.3, y: 39.0 },
  { town: "Odessa", x: 54.8, y: 48.5 },
  { town: "Amherstview", x: 66.1, y: 51.6 },
  { town: "Belleville", x: 45.9, y: 55.9 },
  { town: "Deseronto", x: 58.7, y: 58.6 },
  { town: "Gananoque", x: 88.8, y: 59.1 },
  { town: "Picton", x: 62.4, y: 75.0 },
];

/** Gap between a pin's centre and its label, as a percentage of the artwork. */
const LABEL_GAP = 1.5;
/**
 * Past this point a right-hand label runs off the artwork, so it is anchored on
 * the other side of its pin instead. Only Gananoque, the easternmost pin,
 * crosses it.
 */
const RIGHT_EDGE = 88;

export function AboutServiceAreaSection() {
  return (
    <section className="about-service-area section">
      {/* ---------- Full-bleed map artwork ---------- */}
      <Image
        src="/assets/about-service-area-map.webp"
        alt="Night map of the Southeast Ontario service area, pinned at Stone Mills, Tamworth, Kingston, Napanee, Odessa, Amherstview, Belleville, Deseronto, Gananoque and Picton, with Prince Edward County and Lake Ontario to the south"
        fill
        sizes="100vw"
        className="section-backdrop section-backdrop--center"
      />
      <div className="media-scrim media-scrim--deep media-scrim--edges" aria-hidden="true" />

      {/* Town names, riding on the artwork's cover geometry. Shown only where
          the section is wide enough to keep them clear of the copy; the image
          alt carries the same list everywhere else. */}
      <div className="about-service-area__pins" aria-hidden="true">
        <div className="about-service-area__plate">
          {mapPins.map((pin) => {
            const anchorRight = pin.x > RIGHT_EDGE;

            return (
              <span
                key={pin.town}
                className="map-label"
                style={
                  anchorRight
                    ? { right: `${100 - pin.x + LABEL_GAP}%`, top: `${pin.y}%` }
                    : { left: `${pin.x + LABEL_GAP}%`, top: `${pin.y}%` }
                }
              >
                {pin.town}
              </span>
            );
          })}

          <span className="map-region" style={{ left: "50.5%", top: "68%" }}>
            Prince Edward
            <br />
            County
          </span>
          <span className="map-region map-region--water" style={{ left: "42%", top: "89%" }}>
            Lake Ontario
          </span>

          <span className="map-compass" style={{ right: "3%", top: "86%" }}>
            N
            <NorthArrowIcon className="size-5" />
          </span>
        </div>
      </div>

      <Container className="relative z-10">
        {/* Two columns at lg, but only the first is filled: the second leaves
            the map side of the artwork clear. */}
        <div className="grid lg:grid-cols-12 lg:gap-14">
          {/* ---------- Heading, copy and promises ---------- */}
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <p className="eyebrow eyebrow--trailing text-brand">Our Service Area</p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-4 text-h2 text-white"
              segments={[
                { text: "Proudly Serving" },
                { text: "Southeast Ontario", className: "text-brand", newLine: true },
              ]}
            />

            <Reveal delay={560}>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-on-dark md:text-lg">
                We&apos;re a local, community-focused business, serving homeowners, businesses, and
                municipalities across Southeast Ontario. When you need reliable tree care,
                we&apos;re just around the corner.
              </p>
            </Reveal>

            <ul className="mt-9 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {areaPromises.map((promise, index) => {
                const PromiseIcon = promise.icon;

                return (
                  <li
                    key={promise.title}
                    className={
                      index % 2 === 1 ? "sm:border-l sm:border-white/15 sm:pl-8" : undefined
                    }
                  >
                    <Reveal delay={700 + index * 90} className="flex items-start gap-3.5">
                      <PromiseIcon className="size-9 shrink-0 text-brand" />
                      <div>
                        <p className="font-display text-sm leading-snug font-bold text-white md:text-base">
                          {promise.title}
                        </p>
                        {promise.description && (
                          <p className="mt-0.5 text-sm leading-snug text-on-dark-muted">
                            {promise.description}
                          </p>
                        )}
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ---------- Calls to action and closing line ---------- */}
        <Reveal delay={200} className="about-service-area__bar">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button href="/contact" variant="primary" className="group">
              Get a free estimate
              <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button href="/contact" variant="outline">
              Contact us
            </Button>
          </div>

          <div className="flex items-center gap-3.5 border-white/15 sm:border-l sm:pl-8">
            <MapPinIcon className="size-9 shrink-0 text-brand" />
            <div>
              <p className="font-display text-base font-bold text-white">
                Serving Southeast Ontario
              </p>
              <p className="mt-0.5 text-sm text-on-dark-muted">Today and Tomorrow</p>
            </div>
            <span className="brand-rule" aria-hidden="true" />
          </div>

          <p className="font-script text-lg leading-tight text-on-dark-muted sm:ml-auto">
            Your property.
            <br />
            Our priority.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
