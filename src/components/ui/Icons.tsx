/**
 * ICON SET
 *
 * Inline SVG icons, kept in one file so sizing and stroke weight stay
 * consistent. Icons inherit `currentColor` and accept a className for sizing.
 * No icon library is used — see AGENTS.md §15.
 */

type IconProps = {
  className?: string;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        {...strokeProps}
        d="M15.5 21A12.5 12.5 0 0 1 3 8.5 2.5 2.5 0 0 1 5.5 6h1.6a1 1 0 0 1 1 .76l.7 2.8a1 1 0 0 1-.28.96l-1.2 1.2a11 11 0 0 0 4 4l1.2-1.2a1 1 0 0 1 .96-.28l2.8.7a1 1 0 0 1 .76 1v1.6A2.5 2.5 0 0 1 15.5 21Z"
      />
    </svg>
  );
}

/* Solid variants, for glyphs set inside a filled disc (contact section) */
export function PhoneSolidIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1Z"
      />
    </svg>
  );
}

export function FirSolidIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1.6 7.9 7.4h2.3l-4.3 5h2.6L3.9 18h6.9v4.4h2.4V18h6.9l-4.6-5.6h2.6l-4.3-5h2.3Z"
      />
    </svg>
  );
}

export function UserSolidIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle fill="currentColor" cx="12" cy="7.2" r="4.6" />
      <path fill="currentColor" d="M3.4 21.4c0-4.6 3.9-7.9 8.6-7.9s8.6 3.3 8.6 7.9Z" />
    </svg>
  );
}

export function MapPinSolidIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Z"
      />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle {...strokeProps} cx="12" cy="12" r="8.5" />
      <path {...strokeProps} d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="m12 3.6 2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7 1-5.6-4.1-3.9 5.6-.8Z"
      />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} strokeWidth={2.2} d="m7 10 5 5 5-5" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} strokeWidth={2.6} d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} strokeWidth={2} d="M4.5 12h15m0 0-5.5-5.5M19.5 12 14 17.5" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.5a6.9 6.9 0 0 0-6.9 6.9c0 5 6.2 11.6 6.5 11.9a.6.6 0 0 0 .84 0c.27-.3 6.47-6.9 6.47-11.9A6.9 6.9 0 0 0 12 2.5Zm0 9.6a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Z"
      />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

/* --------------------------------------------------
   Property-type icons for the hero trust bar.
   Solid fills to match the reference artwork.
   -------------------------------------------------- */

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 3 2.5 10.6h2.4V21h5.3v-5.6h3.6V21h5.3V10.6h2.4Z" />
    </svg>
  );
}

export function CottageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 3 3 10.4h2v6.2h14v-6.2h2Zm-2.2 9.1h4.4v4.5H9.8Z" />
      <path
        {...strokeProps}
        strokeWidth={2}
        d="M2.5 19.4c1.6-1.3 3.2-1.3 4.8 0s3.2 1.3 4.8 0 3.2-1.3 4.8 0 3.2 1.3 4.8 0"
      />
    </svg>
  );
}

export function ShorelineIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 2.2 6.6 12h3.1l-3.9 6.4h11.2L13.1 12h3.3Z" />
      <path fill="currentColor" d="M11 17.4h2v3.4h-2z" />
    </svg>
  );
}

export function AcreageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M7.4 3 3 10.6h2.4L2.2 16h10.4L9.4 10.6h2.4Z" />
      <path fill="currentColor" d="M6.5 15.2h1.8v4.6H6.5z" />
      <path fill="currentColor" d="M16.6 6.4 12.6 13h2.2l-2.9 4.9h9.9L18.9 13h2.1Z" />
      <path fill="currentColor" d="M15.8 17.2h1.7v3.4h-1.7z" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} d="M6.5 2.9h7.2l4.3 4.3v13.9H6.5Z" />
      <path {...strokeProps} d="M13.5 3v4.4h4.4" />
      <path {...strokeProps} d="M9.3 12.4h5.6m-5.6 3.4h5.6" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.9 3.77-3.9 1.1 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33v7A9.99 9.99 0 0 0 22 12.06Z"
      />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...strokeProps} strokeWidth={2} x="3" y="3" width="18" height="18" rx="5" />
      <circle {...strokeProps} strokeWidth={2} cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle {...strokeProps} strokeWidth={1.9} cx="12" cy="8" r="4.1" />
      <path {...strokeProps} strokeWidth={1.9} d="M4.4 20.3a7.6 7.6 0 0 1 15.2 0" />
    </svg>
  );
}

/* --------------------------------------------------
   Third-party marks.

   APPROXIMATIONS, not official brand assets. Google and BBB both publish
   downloadable logo files under their own brand guidelines; replace these
   with the real files before launch. Do not restyle or recolour them.
   -------------------------------------------------- */

export function GoogleGIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.8-2.1 5.1-4.4 6.7v5.6h7.1c4.2-3.8 6.6-9.5 6.6-16.3Z"
      />
      <path
        fill="#34A853"
        d="M24 46c6 0 11-2 14.6-5.3l-7.1-5.6c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.6-3.9-12.4-9.1H4.3v5.8C7.9 41.1 15.4 46 24 46Z"
      />
      <path
        fill="#FBBC05"
        d="M11.6 28.1c-.5-1.4-.7-2.8-.7-4.1s.3-2.8.7-4.1v-5.8H4.3A21.9 21.9 0 0 0 2 24c0 3.6.9 6.9 2.3 9.9l7.3-5.8Z"
      />
      <path
        fill="#EA4335"
        d="M24 10.8c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C35 4.2 30 2 24 2 15.4 2 7.9 6.9 4.3 14.1l7.3 5.8c1.8-5.2 6.6-9.1 12.4-9.1Z"
      />
    </svg>
  );
}

export function BbbTorchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {/* Torch flame */}
      <path
        fill="currentColor"
        d="M27.6 3.4c1.4 4.3.5 7.3-1.9 10.2-2.1 2.6-4.6 4.8-5.9 8-1.6 3.9-.4 8 2.7 10.3-.6-2.6.2-4.9 2-6.8 1.5-1.6 3.3-3 4.3-5 1.7 1.9 2.3 4 2 6.3 2.6-1.9 4-4.8 3.9-8.1-.2-6.2-3.6-11.3-7.1-14.9Z"
      />
      <path
        fill="currentColor"
        d="M18.9 34.6h11.4l-1.5 4.1h-8.4zm1.9 6.1h7.6l-1.2 3.4h-5.2z"
      />
    </svg>
  );
}

/* --------------------------------------------------
   Storm response icons. Outline style, matching the
   reference artwork.
   -------------------------------------------------- */

export function AlertTriangleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} strokeWidth={1.7} d="M12 3.6 21.6 19.9H2.4Z" />
      <path {...strokeProps} strokeWidth={1.7} d="M12 10v4.2" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

export function AccessRoadIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} strokeWidth={1.7} d="M8.6 3.4 4.2 20.6M15.4 3.4l4.4 17.2" />
      <path
        {...strokeProps}
        strokeWidth={1.7}
        strokeDasharray="2.6 3"
        d="M12 3.9v16.4"
      />
    </svg>
  );
}

export function FallenTreeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} strokeWidth={1.7} d="M3.1 18.6 18.4 6.9" />
      <path
        {...strokeProps}
        strokeWidth={1.7}
        d="M9.4 13.8 7.6 9.3m4.5 1.1-1-5.1m3.9 3.8L13.6 5m3 6.4 4.4-1.4"
      />
      <path {...strokeProps} strokeWidth={1.7} d="M2.6 20.7h18.8" />
    </svg>
  );
}

