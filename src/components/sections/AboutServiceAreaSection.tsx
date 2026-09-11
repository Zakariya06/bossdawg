/**
 * ABOUT SERVICE AREA SECTION
 * Purpose: Names the region the crew covers, the towns inside it, and closes
 * the about page with the two calls to action.
 *
 * Two parts, as in the design plate: a map area — copy over the map artwork,
 * with the town labels — and a plain bar below it for the calls to action and
 * the sign-off. The map never runs under the bar.
 *
 * The artwork and its labels share one box (`.about-service-area__plate`) at
 * the artwork's own proportions, so a label always lands on its pin. Pin
 * coordinates were measured from the artwork; the promise icons, the pin in
 * the bar and the compass are extracted from the design plate.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ArrowRightIcon } from "@/components/ui/Icons";

/** `lines` break where the design breaks them. Icon sizes are natural sizes. */
const areaPromises = [
  {
    lines: ["Local people", "Local service"],
    icon: { src: "/assets/about-icon-local-people.webp", width: 56, height: 50 },
  },
  {
    lines: ["Safe properties", "Stronger communities"],
    icon: { src: "/assets/about-icon-safe-properties.webp", width: 46, height: 58 },
  },
  {
    lines: ["Experienced crew", "Trusted results"],
    icon: { src: "/assets/about-icon-experienced-crew.webp", width: 55, height: 68 },
  },
  {
    lines: ["Here when", "you need us"],
    icon: { src: "/assets/about-icon-here-when-needed.webp", width: 72, height: 50 },
  },
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
const LABEL_GAP = 1.9;

export function AboutServiceAreaSection() {
  return (
    <section className="about-service-area">
      {/* ---------- Map area ---------- */}
      <div className="about-service-area__map-area">
        <Container className="relative z-10">
          <div>
            <Reveal delay={80}>
              <p className="eyebrow eyebrow--trailing eyebrow--lg text-brand">Our Service Area</p>
            </Reveal>

            <TextReveal
              as="h2"
              delay={180}
              className="heading-display mt-4 text-display text-white xl:w-max"
              segments={[
                { text: "Proudly Serving" },
                { text: "Southeast Ontario", className: "text-brand", newLine: true },
              ]}
            />

            <Reveal delay={560}>
              <p className="about-service-area__lede mt-6 text-lead-2xl text-on-dark">
                We&apos;re a local, community-focused business, serving homeowners, businesses, and
                municipalities across Southeast Ontario. When you need reliable tree care,
                we&apos;re just around the corner.
              </p>
            </Reveal>

            <ul className="mt-10 grid max-w-2xl gap-x-6 gap-y-7 sm:grid-cols-2">
              {areaPromises.map((promise, index) => (
                <li
                  key={promise.lines.join(" ")}
                  className={index % 2 === 1 ? "sm:border-l sm:border-white/25 sm:pl-6" : undefined}
                >
                  <Reveal delay={700 + index * 90} className="flex items-center gap-4">
                    <span className="flex w-18 shrink-0 justify-center">
                      <Image
                        src={promise.icon.src}
                        alt=""
                        width={promise.icon.width}
                        height={promise.icon.height}
                        unoptimized
                      />
                    </span>
                    <p className="text-lg leading-snug text-white xl:text-xl">
                      {promise.lines[0]}
                      <br />
                      {promise.lines[1]}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        {/* ---------- Map artwork and labels ---------- */}
        <div className="about-service-area__plate">
          <Image
            src="/assets/about-service-area-map.webp"
            alt="Night map of the Southeast Ontario service area, pinned at Stone Mills, Tamworth, Kingston, Napanee, Odessa, Amherstview, Belleville, Deseronto, Gananoque and Picton, with Prince Edward County and Lake Ontario to the south"
            fill
            sizes="100vw"
          />

          <div className="about-service-area__labels" aria-hidden="true">
            {mapPins.map((pin) => (
              <span
                key={pin.town}
                className="map-label"
                style={{ left: `${pin.x + LABEL_GAP}%`, top: `${pin.y}%` }}
              >
                {pin.town}
              </span>
            ))}

            <span className="map-region map-region--county">
              Prince Edward
              <br />
              County
            </span>
            <span className="map-region map-region--water map-region--lake">
              Lake Ontario
            </span>

            <Image
              src="/assets/about-map-compass.webp"
              alt=""
              width={36}
              height={67}
              unoptimized
              className="map-compass"
              style={{ left: "94.3%", top: "88.2%" }}
            />
          </div>
        </div>
      </div>

      {/* ---------- Plain bar: calls to action and sign-off ---------- */}
      <div className="about-service-area__bar">
        <Container>
          <Reveal delay={150} className="about-service-area__bar-row">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Button href="/contact" variant="primary" className="button--lg group">
                Get a free estimate
                <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button href="/contact" variant="outline" className="button--lg">
                Contact us
              </Button>
            </div>

            <span className="about-service-area__divider" aria-hidden="true" />

            <div className="flex items-center gap-4">
              <Image
                src="/assets/about-icon-serving-pin.webp"
                alt=""
                width={42}
                height={58}
                unoptimized
              />
              <div>
                <p className="font-display text-lg font-bold text-white">Serving Southeast Ontario</p>
                <p className="mt-1 flex items-center gap-4 text-lg text-on-dark">
                  Today and Tomorrow
                  <span className="brand-rule" aria-hidden="true" />
                </p>
              </div>
            </div>

            <span className="about-service-area__divider" aria-hidden="true" />

            <p className="signature text-on-dark-muted">
              Your property.
              <span className="signature__line">Our priority.</span>
            </p>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
