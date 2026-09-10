"use client";

/**
 * SELECT FIELD
 *
 * Custom dropdown, because a native <select> cannot carry the leading icon and
 * dark styling the design calls for — browsers render the closed control and
 * the option list themselves.
 *
 * Implemented as a proper listbox so it behaves like the native control:
 *   - Enter / Space / ArrowDown / ArrowUp opens it
 *   - Arrows move the active option, Home / End jump to the ends
 *   - Enter or Space selects, Escape closes without selecting
 *   - Tab or a click outside closes it
 *   - aria-activedescendant tracks the highlighted option for screen readers
 */

import { useEffect, useId, useRef, useState, type ElementType } from "react";

import { ChevronDownIcon } from "@/components/ui/Icons";

type SelectFieldProps = {
  label: string;
  placeholder: string;
  options: ReadonlyArray<string>;
  value: string | null;
  onChange: (value: string) => void;
  icon: ElementType;
  required?: boolean;
};

export function SelectField({
  label,
  placeholder,
  options,
  value,
  onChange,
  icon: Icon,
  required = false,
}: SelectFieldProps) {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  /* --- Click outside closes --- */
  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  function open() {
    setActiveIndex(value ? Math.max(0, options.indexOf(value)) : 0);
    setIsOpen(true);
  }

  function select(index: number) {
    onChange(options[index]);
    setIsOpen(false);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (!isOpen) {
      if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(event.key)) {
        event.preventDefault();
        open();
      }
      return;
    }

    switch (event.key) {
      case "Escape":
        event.preventDefault();
        event.stopPropagation(); // Do not also close the surrounding modal
        setIsOpen(false);
        break;
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((i) => (i + 1) % options.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((i) => (i - 1 + options.length) % options.length);
        break;
      case "Home":
        event.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        event.preventDefault();
        setActiveIndex(options.length - 1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        select(activeIndex);
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  }

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        id={`${id}-button`}
        className="field-dark"
        data-open={isOpen}
        /* combobox, not the implicit button role: only combobox supports
           aria-activedescendant and aria-required (ARIA 1.2 pattern). */
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${id}-listbox`}
        aria-label={label}
        aria-required={required}
        aria-activedescendant={isOpen ? `${id}-option-${activeIndex}` : undefined}
        onClick={() => (isOpen ? setIsOpen(false) : open())}
        onKeyDown={handleKeyDown}
      >
        <Icon className="field-dark__icon size-5" />
        <span className={`flex-1 text-base ${value ? "text-white" : "text-on-dark-muted"}`}>
          {value ?? placeholder}
        </span>
        <ChevronDownIcon
          className={`size-5 shrink-0 text-on-dark-muted transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <ul
        id={`${id}-listbox`}
        role="listbox"
        aria-label={label}
        className="select-menu"
        data-open={isOpen}
      >
        {options.map((option, index) => (
          <li
            key={option}
            id={`${id}-option-${index}`}
            role="option"
            aria-selected={value === option}
            data-active={index === activeIndex}
            data-selected={value === option}
            className="select-option"
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => select(index)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