export function HouseOutlineIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} strokeWidth={1.7} d="M3.4 10.4 12 3.6l8.6 6.8V20a.9.9 0 0 1-.9.9H4.3a.9.9 0 0 1-.9-.9Z" />
      <path {...strokeProps} strokeWidth={1.7} d="M9.6 20.9v-6.3h4.8v6.3" />
    </svg>
  );
}

export function WavesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        {...strokeProps}
        strokeWidth={2.6}
        d="M2 7.6c1.7-1.5 3.3-1.5 5 0s3.3 1.5 5 0 3.3-1.5 5 0 3.3 1.5 5 0M2 12.6c1.7-1.5 3.3-1.5 5 0s3.3 1.5 5 0 3.3-1.5 5 0 3.3 1.5 5 0M2 17.6c1.7-1.5 3.3-1.5 5 0s3.3 1.5 5 0 3.3-1.5 5 0 3.3 1.5 5 0"
      />
    </svg>
  );
}

export function BarnIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.4 2.6 6.9l1.4 2.5V21h16V9.4l1.4-2.5Zm0 4.4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-3.6 6h7.2v6.3H8.4Z"
      />
    </svg>
  );
}

export function TentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 2.6 2 20.4h7.1L12 14l2.9 6.4H22Z" />
      <path fill="currentColor" d="M12 17.1 10.3 20.4h3.4Z" />
    </svg>
  );
}

/**
 * Twin firs, solid silhouette — the mark on the design's primary button.
 * Rendered dark on the orange fill, not white.
 */
export function TwinFirIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {/* Rear fir, left and slightly smaller */}
      <path
        fill="currentColor"
        d="M7.4 5.6 9.2 9h-.7l2 3.8h-.8l2.2 5.6H2.9l2.2-5.6h-.8L6.3 9h-.7Z"
      />
      <path fill="currentColor" d="M6.5 18.4h1.8V21H6.5z" />
      {/* Front fir, right and taller */}
      <path
        fill="currentColor"
        d="M14.8 2.8 17 7h-.9l2.4 4.6h-1l1.8 5.6H9.3l2.8-5.6h-1L13.5 7h-.9Z"
      />
      <path fill="currentColor" d="M13.7 17.2h2.2v3.4h-2.2z" />
    </svg>
  );
}

export function TreeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 2.4 6.2 12h3.4l-4.2 6.6h13.2L14.4 12h3.4Z" />
      <path fill="currentColor" d="M11 18h2v3.6h-2z" />
    </svg>
  );
}

/* Filled shield with a knocked-out check — the trust badge on the about hero.
   The tick is stroked in the surface colour so it reads as a cut-out at any
   size, rather than needing a second, lighter icon. */
export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.1 4.4 5.2v6.1c0 4.5 3 8.6 7.6 10.6 4.6-2 7.6-6.1 7.6-10.6V5.2Z"
      />
      <path
        fill="none"
        stroke="var(--color-surface)"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.2 11.9 2.6 2.6 5-5.4"
      />
    </svg>
  );
}

/* Walking figure — "walks your property" on the about page. */
export function WalkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle fill="currentColor" cx="13.4" cy="4" r="2" />
      <path {...strokeProps} d="M13.6 7.8 11 9.8l-.8 3.4 2 1.8" />
      <path {...strokeProps} d="m11.8 10.4 3.4 1.4" />
      <path {...strokeProps} d="m12.2 15 -1.6 2.6L8.4 21" />
      <path {...strokeProps} d="m12.2 15 2.4 2.2 1 3.8" />
    </svg>
  );
}

/* Hard hat — "on site doing the work" on the about page. */
export function HardHatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} d="M3.8 16.4v-1.8a8.2 8.2 0 0 1 16.4 0v1.8" />
      <path {...strokeProps} d="M9.4 7.6V5.2c0-.7.6-1.3 1.3-1.3h2.6c.7 0 1.3.6 1.3 1.3v2.4" />
      <rect {...strokeProps} x="2.4" y="16.4" width="19.2" height="3.4" rx="1.7" />
    </svg>
  );
}

/* Roped climber working a spar — "skilled climbers" on the about page. */
export function ClimberIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {/* Trunk and the rope running down it */}
      <path {...strokeProps} d="M18.6 2.4v19.2" />
      <path {...strokeProps} d="M18.6 6.4 13 9.8" />
      <circle fill="currentColor" cx="9.6" cy="5.4" r="2" />
      <path {...strokeProps} d="M9.8 9.2 7.4 11.6l.6 3.4" />
      <path {...strokeProps} d="M8.6 10.4 13 9.8" />
      <path {...strokeProps} d="m8 15 -2.6 2.6.8 3.8" />
      <path {...strokeProps} d="m8 15 3 2 .8 4.4" />
    </svg>
  );
}

/* Ground-level stump — "dependable ground crew" on the about page. */
export function StumpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <ellipse {...strokeProps} cx="12" cy="8.4" rx="6.6" ry="3" />
      <ellipse {...strokeProps} cx="12" cy="8.4" rx="2.8" ry="1.2" />
      <path {...strokeProps} d="M5.4 8.4v4.4c0 1.7 3 3 6.6 3s6.6-1.3 6.6-3V8.4" />
      <path {...strokeProps} d="M4.6 20.6c1.8-1 2.8-2.4 3.2-4.2M19.4 20.6c-1.8-1-2.8-2.4-3.2-4.2M12 21v-5.2" />
    </svg>
  );
}

/* Three-person crew — "the same faces" on the about page. */
export function CrewIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle fill="currentColor" cx="12" cy="7.6" r="2.6" />
      <circle fill="currentColor" cx="4.8" cy="9" r="2.1" />
      <circle fill="currentColor" cx="19.2" cy="9" r="2.1" />
      <path {...strokeProps} d="M7.2 18.6a4.8 4.8 0 0 1 9.6 0" />
      <path {...strokeProps} d="M1.6 17.4a3.4 3.4 0 0 1 3.9-3.3M22.4 17.4a3.4 3.4 0 0 0-3.9-3.3" />
    </svg>
  );
}

/* Two hands meeting — "here when you need us" on the about page. */
export function HandshakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} d="M2.4 9.2 6 7.4l4.2 2.2a2 2 0 0 1 .7 2.9l-.2.2a1.9 1.9 0 0 1-2.7.2L6.2 11.6" />
      <path {...strokeProps} d="m21.6 9.2-3.6-1.8-4 2.1" />
      <path {...strokeProps} d="m11.4 12.6 2 1.7M9.8 14.6l1.9 1.6M8.2 16.6l1.7 1.5" />
      <path {...strokeProps} d="M14 9.5l4 3.6a1.9 1.9 0 0 1-2.5 2.8" />
      <path {...strokeProps} d="M2.4 9.2v5.4l2.2 1.2M21.6 9.2v5.4l-2.2 1.2" />
    </svg>
  );
}

/* Small north marker for the service-area map plate. */
export function NorthArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 4.5 17 19l-5-3.6L7 19Z" />
    </svg>
  );
}

/* Tracked excavator — the land-clearing label on the about page. */
export function ExcavatorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect {...strokeProps} x="2.2" y="16.8" width="19.6" height="4.4" rx="2.2" />
      <path {...strokeProps} d="M12.6 16.8v-4.2a1.4 1.4 0 0 1 1.4-1.4h4.6a1.4 1.4 0 0 1 1.4 1.4v4.2" />
      <path {...strokeProps} d="m13.6 11.2-3-6.4M10.6 4.8 4.4 9.4l.6 3.6" />
      <path {...strokeProps} d="M3 13h4.2l-1 3.8H2.6Z" />
    </svg>
  );
}

/* Wind gusts — the storm-cleanup label on the about page. */
export function WindIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path {...strokeProps} d="M2.6 8.4h11a2.6 2.6 0 1 0-2.6-2.6" />
      <path {...strokeProps} d="M2.6 12.4h15.2a2.6 2.6 0 1 1-2.6 2.6" />
      <path {...strokeProps} d="M2.6 16.6h7.8a2.4 2.4 0 1 1-2.4 2.4" />
    </svg>
  );
}

