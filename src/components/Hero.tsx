import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#161616] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(196,114,58,0.04)_0%,transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.025] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20256%20256%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E')] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-[#c4723a] mb-6">
          Réalisateur · Producteur · Formateur Audiovisuel
        </p>

        <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#f5f0eb] leading-[1.1] mb-8">
          Amadou Thior
        </h1>

        <p className="text-base md:text-lg text-[#9ca3af] leading-relaxed max-w-2xl mx-auto mb-12">
          Plus de 40 ans au service du cinéma africain. Du compagnonnage avec
          Ousmane Sembène à la formation des nouvelles générations, une carrière
          dédiée à la création, la transmission et la mémoire.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#filmography"
            className="px-7 py-3 text-sm font-medium bg-[#c4723a] text-white rounded hover:bg-[#d4845a] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c4723a]/20"
          >
            Voir la filmographie
          </a>
          <a
            href="#contact"
            className="px-7 py-3 text-sm font-medium border border-[#c4723a]/60 text-[#f5f0eb] rounded hover:bg-[#c4723a]/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Me contacter
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <ArrowDown size={16} className="text-[#c4723a] animate-bounce" />
      </div>
    </section>
  );
}
