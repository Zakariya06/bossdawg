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
  MapPinSolidIcon,
  PhoneSolidIcon,
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
        <div className="site-footer__main">
          {/* ---------- Badge and rule ---------- */}
          <div className="site-footer__brand">
            <Logo imageClassName="site-footer__logo" />
            <span className="site-footer__divider" aria-hidden="true" />
          </div>

          {/* ---------- Menu over contact details ---------- */}
          <div className="site-footer__content">
            <nav aria-label="Footer" className="site-footer__nav">
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

            <div className="site-footer__contact">
              <p className="site-footer__address">
                <MapPinSolidIcon className="site-footer__pin" />
                {siteConfig.address.full}
              </p>

              <a href={siteConfig.phone.href} className="site-footer__phone">
                <span className="site-footer__phone-icon">
                  <PhoneSolidIcon className="size-1/2" />
                </span>
                <span>
                  <span className="site-footer__phone-number">{siteConfig.phone.display}</span>
                  <span className="site-footer__phone-hours">
                    {siteConfig.hours.time}, {siteConfig.hours.days.replace(",", "")}
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* ---------- Social ---------- */}
          <ul className="site-footer__socials">
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
                    <SocialIcon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <p className="site-footer__tagline">
            {siteConfig.tagline}
            <span className="site-footer__tagline-bar" aria-hidden="true" />
          </p>
        </div>
      </Container>
    </footer>
  );
}
