import type { Metadata } from "next";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import ConceptTimeline from "@/components/cineclub/ConceptTimeline";
import EditionCard from "@/components/cineclub/EditionCard";
import SponsorTable from "@/components/cineclub/SponsorTable";
import { editions, cineclubContact } from "@/data/cineclub";

export const metadata: Metadata = {
  title: "CINECLUB – DÎNER DÉBAT | Amadou Thior",
  description:
    "Le cinéma au service de l'humanitaire. Événementiel culturel, citoyen et humanitaire alliant projection, dîner et débat autour des Journées Internationales de l'ONU.",
  openGraph: {
    title: "CINECLUB – DÎNER DÉBAT — KOOM COM GROUPE",
    description:
      "Mêler l'utile à l'événementiel : projection, dîner, débat au service des grandes causes humanitaires.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function CineClubPage() {
  const edition2016 = editions.find((e) => e.id === "marcedes-2016")!;
  const edition2026 = editions.find((e) => e.id === "ghadi-2026")!;

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      {/* Back nav */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-[#2E5C1E]/20 py-3">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft size={16} />
            Retour au portfolio
          </a>
          <a
            href="#sponsoring"
            className="px-5 py-2 text-sm font-medium bg-[#2E5C1E] text-[#D4AF37] rounded hover:bg-[#3a6e2e] transition-colors"
          >
            Devenir partenaire
          </a>
        </div>
      </div>

      {/* 1. HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F4D1E]/20 via-[#0f0f0f] to-[#0f0f0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(46,92,30,0.15)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
            KOOM COM GROUPE présente
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-medium text-[#f5f0eb] leading-[1.1] mb-4">
            CINECLUB – DÎNER DÉBAT
          </h1>
          <p className="text-base md:text-lg text-[#D4AF37] font-medium mb-6">
            Cinéma · Dialogue · Solidarité · Action
          </p>
          <p className="text-sm md:text-base text-[#9ca3af] italic max-w-2xl mx-auto mb-4">
            &ldquo;Le cinéma au service de l&apos;humanitaire. Mêler l&apos;utile à l&apos;événementiel !&rdquo;
          </p>
          <blockquote className="text-sm text-[#9ca3af]/80 max-w-2xl mx-auto leading-relaxed border-l-2 border-[#D4AF37]/40 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
            &ldquo;Le cinéma ne change pas le monde à lui seul. Mais il peut
            changer notre regard sur le monde… et c&apos;est ainsi que naissent les
            plus grandes transformations.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* 2. MOT DU PROMOTEUR */}
      <section className="section-py bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-3">
            Le mot du promoteur
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#f5f0eb] mb-6">
            Amadou Thior
          </h2>
          <p className="text-xs text-[#C97B5A] font-medium uppercase tracking-wider mb-6">
            Fondateur et Directeur — KOOM COM GROUPE
          </p>
          <div className="space-y-4 text-[#9ca3af] leading-relaxed">
            <p>
              Fort de plus de 40 ans d&apos;expérience dans le cinéma et
              l&apos;audiovisuel, j&apos;ai toujours été convaincu que le 7ᵉ art
              possède un pouvoir unique : celui de transformer les consciences
              et de rapprocher les peuples autour de valeurs universelles.
            </p>
            <p>
              CINECLUB – DÎNER DÉBAT est né de cette conviction. Ce programme
              événementiel associe la projection d&apos;un film de qualité à un
              dîner convivial suivi d&apos;un débat citoyen, chaque édition
              étant adossée à une Journée Internationale reconnue par l&apos;ONU :
              handicap, droits des femmes, protection de l&apos;enfance,
              environnement, paix.
            </p>
            <p>
              Notre ambition est simple mais exigeante : utiliser le cinéma
              comme levier d&apos;engagement, créer des espaces de dialogue
              authentiques, et mobiliser décideurs et citoyens autour
              d&apos;actions concrètes. Car un film qui émeut, suivi d&apos;un
              débat qui éclaire, peut véritablement changer le regard d&apos;une
              communauté sur ses propres défis.
            </p>
          </div>
        </div>
      </section>

      {/* 3. LE CONCEPT */}
      <section className="section-py bg-[#0f0f0f] border-t border-[#2E5C1E]/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-3">
              Le concept
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl text-[#f5f0eb]">
              Les 5 temps forts d&apos;une édition
            </h2>
          </div>
          <ConceptTimeline />
        </div>
      </section>

      {/* 4. ÉDITION 2016 — Marcedes */}
      <section className="section-py bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-3">
              Édition de référence
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#f5f0eb]">
              2016 — &ldquo;Marcedes&rdquo;
            </h2>
          </div>
          <EditionCard edition={edition2016} />
        </div>
      </section>

      {/* 5. ÉDITION 2026 — Ghadi */}
      <section className="section-py bg-[#0f0f0f] border-t border-[#2E5C1E]/20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-3">
              Prochaine édition
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#f5f0eb]">
              2026 — &ldquo;Ghadi&rdquo;
            </h2>
          </div>
          <EditionCard edition={edition2026} />
        </div>
      </section>

      {/* 6. PARTENARIAT & SPONSORING */}
      <section id="sponsoring" className="section-py bg-[#1a1a1a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-3">
              Partenariat
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl lg:text-4xl text-[#f5f0eb] mb-4">
              Offres de Visibilité & Sponsoring
            </h2>
            <p className="text-sm text-[#9ca3af]">
              Trois niveaux de partenariat pour accompagner cette initiative culturelle et humanitaire.
            </p>
          </div>

          <div className="bg-[#0f0f0f] border border-[#2E5C1E]/20 rounded-xl p-4 md:p-6">
            <SponsorTable />
          </div>

          <div className="text-center mt-10">
            <a
              href={`mailto:${cineclubContact.email}?subject=Partenariat CINECLUB – DÎNER DÉBAT`}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium bg-[#D4AF37] text-[#1A1A1A] rounded hover:bg-[#E0B84B] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#D4AF37]/20"
            >
              <Mail size={16} />
              Devenir sponsor
            </a>
          </div>
        </div>
      </section>

      {/* 7. CONTACT PROJET */}
      <section className="section-py bg-[#0f0f0f] border-t border-[#2E5C1E]/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-3">
              Contact projet
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#f5f0eb]">
              {cineclubContact.organization}
            </h2>
          </div>

          <div className="bg-[#1a2e1a] border border-[#2E5C1E]/30 rounded-xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-[#f5f0eb]">
                    {cineclubContact.manager}
                  </p>
                  <p className="text-xs text-[#C97B5A]">
                    {cineclubContact.role}
                  </p>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#9ca3af]">
                  <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{cineclubContact.address}</span>
                </div>
              </div>
              <div className="space-y-4">
                {cineclubContact.phones.map((phone) => (
                  <div key={phone} className="flex items-center gap-3 text-sm text-[#9ca3af]">
                    <Phone size={16} className="text-[#D4AF37] shrink-0" />
                    <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="hover:text-[#D4AF37] transition-colors">
                      {phone}
                    </a>
                  </div>
                ))}
                <div className="flex items-center gap-3 text-sm text-[#9ca3af]">
                  <Mail size={16} className="text-[#D4AF37] shrink-0" />
                  <a
                    href={`mailto:${cineclubContact.email}`}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {cineclubContact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Back to portfolio */}
          <div className="text-center mt-10">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#9ca3af] hover:text-[#D4AF37] transition-colors"
            >
              <ArrowLeft size={14} />
              Retour au portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
