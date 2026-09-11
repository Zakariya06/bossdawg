/**
 * BRUSH STROKE
 *
 * A single tapered paint stroke — blunt on the left, trailing off to a hair
 * on the right — used as a hand-painted rule under calls to action. Fills with
 * `currentColor`, so set the colour with a text utility.
 */

type BrushStrokeProps = {
  className?: string;
};

export function BrushStroke({ className }: BrushStrokeProps) {
  return (
    <svg viewBox="0 0 300 16" className={className} aria-hidden="true" focusable="false">
      {/* Main body of the stroke */}
      <path
        fill="currentColor"
        d="M3.5 8.4C1.2 9.6 1.4 12.6 4.6 12.9c38-1.2 92-2.6 150-3.9 50-1.1 98-2.3 143.6-3.8 1.6-.4 1.3-1.3-.6-1.5-44-1.2-92-1-142 .1C98 4.9 46 6.3 3.5 8.4Z"
      />
      {/* Dry bristle streaks breaking out of the edges */}
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="0.9"
        opacity="0.75"
        d="M12 14.6c52-1.4 104-2.8 168-4.4M20 6.2c46-1 92-1.9 150-2.4M64 12.8c60-1.5 118-3 196-5"
      />
    </svg>
  );
}
