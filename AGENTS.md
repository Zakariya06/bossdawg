# AGENTS.md — Website Development Rules

## 1. Purpose

This file defines the mandatory development and design rules for this website. Every coding agent, including Codex, Claude Code, and other AI assistants, must read and follow these instructions before creating or modifying any page.

The goal is to maintain a consistent, professional website with reusable components, meaningful code, clean documentation, and a single design system.

---

## 2. Project Context — This Repository

**Project:** `bossdawg`
**Root:** `D:\AI Indian workspace\bossdawg\bossdawg`

**Stack (as scaffolded):**

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16.3.4 — App Router, Turbopack |
| UI runtime | React 19.2.8 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 (CSS-first config via `@theme`) |
| Linting | ESLint 9 + `eslint-config-next` |
| Package manager | npm |
| Import alias | `@/*` → `./src/*` |

**Current structure:**

```
src/
  app/
    layout.tsx            # Root layout — fonts, SiteHeader, global metadata
    page.tsx              # Home page
    globals.css           # Design tokens + shared classes (SOURCE OF TRUTH)
    services/page.tsx     # + tree-removal / stump-grinding / land-clearing
    service-area/page.tsx
    about/page.tsx
    gallery/page.tsx
    contact/page.tsx
  components/
    layout/     SiteHeader
    sections/   HeroSection, PropertyTypesBar, PageHeader, PagePlaceholder
    motion/     Reveal, TextReveal
    ui/         Button, Container, Logo, Icons
  lib/
    site-config.ts        # Phone, hours, rating, location, navigation
public/
  assets/                 # Optimised WebP images only (see §14.1)
scripts/
  optimize-assets.mjs     # Image intake: any format -> compressed WebP
```

**Where the rules below live in this stack:**

| Rule refers to | In this project |
| --- | --- |
| Design tokens (§5) | `src/app/globals.css` — inside `@theme { … }` and `:root { … }` |
| Shared components (§11) | `src/components/` — create on first need, one file per component |
| Page sections (§9) | Section components under `src/components/sections/` |
| Typography (§6) | Token-driven; fonts loaded once via `next/font` in `src/app/layout.tsx` |
| Reusable CSS (§7) | Tailwind utility compositions extracted into components, plus semantic classes in `globals.css` where a utility string repeats |
| Assets (§14) | `public/assets/` — WebP only, via the intake script |
| Animation (§22) | `Reveal` / `TextReveal` + `globals.css` §09–§11 |
| Business details | `src/lib/site-config.ts` |
| Pages | `src/app/<route>/page.tsx` |

**Commands:**

```bash
npm run dev              # dev server (Turbopack)
npm run build            # production build — the verification gate
npm run lint             # ESLint
npm run optimize:assets  # image intake -> compressed WebP (see §14.1)
```

**Stack-specific clarifications (these do not override the rules, they translate them):**

- Tailwind v4 has **no `tailwind.config.js`**. Tokens are declared in CSS with `@theme`. Do not create a JS config file.
- "Reusable CSS" in a React project means **a reusable component**, not a copy-pasted utility string. If the same Tailwind class string appears in three places, extract a component (or an `@apply`-backed semantic class) rather than repeating it.
- §18 (Single-File Projects) does **not** apply here. This is a multi-file Next.js project; keep it that way unless explicitly told otherwise.
- Server Components are the default. Add `"use client"` only where state, effects, or browser APIs are genuinely needed, and keep such components as leaves of the tree.

---

## 3. Project Discovery — Read Before Editing

Before starting any task:

1. Inspect the project folder and understand the existing structure.
2. Read `AGENTS.md`, `CLAUDE.md` (if present), and any design-system or style-reference files.
3. Identify the existing fonts, colors, typography, container widths, spacing, buttons, cards, and shared components.
4. Review the page or section provided as the design reference.
5. Search for reusable CSS classes and existing components before writing new ones.
6. Preserve the current project architecture and avoid unrelated changes.

Do not begin coding until the relevant existing files and design rules have been reviewed.

**Concretely, for this repo:** read `src/app/globals.css` and `src/app/layout.tsx` first, then list `src/components/` before writing any new component.

---

## 4. Single Source of Truth for Design

The website must use one consistent design system across all pages. The first approved design or the provided reference folder is the source of truth.

If design tokens or shared styles already exist, reuse them. Do not create competing values or duplicate design systems.