/* --------------------------------------------------
   Service strip icons on a 64-unit grid. The fir and the
   warning triangle are drawn by hand; the stump, shears and
   bulldozer are traced from the design plate so their
   silhouettes match it exactly.
   -------------------------------------------------- */

export function ServiceTreeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path fill="currentColor" d="M32 3 43.5 21H38l10.5 16.5H41L54 55H10l13-17.5h-7.5L26 21h-5.5Z" />
      <path fill="currentColor" d="M29 54h6v9h-6z" />
    </svg>
  );
}

export function ServiceStumpIcon({ className }: IconProps) {
  return (
    /* Traced from the design plate: ringed top, grain lines, flared roots. */
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M 27.3 13.4 C 26.9 13.5 26.2 13.6 25.8 13.6 C 25.4 13.7 25 13.8 24.8 13.8 C 23.1 14 22 14.2 21.5 14.4 C 21.2 14.5 20.6 14.6 20.2 14.7 C 19.7 14.8 19.1 15 18.7 15.1 C 18.4 15.3 17.9 15.4 17.6 15.5 C 17.2 15.6 17 15.7 16.8 15.8 C 16.5 16.2 16.3 16.2 15.8 16.3 C 15.5 16.4 15.3 16.5 15.1 16.7 C 14.9 16.8 14.6 17 14.4 17.1 C 14.2 17.2 13.9 17.5 13.6 17.8 C 11.9 19.5 12 18.9 11.7 28.9 C 11.6 32.5 11.5 33.4 11.1 34.3 C 11 34.6 10.9 35.1 10.8 35.4 C 10.6 36 9.9 36.9 8.9 37.9 C 8.7 38.1 8.4 38.4 8.2 38.6 C 8 38.9 7.7 39.2 7.5 39.3 C 7.2 39.4 7 39.6 7 39.7 C 7 39.7 6.8 39.9 6.6 40 C 6.5 40.1 6.2 40.3 6.1 40.4 C 6 40.5 5.9 40.6 5.8 40.6 C 5.7 40.6 5.5 40.8 5.2 41 C 4.7 41.4 3.8 41.9 3.3 42.2 C 3 42.3 2.7 42.5 2.6 42.6 C 2.4 42.8 2.1 43 1.9 43.1 C 0.7 43.7 1.2 44.8 2.5 44.7 C 2.8 44.7 3.2 44.7 3.5 44.8 C 3.7 44.8 4.3 44.9 4.7 44.9 C 5.1 45 5.5 45 5.7 45 C 5.9 45.1 6.3 45 6.8 44.9 C 8 44.7 10.3 44.3 11.4 44.2 C 11.7 44.1 12.1 44 12.3 44 C 12.7 43.8 13.9 43.8 14.2 44 C 14.6 44.2 14.3 44.7 13.5 45.2 C 13.3 45.4 13 45.6 12.8 45.8 C 12.6 45.9 12.3 46.1 12.1 46.2 C 11.9 46.4 11.8 46.5 11.6 46.8 L 11.4 47.2 11.6 47.5 C 11.7 47.8 11.9 47.9 12.3 48.1 L 12.8 48.3 14.2 48.3 C 15.3 48.3 15.8 48.2 16.3 48.1 C 16.7 48 17.5 47.9 18.1 47.8 C 18.9 47.6 19.3 47.5 19.8 47.3 C 20.1 47.1 20.6 46.9 20.8 46.9 C 21.2 46.8 21.4 46.8 21.8 46.4 C 22.2 46.2 23.5 45.8 23.9 45.8 C 24.3 45.9 24.9 46.4 26.1 47.5 C 26.6 48 27.1 48.4 27.3 48.5 C 27.5 48.6 27.6 48.7 27.6 48.7 C 27.7 48.8 27.9 48.9 28.3 49 C 28.6 49.2 29 49.4 29.1 49.5 C 29.2 49.6 29.4 49.7 29.6 49.8 C 29.8 49.9 30.1 50.1 30.2 50.2 C 31 50.8 32.2 50.9 33.3 50.3 C 33.6 50.2 33.9 50 33.9 50 C 34 50 34.9 49.6 35.3 49.4 C 35.4 49.3 35.8 49.2 36.1 49.1 C 36.4 49 36.7 48.9 36.9 48.8 C 37.1 48.7 37.4 48.5 37.6 48.4 C 37.8 48.3 38.2 48.1 38.4 48 C 39.2 47.2 39.7 46.8 40 46.5 C 40.4 46 41 45.9 41.6 46.1 C 42.2 46.3 43.1 46.6 44.1 46.8 C 44.7 47 45.4 47.2 45.6 47.3 C 46.8 47.9 48.5 48.3 49.9 48.3 C 51.5 48.4 51.7 48.4 52.1 47.9 C 52.8 47.2 52.7 47.1 51.9 46.4 C 51.6 46.2 51.3 45.9 51.2 45.8 C 51.2 45.7 51 45.5 50.8 45.4 C 49.6 44.7 49.9 44 51.2 44.4 C 51.3 44.4 51.9 44.5 52.6 44.5 C 53.4 44.5 54 44.5 54.5 44.6 C 55.6 44.8 59.7 44.8 60.7 44.6 C 61.3 44.4 62.4 43.9 62.7 43.7 C 63.2 43.2 62.6 42.5 60.7 41.5 C 60.4 41.4 60.1 41.2 60 41.1 C 59.9 41 59.6 40.9 59.4 40.8 C 59.2 40.7 58.9 40.5 58.8 40.4 C 58.7 40.3 58.2 39.9 57.7 39.6 C 57.2 39.3 56.7 38.8 56.5 38.6 C 56.3 38.4 55.9 38 55.7 37.9 C 55.4 37.7 55.2 37.5 55.1 37.3 C 55.1 37.2 54.9 36.9 54.7 36.7 C 54.5 36.5 54.3 36.2 54.3 36.1 C 54.2 35.9 54.1 35.5 53.9 35.2 C 53.7 34.9 53.6 34.4 53.5 34.2 C 53.5 33.9 53.4 33.5 53.3 33.2 C 53 32.1 52.9 31.4 52.8 27.9 C 52.8 26 52.8 24.5 52.8 24.4 C 52.9 24.3 52.7 19.7 52.6 19.5 C 52.1 18.4 50.2 16.6 49 16.2 C 48.8 16.2 48.5 16 48.3 15.9 C 48.2 15.8 47.7 15.7 47.3 15.6 C 46.9 15.5 46.4 15.3 46.1 15.2 C 45.8 15 45.4 14.9 44.8 14.8 C 43.6 14.7 42.9 14.5 42.4 14.3 C 42.1 14.2 41.7 14.1 41.5 14.1 C 41.3 14.1 40.4 14 39.5 13.8 C 36.5 13.5 35.6 13.4 31.7 13.4 C 29.7 13.4 27.7 13.4 27.3 13.4 M 29.7 15.5 C 27.9 15.5 27.2 15.6 25.5 15.9 C 25.1 15.9 24.4 16 24.1 16.1 C 22.7 16.2 21 16.5 20.6 16.6 C 20.4 16.7 19.8 16.9 19.4 17.1 C 18.2 17.5 17.1 18 16.9 18.3 C 16.8 18.4 16.6 18.6 16.5 18.6 C 16 18.8 15.4 19.3 14.9 20 C 14.6 20.4 14.6 21.3 14.8 21.7 C 15.2 22.4 15.7 23 16.3 23.4 C 16.7 23.6 17.2 23.9 17.4 24.1 C 18 24.5 18 24.5 19 24.8 C 19.4 24.9 19.8 25 19.9 25.1 C 20.2 25.2 20.9 25.4 21.6 25.5 C 22 25.6 22.5 25.7 22.7 25.7 C 23.2 25.9 23.9 26 25.5 26.2 C 26 26.3 26.7 26.4 27.1 26.5 C 28.3 26.8 30.2 27 31.4 27 C 32 27 33.2 26.9 34.1 26.9 C 35.8 26.9 36.4 26.8 37.4 26.5 C 37.7 26.4 38.8 26.3 40.7 26.1 C 41.1 26.1 41.7 26 42 25.9 C 42.5 25.7 43.1 25.6 44.4 25.4 C 44.7 25.3 45.2 25.2 45.5 25.1 C 45.8 24.9 46.5 24.7 47.1 24.5 C 48.2 24.1 48.6 23.9 49.2 23.3 C 49.7 22.7 50.2 21.6 50.2 21.1 C 50.2 20.6 49.8 19.7 49.5 19.5 C 49.4 19.4 49.1 19.2 49 19.1 C 48.4 18.4 47.3 17.9 44.2 17 C 43.9 16.9 43.5 16.7 43.4 16.7 C 43 16.4 42.3 16.3 41.4 16.2 C 40.9 16.1 40.1 16 39.6 16 C 36.6 15.6 33.3 15.4 29.7 15.5 M 28 17.3 C 27.8 17.4 27.3 17.4 27 17.5 C 26.4 17.6 25.3 17.8 24.7 17.8 C 24.1 17.8 22.8 18.1 22.3 18.3 C 22.1 18.4 21.7 18.5 21.5 18.5 C 20.3 18.6 19.2 19.2 18.4 20.1 C 17.4 21.1 17.4 21.5 18.6 22.4 C 18.7 22.5 19 22.7 19.1 22.8 C 19.3 23 19.5 23.1 20.2 23.3 C 20.5 23.4 20.9 23.5 21.1 23.6 C 21.7 23.9 22.1 24 22.9 24 C 23.4 24.1 23.5 24.1 23.8 24.3 C 24 24.5 24.2 24.6 24.6 24.6 C 24.9 24.6 25.6 24.7 26.2 24.8 C 26.8 24.9 27.7 25 28.2 25 C 29.2 25.2 35.6 25.2 36.4 25.1 C 37 25.1 38.4 24.9 39.5 24.7 C 39.9 24.6 40.6 24.6 41 24.5 C 41.4 24.5 41.9 24.3 42.2 24.3 C 42.5 24.2 43.1 24 43.5 24 C 44 23.9 44.4 23.8 44.6 23.6 C 44.8 23.5 45.2 23.3 45.4 23.2 C 45.6 23 45.8 22.9 45.9 22.8 C 46 22.7 46.2 22.6 46.4 22.5 C 47.6 21.9 47.7 21 46.7 20.2 C 46.6 20.1 46.4 19.9 46.2 19.8 C 46 19.6 45.5 19.3 45.1 19.3 C 44.9 19.2 44.6 19.1 44.4 19 C 44.2 18.9 43.8 18.7 43.4 18.6 C 43.1 18.5 42.6 18.3 42.4 18.2 C 41.4 17.8 37 17.5 29.9 17.3 C 29.1 17.3 28.2 17.3 28 17.3 M 29.9 18.8 C 29 18.8 28.4 18.9 28.1 19 C 27.3 19.3 26.6 19.3 24.3 19.5 C 22.3 19.6 21.5 19.8 20.8 20.6 C 20.3 21 20.2 21.2 20.5 21.5 C 20.7 21.6 20.9 21.8 21 21.9 C 21.4 22.3 21.8 22.5 22.4 22.6 C 22.6 22.6 23.2 22.7 23.6 22.8 C 24 22.9 24.4 23 24.6 23 C 24.9 23 26.2 23.2 28.1 23.4 C 29.5 23.6 32.8 23.7 34.5 23.6 C 35.2 23.5 36.4 23.4 37.1 23.4 C 39.5 23.2 40.8 23 41.7 22.7 C 42 22.6 42.5 22.5 42.8 22.4 C 43.6 22.2 44.4 21.6 44.2 21.2 C 44.1 20.6 42 19.6 41 19.6 C 40.3 19.6 38.9 19.5 37.8 19.3 C 35.9 19 35.7 19 34.4 18.9 C 32.8 18.8 31.7 18.7 29.9 18.8 M 14.5 25.5 L 14.3 25.8 14.3 26.8 C 14.3 27.3 14.3 27.9 14.2 28.1 C 14.2 28.3 14.1 29 14.1 29.7 C 14 31.3 13.7 33.4 13.5 33.9 C 13.4 34.1 13.3 34.7 13.2 35 C 13 35.6 12.8 35.8 12.5 36.2 C 12.3 36.5 11.9 37 11.7 37.5 C 11.2 38.5 10.7 39.2 10.4 39.4 C 10.3 39.4 10 39.7 9.8 40 C 9.5 40.3 9.1 40.7 9 40.8 C 8.9 40.8 8.6 41.1 8.4 41.2 C 8.2 41.4 7.9 41.7 7.7 41.9 C 7.1 42.4 7 42.5 7 42.7 C 7 43.2 7.9 43.1 8.7 42.6 C 8.8 42.5 9.2 42.4 9.7 42.3 C 10.4 42.2 10.6 42.1 10.8 42 C 10.9 41.9 11.1 41.7 11.3 41.6 C 11.5 41.5 11.8 41.3 11.9 41.2 C 12 41.1 12.3 40.9 12.4 40.8 C 12.6 40.7 12.8 40.4 13 40.3 C 13.1 40.1 13.3 39.8 13.5 39.6 C 14 39.1 14.3 38.6 14.6 37.8 C 14.7 37.5 14.9 36.8 15.1 36.4 C 15.7 35.1 15.8 34.8 15.9 34.5 C 16.2 33.4 16.3 26.6 16 26 C 15.7 25.3 14.9 25 14.5 25.5 M 49.3 25.6 C 49.2 25.6 49 25.8 48.7 26.1 L 48.3 26.5 48.3 28.8 C 48.3 31.3 48.3 31.3 48.9 33.6 C 49 34.3 49.2 34.9 49.3 35.1 C 49.4 35.3 49.6 35.8 49.7 36.3 C 49.8 36.7 50 37.2 50 37.3 C 50.1 37.4 50.2 37.7 50.3 37.9 C 50.4 38.1 50.6 38.5 50.8 38.6 C 50.9 38.8 51.1 39 51.1 39 C 51.1 39.2 52.3 40.4 52.8 40.7 C 53.2 41 53.7 41.4 54.2 41.8 C 54.5 42.1 54.6 42.2 55.1 42.3 C 55.3 42.3 55.7 42.4 56 42.5 C 56.6 42.7 56.8 42.7 57 42.5 C 57.3 42.2 57.1 41.9 56.5 41.6 C 56.2 41.4 55.9 41.3 55.8 41.1 C 55.7 41 55.5 40.9 55.4 40.8 C 55.3 40.8 55.1 40.6 55 40.5 C 55 40.3 54.8 40.1 54.6 40 C 54.5 39.9 54.3 39.8 54.3 39.7 C 54.2 39.6 53.9 39.2 53.7 38.8 C 53 38 52.3 36.8 52.1 36.2 C 52 36 51.8 35.6 51.7 35.5 C 51.5 35.1 51.3 34.6 51.2 33.9 C 51.2 33.7 51 33.1 50.9 32.4 C 50.7 31.2 50.6 30.7 50.6 27.7 C 50.6 26.5 50.5 25.9 50.5 25.8 C 50.3 25.6 49.7 25.4 49.3 25.6 M 18.6 27.1 C 18.1 27.2 17.8 27.6 17.9 28.2 C 18 28.7 18 29.3 17.9 30.5 C 17.9 31 17.8 32.3 17.7 33.3 C 17.7 35.3 17.6 35.9 17.2 36.6 C 17.1 36.8 16.9 37.3 16.9 37.5 C 16.8 37.8 16.6 38.2 16.5 38.3 C 16.4 38.5 16.3 38.8 16.2 39 C 16.1 39.2 15.9 39.6 15.8 39.8 C 15.6 40 15.4 40.3 15.3 40.5 C 15.2 40.7 15.1 41 15 41.1 C 14.8 41.3 14.8 41.7 15 42 C 15.1 42.1 15.3 42.3 15.4 42.5 C 15.6 42.8 15.9 42.9 16.2 42.8 C 17.3 42.5 18.8 40.7 19.2 39.4 C 19.3 39.1 19.4 38.7 19.5 38.6 C 19.8 38.3 20.1 37.3 20.5 35.8 C 20.6 35.3 20.8 31.1 20.8 29.1 C 20.8 27.9 20.7 27.7 20.4 27.4 C 20.2 27.3 18.9 27 18.6 27.1 M 45 27.6 C 44.5 27.7 44.5 27.8 44.5 29.5 C 44.5 31.3 44.6 33.8 44.7 34.1 C 44.8 34.3 44.9 34.7 45.2 36.4 C 45.3 36.9 45.4 37.4 45.6 37.6 C 45.7 37.8 45.8 38.2 45.9 38.5 C 46 38.8 46.1 39.1 46.3 39.3 C 46.4 39.4 46.6 39.7 46.7 40 C 46.9 40.4 47.2 40.9 48 41.7 C 48.7 42.4 50.2 42.6 51.2 42.2 C 51.6 42 51.6 41.8 51.2 41.6 C 50.8 41.4 50.1 40.7 49.7 40.1 C 49.6 39.9 49.4 39.6 49.3 39.5 C 49.2 39.3 49 39.1 49 39 C 48.9 38.8 48.7 38.6 48.6 38.4 C 48.1 37.8 46.9 34.7 46.8 33.6 C 46.8 33.3 46.7 32.4 46.7 31.7 C 46.6 31 46.6 30.1 46.5 29.7 C 46.5 29.3 46.4 28.8 46.4 28.5 C 46.4 28 46.2 27.7 45.7 27.6 C 45.4 27.5 45.4 27.5 45 27.6 M 23 28.6 C 22.5 29.1 22.5 29.4 22.5 32.2 C 22.5 33.6 22.4 35 22.4 35.4 C 22.3 36.6 22.1 37.5 21.9 38 C 21.8 38.2 21.6 38.8 21.5 39.1 C 21.3 40 20.4 41.6 19.7 42.7 C 19.6 42.8 19.3 43.1 19.2 43.3 C 19 43.5 18.8 43.8 18.5 44 C 18.1 44.3 17.6 44.8 17.6 45 C 17.6 45.5 19.2 45.5 19.9 44.9 C 20.1 44.8 20.4 44.7 20.7 44.6 C 21.3 44.4 22.6 43.6 22.8 43.3 C 22.9 43.2 23.1 42.9 23.3 42.7 C 23.4 42.6 23.6 42.2 23.8 42 C 23.9 41.7 24.1 41.4 24.2 41.2 C 24.3 41 24.4 40.7 24.5 40.4 C 24.6 40.1 24.8 39.7 24.9 39.5 C 25 39.3 25.1 38.8 25.2 38.5 C 25.3 38.2 25.4 37.7 25.4 37.4 C 25.7 36.2 25.8 34.6 25.8 31.9 C 25.7 28.6 25.7 28.6 24.3 28.4 C 23.2 28.3 23.3 28.3 23 28.6 M 41.3 28.5 C 41.2 28.5 41 28.6 40.8 28.6 C 40.3 28.8 39.9 29.1 39.9 29.5 C 39.7 30.5 40 35.9 40.3 37.5 C 40.4 37.8 40.5 38.3 40.5 38.6 C 40.6 38.9 40.7 39.3 40.7 39.5 C 41 40.3 41.6 41.6 41.7 41.7 C 41.8 41.8 41.9 42.1 42 42.4 C 42.3 43 42.8 43.5 43.4 43.8 C 43.6 43.9 43.9 44.1 44 44.2 C 44.3 44.4 44.6 44.6 45.1 44.7 C 45.3 44.7 45.7 44.9 45.9 45 C 46.4 45.2 47.2 45.3 47.4 45.1 C 47.5 44.9 47.5 44.9 47.3 44.6 C 47.2 44.2 47 44 46.2 43.3 C 46.1 43.1 45.9 42.8 45.8 42.6 C 45.7 42.4 45.5 42.2 45.5 42.1 C 45.4 42.1 45.3 41.8 45.1 41.5 C 45 41.2 44.8 40.9 44.8 40.9 C 44.7 40.8 44.5 40.4 44.4 40.1 C 44.3 39.7 44.1 39.3 44 39.2 C 43.9 39.1 43.7 38.7 43.7 38.4 C 43.6 38.2 43.4 37.7 43.3 37.4 C 42.8 36 42.4 32.5 42.4 29.7 C 42.4 29 42.4 28.9 42.3 28.7 C 42.1 28.5 41.6 28.4 41.3 28.5 M 28.3 29 C 27.7 29.1 27.6 29.3 27.6 30.2 C 27.6 34.6 27.5 37.7 27.4 38 C 27.3 38.2 27.3 38.4 27.3 38.6 C 27.3 38.7 27.2 39.1 27.1 39.4 C 27 39.7 26.9 40.2 26.8 40.5 C 26.7 40.8 26.5 41.1 26.4 41.3 C 26.3 41.5 26.1 41.8 26 42 C 25.9 42.2 25.7 42.5 25.6 42.7 C 25 43.4 25.2 44 26.2 44.6 C 26.4 44.7 26.6 45 26.7 45.1 C 26.8 45.2 26.9 45.4 27.1 45.5 C 27.2 45.5 27.4 45.7 27.5 45.8 C 27.6 45.8 27.8 46 28.1 46.2 C 28.6 46.5 29.5 47.1 29.7 47.3 C 30 47.7 30.7 47.9 31 47.6 C 31.4 47.2 31.4 47.1 31.4 33.8 C 31.5 28.9 31.6 29.3 30.1 29 C 29.2 28.9 28.7 28.8 28.3 29 M 35.6 29.1 C 33.8 29.5 33.6 29.6 33.9 30.7 C 34 31.1 34 31.3 34 31.5 C 33.9 31.7 33.9 33 33.9 35.1 C 33.9 36.8 33.8 39.4 33.8 40.8 C 33.7 42.1 33.7 44 33.7 45 C 33.7 46 33.6 46.9 33.6 47 C 33.5 47.4 33.8 47.6 34.3 47.5 C 34.9 47.5 35.5 47.2 36.5 46.1 C 36.9 45.7 37.4 45.3 37.6 45.1 C 37.9 45 38.2 44.8 38.4 44.7 C 38.5 44.6 38.8 44.5 39 44.5 C 39.3 44.4 39.5 44.3 39.6 44.2 C 39.7 44.2 40 44 40.3 43.9 C 41 43.5 41 43.5 40.5 42.7 C 40.2 42.3 39.9 41.8 39.8 41.6 C 39.8 41.4 39.6 41 39.4 40.8 C 39.3 40.6 39.1 40.2 39 39.9 C 39 39.6 38.8 39.1 38.6 38.7 C 38.4 38.2 38.4 37.9 38.3 37.2 C 38.2 36.2 38.1 30.5 38.1 30 C 38.3 29.1 37.5 28.8 35.6 29.1"
      />
    </svg>
  );
}

