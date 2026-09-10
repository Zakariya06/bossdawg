/**
 * BUTTON
 *
 * The site's only button component. Renders a Next.js Link when `href` points
 * at a route, a plain anchor for tel:/mailto:/external links, and a <button>
 * otherwise. Never create a page-specific button — add a variant here instead
 * (AGENTS.md §7).
 */

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "dark" | "outline" | "outline-dark";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
} & Omit<ComponentProps<"button">, "className" | "children">;

const variantClasses: Record<ButtonVariant, string> = {
  primary: "button--primary",
  dark: "button--dark",
  outline: "button--outline",
  "outline-dark": "button--outline-dark",
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...buttonProps
}: ButtonProps) {
  const classes = `button ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    // tel:, mailto: and absolute URLs bypass the client-side router.
    const isExternal = /^(https?:|tel:|mailto:)/.test(href);

    if (isExternal) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
