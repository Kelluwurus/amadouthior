import type { Metadata } from "next";
import { Award, Radio } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Production",
  description:
    "Production, accompagnement et développement de projets audiovisuels. Consultants et Réalisateurs Associés, production déléguée, production institutionnelle.",
};

export default function ProductionPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-16 md:pb-20">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-4">Production</p>
            <h1 className="text-h1 mb-6 max-w-2xl">
              Produire, accompagner, développer
            </h1>
            <p className="text-body text-[--color-fg-muted] max-w-xl leading-relaxed">
              La carrière d&apos;Amadou Thior ne se limite pas à la réalisation.
              Depuis les années 1990, il intervient dans la production, la
              production déléguée, la production exécutive et
              l&apos;accompagnement de projets audiovisuels.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* CONSULTANTS ET RÉALISATEURS ASSOCIÉS */}
      <section className="pb-16 md:pb-20 border-t border-[--color-border] pt-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <Reveal>
              <div>
                <span className="text-meta text-[--color-accent] block mb-2">1994</span>
                <h2 className="text-h2">
                  Consultants et Réalisateurs Associés
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-6">
                <p className="text-body text-[--color-fg-muted] leading-relaxed">
                  Création du GIE Consultants et Réalisateurs Associés avec
                  Assane Diagne. Objectif : autoproduction de projets de fiction
                  et de documentaire.
                </p>

                {/* Productions */}
                <div>
                  <p className="text-caption text-[--color-fg-subtle] mb-3">
                    Productions citées :
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["Nef", "Kiné", "Coumba", "Almodou"].map((title) => (
                      <div
                        key={title}
                        className="aspect-[3/4] bg-[--color-surface] flex items-center justify-center border border-[--color-border]"
                      >
                        <span className="font-[family-name:var(--font-cormorant)] text-base text-[--color-fg-subtle]">
                          {title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-[--color-fg-subtle] italic mt-3">
                    Almodou est le film réalisé par Amadou Thior au sein de cette
                    structure.
                  </p>
                </div>

                {/* 2004 */}
                <div className="border-t border-[--color-border] pt-6">
                  <span className="text-meta text-[--color-accent] block mb-2">2004</span>
                  <p className="text-caption text-[--color-fg-muted] leading-relaxed">
                    Selon Africultures, la structure est remplacée par Filmi
                    Darou Wahab. Assane Diagne et Amadou Thior créent ensuite
                    chacun leur propre société de production.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* BIEN-ÊTRE POUR TOUS */}
      <section className="section-py bg-[--color-surface]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <Reveal>
              <div>
                <span className="text-meta text-[--color-accent] block mb-2">
                  1996–1997
                </span>
                <h2 className="text-h2">Bien-être pour Tous</h2>
                <p className="text-caption text-[--color-fg-muted] mt-2">
                  Producteur délégué
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-6">
                {/* Œuvres */}
                <div>
                  <p className="text-caption text-[--color-fg-subtle] mb-3">Œuvres :</p>
                  <div className="grid grid-cols-3 gap-3">
                    {["Nef", "Kiné", "Coumba"].map((title) => (
                      <div
                        key={title}
                        className="aspect-[3/4] bg-[--color-bg] flex items-center justify-center border border-[--color-border]"
                      >
                        <span className="font-[family-name:var(--font-cormorant)] text-base text-[--color-fg-subtle]">
                          {title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prix */}
                <div className="flex items-start gap-3 border-l-2 border-[--color-accent] pl-4">
                  <Award size={14} className="text-[--color-accent] shrink-0 mt-0.5" />
                  <p className="text-body text-[--color-fg]">
                    Prix CILSS — FESPACO 1999
                  </p>
                </div>

                {/* Diffusions */}
                <div className="flex items-start gap-3">
                  <Radio size={14} className="text-[--color-accent] shrink-0 mt-1" />
                  <div>
                    <p className="text-caption text-[--color-fg-subtle] mb-1">Diffusions :</p>
                    <p className="text-caption text-[--color-fg-muted]">
                      CFI · TV5 · Télévisions d&apos;Afrique francophone · RTS
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PRODUCTION INSTITUTIONNELLE */}
      <section className="section-py border-t border-[--color-border]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
            <Reveal>
              <h2 className="text-h2">Production institutionnelle</h2>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <p className="text-body text-[--color-fg-muted] leading-relaxed mb-6">
                  Production exécutive de films institutionnels pour notamment :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["UNICEF", "BIT", "Plan Sénégal"].map((org) => (
                    <div
                      key={org}
                      className="border border-[--color-border] p-5 flex items-center justify-center hover:border-[--color-accent]/30 transition-colors"
                    >
                      <span className="text-caption text-[--color-fg-muted] font-medium">
                        {org}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* PRODUCTION ET PROJETS */}
      <section className="section-py bg-[--color-surface]">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-6">
              Champs d&apos;intervention
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Production de fiction",
              "Documentaire",
              "Téléfilm",
              "Production déléguée",
              "Production exécutive",
              "Accompagnement de projets",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 40}>
                <div className="border border-[--color-border] bg-[--color-bg] p-5 hover:border-[--color-accent]/30 transition-colors">
                  <p className="font-[family-name:var(--font-cormorant)] text-base text-[--color-fg]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
