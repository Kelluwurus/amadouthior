"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // En V1, pas de service d'envoi configuré — afficher message de fallback
    setSubmitted(true);
  };

  return (
    <div className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Hero */}
        <Reveal>
          <p className="text-meta mb-4">Contact</p>
          <h1 className="text-h1 mb-6">Parlons cinéma</h1>
          <p className="text-body max-w-lg leading-relaxed mb-12">
            Pour une collaboration, une formation, un projet audiovisuel ou une
            demande d&apos;information sur les archives et la filmographie
            d&apos;Amadou Thior.
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={80}>
          {submitted ? (
            <div className="border border-[--color-border] p-8 text-center">
              <p className="text-body text-[--color-fg] font-medium mb-2">
                Merci pour votre message.
              </p>
              <p className="text-caption">
                Le formulaire n&apos;est pas encore connecté à un service
                d&apos;envoi. Veuillez nous écrire directement par e-mail en
                attendant la mise en service complète.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
              {/* Nom */}
              <div>
                <label
                  htmlFor="nom"
                  className="block text-[0.65rem] font-medium uppercase tracking-wider text-[--color-fg-subtle] mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] text-[--color-fg] text-sm placeholder:text-[--color-fg-subtle] focus:outline-none focus:border-[--color-accent] transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[0.65rem] font-medium uppercase tracking-wider text-[--color-fg-subtle] mb-2"
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
                  htmlFor="organisation"
                  className="block text-[0.65rem] font-medium uppercase tracking-wider text-[--color-fg-subtle] mb-2"
                >
                  Organisation
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] text-[--color-fg] text-sm placeholder:text-[--color-fg-subtle] focus:outline-none focus:border-[--color-accent] transition-colors"
                  placeholder="Institution, festival, école..."
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[0.65rem] font-medium uppercase tracking-wider text-[--color-fg-subtle] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[--color-surface] border border-[--color-border] text-[--color-fg] text-sm placeholder:text-[--color-fg-subtle] focus:outline-none focus:border-[--color-accent] transition-colors resize-y min-h-[120px]"
                  placeholder="Décrivez votre projet ou votre demande..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md bg-[--color-accent] text-[#FAF6EF] hover:bg-[--color-accent-hover] transition-colors"
              >
                <Send size={14} />
                Envoyer
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
}
