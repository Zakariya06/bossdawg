/**
 * LOGO
 *
 * The Bossdawg badge, linking home. Shared by the site header and footer, so
 * this is the only place the mark is defined (AGENTS.md §11).
 *
 * The artwork is a transparent circular badge, so it sits directly on the dark
 * header and footer without a plate behind it.
 */

import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} — home`}
      className={`group inline-flex shrink-0 items-center ${className}`.trim()}
    >
      <Image
        src="/assets/logo-bossdawg.webp"
        alt={siteConfig.name}
        width={420}
        height={420}
        priority
        className="
          size-[62px] transition-transform duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105
          md:size-[78px]
        "
      />
    </Link>
  );
}
