"use client";

/**
 * MODAL
 *
 * Accessible dialog used for the same-day visit request. Reusable — pass any
 * content as children.
 *
 * Behaviour:
 *   - Escape closes; clicking the backdrop closes; the panel itself does not.
 *   - Focus moves into the panel on open and returns to the trigger on close.
 *   - Tab is trapped inside the panel while open.
 *   - Background scroll is locked, reusing the same body flag as the mobile menu.
 *   - Stays mounted for the length of the exit transition after isOpen goes
 *     false, so closing animates instead of vanishing.
 *   - Rendered through a portal on document.body. This is not cosmetic: the
 *     trigger sits inside a <Reveal>, whose fade-up animation leaves a
 *     transform on the element. A transformed ancestor becomes the containing
 *     block for position:fixed, so without the portal the overlay anchors to
 *     that wrapper instead of the viewport — off-centre, and with its z-index
 *     trapped in the wrapper's stacking context so page content paints over it.
 */

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

import { CloseIcon } from "@/components/ui/Icons";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  /** id of the element labelling the dialog, for screen readers */
  labelledBy: string;
  children: ReactNode;
};

/* Must outlast the longest exit transition in globals.css (.modal-panel) */
const EXIT_MS = 260;

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function Modal({ isOpen, onClose, labelledBy, children }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  /* --- Two flags drive the animation ---
     isPresent keeps the dialog in the DOM; isShown flips the data-open
     attribute the CSS transitions key off. Opening mounts first and reveals a
     frame later so the browser has a resting state to animate from; closing
     hides first and unmounts once the exit transition has run. */
  const [isPresent, setIsPresent] = useState(false);
  const [isShown, setIsShown] = useState(false);

  // Adjusting state during render (the sanctioned React pattern) rather than in
  // an effect, so the dialog mounts in the same commit as the open request.
  if (isOpen && !isPresent) setIsPresent(true);

  useEffect(() => {
    if (!isPresent) return;

    // rAF gives the smoothest hand-off, but it does not fire at all while the
    // tab is hidden or throttled — which would leave the dialog mounted at
    // opacity 0 while still trapping focus and locking scroll. The timeout is
    // the guarantee; whichever fires first wins.
    let settled = false;
    const reveal = () => {
      if (settled) return;
      settled = true;
      setIsShown(isOpen);
    };

    const frame = requestAnimationFrame(reveal);
    const fallback = setTimeout(reveal, 60);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(fallback);
    };
  }, [isOpen, isPresent]);

  useEffect(() => {
    if (isOpen) return;
    const timer = setTimeout(() => setIsPresent(false), EXIT_MS);
    return () => clearTimeout(timer);
  }, [isOpen]);
  /* --- Remember the trigger, move focus in, restore it on close --- */
  useEffect(() => {
    if (!isOpen) return;

    triggerRef.current = document.activeElement as HTMLElement | null;

    // Focus the panel itself rather than the first field, so a screen reader
    // announces the heading before the form.
    const panel = panelRef.current;
    panel?.focus({ preventScroll: true });

    return () => triggerRef.current?.focus({ preventScroll: true });
  }, [isOpen]);

  /* --- Lock background scroll --- */
  useEffect(() => {
    if (!isOpen) return;

    document.body.dataset.scrollLocked = "true";
    return () => {
      delete document.body.dataset.scrollLocked;
    };
  }, [isOpen]);

  /* --- Escape to close, Tab trapped inside --- */
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  // No mount guard needed: isPresent only becomes true from a client-side
  // interaction, so document.body always exists by this point.
  if (!isPresent) return null;

  return createPortal(
    <div
      className="modal-overlay"
      data-open={isShown}
      onMouseDown={(event) => {
        // Only a press that starts on the backdrop closes, so a drag that ends
        // outside the panel (selecting text, for instance) does not.
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className="modal-panel"
      >
        <button type="button" className="modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon className="size-5" />
        </button>

        {children}
      </div>
    </div>,
    document.body
  );
}
