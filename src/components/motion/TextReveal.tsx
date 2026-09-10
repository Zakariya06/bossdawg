"use client";

/**
 * TEXT REVEAL
 *
 * Mask reveal for headings: text slides up from behind a clipping box.
 * By default each word animates separately, staggered left to right.
 *
 * Splitting is per word, never per line — a line-based split would break on
 * resize (AGENTS.md §13).
 *
 * Segment options:
 *   className  applied to the text itself, so gradient fills work. The gradient
 *              must sit on the element that holds the text: `background-clip:
 *              text` paints nothing if the background is on an ancestor.
 *   newLine    forces the segment onto its own line at lg and above; it still
 *              wraps naturally on smaller screens.
 *   asBlock    reveals the whole segment as one unit instead of word by word.
 *              Needed for gradient text, so the ramp runs across the phrase
 *              rather than restarting on every word.
 *
 * Example — the hero headline:
 *   <TextReveal
 *     segments={[
 *       { text: "Tree Removal and" },
 *       { text: "Land Clearing in", newLine: true },
 *       { text: "Eastern Ontario", newLine: true, asBlock: true,
 *         className: "heading-accent" },
 *     ]}
 *   />
 */

import { useEffect, useRef, useState, type ElementType } from "react";

export type TextRevealSegment = {
  text: string;
  /** Class applied to the text itself (use for gradient fills). */
  className?: string;
  /** Put this segment on its own line at lg and above. */
  newLine?: boolean;
  /** Reveal the segment as a single unit rather than word by word. */
  asBlock?: boolean;
};

type TextRevealProps = {
  segments: ReadonlyArray<TextRevealSegment>;
  /** Element to render. Defaults to h2. */
  as?: ElementType;
  /** Delay before the first word starts, in milliseconds. */
  delay?: number;
  /** Play immediately on mount instead of waiting for scroll (used above the fold). */
  playOnMount?: boolean;
  className?: string;
};

export function TextReveal({
  segments,
  as: Component = "h2",
  delay = 0,
  playOnMount = false,
  className = "",
}: TextRevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  // playOnMount starts visible so the animation runs from the first paint —
  // no observer round-trip, and no flash of hidden text above the fold.
  const [isVisible, setIsVisible] = useState(playOnMount);

  useEffect(() => {
    if (playOnMount) return;

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [playOnMount]);

  // Running index across all segments keeps the stagger continuous.
  let wordIndex = 0;

  return (
    <Component
      ref={elementRef}
      className={`text-reveal ${className}`.trim()}
      data-visible={isVisible}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {segments.map((segment, segmentIndex) => {
        const lineClass = segment.newLine ? "lg:block" : "";

        if (segment.asBlock) {
          const currentIndex = wordIndex++;

          return (
            <span key={segmentIndex} className={lineClass}>
              <span className="text-reveal__block">
                <span
                  className={`text-reveal__word-inner ${segment.className ?? ""}`.trim()}
                  style={{ "--word-index": currentIndex } as React.CSSProperties}
                >
                  {segment.text}
                </span>
              </span>{" "}
            </span>
          );
        }

        return (
          <span key={segmentIndex} className={lineClass}>
            {segment.text.split(" ").map((word) => {
              const currentIndex = wordIndex++;

              return (
                // The space after each word sits outside the clipping mask so
                // words keep normal spacing and can wrap naturally.
                <span key={currentIndex}>
                  <span className="text-reveal__word">
                    <span
                      className={`text-reveal__word-inner ${segment.className ?? ""}`.trim()}
                      style={{ "--word-index": currentIndex } as React.CSSProperties}
                    >
                      {word}
                    </span>
                  </span>{" "}
                </span>
              );
            })}
          </span>
        );
      })}
    </Component>
  );
}
