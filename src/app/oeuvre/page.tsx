import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "L'Œuvre",
  description:
    "Films, documentaires, fictions et productions d'Amadou Thior qui témoignent d'un regard porté sur la société sénégalaise.",
};

export default function OeuvrePage() {
  return (
    <div className="section-py pt-32">
      <Container>
        <div className="text-meta text-[--color-accent] mb-3">Filmographie</div>
        <h1 className="text-h1 text-[--color-fg] mb-6">L&apos;Œuvre</h1>
        <p className="text-body text-[--color-fg-muted] max-w-2xl">
          Films, documentaires, fictions et productions qui témoignent d&apos;un
          regard porté sur la société sénégalaise.
        </p>
        {/* TODO: Phase 3 — Film grid with filters */}
      </Container>
    </div>
  );
}
