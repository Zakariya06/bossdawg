/**
 * PROPERTY TYPES BAR
 * Purpose: Sits directly under the hero's torn edge. Names the property types
 * served, then the base location and service area.
 */

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site-config";
import {
  AcreageIcon,
  CottageIcon,
  HomeIcon,
  MapPinIcon,
  ShorelineIcon,
} from "@/components/ui/Icons";

const propertyTypes = [
  { label: "Homes", icon: HomeIcon },
  { label: "Cottages", icon: CottageIcon },
  { label: "Shoreline Properties", icon: ShorelineIcon },
  { label: "Acreages & Land Clearing", icon: AcreageIcon },
];

export function PropertyTypesBar() {
  return (
    <section className="bg-white pt-1 pb-7 md:pt-2 md:pb-8" aria-label="Properties we serve">
      <Container>
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
          {/* ---------- Property types ---------- */}
          <ul className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4 xl:flex xl:flex-1 xl:justify-between xl:gap-8">
            {propertyTypes.map((type, index) => {
              const TypeIcon = type.icon;

              return (
                <li key={type.label}>
                  <Reveal delay={index * 90} className="flex items-center justify-center gap-3">
                    <TypeIcon className="size-10 shrink-0 text-brand md:size-11" />
                    <span className="font-display text-sm font-bold tracking-wide text-ink uppercase md:text-[15px]">
                      {type.label}
                    </span>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          {/* ---------- Location ---------- */}
          <Reveal
            delay={400}
            className="flex items-center justify-center gap-3 border-line xl:border-l xl:pl-10"
          >
            <MapPinIcon className="size-10 shrink-0 text-brand md:size-11" />
            <div>
              <p className="font-display text-[15px] font-bold tracking-wide text-ink uppercase">
                {siteConfig.location.city}
              </p>
              <p className="mt-1 max-w-sm text-xs tracking-wide text-body-muted uppercase">
                {siteConfig.location.serviceArea}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