The following must remain consistent:

- Font families and font weights.
- Heading sizes and line heights.
- Body typography and paragraph spacing.
- Brand colors and background colors.
- Container widths and horizontal padding.
- Section spacing and vertical rhythm.
- Button styles, padding, and border radius.
- Card styles, shadows, and borders.
- Navigation and footer appearance.
- Responsive breakpoints and mobile behavior.
- Icon sizing and image treatment.

Do not invent new styling values when an approved value already exists.

---

## 5. Design Tokens

Use CSS custom properties for shared design values. If the project already contains tokens, extend or reuse them rather than replacing them.

The example below is a structural template. Actual values must come from the approved design reference.

```css
:root {
  /* Brand colors */
  --color-primary: /* approved value */;
  --color-secondary: /* approved value */;
  --color-accent: /* approved value */;
  --color-background: /* approved value */;
  --color-surface: /* approved value */;
  --color-text: /* approved value */;
  --color-text-muted: /* approved value */;
  --color-border: /* approved value */;

  /* Typography */
  --font-primary: /* approved font */;
  --font-secondary: /* approved font */;

  --font-size-h1: /* approved size */;
  --font-size-h2: /* approved size */;
  --font-size-h3: /* approved size */;
  --font-size-h4: /* approved size */;
  --font-size-body: /* approved size */;
  --font-size-small: /* approved size */;

  /* Layout */
  --container-max: /* approved width */;
  --section-spacing: /* approved spacing */;
  --section-spacing-mobile: /* approved spacing */;

  /* Components */
  --button-radius: /* approved radius */;
  --card-radius: /* approved radius */;
}
```

Never use these placeholders as literal production CSS. Replace them only with values verified from the existing design.

**In this project:** declare tokens inside `@theme { … }` in `src/app/globals.css` so Tailwind generates matching utilities (`bg-primary`, `text-muted`, `rounded-card`, …). Tokens Tailwind should not turn into utilities go in a plain `:root` block in the same file. All tokens live in that one file — nowhere else.

---

## 6. Typography Rules

All pages must use the same typography hierarchy.

- Use only the approved font families.
- Load fonts once through the existing font-loading method.
- Reuse the existing H1, H2, H3, H4, body, and small-text styles.
- Do not create slightly different heading sizes for individual pages.
- Maintain consistent font weights, letter spacing, and line heights.
- Use semantic heading order: H1 for the page title, H2 for major sections, H3 for subsections.
- Do not skip heading levels merely to achieve a visual style.
- Use responsive typography consistently across the website.

If a reference requires a unique typography treatment, document it as an intentional exception rather than silently changing the global system.

**In this project:** fonts are loaded exactly once with `next/font` in `src/app/layout.tsx` and exposed as CSS variables. Never add a Google Fonts `<link>` or a CSS `@import` for fonts.

---

## 7. Reusable CSS — Mandatory

Before adding CSS, search the existing codebase for a class or component that already provides the required styling.

Reuse shared implementations for:

- Containers.
- Section layouts.
- Buttons and button variants.
- Typography.
- Cards.
- Grids.
- Badges.
- Forms.
- Image wrappers.
- Spacing utilities.
- Navigation and footer elements.

Do not write duplicate CSS for every page. Do not create a new class when an existing class can be reused without changing its intended behavior.

**Preferred approach (markup form):**

```html
<section class="section section--light">
  <div class="container">
    <div class="section-heading">
      <h2 class="section-heading__title">Our Services</h2>
      <p class="section-heading__description">Supporting description.</p>
    </div>

    <a class="button button--primary" href="/contact">
      Get a Quote
    </a>
  </div>
</section>
```

