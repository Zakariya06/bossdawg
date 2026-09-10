"use client";

/**
 * SITE HEADER
 *
 * The site's one navigation bar, rendered from `src/app/layout.tsx` so every
 * route gets it (AGENTS.md §11). Do not build a second header on any page.
 *
 * Behaviour:
 *   - Transparent over the hero, solid + blurred once scrolled past 40px.
 *   - Desktop: Services opens on hover and on click; Escape closes it.
 *   - Mobile: full-screen panel with an expandable Services group.
 *   - Active route is underlined, including a child route under Services.
 *   - Background scroll is locked while the mobile panel is open.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { navigation, siteConfig } from "@/lib/site-config";
import { Logo } from "@/components/ui/Logo";
import {
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
} from "@/components/ui/Icons";

export function SiteHeader() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  const desktopNavRef = useRef<HTMLElement>(null);

  /** True for the exact route, or for any child route of a parent item. */
  const isActiveRoute = useCallback(
    (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href)),
    [pathname]
  );

  /* --- Solid header once the user scrolls --- */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    handleScroll(); // Sync on mount, e.g. after a refresh mid-page
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* --- Close everything on navigation ---
     Adjusted during render rather than in an effect, so the menus never paint
     open for a frame on the new route. See react.dev "You Might Not Need an
     Effect" — adjusting state when a value changes. */
  const [lastPathname, setLastPathname] = useState(pathname);

  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileGroup(null);
  }

  /* --- Lock background scroll while the mobile panel is open --- */
  useEffect(() => {
    document.body.dataset.scrollLocked = String(isMobileMenuOpen);
    return () => {
      delete document.body.dataset.scrollLocked;
    };
  }, [isMobileMenuOpen]);

  /* --- Escape closes the panel and any dropdown --- */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* --- Clicking outside the desktop nav closes the dropdown --- */
  useEffect(() => {
    if (!openDropdown) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [openDropdown]);

  return (
    <header
      className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}
      data-scrolled={isScrolled}
    >
      <div className="container-site">
        <div
          className={`flex items-center justify-between gap-6 transition-all duration-200 ${
            isScrolled ? "py-2" : "py-3 md:py-4"
          }`}
        >
          <Logo />

          {/* ---------- Desktop navigation ---------- */}
          <nav
            ref={desktopNavRef}
            aria-label="Main"
            className="hidden items-center gap-8 xl:flex"
          >
            {navigation.map((item) => {
              const isActive = isActiveRoute(item.href);

              if (!item.children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="site-header__link"
                    data-active={isActive}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = openDropdown === item.label;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="site-header__link flex items-center gap-1.5"
                    data-active={isActive}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDownIcon
                      className={`size-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute top-full left-1/2 w-60 -translate-x-1/2 pt-4 transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="rounded-xl border border-line bg-white p-2 shadow-[0_20px_45px_rgba(0,0,0,0.22)]">
                      <Link
                        href={item.href}
                        className="site-header__dropdown-link"
                        data-active={pathname === item.href}
                      >
                        All Services
                      </Link>
                      <span className="my-1 block h-px bg-line" />
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="site-header__dropdown-link"
                          data-active={pathname === child.href}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* ---------- Phone call-to-action + mobile trigger ---------- */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phone.href}
              className="
                hidden items-center gap-2.5 rounded-pill border-2 border-brand bg-ink/80
                py-1.5 pr-5 pl-1.5 font-display text-lg font-extrabold text-white backdrop-blur-sm
                transition-colors duration-200 hover:bg-brand md:inline-flex
              "
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-brand text-white">
                <PhoneIcon className="size-6" />
              </span>
              {siteConfig.phone.display}
            </a>

            {/* Compact call button for small screens */}
            <a
              href={siteConfig.phone.href}
              aria-label={`Call ${siteConfig.phone.display}`}
              className="flex size-10 items-center justify-center rounded-full bg-brand text-white transition-colors duration-200 hover:bg-brand-dark md:hidden"
            >
              <PhoneIcon className="size-6" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex size-11 items-center justify-center rounded-full border-2 border-white/30 text-white transition-colors duration-200 hover:border-white xl:hidden"
            >
              {isMobileMenuOpen ? (
                <CloseIcon className="size-6" />
              ) : (
                <MenuIcon className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Mobile navigation panel ---------- */}
      <div
        id="mobile-navigation"
        className={`
          fixed inset-x-0 top-0 -z-10 max-h-dvh overflow-y-auto bg-ink px-5 pb-10
          transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden
          ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
        aria-hidden={!isMobileMenuOpen}
        // Padding clears the fixed bar above it
        style={{ paddingTop: "6.5rem" }}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {navigation.map((item) => {
            const isActive = isActiveRoute(item.href);

            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  tabIndex={isMobileMenuOpen ? undefined : -1}
                  className={`border-b border-white/10 py-4 font-display text-lg font-semibold transition-colors ${
                    isActive ? "text-brand" : "text-white hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            const isGroupOpen = openMobileGroup === item.label;

            return (
              <div key={item.href} className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    tabIndex={isMobileMenuOpen ? undefined : -1}
                    className={`flex-1 py-4 font-display text-lg font-semibold transition-colors ${
                      isActive ? "text-brand" : "text-white hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <button
                    type="button"
                    tabIndex={isMobileMenuOpen ? undefined : -1}
                    onClick={() => setOpenMobileGroup(isGroupOpen ? null : item.label)}
                    aria-label={`${isGroupOpen ? "Collapse" : "Expand"} ${item.label}`}
                    aria-expanded={isGroupOpen}
                    className="flex size-11 items-center justify-center text-white"
                  >
                    <ChevronDownIcon
                      className={`size-5 transition-transform duration-200 ${
                        isGroupOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isGroupOpen ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        tabIndex={isMobileMenuOpen && isGroupOpen ? undefined : -1}
                        className={`block py-2.5 pl-4 font-body text-base transition-colors ${
                          pathname === child.href
                            ? "text-brand"
                            : "text-on-dark-muted hover:text-white"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <a
          href={siteConfig.phone.href}
          tabIndex={isMobileMenuOpen ? undefined : -1}
          className="button button--primary mt-8 w-full"
        >
          <PhoneIcon className="size-5" />
          {siteConfig.phone.display}
        </a>
      </div>

      {/* Dimmed backdrop behind the mobile panel */}
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 -z-20 bg-black/60 transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
    </header>
  );
}
