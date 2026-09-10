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

export function TreeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M12 2.4 6.2 12h3.4l-4.2 6.6h13.2L14.4 12h3.4Z" />
      <path fill="currentColor" d="M11 18h2v3.6h-2z" />
    </svg>
  );
}