export function ServicePruningIcon({ className }: IconProps) {
  return (
    /* Traced from the design plate: open secateur blades, pivot and handles. */
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M 41.5 1.4 C 41 1.5 40.6 1.6 40.4 1.7 C 40.3 1.8 39.8 2.1 39.4 2.3 C 38.9 2.5 38.4 2.9 38 3.3 C 37.6 3.6 37.1 4 36.8 4.2 C 35.8 4.9 34.5 6.5 34.1 7.6 C 34 7.9 33.7 8.3 33.6 8.5 C 33.4 8.7 33.3 9 33.2 9.2 C 33.2 9.5 32.9 10 32.7 10.5 C 32.4 11.1 32.2 11.6 32 12.6 C 31.9 13.4 31.7 14.2 31.6 14.6 C 30.9 16.7 30.4 20.7 30.5 22.7 C 30.7 24.2 30.7 24.3 29.9 26.2 C 29.6 27 29.4 27.4 28.7 28.5 C 28.7 28.7 28.6 28.7 28.2 28.5 C 27.9 28.4 27.3 28.2 27 28.1 C 26.6 28 26.1 27.8 25.8 27.7 C 24.7 27.1 23.8 27.6 22.9 29.3 C 22.8 29.5 22.6 29.8 22.4 30 C 22.3 30.1 22 30.5 21.8 30.8 C 21.5 31.2 21.3 31.5 21.2 31.5 C 21.2 31.5 20.9 31.8 20.5 32.1 C 20.2 32.4 19.7 32.8 19.5 32.9 C 19.2 33.1 18.9 33.3 18.7 33.5 C 18.6 33.7 18.3 33.9 18.1 34.1 C 17.6 34.5 16.1 36.1 15.2 37.2 C 14.8 37.6 14.4 38.1 14.2 38.2 C 14.1 38.3 13.8 38.5 13.7 38.7 C 13.5 39 13.2 39.3 13 39.5 C 12.7 39.6 12.4 40 12.2 40.2 C 12 40.5 11.6 40.9 11.4 41 C 11.1 41.2 10.5 41.8 10.1 42.3 C 9.6 42.9 9 43.5 8.7 43.9 C 8.1 44.6 6.9 46.3 6.8 46.8 C 6.4 48.2 7.1 49.6 8.7 50.6 C 10.6 51.9 11.2 51.8 12.9 50.1 C 13.7 49.3 14.7 48.4 15.2 48.1 C 15.3 48 15.5 47.8 15.6 47.6 C 15.7 47.5 15.9 47.2 16.1 47.1 C 16.3 47 16.9 46.5 17.4 46 C 17.9 45.6 18.7 44.7 19.3 44.2 C 19.9 43.6 20.6 43 20.9 42.7 C 21.1 42.5 21.6 42 21.9 41.7 C 22.2 41.4 22.5 41.2 22.6 41.2 C 22.6 41.2 23.3 40.6 24 39.8 C 26 38 27 37.1 27.6 36.7 C 28.6 36.2 29.4 35.7 29.5 35.5 C 29.8 35.2 29.7 34.5 29.3 34 C 28.4 32.8 28.1 31 28.8 29.7 C 29.3 28.7 29.6 28.8 30.1 30.1 C 30.2 30.4 30.4 30.9 30.6 31 C 30.7 31.2 30.9 31.6 31 31.9 C 31.1 32.3 31.3 32.7 31.5 32.9 C 31.7 33 31.9 33.5 32.1 33.9 C 32.4 34.6 32.6 34.9 33.2 35.2 C 34 35.6 34.5 36.4 34.4 37.1 C 34.3 37.9 33.7 40 33.4 40.8 C 33.3 41.3 33.1 42 33 42.4 C 33 42.8 32.8 43.5 32.6 44 L 32.3 44.9 32.2 48.6 C 32.1 53.3 32 54.3 31.5 55.3 C 31.4 55.7 31.2 56.2 31.1 56.4 C 31.1 56.6 30.9 57.4 30.6 58.2 C 29.8 60.7 29.9 61.2 30.9 61.8 C 33.7 63.6 37.8 63 38.3 60.7 C 38.4 60.4 38.6 59.9 38.8 59.6 C 39 59.1 39.1 58.6 39.3 57.5 C 39.5 56.7 39.7 55.7 39.8 55.4 C 39.9 55.1 40.1 54.2 40.2 53.4 C 40.3 52.6 40.5 51.5 40.7 50.9 C 41.3 48.8 41.4 48.5 41.5 48.2 C 41.5 48 41.6 47.4 41.8 46.9 C 41.9 46.4 42.1 45.5 42.2 44.7 C 42.3 44 42.6 42.8 42.7 42.1 C 43 41.2 43.1 40.5 43.1 39.5 C 43.2 37.7 43.1 37.5 42 36.4 C 41.1 35.4 40.9 35.1 40.9 34.6 C 40.9 34.1 41.3 33.2 41.7 32.8 C 41.8 32.6 42.1 32.2 42.2 32 C 42.3 31.7 42.6 31.3 42.8 31 C 43 30.8 43.2 30.4 43.3 30.2 C 43.5 29.9 43.7 29.6 43.7 29.5 C 44 29.2 45.9 28 46.5 27.7 C 46.9 27.5 47.3 27.3 47.4 27.2 C 47.6 27 48 26.8 48.3 26.7 C 48.7 26.6 49.1 26.4 49.2 26.3 C 49.3 26.2 49.7 25.9 50.1 25.7 C 51.5 24.9 54 22.6 54.5 21.6 C 54.6 21.3 54.9 20.9 55.1 20.6 C 55.3 20.2 55.5 19.7 55.7 19.3 C 55.8 19 56 18.5 56.1 18.3 C 56.4 17.9 56.8 16.3 56.9 15.5 C 56.9 15.2 57.1 14.7 57.2 14.5 C 57.4 14.1 57.6 11.1 57.4 10.1 C 57.3 9.8 56.9 9.5 56.4 9.5 C 56 9.5 56.1 9.4 54.6 11.3 C 54.3 11.7 53.8 12.2 53.5 12.5 C 53.1 12.7 52.8 13 52.7 13.1 C 52.6 13.3 52.2 13.6 51.8 14 C 51.4 14.3 50.8 14.8 50.5 15 C 49.7 15.8 49.2 16.1 48.6 16.5 C 48.3 16.7 47.8 17 47.4 17.2 C 47.1 17.4 46.8 17.6 46.8 17.6 C 46.7 17.6 46.5 17.7 46.3 17.9 C 46.1 18.1 45.6 18.3 45.3 18.5 C 44.9 18.6 44.3 18.9 44 19.2 C 42.3 20.4 41.1 20.5 40.5 19.4 C 40.3 18.9 40.2 17.1 40.3 15.4 C 40.4 13.8 40.5 13.4 40.9 11.6 C 41.1 11 41.3 10 41.4 9.4 C 41.5 8.7 41.7 7.8 41.9 7.4 C 42 7 42.2 6.1 42.3 5.3 C 42.4 4.6 42.6 3.7 42.8 3.5 C 42.9 3.2 43 2.8 43.1 2.6 C 43.4 1.2 43.2 1.1 41.5 1.4 M 34.9 26.7 C 34.2 27.4 34 27.8 34.1 28.9 C 34.2 30.2 34.5 30.6 35.9 30.8 C 37.3 31 37.7 30.8 38.4 29.9 C 39.3 28.7 39.3 27.6 38.3 26.7 C 37.7 26.1 37.5 26.1 36.4 26.1 L 35.5 26.1 34.9 26.7"
      />
    </svg>
  );
}

