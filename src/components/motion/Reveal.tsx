"use client";

/**
 * REVEAL
 *
 * Fade-up-on-scroll wrapper. Marks itself visible the first time it enters the
 * viewport, then the CSS in globals.css §09 runs the animation. Reveals fire
 * once and never reverse, so scrolling back up does not re-trigger them.
 *
 * Usage:
 *   <Reveal delay={120}>...</Reveal>
 *   <Reveal as="section" variant="fade">...</Reveal>
 *
 * Reduced-motion is handled entirely in CSS — no JS branch needed.
 */

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds, applied as an animation-delay. */
  delay?: number;
  /** "up" slides up while fading in; "fade" fades in place. */
  variant?: "up" | "fade";
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  variant = "up",
  as: Component = "div",
  className = "",
}: RevealProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      // Start the animation slightly before the element is fully on screen.
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const variantClass = variant === "fade" ? "reveal--fade" : "";

  return (
    <Component
      ref={elementRef}
      className={`reveal ${variantClass} ${className}`.trim()}
      data-visible={isVisible}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Component>
  );
}
