/**
 * PAGE HEADER
 * Purpose: Standard dark banner at the top of every non-home page, so inner
 * pages share one entry treatment and clear the fixed site header.
 */

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
      <Container>
        {eyebrow && (
          <Reveal delay={80}>
            <p className="eyebrow text-white">{eyebrow}</p>
          </Reveal>
        )}

        <TextReveal
          as="h1"
          playOnMount
          delay={180}
          className="heading-display mt-5 text-h1 text-white"
          segments={[{ text: title }]}
        />

        {description && (
          <Reveal delay={500}>
            <p className="mt-5 max-w-2xl text-lead text-on-dark-muted">{description}</p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
