import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { getCineclub } from "@/lib/content";

export default function CineclubTeaser() {
  const cineclub = getCineclub();

  return (
    <section className="section-py">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <p className="text-meta mb-3">Projet contemporain</p>
          <h2 className="text-h2 mb-6">{cineclub.titre}</h2>
        </Reveal>

        <Reveal delay={80}>
          <Link
            href="/cineclub"
            className="group block border border-[--color-border] p-8 md:p-10 hover:border-[--color-accent]/30 transition-colors duration-300"
          >
            <p className="text-body text-lg leading-relaxed mb-2 max-w-xl">
              {cineclub.description}
            </p>
            <p className="text-caption text-[--color-fg-subtle] italic mb-6">
              {cineclub.accroche}
            </p>
            <span className="inline-flex items-center gap-2 text-sm text-[--color-accent] group-hover:gap-3 transition-all duration-300">
              Découvrir le projet <ArrowRight size={14} />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
