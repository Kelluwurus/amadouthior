import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Bouton from "@/components/ui/Bouton";
import ImageSlot from "@/components/shared/ImageSlot";
import { getBio, getCineclub } from "@/lib/content";

export default function HomePage() {
  const bio = getBio();
  const cineclub = getCineclub();

  return (
    <>
      {/* ===== HERO — Plein écran cinématique ===== */}
      <section className="grain relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[--color-bg] via-[--color-bg]/80 to-transparent z-10" />
        <div className="absolute inset-0 overflow-hidden">
          <ImageSlot
            src="/images/Amadou_Thior.jpg"
            alt="Amadou Thior"
            aspect="cinema"
            size="lg"
            className="w-full h-full !max-w-none"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <Reveal>
            <p className="text-meta mb-6">Cinéaste · Producteur · Formateur</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-display max-w-3xl mb-8">
              {bio.nom}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-body text-lg max-w-lg mb-10 text-[--color-fg-muted]">
              Plus de 40 ans au service du cinéma, de la production audiovisuelle
              et de la transmission au Sénégal.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="flex flex-wrap gap-4">
              <Bouton href="/oeuvres" variant="primaire">
                Voir les œuvres
              </Bouton>
              <Bouton href="/parcours" variant="secondaire">
                Découvrir le parcours
              </Bouton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CHIFFRES ===== */}
      <section className="py-16 border-b border-[--color-border]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <span className="text-4xl md:text-5xl font-[family-name:var(--font-display)] text-[--color-fg]">40+</span>
                <p className="text-xs text-[--color-fg-subtle] mt-2 uppercase tracking-wider">Ans d&apos;expérience</p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-[family-name:var(--font-display)] text-[--color-fg]">25+</span>
                <p className="text-xs text-[--color-fg-subtle] mt-2 uppercase tracking-wider">Cinéaste indépendant</p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-[family-name:var(--font-display)] text-[--color-accent]">1977</span>
                <p className="text-xs text-[--color-fg-subtle] mt-2 uppercase tracking-wider">Louis-Lumière Paris</p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-[family-name:var(--font-display)] text-[--color-fg]">4</span>
                <p className="text-xs text-[--color-fg-subtle] mt-2 uppercase tracking-wider">Dimensions</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== PORTFOLIO — Grands visuels ===== */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-meta mb-2">Filmographie</p>
                <h2 className="text-h2">Les films</h2>
              </div>
              <Link href="/oeuvres" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[--color-fg-muted] hover:text-[--color-accent] transition-colors">
                Tout voir <ArrowRight size={12} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Reveal delay={60}>
              <Link href="/oeuvres/xareek-maral" className="group relative block overflow-hidden aspect-[3/4]">
                <ImageSlot src="/images/oeuvres/Plateau_tournage.jpg" alt="Xareek Maral" aspect="portrait" size="lg" className="w-full h-full !max-w-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-meta mb-1">1982 · Documentaire</p>
                  <h3 className="text-xl font-[family-name:var(--font-display)] text-white">Xareek Maral</h3>
                  <p className="text-xs text-[--color-accent] mt-1">1er Prix CEE — FESPACO 1985</p>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <Link href="/oeuvres/mariage-precoce" className="group relative block overflow-hidden aspect-[3/4]">
                <ImageSlot src="/images/oeuvres/Mariage_precoce.jpeg" alt="Mariage précoce" aspect="portrait" size="lg" className="w-full h-full !max-w-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-meta mb-1">1995 · Fiction · 19 min</p>
                  <h3 className="text-xl font-[family-name:var(--font-display)] text-white">Mariage précoce</h3>
                </div>
              </Link>
            </Reveal>

            <Reveal delay={180}>
              <Link href="/oeuvres/almodou" className="group relative block overflow-hidden aspect-[3/4]">
                <ImageSlot src="/images/oeuvres/Almodou.jpg" alt="Almodou" aspect="portrait" size="lg" className="w-full h-full !max-w-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-meta mb-1">2000 · Fiction · 85 min</p>
                  <h3 className="text-xl font-[family-name:var(--font-display)] text-white">Almodou</h3>
                  <p className="text-xs text-[--color-accent] mt-1">Prix FESPACO 2001</p>
                </div>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <div className="mt-8 md:hidden">
              <Link href="/oeuvres" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[--color-accent]">
                Toute la filmographie <ArrowRight size={12} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SEMBÈNE ===== */}
      <section className="section-py bg-[--color-surface]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <ImageSlot src="/images/oeuvres/Camp_de_thiaroye.jpeg" alt="Camp de Thiaroye" aspect="landscape" size="lg" className="w-full !max-w-none" />
            </Reveal>
            <Reveal delay={100}>
              <div>
                <p className="text-meta mb-4">Collaboration historique</p>
                <h2 className="text-h2 mb-6">Aux côtés d&apos;Ousmane Sembène</h2>
                <p className="text-body leading-relaxed mb-8">
                  Assistant réalisateur sur <em>Camp de Thiaroye</em> (1987) puis
                  sur <em>Guelwaar</em> (1992).
                </p>
                <div className="space-y-4 border-l-2 border-[--color-accent] pl-6">
                  <div>
                    <span className="text-meta">1987</span>
                    <p className="text-sm text-[--color-fg]">Camp de Thiaroye — Assistant réalisateur</p>
                  </div>
                  <div>
                    <span className="text-meta">1992</span>
                    <p className="text-sm text-[--color-fg]">Guelwaar — Assistant réalisateur</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== 4 DIMENSIONS ===== */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="text-meta mb-4">Le parcours</p>
            <h2 className="text-h2 mb-14">Ce que le cinéma fait traverser</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", title: "Éveiller", text: "Donner une voix aux récits qui interrogent la société.", href: "/oeuvres" },
              { n: "02", title: "Transmettre", text: "Former les nouvelles générations de cinéastes.", href: "/transmission" },
              { n: "03", title: "Préserver", text: "Faire vivre une mémoire du cinéma africain.", href: "/archives" },
              { n: "04", title: "Construire", text: "Penser l'avenir de l'industrie audiovisuelle.", href: "/expertise" },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 80}>
                <Link href={item.href} className="group block p-6 border border-[--color-border] hover:border-[--color-accent]/40 transition-all duration-300">
                  <span className="text-3xl font-[family-name:var(--font-display)] text-[--color-accent]/40 group-hover:text-[--color-accent] transition-colors">{item.n}</span>
                  <h3 className="text-h3 mt-3 mb-2 group-hover:text-[--color-accent] transition-colors">{item.title}</h3>
                  <p className="text-caption">{item.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CINECLUB ===== */}
      <section className="section-py bg-[--color-surface]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-meta mb-4">{cineclub.manifeste}</p>
            <h2 className="text-h1 mb-6">{cineclub.titre}</h2>
            <p className="text-body text-lg max-w-xl mx-auto mb-4">
              {cineclub.description}
            </p>
            <p className="text-sm italic text-[--color-fg-subtle] mb-10">
              « {cineclub.accroche} »
            </p>
            <Bouton href="/cineclub" variant="primaire">
              Découvrir le CINECLUB
            </Bouton>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section-py">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-h2 mb-4">Parlons cinéma</h2>
            <p className="text-body mb-8 max-w-md mx-auto">
              Pour une collaboration, une formation, un projet audiovisuel ou une
              demande d&apos;information.
            </p>
            <Bouton href="/contact" variant="secondaire">
              Prendre contact
            </Bouton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
