/**
 * BRAND LOCKUP
 *
 * "Tough Trees. Trusted Locally." on a painted plate, as in the design.
 *
 * The plate and the underline are drawn as SVG rather than lifted from the
 * design plate: the artwork there sits on grass, so thresholding it out gives
 * a noisy, unusable mask. Hand-built paths keep the painted edge, scale to any
 * size and take their colour from the tokens.
 */

type BrandLockupProps = {
  className?: string;
  /** "dark" is the hero plate; "amber" is the sign-written crew tag. */
  tone?: "dark" | "amber";
  /** The two lines of lettering. */
  lines?: readonly [string, string];
  /** The tapered orange underline beneath the lettering. */
  showRule?: boolean;
};

export function BrandLockup({
  className = "",
  tone = "dark",
  lines = ["Tough Trees.", "Trusted Locally."],
  showRule = true,
}: BrandLockupProps) {
  const toneClass = tone === "amber" ? "brand-lockup--amber" : "";

  return (
    <div className={`brand-lockup ${toneClass} ${className}`.replace(/s+/g, " ").trim()}>
      {/* Painted plate — irregular edges, a few streaks running past them */}
      <svg
        className="brand-lockup__plate"
        viewBox="0 0 340 150"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M9 30c26-9 58-13 92-14 39-2 78 3 117 1 26-1 52-5 78-2 12 1 24 4 34 9l-4 26c2 15-1 30 1 45 1 9 4 18 2 27-23 6-47 5-71 6-40 1-80 4-120 3-33-1-66-4-99-10-8-1-16-3-23-7 3-16 0-33 0-49-1-12-4-24-7-35Z"
        />
        {/* Brush streaks that break the outline so it does not read as a box */}
        <path
          fill="currentColor"
          d="M2 44c10-4 22-6 33-6-11 4-22 7-31 13-3 2-5-4-2-7ZM318 24c8 0 16 2 22 6-8 2-16 1-24 0-4-1-3-6 2-6ZM26 124c22 6 45 9 68 10-23 3-47 1-69-4-4-1-3-6 1-6ZM268 132c18-1 37-2 55-6-16 8-35 11-53 12-4 0-5-5-2-6Z"
        />
      </svg>

      <div className="brand-lockup__content">
        <p className="brand-lockup__text">
          {lines[0]}
          <br />
          {lines[1]}
        </p>

        {showRule && (
          <>
          {/* Tapered underline: thick through the middle, thin at both tips */}
          <svg
            className="brand-lockup__rule"
            viewBox="0 0 280 18"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="var(--color-brand)"
              d="M4 15c46-4 92-8 138-11 44-3 88-2 132 0-2 4-6 5-10 5-42-1-84-2-126 1-45 3-89 7-134 11-2 0-3-3 0-6Z"
            />
          </svg>
          </>
        )}
      </div>
    </div>
  );
}
