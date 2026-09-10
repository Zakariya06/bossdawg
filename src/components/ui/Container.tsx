/**
 * CONTAINER
 *
 * The site's one horizontal container. Every section aligns its content to
 * this, so nothing should set its own max-width or horizontal padding
 * (AGENTS.md §12).
 */

import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export function Container({ children, as: Component = "div", className = "" }: ContainerProps) {
  return <Component className={`container-site ${className}`.trim()}>{children}</Component>;
}
