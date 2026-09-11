/**
 * HERO SECTION
 * Purpose: Primary page introduction and conversion. Full-bleed photograph,
 * headline, dual call-to-action and the trust stats row.
 *
 * Sized to exactly one viewport (see `.hero` in globals.css §07).
 *
 * The background photograph and the torn white edge are separate layers: the
 * plain photo fills the section, and the cut-out torn edge is pinned to the
 * bottom, bridging into the white property-types bar below.
 */

import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SameDayVisitModal } from "@/components/sections/SameDayVisitModal";
import { Reveal } from "@/components/motion/Reveal";
import { BrandLockup } from "@/components/ui/BrandLockup";
import { TextReveal } from "@/components/motion/TextReveal";
import { siteConfig } from "@/lib/site-config";
import { ClockIcon, PhoneIcon, StarIcon } from "@/components/ui/Icons";

/** Hero support photographs — the two angled cards from the reference. */
const heroPhotos = [
  {
    tag: ["Large & Complex", "Removals"],
    src: "/assets/card-large-complex-removals.webp",
    alt: "Arborist in a boom lift bucket cutting the top section from a tall bare tree beside a house",
    rotation: "-rotate-[2.5deg]",
    /* Portrait source; centre crop keeps the lift and the tree in frame. */
    objectPosition: "center",
  },
  {
    tag: ["Experienced", "Tree Climbers"],
    src: "/assets/card-experienced-tree-climbers.webp",
    alt: "Roped climber in orange safety gear at the top of a spar, holding a chainsaw",
    rotation: "rotate-[4deg]",
    /* Landscape source cropped to portrait; bias right so the climber stays centred. */
    objectPosition: "62% center",
  },
];

const heroStats = [
  {
    icon: PhoneIcon,
    label: "Call Us Today",
    value: siteConfig.phone.display,
    href: siteConfig.phone.href,
  },
  {
    icon: ClockIcon,
    label: siteConfig.hours.days,
    value: siteConfig.hours.time,
  },
  {
    icon: StarIcon,
    label: null,
    value: `${siteConfig.rating.score} Google rating`,
    sublabel: `from ${siteConfig.rating.count} reviews`,
  },
];

export function HeroSection() {
  return (
    <section className="hero">
      {/* Background photograph + darkening gradient */}
      <Image
        src="/assets/hero-background.webp"
        alt="Bossdawg Tree Removals crew using a tracked spider lift to remove a large tree from a residential front lawn at sunset"
        fill
        priority
        sizes="100vw"
        className="hero__image object-cover object-center"
      />
      <div className="media-scrim media-scrim--under-header" aria-hidden="true" />

      <Container className="hero__content relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* ---------- Headline and calls to action ---------- */}
          <div className="lg:col-span-7 xl:col-span-6">
            <Reveal delay={100}>
              <p className="eyebrow text-white">Trees • Stumps • Land Clearing</p>
            </Reveal>

            <TextReveal
              as="h1"
              playOnMount
              delay={250}
              className="hero__headline heading-display max-w-[15ch] text-h1 text-white"
              segments={[
                { text: "Tree Removal and" },
                { text: "Land Clearing in", newLine: true },
                {
                  text: "Eastern Ontario",
                  className: "heading-accent",
                  newLine: true,
                  asBlock: true,
                },
              ]}
            />

            <Reveal delay={700}>
              <p className="hero__lede max-w-xl text-lead text-on-dark">{siteConfig.description}</p>
            </Reveal>

            <Reveal delay={850}>
              <div className="hero__actions flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <SameDayVisitModal />
                <Button href="/services" variant="outline">
                  View Our Services
                </Button>
              </div>
            </Reveal>

            {/* ---------- Trust stats ---------- */}
            <Reveal delay={1000}>
              <dl className="hero__stats flex flex-wrap items-center gap-x-7 gap-y-3">
                {heroStats.map((stat, index) => {
                  const StatIcon = stat.icon;

                  const content = (
                    <>
                      <span className="icon-chip size-10 sm:size-11">
                        <StatIcon className="size-5" />
                      </span>
                      <span className="leading-tight">
                        {stat.label && (
                          <dt className="text-sm text-on-dark-muted">{stat.label}</dt>
                        )}
                        <dd className="font-display text-base font-bold text-white">
                          {stat.value}
                        </dd>
                        {stat.sublabel && (
                          <dd className="text-sm text-on-dark-muted">{stat.sublabel}</dd>
                        )}
                      </span>
                    </>
                  );

                  return (
                    <div
                      key={stat.value}
                      className={`flex items-center gap-3 ${
                        index > 0 ? "sm:border-l sm:border-white/25 sm:pl-7" : ""
                      }`}
                    >
                      {stat.href ? (
                        <a
                          href={stat.href}
                          className="flex items-center gap-3 transition-opacity hover:opacity-80"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </div>
                  );
                })}
              </dl>
            </Reveal>
          </div>

          {/* ---------- Inset photographs and brand lockup ---------- */}
          <div className="hidden lg:col-span-5 lg:block xl:col-span-6">
            <div className="ml-auto flex max-w-md flex-col items-end gap-3">
              {heroPhotos.map((photo, index) => (
                <Reveal
                  key={photo.tag.join(" ")}
                  delay={600 + index * 180}
                  className="hero__photo"
                >
                  <figure className={`relative ${photo.rotation}`}>
                    <div className="photo-card aspect-[10/11]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="268px"
                        style={{ objectPosition: photo.objectPosition }}
                        className="object-cover"
                      />
                    </div>
                    {/* Amber marker label clipped to the card's lower-right,
                        overhanging the frame as in the design */}
                    <figcaption className="photo-tag absolute right-1 bottom-[8%] -rotate-[4deg]">
                      {photo.tag[0]}
                      <br />
                      {photo.tag[1]}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}

              {/* Brand lockup — brush script on an angled dark plate */}
              <Reveal delay={1100} variant="fade">
<BrandLockup className="-rotate-[6deg]" />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>

      {/* Torn paper edge bridging the photograph into the white section below */}
      <div className="torn-edge" aria-hidden="true" />
    </section>
  );
}
