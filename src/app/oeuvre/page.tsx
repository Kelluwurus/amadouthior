import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import FilmGrid from "@/components/films/FilmGrid";
import { films } from "@/content/films";

export const metadata: Metadata = {
  title: "L'Œuvre",
  description:
    "Films, documentaires, fictions et productions d'Amadou Thior qui témoignent d'un regard porté sur la société sénégalaise.",
};

export default function OeuvrePage() {
  return (
    <div className="section-py pt-32">
      <Container>
        <Reveal>
          <div className="mb-12">
            <span className="text-meta text-[--color-accent] block mb-3">
              Filmographie
            </span>
            <h1 className="text-h1 text-[--color-fg] mb-4">L&apos;Œuvre</h1>
            <p className="text-body text-[--color-fg-muted] max-w-2xl">
              Films, documentaires, fictions et productions qui témoignent d&apos;un
              regard porté sur la société sénégalaise.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <FilmGrid films={films} />
        </Reveal>
      </Container>
    </div>
  );
}