export function ServiceHazardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={4.6}
        strokeLinejoin="round"
        d="M28.2 9.4c1.7-3 5.9-3 7.6 0l22.4 39.6c1.7 3-.4 6.6-3.8 6.6H9.6c-3.4 0-5.5-3.6-3.8-6.6Z"
      />
      <rect x="29" y="21.5" width="6" height="20" rx="3" fill="currentColor" />
      <circle cx="32" cy="48" r="3.4" fill="currentColor" />
    </svg>
  );
}

export function ServiceBulldozerIcon({ className }: IconProps) {
  return (
    /* Traced from the design plate: cab with windows, tracks and blade. */
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M 9.7 13.7 C 9.1 13.9 9.1 14.1 9.1 16.3 C 9.1 17.6 9.1 18.3 9 18.5 C 9 18.8 9 20.4 9 25 C 9 30.9 9 31.1 8.8 31.4 C 8.7 31.8 8.4 32 7.7 32.1 C 7.5 32.2 7.1 32.3 6.9 32.4 C 6.7 32.5 6.4 32.6 6.2 32.7 C 4.7 33.3 2.6 35.4 2 36.8 C 1.3 38.5 1.3 38.8 1.3 40.9 C 1.3 43.1 1.4 44.2 1.8 45 C 2 45.3 2.2 45.7 2.2 45.8 C 2.3 46 2.5 46.3 3.5 47.3 C 3.9 47.7 4.2 48.1 4.2 48.1 C 4.2 48.2 4.4 48.3 4.5 48.4 C 4.7 48.5 5 48.6 5.1 48.7 C 5.2 48.8 5.5 49 5.7 49.1 C 6 49.2 6.3 49.4 6.4 49.5 C 6.8 49.7 7.2 49.8 7.9 49.9 C 8.3 49.9 8.6 50 8.7 50 C 9.3 50.1 26.7 50.2 29.9 50.1 C 31.3 50 32 50 33.3 50.1 C 35.9 50.3 35.9 50.3 36.8 50.2 C 37.2 50.2 38.1 50.1 38.8 50 C 39.5 49.8 40.3 49.7 40.5 49.7 C 40.8 49.7 41 49.6 41.2 49.5 C 41.3 49.4 41.6 49.3 41.8 49.2 C 42 49.1 42.3 48.9 42.4 48.8 C 42.6 48.6 42.9 48.4 43.1 48.4 C 43.6 48.2 45.1 46.7 45.5 46 C 45.5 45.8 45.7 45.6 45.8 45.4 C 46 45.2 46.1 44.8 46.3 44.1 C 46.3 43.9 46.4 43.6 46.5 43.5 C 46.7 43.2 46.7 39.9 46.4 38.6 C 46.3 37.6 46.3 37.9 46.2 31.1 C 46.2 27.3 46.2 27.2 45.8 26.7 C 45.7 26.6 45.5 26.3 45.5 26.1 C 45.3 25.8 45.1 25.7 43.9 25.6 C 42 25.5 42.1 25.6 42.1 22.1 C 42.1 19.5 42.1 19.5 41.7 19.5 C 41.6 19.4 41.4 19.4 41.3 19.3 C 41.2 19.2 40.9 19.1 40.5 19.1 L 40 19.1 39.8 19.3 C 39.6 19.5 39.6 19.6 39.6 19.8 C 39.6 20 39.5 20.6 39.5 21.2 C 39.4 21.8 39.4 22.5 39.4 22.6 C 39.4 24.8 39.1 25.6 38.3 25.4 C 37.9 25.3 35.6 25.2 34.9 25.2 C 34.5 25.3 34.3 25.2 33.6 25 C 32 24.5 31.6 24.1 31.2 22.8 C 31.2 22.5 31 22.1 30.9 22 C 30.9 21.8 30.7 21.5 30.7 21.3 C 30.6 21.1 30.4 20.8 30.3 20.7 C 30.2 20.5 29.9 20.1 29.6 19.6 C 29.2 19 28.5 18.2 28.2 18 C 28.1 18 27.9 17.9 27.7 17.9 C 27.4 17.8 27.1 17.7 26.9 17.6 C 26 17.1 25.7 17.3 25.7 18.1 C 25.7 18.3 25.8 18.5 25.9 18.8 C 26 19 26.1 19.2 26.1 19.4 C 26.1 19.6 26.3 19.8 26.9 20.4 C 27.8 21.2 28.1 21.8 28.5 23.1 C 28.8 24.3 28.8 24.3 25.5 24.4 C 23.6 24.5 23 24.5 22.8 24.6 C 22.6 24.6 22.3 24.7 22 24.7 C 21.1 24.7 20.8 25 20.8 26 C 20.7 26.8 20.8 27.2 21.1 27.3 C 21.4 27.5 23 27.7 24.9 27.8 C 26.9 27.8 26.8 27.8 26.8 29.7 C 26.8 31.6 26.7 31.7 24.9 31.7 C 24.4 31.7 23.1 31.7 22.1 31.8 C 18.8 31.8 18.6 31.7 18.7 29.3 C 18.8 28.7 18.8 28.1 18.7 27.9 C 18.7 27.6 18.7 23.6 18.7 19.7 C 18.7 16.7 18.7 16.7 20.1 16.6 C 21.1 16.5 26.9 16.5 27.9 16.6 C 28.5 16.6 28.8 16.7 29.1 16.8 C 29.7 17.1 30 16.7 30 15.6 C 30.1 14.4 29.8 13.6 29.4 13.6 C 29.3 13.6 24.9 13.6 19.7 13.6 C 10.6 13.6 10.1 13.6 9.7 13.7 M 12.6 16.5 C 12.1 16.5 11.9 16.6 11.6 17 C 11.5 17.1 11.5 17.3 11.5 23.5 C 11.5 30.8 11.5 30.9 11.8 31.2 C 12.1 31.6 12.4 31.6 13.2 31.6 C 13.6 31.6 14.1 31.7 14.3 31.7 C 15.2 31.9 15.9 31.8 16.1 31.3 C 16.3 31 16.4 24.6 16.3 21.4 C 16.3 20.1 16.2 18.6 16.2 18.1 C 16.2 16.6 16.2 16.6 15 16.5 C 13.5 16.4 13.1 16.4 12.6 16.5 M 53.7 31.5 C 53.1 31.7 52.6 32.2 52 33.1 C 50.9 34.7 51 34 50.9 39.6 C 50.8 42.5 50.8 42.5 49.4 42.6 C 47.8 42.8 47.5 43.1 47.3 44.8 C 47.2 45.9 47.2 46 47.7 46.3 C 47.8 46.4 47.9 46.4 48.4 46.3 C 50.1 46.1 50.5 46.3 51.1 47.4 C 51.3 47.8 51.5 48.1 51.6 48.2 C 51.6 48.3 51.8 48.5 51.9 48.6 C 52 48.8 52.1 49 52.2 49 C 52.3 49.1 52.4 49.3 52.6 49.5 C 53 50.3 53.1 50.4 57.3 50.5 C 61.4 50.6 62.2 50.5 62.5 50 C 62.6 49.9 62.8 49.1 62.8 48.9 C 62.8 48.7 62.2 48 61.8 47.8 C 61.7 47.6 61.4 47.4 61.3 47.3 C 61.1 47.1 60.8 46.7 60.6 46.5 C 60.1 45.9 59.8 45.5 59.6 45.1 C 59.5 44.9 59.4 44.7 59.3 44.7 C 59.2 44.6 59 44.3 58.9 44.1 C 58.8 43.8 58.6 43.5 58.5 43.5 C 58.4 43.5 58.3 43.3 58.2 43.1 C 58.1 42.9 58 42.7 57.9 42.6 C 57.7 42.4 57.6 42.2 57.1 41.3 C 57 41.2 56.9 40.8 56.8 40.5 C 56.7 40.2 56.5 39.8 56.4 39.7 C 56.1 39.1 56 38.1 56 34.4 C 56 31.8 55.9 31.6 55.6 31.5 C 55.3 31.4 54 31.4 53.7 31.5 M 9.7 34.3 C 9.5 34.3 9.1 34.4 8.8 34.5 C 8.5 34.7 8 34.8 7.8 34.9 C 7.6 34.9 7.3 35.1 7.1 35.2 C 7 35.4 6.8 35.5 6.8 35.5 C 6.6 35.5 5.1 37.1 4.9 37.5 C 4.8 37.7 4.6 38 4.5 38.2 C 4.4 38.4 4.3 38.7 4 40.2 L 3.8 41.1 4 42 C 4.3 43.5 4.4 43.9 4.6 44.1 C 4.7 44.2 4.8 44.5 4.9 44.6 C 5.1 45 5.9 45.9 6.3 46.1 C 6.4 46.2 6.7 46.4 6.8 46.5 C 7.2 46.9 7.4 46.9 8.4 47 C 8.7 47.1 9.3 47.2 9.6 47.2 C 10.1 47.3 10.5 47.3 11.3 47.3 C 11.8 47.3 12.6 47.3 12.9 47.3 C 13.3 47.3 14.2 47.3 15 47.3 C 15.7 47.3 19.5 47.3 23.2 47.2 C 26.9 47.2 30 47.2 30.1 47.2 C 30.1 47.2 30.3 47.2 30.5 47.2 C 31.1 47.3 34.6 47.3 35.3 47.2 C 35.7 47.2 36 47.2 36.5 47.3 C 37.1 47.3 37.4 47.3 37.7 47.3 C 37.9 47.2 38.6 47.1 39.1 47.1 C 40.4 46.9 40.8 46.8 41.3 46.3 C 41.5 46 41.8 45.8 42 45.6 C 42.1 45.5 42.3 45.3 42.4 45.1 C 42.5 44.9 42.8 44.7 42.9 44.5 C 43.5 43.9 43.8 42.9 43.9 41.8 C 44 40.1 43.9 39.1 43.5 38.3 C 43.4 38 43.3 37.7 43.3 37.6 C 43.2 37.4 42.1 36.2 41.8 36 C 41.7 36 41.5 35.8 41.4 35.7 C 40.4 34.8 40.2 34.8 27.9 34.8 C 14.7 34.9 15 34.9 14 34.7 C 13.5 34.7 13.1 34.5 12.8 34.4 C 12.4 34.2 10.4 34.1 9.7 34.3 M 10.2 37.4 C 8.2 37.8 7.3 38.9 7 41.2 C 6.8 42.7 8.6 44.6 10.3 44.8 C 11.8 44.9 13.1 44.3 13.8 43.2 C 14 43 14.2 42.7 14.3 42.6 C 14.7 41.9 14.8 40.7 14.4 39.7 C 14 38.6 13.9 38.5 13.3 38.1 C 12.2 37.3 11.4 37.1 10.2 37.4 M 36.8 37.5 C 36.6 37.6 36.3 37.6 36 37.7 C 35.4 37.7 34.5 38.3 34.3 38.7 C 33.4 40 33.4 40 33.4 41 C 33.5 42.4 33.5 42.5 34.5 43.6 C 35.6 44.8 37.2 45.1 38.6 44.2 C 39.5 43.7 39.5 43.7 40 43.1 C 40.6 42.3 40.7 41.4 40.5 40.2 C 40.4 39.3 40.3 39.1 39.9 38.8 C 38.9 37.8 38.8 37.8 37.7 37.6 C 37.1 37.5 37.2 37.5 36.8 37.5 M 18.7 39.6 C 18.1 40.2 18.1 41.6 18.6 42 C 18.8 42.2 18.9 42.2 19.3 42.2 C 20.1 42.1 20.3 42 20.7 41.6 C 21.6 40.7 21.1 39.9 19.6 39.6 C 18.8 39.4 18.8 39.4 18.7 39.6 M 26.5 39.7 C 26 39.9 25.8 40.1 25.6 40.6 C 25.5 41.2 26.1 42.3 26.8 42.4 C 27.3 42.5 28.1 42.5 28.4 42.4 C 29 42.1 29.6 41.3 29.6 41 C 29.6 40.5 29.1 39.9 28.6 39.7 C 28.2 39.6 26.8 39.6 26.5 39.7"
      />
    </svg>
  );
}

