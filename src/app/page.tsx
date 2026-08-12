import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Bouton from "@/components/ui/Bouton";
import Badge from "@/components/ui/Badge";
import ImageSlot from "@/components/shared/ImageSlot";
import { getBio, getCineclub } from "@/lib/content";

export default function HomePage() {
  const bio = getBio();
  const cineclub = getCineclub();

  return (
    <>
      {/* ===== HERO VISUEL ===== */}
      <section className="min-h-[85vh] flex items-center pt-28 md:pt-32">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Gauche — texte */}
            <div>
              <Reveal>
                <h1 className="text-display mb-4">{bio.nom}</h1>
              </Reveal>
              <Reveal delay={60}>
                <p className="text-meta mb-6">{bio.titreCourt}</p>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-caption text-[--color-fg-subtle] mb-8">
                  Plus de 40 ans de cinéma
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="flex flex-wrap gap-4">
                  <Bouton href="/oeuvres" variant="primaire">
                    Voir les œuvres
                  </Bouton>
                  <Bouton href="/parcours" variant="ghost">
                    Découvrir le parcours →
                  </Bouton>
                </div>
              </Reveal>
            </div>

            {/* Droite — portrait */}
            <Reveal delay={100}>
              <ImageSlot
                src="/images/Amadou_Thior.jpg"
                alt="Portrait d'Amadou Thior"
                aspect="portrait"
                className="max-w-sm lg:max-w-full mx-auto"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CHIFFRES ===== */}
      <section className="py-12 md:py-16 border-t border-b border-[--color-border]">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              <div>
                <span className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[--color-accent]">
                  40+
                </span>
                <p className="text-caption mt-1">ans d&apos;expérience</p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[--color-accent]">
                  25+
                </span>
                <p className="text-caption mt-1">ans cinéaste indépendant</p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[--color-accent]">
                  1977
                </span>
                <p className="text-caption mt-1">BTS Cinéma — Louis-Lumière</p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-[--color-accent]">
                  4
                </span>
                <p className="text-caption mt-1">dimensions professionnelles</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== LES FILMS ===== */}
      <section className="section-py">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-meta mb-3">Filmographie</p>
            <h2 className="text-h2 mb-12">Les films</h2>
          </Reveal>

          <div className="space-y-16">
            {/* Xareek Maral */}
            <Reveal delay={60}>
              <Link href="/oeuvres/xareek-maral" className="group grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 lg:gap-12 items-start">
                <ImageSlot alt="Xareek Maral / Halte au désert" aspect="portrait" src="/images/oeuvres/Plateau_tournage.jpg" />
                <div className="py-2">
                  <Badge variant="accent">1982 · Documentaire · 16 mm · 30 min</Badge>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[--color-fg] group-hover:text-[--color-accent] transition-colors mt-3 mb-3">
                    Xareek Maral / Halte au désert
                  </h3>
                  <p className="text-body text-[--color-accent] font-medium mb-3">
                    1er Prix de la CEE — FESPACO 1985
                  </p>
                  <p className="text-caption">Réalisation : Amadou Thior</p>
                </div>
              </Link>
            </Reveal>

            {/* Mariage précoce */}
            <Reveal delay={80}>
              <Link href="/oeuvres/mariage-precoce" className="group grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 lg:gap-12 items-start">
                <ImageSlot alt="Mariage précoce" aspect="portrait" src="/images/oeuvres/Mariage_precoce.jpeg" />
                <div className="py-2">
                  <Badge variant="accent">1995 · Fiction · Drame · 19 min</Badge>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[--color-fg] group-hover:text-[--color-accent] transition-colors mt-3 mb-3">
                    Mariage précoce
                  </h3>
                  <p className="text-caption">Réalisation : Amadou Thior</p>
                </div>
              </Link>
            </Reveal>

            {/* Almodou */}
            <Reveal delay={100}>
              <Link href="/oeuvres/almodou" className="group grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 lg:gap-12 items-start">
                <ImageSlot alt="Almodou" aspect="portrait" src="/images/oeuvres/Almodou.jpg" />
                <div className="py-2">
                  <Badge variant="accent">2000 · Fiction · 85 min</Badge>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-[--color-fg] group-hover:text-[--color-accent] transition-colors mt-3 mb-3">
                    Almodou
                  </h3>
                  <p className="text-body text-[--color-accent] font-medium mb-3">
                    Prix Plan International / Children&apos;s Right — FESPACO 2001
                  </p>
                  <p className="text-caption mb-1">Réalisation et scénario : Amadou Thior</p>
                  <p className="text-caption">Production : Consultants et Réalisateurs Associés</p>
                </div>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-14">
              <Link href="/oeuvres" className="inline-flex items-center gap-2 text-sm text-[--color-accent] hover:text-[--color-accent-hover] transition-colors">
                Voir toute la filmographie <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== OUSMANE SEMBÈNE ===== */}
      <section className="section-py bg-[--color-bg-alt]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <ImageSlot
                src="/images/oeuvres/Camp_de_thiaroye.jpeg"
                alt="Amadou Thior aux côtés d'Ousmane Sembène — archives de tournage"
                aspect="landscape"
              />
            </Reveal>
            <Reveal delay={80}>
              <div>
                <p className="text-meta mb-3">Collaboration historique</p>
                <h2 className="text-h2 mb-6">Aux côtés d&apos;Ousmane Sembène</h2>
                <p className="text-body leading-relaxed mb-6">
                  Amadou Thior a été assistant réalisateur d&apos;Ousmane Sembène
                  sur <em>Camp de Thiaroye</em> en 1987 puis sur <em>Guelwaar</em> en 1992.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-meta">1987</span>
                    <span className="text-caption">Camp de Thiaroye — Assistant réalisateur</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-meta">1992</span>
                    <span className="text-caption">Guelwaar — Assistant réalisateur</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== LES QUATRE DIMENSIONS ===== */}
      <section className="section-py">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-meta mb-3">Le parcours</p>
            <h2 className="text-h2 mb-12">Ce que le cinéma fait traverser</h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            <Reveal delay={60}>
              <Link href="/oeuvres" className="group grid grid-cols-[auto_1fr] gap-5">
                <span className="font-[family-name:var(--font-display)] text-5xl text-[--color-accent]/25 group-hover:text-[--color-accent]/60 transition-colors leading-none">01</span>
                <div>
                  <h3 className="text-h3 group-hover:text-[--color-accent] transition-colors mb-2">Éveiller les consciences</h3>
                  <p className="text-caption mb-3">Donner une voix aux récits qui interrogent notre société.</p>
                  <ImageSlot alt="Tournage — cinéma engagé" aspect="cinema" src="/images/oeuvres/Plateau_tournage.jpg" />
                </div>
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <Link href="/transmission" className="group grid grid-cols-[auto_1fr] gap-5">
                <span className="font-[family-name:var(--font-display)] text-5xl text-[--color-accent]/25 group-hover:text-[--color-accent]/60 transition-colors leading-none">02</span>
                <div>
                  <h3 className="text-h3 group-hover:text-[--color-accent] transition-colors mb-2">Transmettre les savoirs</h3>
                  <p className="text-caption mb-3">Former les nouvelles générations de cinéastes.</p>
                  <ImageSlot alt="Formation — enseignement du cinéma" aspect="cinema" src="/images/archives/AT_Burkina.jpeg" />
                </div>
              </Link>
            </Reveal>

            <Reveal delay={180}>
              <Link href="/archives" className="group grid grid-cols-[auto_1fr] gap-5">
                <span className="font-[family-name:var(--font-display)] text-5xl text-[--color-accent]/25 group-hover:text-[--color-accent]/60 transition-colors leading-none">03</span>
                <div>
                  <h3 className="text-h3 group-hover:text-[--color-accent] transition-colors mb-2">Faire vivre une mémoire</h3>
                  <p className="text-caption mb-3">Préserver le patrimoine cinématographique sénégalais.</p>
                  <ImageSlot alt="Archives — patrimoine cinématographique" aspect="cinema" src="/images/oeuvres/almodou_1.jpg" />
                </div>
              </Link>
            </Reveal>

            <Reveal delay={240}>
              <Link href="/expertise" className="group grid grid-cols-[auto_1fr] gap-5">
                <span className="font-[family-name:var(--font-display)] text-5xl text-[--color-accent]/25 group-hover:text-[--color-accent]/60 transition-colors leading-none">04</span>
                <div>
                  <h3 className="text-h3 group-hover:text-[--color-accent] transition-colors mb-2">Penser l&apos;avenir de l&apos;audiovisuel</h3>
                  <p className="text-caption mb-3">Expertise sectorielle et développement de l&apos;industrie.</p>
                  <ImageSlot alt="Expertise — politiques cinématographiques" aspect="cinema" />
                </div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CINECLUB ===== */}
      <section className="section-py bg-[--color-bg-alt]">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <p className="text-meta mb-3">Projet contemporain</p>
            <h2 className="text-h2 mb-6">{cineclub.titre}</h2>
            <p className="text-body text-lg max-w-xl leading-relaxed mb-4">
              {cineclub.description}
            </p>
            <p className="text-caption italic text-[--color-fg-subtle] mb-8">
              {cineclub.accroche}
            </p>
            <Bouton href="/cineclub" variant="primaire">
              Découvrir le CINECLUB <ArrowRight size={14} />
            </Bouton>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="section-py border-t border-[--color-border]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-meta mb-3">Contact</p>
            <h2 className="text-h2 mb-4">Parlons cinéma</h2>
            <p className="text-body mb-8 max-w-md mx-auto">
              Pour une collaboration, une formation, un projet audiovisuel ou une
              demande d&apos;information.
            </p>
            <Bouton href="/contact" variant="primaire">
              Prendre contact
            </Bouton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
