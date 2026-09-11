"use client";

/**
 * SAME DAY VISIT MODAL
 *
 * Renders the hero's primary call to action and the dialog it opens: a short
 * triage form for urgent jobs. Laid out from the "Pop up" design: photograph on
 * the left with a dry-brush edge traced from the artwork, form on the right.
 *
 * ⚠ THE FORM IS NOT CONNECTED TO ANYTHING YET — same position as the contact
 * form. Submitting shows a notice pointing at the phone number rather than
 * accepting details that would go nowhere. Replace `handleSubmit` with a real
 * POST and swap the notice for a success state to make it live.
 */

import { useId, useState, type FormEvent } from "react";
import Image from "next/image";

import { Modal } from "@/components/ui/Modal";
import { SelectField } from "@/components/ui/SelectField";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  FirSolidIcon,
  MapPinSolidIcon,
  TwinFirIcon,
  UserSolidIcon,
} from "@/components/ui/Icons";

/**
 * Triage options. These are a first draft — adjust the wording to match how
 * the crew actually classifies urgent calls.
 */
const situations = [
  "A tree has come down",
  "A tree is leaning or unstable",
  "A large branch has failed",
  "A tree is on the house, wires or a vehicle",
  "Storm damage to clear",
  "Not sure — please take a look",
];

export function SameDayVisitModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [situation, setSituation] = useState<string | null>(null);
  const [isBlocked, setIsBlocked] = useState(false);
  const titleId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // No destination is configured — see the note at the top of this file.
    setIsBlocked(true);
  }

  function close() {
    setIsOpen(false);
    setIsBlocked(false);
  }

  return (
    <>
      <Button
        variant="primary"
        className="group"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
      >
        <TwinFirIcon className="size-7 text-[#160f03]" />
        Get a Free Quote
        <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
      </Button>

      <Modal isOpen={isOpen} onClose={close} labelledBy={titleId}>
        {/* The photo column's share includes the brush band, which overlaps it */}
        <div className="grid lg:grid-cols-[50.93%_minmax(0,1fr)]">
          {/* ---------- Photograph ---------- */}
          <div className="modal-media relative hidden lg:block">
            <Image
              src="/assets/modal-same-day-lift.webp"
              alt="Arborist working from a raised boom lift in a residential front yard"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            {/* Dry-brush edge traced from the design, biting the panel colour into the photo */}
            <span className="modal-media__edge" aria-hidden="true" />
          </div>

          {/* ---------- Triage form ---------- */}
          <div className="modal-form">
            <h2 id={titleId} className="heading-display modal-form__title">
              Tree Down or
              <br />
              <span className="text-brand">About to Fall?</span>
            </h2>

            <p className="modal-form__lead">Get a same day look.</p>
            <p className="modal-form__sub">We&apos;ll assess it and give you the next steps.</p>

            <form className="modal-form__fields" onSubmit={handleSubmit}>
              <SelectField
                label="What's happening right now?"
                placeholder="What's happening right now?"
                options={situations}
                value={situation}
                onChange={setSituation}
                icon={FirSolidIcon}
                required
              />

              <div className="field-dark">
                <MapPinSolidIcon className="field-dark__icon" />
                <label htmlFor="same-day-address" className="sr-only">
                  Property address or nearest town
                </label>
                <input
                  id="same-day-address"
                  name="address"
                  type="text"
                  required
                  autoComplete="street-address"
                  placeholder="Property address or nearest town"
                  className="field-dark__input"
                />
              </div>

              <div className="field-dark">
                <UserSolidIcon className="field-dark__icon" />
                <label htmlFor="same-day-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="same-day-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="field-dark__input"
                />
              </div>

              <button type="submit" className="button modal-form__submit group">
                Request a Same Day Visit
                <ChevronRightIcon className="size-[0.9em] transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {isBlocked && (
                <p
                  role="alert"
                  className="rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-white"
                >
                  This form isn&apos;t connected yet, so nothing was sent. For anything urgent,
                  please call{" "}
                  <a href={siteConfig.phone.href} className="font-bold text-brand underline">
                    {siteConfig.phone.display}
                  </a>
                  .
                </p>
              )}

              <p className="modal-form__note">No obligation. We&apos;ll be in touch shortly.</p>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
