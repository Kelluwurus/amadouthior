import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ImageSlot from "@/components/shared/ImageSlot";
import { getBio, getCineclub } from "@/lib/content";

export default function HomePage() {
  const bio = getBio();
  const cineclub = getCineclub();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="grain relative min-h-screen flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[--color-bg] via-[--color-bg]/70 to-transparent z-10" />

        {/* Portrait in oval */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[75%] hidden lg:block z-0">
          <div className="clip-oval w-full h-full">
            <ImageSlot
              src="/images/Amadou_Thior.jpg"
              alt="Amadou Thior"
              aspect="portrait"
              size="lg"
              className="w-full h-full !max-w-none"
            />
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full py-32">
          <Reveal>
            <p className="text-meta mb-8">Cinéaste · Producteur-réalisateur · Formateur</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-display max-w-2xl">
              {bio.nom}
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-body text-lg max-w-md mt-10 leading-relaxed">
              Plus de 40 ans au service du cinéma, de la production audiovisuelle
              et de la transmission au Sénégal.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-12">
              <Link href="/contact" className="btn-circle">
                Contact <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== ABOUT + CHIFFRES ===== */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Image ovale */}
            <Reveal>
              <div className="clip-oval aspect-[3/4] max-w-sm mx-auto lg:mx-0">
                <ImageSlot
                  src="/images/oeuvres/Plateau_tournage.jpg"
                  alt="Amadou Thior en tournage"
                  aspect="portrait"
                  size="lg"
                  className="w-full h-full !max-w-none"
                />
              </div>
            </Reveal>

            {/* Texte + chiffres */}
            <Reveal delay={100}>
              <div>
                <h2 className="text-h2 mb-6">
                  <span className="line-accent" />À propos
                </h2>
                <p className="text-body leading-relaxed mb-10">
                  {bio.resumeExecutif}
                </p>

                {/* Chiffres avec ligne décorative */}
                <div className="space-y-6">
                  <div className="flex items-baseline gap-4">
                    <span className="line-accent" />
                    <span className="font-[family-name:var(--font-display)] text-4xl text-[--color-fg]">40+</span>
                    <span className="text-xs text-[--color-fg-subtle] uppercase tracking-wider">Ans d&apos;expérience</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="line-accent" />
                    <span className="font-[family-name:var(--font-display)] text-4xl text-[--color-fg]">25+</span>
                    <span className="text-xs text-[--color-fg-subtle] uppercase tracking-wider">Cinéaste indépendant</span>
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="line-accent" />
                    <span className="font-[family-name:var(--font-display)] text-4xl text-[--color-accent]">1977</span>
                    <span className="text-xs text-[--color-fg-subtle] uppercase tracking-wider">BTS Cinéma — Louis-Lumière</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CITATION ===== */}
      <section className="section-py bg-[--color-surface]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-light leading-snug text-[--color-fg]">
              <span className="line-accent" />
              Filmer l&apos;humain et <em className="text-[--color-accent] not-italic font-normal">transmettre la mémoire</em> du cinéma africain aux nouvelles générations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== FILMS — 3 ovales ===== */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-meta mb-2">Filmographie</p>
                <h2 className="text-h2">Les films</h2>
              </div>
              <Link href="/oeuvres" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[--color-fg-subtle] hover:text-[--color-accent] transition-colors">
                Tout voir <ArrowRight size={12} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={60}>
              <Link href="/oeuvres/xareek-maral" className="group block text-center">
                <div className="clip-oval aspect-[3/4] max-w-[260px] mx-auto mb-5 overflow-hidden">
                  <ImageSlot src="/images/oeuvres/Plateau_tournage.jpg" alt="Xareek Maral" aspect="portrait" size="lg" className="w-full h-full !max-w-none group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-meta mb-1">1982 · Documentaire</p>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[--color-fg] group-hover:text-[--color-accent] transition-colors">Xareek Maral</h3>
                <p className="text-xs text-[--color-accent] mt-1">1er Prix CEE — FESPACO</p>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <Link href="/oeuvres/mariage-precoce" className="group block text-center">
                <div className="clip-oval aspect-[3/4] max-w-[260px] mx-auto mb-5 overflow-hidden">
                  <ImageSlot src="/images/oeuvres/Mariage_precoce.jpeg" alt="Mariage précoce" aspect="portrait" size="lg" className="w-full h-full !max-w-none group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-meta mb-1">1995 · Fiction · 19 min</p>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[--color-fg] group-hover:text-[--color-accent] transition-colors">Mariage précoce</h3>
              </Link>
            </Reveal>

            <Reveal delay={180}>
              <Link href="/oeuvres/almodou" className="group block text-center">
                <div className="clip-oval aspect-[3/4] max-w-[260px] mx-auto mb-5 overflow-hidden">
                  <ImageSlot src="/images/oeuvres/Almodou.jpg" alt="Almodou" aspect="portrait" size="lg" className="w-full h-full !max-w-none group-hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-meta mb-1">2000 · Fiction · 85 min</p>
                <h3 className="font-[family-name:var(--font-display)] text-xl text-[--color-fg] group-hover:text-[--color-accent] transition-colors">Almodou</h3>
                <p className="text-xs text-[--color-accent] mt-1">Prix FESPACO 2001</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SEMBÈNE ===== */}
      <section className="section-py bg-[--color-surface]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="clip-oval aspect-[4/3] max-w-md mx-auto lg:mx-0 overflow-hidden">
                <ImageSlot src="/images/oeuvres/Camp_de_thiaroye.jpeg" alt="Camp de Thiaroye" aspect="landscape" size="lg" className="w-full h-full !max-w-none" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <p className="text-meta mb-4">Collaboration historique</p>
                <h2 className="text-h2 mb-6">Aux côtés d&apos;Ousmane Sembène</h2>
                <p className="text-body leading-relaxed mb-8">
                  Assistant réalisateur sur <em className="text-[--color-accent] not-italic">Camp de Thiaroye</em> (1987)
                  puis sur <em className="text-[--color-accent] not-italic">Guelwaar</em> (1992).
                </p>
                <div className="space-y-3">
                  <p className="text-caption"><span className="line-accent" />1987 — Camp de Thiaroye</p>
                  <p className="text-caption"><span className="line-accent" />1992 — Guelwaar</p>
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
            <h2 className="text-h2 text-center mb-14">
              <span className="line-accent" />Ce que le cinéma fait traverser<span className="line-accent ml-3" />
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", title: "Éveiller", text: "Donner une voix aux récits qui interrogent la société.", href: "/oeuvres" },
              { n: "02", title: "Transmettre", text: "Former les nouvelles générations de cinéastes.", href: "/transmission" },
              { n: "03", title: "Préserver", text: "Faire vivre une mémoire du cinéma africain.", href: "/archives" },
              { n: "04", title: "Construire", text: "Penser l'avenir de l'industrie audiovisuelle.", href: "/expertise" },
            ].map((item, i) => (
              <Reveal key={item.n} delay={i * 80}>
                <Link href={item.href} className="group block text-center p-6 border border-[--color-border] hover:border-[--color-accent]/30 transition-all duration-300">
                  <span className="font-[family-name:var(--font-display)] text-3xl text-[--color-accent]/30 group-hover:text-[--color-accent] transition-colors">{item.n}</span>
                  <h3 className="text-h3 mt-3 mb-2 group-hover:text-[--color-accent] transition-colors">{item.title}</h3>
                  <p className="text-caption text-[--color-fg-subtle]">{item.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CINECLUB ===== */}
      <section className="section-py bg-[--color-surface]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-meta mb-4">{cineclub.manifeste}</p>
            <h2 className="text-h1 mb-6">{cineclub.titre}</h2>
            <p className="text-body text-lg mb-4 max-w-xl mx-auto">{cineclub.description}</p>
            <p className="font-[family-name:var(--font-display)] italic text-[--color-fg-subtle] mb-10">
              « {cineclub.accroche} »
            </p>
            <Link href="/cineclub" className="btn-circle">
              Découvrir <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="section-py relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageSlot src="/images/oeuvres/almodou_1.jpg" alt="" aspect="cinema" size="lg" className="w-full h-full !max-w-none" />
        </div>
        <div className="absolute inset-0 bg-[--color-bg]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-[--color-fg] mb-8">
              Parlons cinéma
            </h2>
            <Link href="/contact" className="btn-circle">
              Contact <ArrowRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
