import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1a1a1a] to-[#0d0d0d]" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(200,162,74,0.03)_0%,transparent_60%)]" />

      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22noise%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.85%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23noise)%22%2F%3E%3C%2Fsvg%3E')] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        <p className="text-xs md:text-sm font-medium tracking-[0.25em] uppercase text-[#C8A24A] mb-6">
          Amadou Thior — Réalisateur & Passeur de Mémoire
        </p>

        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F8F5EF] leading-[1.1] mb-8">
          Filmer l&apos;humain,
          <br />
          transmettre l&apos;histoire.
        </h1>

        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-12">
          Plus de trois décennies au cœur du 7ᵉ art africain, entre création,
          engagement et formation. Du Sénégal aux festivals internationaux, une
          œuvre au service de la mémoire et de la transmission.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#filmographie"
            className="px-8 py-3.5 text-sm font-medium bg-[#C8A24A] text-[#121212] rounded hover:bg-[#d4af5a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,162,74,0.25)]"
          >
            Explorer la filmographie
          </a>
          <a
            href="#parcours"
            className="px-8 py-3.5 text-sm font-medium border border-[#C8A24A] text-[#F8F5EF] rounded hover:bg-[#C8A24A]/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Découvrir le parcours
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] tracking-[0.15em] uppercase text-zinc-500">
          Défiler
        </span>
        <ChevronDown size={16} className="text-[#C8A24A] animate-bounce" />
      </div>
    </section>
  );
}