**Preferred approach (this project's React form):**

```tsx
<Section tone="light">
  <Container>
    <SectionHeading
      title="Our Services"
      description="Supporting description."
    />
    <Button href="/contact" variant="primary">
      Get a Quote
    </Button>
  </Container>
</Section>
```

**Avoid:**

```css
.home-page-button { /* duplicated button styles */ }
.about-page-button { /* same duplicated button styles */ }
.services-page-button { /* same duplicated button styles */ }
```

Equally avoid the React version of the same mistake: `HomeButton`, `AboutButton`, `ServicesButton`. One `Button` with variants.

When a component genuinely needs a variation, use a meaningful modifier — `.button--outline`, `.section--dark`, `.card--featured`, or a typed `variant` prop.

---

## 8. Naming Conventions

Use meaningful, readable, and consistent names for all classes, IDs, functions, variables, and files.

### CSS classes

Prefer descriptive, component-based names using a consistent naming convention.

Good examples:

- `.site-header`
- `.site-header__navigation`
- `.hero-section`
- `.hero-section__content`
- `.service-card`
- `.service-card__image`
- `.service-card__title`
- `.button--primary`
- `.contact-form__field`

Avoid vague or generated names:

- `.box1`
- `.div2`
- `.abc`
- `.style-new`
- `.blue-thing`
- `.section-123`
- `.final-fix`
- `.test-class`

Use names that describe the element's purpose, not its temporary appearance or position.

### JavaScript / TypeScript

Use clear names such as `initializeMobileMenu`, `handleFormSubmit`, and `updateHeaderOnScroll`. Avoid ambiguous names such as `fn1`, `temp`, or `doStuff`.

### React components and files (this project)

- Components: `PascalCase` — `ServiceCard`, `SiteHeader`, `SectionHeading`.
- Component files: `src/components/ServiceCard.tsx` (file name matches the component).
- Routes: lowercase kebab-case folders — `src/app/case-studies/page.tsx`.
- Props interfaces: `ServiceCardProps`.
- Hooks: `useMobileMenu`.

---

## 9. HTML Structure and Documentation

Use semantic HTML and clearly document major sections.

Every major page section should include a short comment explaining its purpose. Use consistent opening and closing section markers when working in long or single-file HTML pages.

```html
<!-- ==================================================
     HERO SECTION
     Purpose: Primary page introduction and conversion
     ================================================== -->
<section class="hero-section">
  ...
</section>
<!-- END HERO SECTION -->
```

For repeated components, use comments only where they improve navigation or explain non-obvious behavior. Do not fill the code with unnecessary comments describing obvious HTML.

Use appropriate semantic elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`.

**In this project:** a section component's file is its own boundary, so a closing marker is unnecessary. Put a short block comment at the top of each section component stating its purpose, and keep `page.tsx` files readable as a plain list of composed sections.

```tsx
/**
 * HERO SECTION
 * Purpose: Primary page introduction and conversion.
 */
export function HeroSection() { … }
```

---

## 10. CSS Organization and Comments

Organize CSS in a predictable order. Keep shared styles together and page-specific exceptions clearly separated.

Recommended organization for `src/app/globals.css`:

```css
/* ==================================================
   01. DESIGN TOKENS
   ================================================== */

/* ==================================================
   02. RESET & BASE STYLES
   ================================================== */

/* ==================================================
   03. TYPOGRAPHY
   ================================================== */

/* ==================================================
   04. LAYOUT & CONTAINERS
   ================================================== */

/* ==================================================
   05. SHARED COMPONENTS
   Buttons, cards, forms, badges, etc.
   ================================================== */

/* ==================================================
   06. HEADER & NAVIGATION
   ================================================== */

/* ==================================================
   07. PAGE SECTIONS
   ================================================== */

/* ==================================================
   08. FOOTER
   ================================================== */

/* ==================================================
   09. RESPONSIVE STYLES
   ================================================== */
```

Do not append endless override blocks at the bottom of the stylesheet. Update the original rule when appropriate, consolidate duplicates, and remove obsolete declarations after verifying they are unused.

Comments should explain important decisions, component boundaries, or exceptional behavior — not repeat every CSS property.

---

## 11. Shared Components and Page Consistency

The following elements must use the same approved implementation across the website unless explicitly instructed otherwise:

- Header and navigation.
- Mobile menu.
- Primary and secondary buttons.
- Section heading patterns.
- Service cards and reusable card variants.
- Contact and CTA sections.
- Review or testimonial components.
- Footer.
- Form fields and validation styling.

Do not independently redesign a shared component on a new page. Reuse the existing implementation or make a controlled, reusable improvement that does not break other pages.

**In this project:** header and footer belong in `src/app/layout.tsx` so every route inherits them. Changing a shared component means checking every route that renders it before the change counts as done.

---

## 12. Container and Spacing Rules

All pages must follow the approved container system.

- Use the existing maximum container width.
- Keep horizontal padding consistent.
- Use shared section spacing values.
- Align major section content to the same grid.
- Maintain consistent gaps between headings, descriptions, cards, and CTAs.
- Do not introduce arbitrary widths or margins to visually fix one section.
- Use responsive spacing tokens or established breakpoints.

If a full-width or asymmetric section is required by the reference, keep its internal content aligned with the shared container where appropriate.

**In this project:** no arbitrary Tailwind values (`w-[1187px]`, `mt-[37px]`) to nudge a single section into place. If a value is needed repeatedly, it is a token.

---

## 13. Responsive Design

Every new section must work on desktop, tablet, and mobile.

- Reuse existing breakpoints.
- Avoid horizontal overflow.
- Ensure text remains readable at small widths.
- Stack or reflow grids appropriately.
- Keep buttons and interactive elements usable on touch devices.
- Preserve image aspect ratios and avoid unintended cropping.
- Do not use fixed heights that clip content unless the design explicitly requires them.
- Test responsive behavior without changing unrelated sections.

Do not create a separate, inconsistent mobile design system.

**In this project:** use Tailwind's default breakpoints (`sm` `md` `lg` `xl` `2xl`) and build mobile-first — unprefixed classes describe the mobile state.

### 13.1 The hero fits exactly one viewport

`.hero` is `min-height: 100svh` and must never exceed the viewport at any size. `svh` (small viewport height) is used deliberately so a mobile address bar retracting cannot push the bottom of the hero off screen.

Because the hero is height-constrained, its internals are sized in `vh` as well as `vw`, so they compress together rather than overflowing:

- `.hero__content` padding, `.hero__photo` width, and the `.hero__headline` / `.hero__lede` / `.hero__actions` / `.hero__stats` rhythm all use `clamp(min, Xvh, max)`.
- `--text-h1` is wrapped in `min(…, 9vh)` so the headline shrinks on short screens.

**Verified fitting exactly** at 375×812, 1280×720, 768×1024, 1440×900 and 1920×1080. Any content added to the hero must be re-checked at 1280×720 and 375×812 — those are the tightest cases. If something new does not fit, scale it in `vh` rather than clipping it or letting the section grow.

---

## 14. Assets and Images

Use assets from the provided project folder whenever possible.

- Preserve meaningful file names.
- Use the approved logo and brand assets.
- Do not replace supplied imagery without instruction.
- Reuse existing assets rather than creating unnecessary duplicates.
- Add descriptive alt text for meaningful images.
- Use empty alt text for purely decorative images.
- Preserve intended image ratios and cropping.
- Do not introduce external image dependencies unless approved.

If an asset is missing, report the missing asset or use an explicitly approved placeholder. Do not silently invent a replacement.

**In this project:** assets live in `public/assets/`. Use `next/image` for content imagery (it requires explicit `width`/`height`, or `fill`). Remote image hosts require an entry in `next.config.ts` — which is an external dependency and needs approval per §17.

### 14.1 Image intake pipeline — mandatory

**Every image supplied for this project must be converted to WebP and compressed before it enters the codebase.** Never commit a raw PNG or JPG into `public/`, and never reference an image from `Downloads`, the desktop, or any path outside the project.

The intake step is a single command:

```bash
npm run optimize:assets -- "<source path>" --name=<slug> --width=<px>
```

It writes a compressed `.webp` into `public/assets/` and prints the before/after size. The source file is never modified or deleted.

Rules:

1. **Convert first, reference second.** Run the optimizer, then point the component at `/assets/<slug>.webp`. A component must never reference the original file.
2. **Name by meaning, not by origin.** `hero-tree-removal-bucket-lift.webp`, not `ChatGPT Image Sep 8.webp` or `img1.webp`. The `--name` flag sets this.
3. **Cap the width at the largest size the layout actually uses.** `--width=2000` for a full-bleed hero, `--width=800` for an inset card, `--width=400` for a logo. Never upscale — the script refuses to enlarge past the source's native width.
4. **Quality defaults to 82** and is right for photographs. Drop to `--quality=70` for large decorative backgrounds; raise it for images with text or fine linework.
5. **Re-running is safe.** The script overwrites, so a re-supplied asset is re-optimised with the same command.
6. **Batch intake** accepts several files or a whole folder: `npm run optimize:assets -- ./incoming` converts every supported image inside it.
7. **Report the result** — original size, final size, and the slug — when handing work back, so it is clear what entered the repo.

Do not add another image tool or CDN. `sharp` is installed as a devDependency solely for this pipeline and is not used at runtime.

---

## 15. JavaScript and Functionality

Preserve existing functionality while making design changes.

- Reuse existing JavaScript utilities and components.
- Avoid duplicate event listeners and conflicting scripts.
- Use meaningful function and variable names.
- Keep behavior separate from presentation where the architecture allows.
- Do not add unnecessary libraries or dependencies.
- Do not remove working functionality to simplify a design implementation.
- Ensure navigation, forms, buttons, and interactive components remain functional.

**In this project:** default to Server Components. Reach for `"use client"` only where interactivity demands it, and push it as far down the tree as possible so pages stay server-rendered. Clean up every listener registered in a `useEffect`.

---

## 16. Page Development Workflow

For every new page or section, follow this sequence:

**Step 1 — Analyze.** Read the relevant project files and design references. Identify existing components, CSS classes, tokens, and assets that can be reused.

**Step 2 — Plan.** Determine which elements are reusable and which genuinely require new code. Identify any missing assets or design details.

**Step 3 — Implement.** Build the requested page or section using the existing design system. Use semantic HTML, meaningful names, and shared styles.

**Step 4 — Consolidate.** Check for duplicated CSS, unnecessary overrides, unused classes, and repeated JavaScript. Reuse or consolidate code where safe.

**Step 5 — Verify.** Check that the design is consistent with the reference, responsive, and functional. Ensure unrelated sections remain unchanged. In this project, `npm run build` must pass — it runs the TypeScript check as part of the build.

**Step 6 — Report.** Summarize the files changed, the components reused, and any important assumptions or unresolved issues.

---

## 17. Scope Control

Only modify files and sections relevant to the current task.

Do not:

- Redesign unrelated pages.
- Change global typography without instruction.
- Replace existing assets without approval.
- Rename working classes unnecessarily.
- Reformat entire files for a small change.
- Add libraries merely for convenience.
- Introduce unrelated features.
- Run destructive commands without explicit authorization.

When a global change is genuinely necessary, explain the impact and ensure existing pages remain consistent.

---

## 18. Single-File Projects

If the provided project is intentionally built as a single HTML file, preserve that architecture unless the user explicitly requests a different structure.

For single-file projects:

- Keep HTML, CSS, and JavaScript in the existing file.
- Organize CSS and JavaScript with clear section comments.
- Reuse global classes and CSS variables.
- Do not create extra files or build systems without permission.
- Do not split the project into frameworks or components unless requested.
- Avoid repeated style blocks and duplicated scripts.

The instruction to use reusable CSS applies equally to single-file and multi-file projects.

> **Not applicable to this repository.** `bossdawg` is a multi-file Next.js project. This section is retained for reference only; do not collapse this project into a single file.

---

## 19. Fast Execution and Minimal Tool Usage — Mandatory

The primary responsibility of the coding agent is to implement the user's requested changes efficiently. Follow the user's instructions and prioritize editing the actual project files over performing unnecessary operations.

### 19.1 Default Workflow: Build First

For normal website development tasks, follow this workflow:

1. Read the relevant instructions and existing code.
2. Identify the specific files and sections that need modification.
3. Implement the requested changes directly.
4. Perform only minimal, relevant verification.
5. Report what was changed and stop.

Do not automatically start a browser, launch a preview server, run a full build, or perform extensive testing after every edit.

### 19.2 Avoid Unnecessary Operations

Unless the user explicitly requests them or they are genuinely required to complete the task, do not:

- Open browser previews or use browser automation.
- Take screenshots or perform visual comparisons.
- Run repeated development-server previews.
- Run full project builds after minor HTML or CSS changes.
- Run entire test suites for simple styling edits.
- Perform repeated linting or formatting passes.
- Scan the entire project repeatedly after the relevant files are known.
- Read unrelated folders or files.
- Install packages or dependencies.
- Create temporary scripts, reports, or extra documentation.
- Repeatedly check the same result using multiple tools.
- Perform lengthy research when the provided code and instructions are sufficient.

Do not use a tool simply because it is available. Every operation must have a clear purpose related to the user's current request.

### 19.3 When Verification Is Appropriate

Use the smallest check that can reasonably verify the change. For example:

- Text, spacing, color, or CSS edits: inspect the changed code and avoid browser previews unless requested.
- HTML section creation: check structure, class reuse, and obvious syntax issues.
- JavaScript functionality: run a focused check when necessary to confirm the changed behavior.
- Dependency, configuration, or build-related changes: run the relevant build or command when required.
- User explicitly requests testing or a preview: perform the requested verification.

If a check is likely to be expensive, prefer a targeted alternative. Do not skip essential checks when there is a meaningful risk of breaking functionality or losing data.

### 19.4 No Repeated Preview Loop

Do not follow a cycle of:

Edit → Preview → Screenshot → Analyze → Edit → Preview → Screenshot

unless the user specifically requests visual verification or the task cannot be completed correctly without it.

For design implementation, use the supplied screenshot, existing design system, and code as the primary references. Implement the requested section directly and move on.

### 19.5 Respect the User's Requested Scope

If the user says to only code, only edit a specific section, skip previews, or avoid extra operations, follow that instruction.

Do not expand the task into unrelated improvements, audits, refactoring, or testing. Do not ask for confirmation when the task is clear and the required information is already available.

If an operation outside the requested scope is essential, keep it minimal and explain the reason briefly.

### 19.6 Stop When the Task Is Complete

Once the requested changes are implemented and the necessary minimal checks are complete, stop working.

Do not continue polishing unrelated details, running additional tools, or searching for optional improvements. Provide a concise summary of the changed files and any important limitations.

**Core rule: Read → Edit → Minimal Check → Finish.**

### 19.7 Working practices for this project

- Prefer targeted edits over rewriting entire files.
- Use existing project tools and commands rather than introducing new ones.
- Keep one `npm run dev` server running rather than starting a fresh one per edit; Fast Refresh already reflects changes.
- Save `npm run build` for the end of a task, not after each edit. It remains required by §21 before work is called done — and by §19.3, for dependency, configuration, or build-related changes.

---

## 20. Design Reference Priority

When instructions conflict, follow this priority:

1. The user's latest explicit task instructions.
2. The approved design reference and provided assets.
3. The project's existing design system and shared components.
4. This `AGENTS.md` file.
5. Existing code conventions.
6. General coding best practices.

If a design detail is not specified, infer it from the closest approved component rather than inventing a new style.

---

## 21. Definition of Done

A task is complete only when:

- The requested section or page is implemented.
- The design matches the approved reference.
- Fonts, colors, typography, spacing, and buttons are consistent.
- Existing reusable CSS and components have been used where possible.
- New classes and functions have meaningful names.
- Major sections and CSS groups are documented.
- Duplicate and unnecessary CSS has been avoided.
- Responsive behavior is appropriate.
- Existing functionality remains intact.
- Unrelated files and sections have not been changed.
- `npm run build` passes with no TypeScript or lint errors.

---

## 22. Animation & Motion — Mandatory

The site uses **one** motion system. Every section animates the same way, at the same speed, with the same easing. Do not hand-roll a new animation on a page, and do not add a motion library — the system is CSS keyframes plus two small components, and it covers every case so far.

### The two primitives

| Component | Use | File |
| --- | --- | --- |
| `<Reveal>` | Fade-up-on-scroll for any block: paragraphs, buttons, cards, images, list items. | `src/components/motion/Reveal.tsx` |
| `<TextReveal>` | Word-by-word mask reveal for headings — words slide up from behind a clipping box. | `src/components/motion/TextReveal.tsx` |

```tsx
<Reveal delay={120}>
  <p className="text-lead">Supporting copy.</p>
</Reveal>

<TextReveal
  as="h2"
  segments={[
    { text: "Land Clearing in" },
    { text: "Eastern Ontario", newLine: true, asBlock: true, className: "heading-accent" },
  ]}
/>
```

### Rules

1. **Every major element animates in.** Section headings use `TextReveal`; everything else is wrapped in `Reveal`. A section where content simply appears is not finished.
2. **Reveals fire once.** The observer disconnects after the first intersection — animations never replay on scroll-up, and never reverse.
3. **Stagger with `delay`, in 80–180 ms steps.** Follow reading order: eyebrow → heading → body → buttons → stats. Total stagger for one section should stay under ~1.2 s.
4. **For grids and lists, derive the delay from the index** — `delay={index * 90}` — rather than hard-coding a delay per card.
5. **Above-the-fold headings use `playOnMount`.** The hero must not wait for a scroll event that will never come, and must not flash hidden text on first paint.
6. **Gradient text must use `asBlock`.** `background-clip: text` paints nothing when the gradient sits on an ancestor of the text, so the gradient class is applied to the element holding the text, and the phrase reveals as one unit to keep the colour ramp continuous.
7. **Never split text by line.** Splitting per line breaks on resize. `TextReveal` splits per word; use `newLine` for layout line breaks, which apply only at `lg` and above.
8. **Reduced motion is not optional.** `@media (prefers-reduced-motion: reduce)` in `globals.css` §11 forces every animated element to its final state. Any new keyframe must be added to that block.
9. **Timing and easing come from tokens** — `--duration-reveal`, `--duration-ui`, `--ease-out-soft`. Do not write a raw `cubic-bezier()` or a bare millisecond value in a component.
10. **Hover and UI transitions use `--duration-ui` (220 ms).** Entrance animations use `--duration-reveal` (800 ms). Do not blur the two.
11. **Animate only `opacity` and `transform`.** Never animate `width`, `height`, `top`, or `margin`. The one sanctioned exception is collapsing a container with `grid-template-rows: 0fr -> 1fr`, which has no transform equivalent and needs no measurement — used by the mobile menu and the FAQ accordion. Reach for that pattern rather than animating a height in JavaScript.
12. **New keyframes go in `globals.css` §10**, outside every `@layer` — keyframes are not subject to the cascade.

### Adding a new animation

If a genuinely new motion is needed, add the keyframe to §10, add a class to the `components` layer in §09, add its reduced-motion reset to §11, and document it here. Do not define keyframes inside a component file or a `<style>` tag.

---

## Open Items for This Project

**Approved reference:** the hero design supplied on 2026-09-09. Tokens in `globals.css` §01 are derived from it and are now the source of truth for every page.

**Colour values were sampled by eye from the reference image**, not from a style guide. If exact brand hex values exist, supply them and the tokens will be corrected in one place. Current values:

| Token | Value | Used for |
| --- | --- | --- |
| `--color-brand` | `#f97316` | Buttons, icons, accents |
| `--color-gold` | `#ffc24a` | Gradient end, badge labels, rating star |
| `--color-ink` | `#0d0d0d` | Dark section backgrounds |
| `--color-heading` | `#14332b` | Headings on light backgrounds |

`--color-heading` is a deliberate choice, not taken from the reference: headings were plain near-black and are now a deep forest green, which sits better against the brand orange. It is a single token — change it there to restyle every heading.

**Fonts are close matches, not confirmed.** Plus Jakarta Sans (headings) and Inter (body) approximate the reference. Permanent Marker stands in for the hand-lettered "Tough Trees. Trusted Locally." brand mark. Name the real typefaces and they change in `layout.tsx` alone.

### Supplied and in use

All in `public/assets/`, converted through the §14.1 pipeline:

| Asset | Notes |
| --- | --- |
| `hero-background.webp` | Plain hero photograph, no torn edge baked in |
| `hero-torn-edge.webp` | Cut-out torn edge, trimmed from 1672×941 to 1672×133 |
| `card-large-complex-removals.webp` | Hero inset card 1 |
| `card-experienced-tree-climbers.webp` | Hero inset card 2 |

The hero background and the torn edge are **separate layers on purpose**. Do not re-merge them: the edge is pinned to the bottom of the hero at a fluid height so it always lands on the boundary with the white section, at any viewport.

### Missing assets

Still placeholders in code, each marked with a comment naming the swap:

- **Logo** — the circular Bossdawg badge. `src/components/ui/Logo.tsx` draws a CSS stand-in. A true SVG cannot be produced from the raster mockup; supply the original vector, or a high-resolution cut-out of the badge on transparency.
- **Brush-stroke brand mark** — the painted "Tough Trees. Trusted Locally." lockup is currently a CSS approximation.

### Not yet designed

- **Footer** — no reference supplied; `globals.css` §08 is reserved for it.
- **Every route except Home** is a working stub using `PageHeader` + `PagePlaceholder`.

---

## Final Instruction

Treat the website as one unified product, not a collection of independently designed pages. Every new page must feel like it belongs to the same website. Reuse before creating, preserve before replacing, and maintain consistency before introducing variation.
