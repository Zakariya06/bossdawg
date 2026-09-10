"use client";

/**
 * SITE FOOTER
 *
 * The site's one footer, rendered from `src/app/layout.tsx` so every route
 * gets it (AGENTS.md §11). Do not build a second footer on any page.
 *
 * Navigation comes from the same `navigation` array as the header, so a menu
 * change lands in both places.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation, siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import {
  FacebookIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/ui/Icons";

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
];

export function SiteFooter() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="flex flex-col gap-8 py-9 xl:flex-row xl:items-center xl:justify-between xl:gap-10">
          <div className="flex flex-wrap items-center gap-x-9 gap-y-6">
            <Logo />

            <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {navigation.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="site-footer__link"
                    data-active={isActive}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-wrap items-center gap-x-9 gap-y-5">
            <p className="flex items-center gap-2.5 text-sm text-on-dark-muted">
              <MapPinIcon className="size-6 shrink-0 text-brand" />
              {siteConfig.address.full}
            </p>

            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
            >
              <PhoneIcon className="size-6 shrink-0 text-brand" />
              <span className="leading-tight">
                <span className="block font-display text-base font-bold text-white">
                  {siteConfig.phone.display}
                </span>
                <span className="block text-xs text-on-dark-muted">
                  {siteConfig.hours.time}, {siteConfig.hours.days.replace(",", "")}
                </span>
              </span>
            </a>

            <ul className="flex items-center gap-1">
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${siteConfig.name} on ${social.label}`}
                      className="site-footer__social"
                    >
                      <SocialIcon className="size-6" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="site-footer__bottom flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-on-dark-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-3 font-display text-xs font-semibold tracking-[0.18em] text-on-dark-muted uppercase">
            {siteConfig.tagline}
            <span className="h-0.5 w-9 bg-brand" aria-hidden="true" />
          </p>
        </div>
      </Container>
    </footer>
  );
}
