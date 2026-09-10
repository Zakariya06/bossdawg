/**
 * PAGE PLACEHOLDER
 * Purpose: Marks a route that exists and is reachable from the navigation but
 * has no approved design yet. Keeps stub pages on the shared design system
 * instead of each one inventing its own holding layout.
 *
 * Delete this component once every route has real content.
 */

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site-config";
import { ArrowRightIcon, PhoneIcon } from "@/components/ui/Icons";

type PagePlaceholderProps = {
  /** What this page will contain once designed. */
  note: string;
};

export function PagePlaceholder({ note }: PagePlaceholderProps) {
  return (
    <section className="section section--muted">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-card border border-line bg-white p-8 text-center md:p-12">
            <h2 className="heading-section text-h3">Content coming soon</h2>
            <p className="mt-4 text-body">{note}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button href={siteConfig.phone.href} variant="primary">
                <PhoneIcon className="size-5" />
                {siteConfig.phone.display}
              </Button>
              <Button href="/" variant="outline-dark" className="group">
                Back to Home
                <ArrowRightIcon className="size-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