/* --------------------------------------------------
   Property card icons on a 64-unit grid, drawn as clean flat
   shapes to match the design (tracing blurred their fine
   details, such as the barn window and door brace).
   -------------------------------------------------- */

export function PropertyHomeIcon({ className }: IconProps) {
  return (
    /* House with overhanging eaves and a door opening, per the design */
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path fill="currentColor" d="M32 7 60 33h-7v25H38V40H26v18H11V33H4Z" />
    </svg>
  );
}

export function PropertyWavesIcon({ className }: IconProps) {
  return (
    /* Two short, shallow waves set close together, per the design */
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={6.5}
        strokeLinecap="round"
        d="M10 25c3.7-3.2 7.3-3.2 11 0s7.3 3.2 11 0 7.3-3.2 11 0 7.3 3.2 11 0M10 39c3.7-3.2 7.3-3.2 11 0s7.3 3.2 11 0 7.3-3.2 11 0 7.3 3.2 11 0"
      />
    </svg>
  );
}

export function PropertyBarnIcon({ className }: IconProps) {
  return (
    /* Gambrel-roof barn with a round loft window and an X-braced door, per the
       design. Even-odd fill cuts the window ring, the door frame and the brace. */
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 58V26l8-12 14-7 14 7 8 12v32Z
           M32 18.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4Zm0 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Z
           M20 35h24v21H20Zm2.6 2.6v15.8h18.8V37.6Z
           M22.6 37.6H25l16.4 13.4v2.4H39L22.6 40Z
           M41.4 37.6H39L22.6 51v2.4H25L41.4 40Z"
      />
    </svg>
  );
}

