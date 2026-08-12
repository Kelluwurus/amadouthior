"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const subjects = [
  "Production audiovisuelle",
  "Réalisation",
  "Conseil",
  "Formation",
  "Développement de projet",
  "Intervention / conférence",
  "Autre",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* HERO */}
      <section className="pt-36 md:pt-44 pb-12 md:pb-16">
        <Container narrow>
          <Reveal>
            <p className="text-meta text-[--color-accent] mb-4">Contact</p>
            <h1 className="text-h1 mb-6">Collaborer</h1>
            <p className="text-body text-[--color-fg-muted] max-w-lg leading-relaxed">
              Pour une production, un projet audiovisuel, une intervention, une
              formation ou une réflexion autour du cinéma et de
              l&apos;audiovisuel, vous pouvez prendre contact.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* FORMULAIRE */}
      <section className="pb-20 md:pb-28">
        <Container narrow>
          <Reveal delay={80}>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
              {/* Nom */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-meta text-[--color-fg-subtle] mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] text-[--color-fg] text-sm placeholder:text-[--color-fg-subtle] focus:outline-none focus:border-[--color-accent] transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-meta text-[--color-fg-subtle] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] text-[--color-fg] text-sm placeholder:text-[--color-fg-subtle] focus:outline-none focus:border-[--color-accent] transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              {/* Organisation */}
              <div>
                <label
                  htmlFor="organization"
                  className="block text-meta text-[--color-fg-subtle] mb-2"
                >
                  Organisation
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] text-[--color-fg] text-sm placeholder:text-[--color-fg-subtle] focus:outline-none focus:border-[--color-accent] transition-colors"
                  placeholder="Institution, entreprise, festival..."
                />
              </div>

              {/* Objet */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-meta text-[--color-fg-subtle] mb-2"
                >
                  Objet
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] text-[--color-fg] text-sm focus:outline-none focus:border-[--color-accent] transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Sélectionner un objet
                  </option>
                  {subjects.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-meta text-[--color-fg-subtle] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] text-[--color-fg] text-sm placeholder:text-[--color-fg-subtle] focus:outline-none focus:border-[--color-accent] transition-colors resize-y min-h-[140px]"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitted}
                className={`inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  submitted
                    ? "bg-[--color-fg-subtle] text-white"
                    : "bg-[--color-accent] text-white hover:bg-[--color-accent-hover]"
                }`}
              >
                <Send size={14} />
                {submitted ? "Message envoyé" : "Envoyer"}
              </button>
            </form>
          </Reveal>

          {/* Placeholder pour coordonnées futures */}
          {/*
          <Reveal delay={160}>
            <div className="mt-16 pt-12 border-t border-[--color-border]">
              <p className="text-meta text-[--color-accent] mb-4">Coordonnées</p>
              <div className="space-y-2 text-caption text-[--color-fg-muted]">
                <p>Email professionnel : à ajouter</p>
                <p>Téléphone : à ajouter</p>
                <p>Adresse : à ajouter</p>
              </div>
            </div>
          </Reveal>
          */}
        </Container>
      </section>
    </>
  );
}
