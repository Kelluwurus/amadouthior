"use client";

import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-py bg-[#0f0f0f] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="Collaboration"
          title="Contact"
          description="Pour toute demande de production, formation, consulting ou collaboration, n'hésitez pas à me contacter."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium tracking-wide uppercase text-[#6b7280] mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Votre nom"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded text-[#f5f0eb] text-sm placeholder:text-[#4b5563] focus:outline-none focus:border-[#c4723a] transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium tracking-wide uppercase text-[#6b7280] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded text-[#f5f0eb] text-sm placeholder:text-[#4b5563] focus:outline-none focus:border-[#c4723a] transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-medium tracking-wide uppercase text-[#6b7280] mb-2">
                Objet
              </label>
              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded text-[#f5f0eb] text-sm focus:outline-none focus:border-[#c4723a] transition-colors duration-300 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
              >
                <option value="" disabled>Sélectionnez un objet</option>
                <option value="production">Production</option>
                <option value="formation">Formation / Masterclass</option>
                <option value="consulting">Consulting</option>
                <option value="presse">Presse / Interview</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium tracking-wide uppercase text-[#6b7280] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Décrivez votre projet ou votre demande..."
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded text-[#f5f0eb] text-sm placeholder:text-[#4b5563] focus:outline-none focus:border-[#c4723a] transition-colors duration-300 resize-y min-h-[120px]"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium rounded transition-all duration-300 ${
                submitted
                  ? "bg-green-800 text-white"
                  : "bg-[#c4723a] text-white hover:bg-[#d4845a] hover:-translate-y-0.5"
              }`}
            >
              <Send size={14} />
              {submitted ? "Message envoyé !" : "Envoyer"}
            </button>
          </form>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail size={18} className="text-[#c4723a]" />
                <h3 className="text-sm font-semibold text-[#f5f0eb]">Email</h3>
              </div>
              <a
                href="mailto:contact@amadouthior.com"
                className="text-sm text-[#9ca3af] hover:text-[#c4723a] transition-colors"
              >
                contact@amadouthior.com
              </a>
            </div>

            <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={18} className="text-[#c4723a]" />
                <h3 className="text-sm font-semibold text-[#f5f0eb]">
                  Localisation
                </h3>
              </div>
              <p className="text-sm text-[#9ca3af]">Dakar, Sénégal</p>
            </div>

            <div className="bg-[#1a1a1a] border border-white/5 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-[#f5f0eb] mb-3">
                Structure
              </h3>
              <p className="text-sm text-[#9ca3af]">
                TAF Productions Afrique Sarl
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