export function PropertyTentIcon({ className }: IconProps) {
  return (
    /* Wide, low A-frame tent; the inverted-V door rises about halfway, per the design */
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path fill="currentColor" d="M32 14 60 52H41l-9-17-9 17H4Z" />
    </svg>
  );
}

/* --------------------------------------------------
   Storm response priority icons: clean line icons on a
   64-unit grid, drawn to match the design (tracing made
   the thin strokes wobble).
   -------------------------------------------------- */

export function StormHazardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" d="M28.5 10.2c1.6-2.8 5.4-2.8 7 0l21.9 38.4c1.6 2.8-.4 6.2-3.5 6.2H10.1c-3.1 0-5.1-3.4-3.5-6.2Z" />
      <rect x="29.9" y="22" width="4.2" height="17" rx="2.1" fill="currentColor" />
      <circle cx="32" cy="46" r="2.6" fill="currentColor" />
    </svg>
  );
}

export function StormRoadIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" d="M24 10 10 56M40 10l14 46M32 11v8M32 27v9M32 45v10" />
    </svg>
  );
}

export function StormFallenTreeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      {/* Outlined trunk lying on a diagonal, rounded at its cut base */}
      <path fill="none" stroke="currentColor" strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" d="M8.8 51.2 40 20M13.6 56l31.2-31.2M8.8 51.2a3.4 3.4 0 0 0 4.8 4.8" />
      {/* Branches and twigs */}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M40 20 38 9m0 0-4-3m4 3 4-4M44.8 24.8 56 23m0 0 3-4m-3 4 4 3M26 38l-4-10m0 0-4-2M34 34l12 4m0 0 4 4m-4-4 4-3M36 22l12-10m0 0 4-3"
      />
    </svg>
  );
}

export function StormHouseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" d="M8 34 32 12l24 22M44 23.5V14h6v14.5M14 29v25h12V40h12v14h12V29" />
    </svg>
  );
}
