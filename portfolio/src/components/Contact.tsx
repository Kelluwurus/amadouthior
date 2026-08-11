"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-[#121212] border-t border-[#C8A24A]/20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-[#C8A24A] mb-4">
            Collaborer
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl text-[#F8F5EF]">
            Initier un projet ou une collaboration
          </h2>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="fullname"
                className="text-xs font-medium tracking-[0.05em] uppercase text-zinc-500 mb-2"
              >
                Nom complet
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                placeholder="Votre nom complet"
                className="px-4 py-3.5 bg-[#1E1E1E] border border-white/10 rounded text-[#F8F5EF] text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#C8A24A] focus:ring-1 focus:ring-[#C8A24A]/20 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-xs font-medium tracking-[0.05em] uppercase text-zinc-500 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="votre@email.com"
                className="px-4 py-3.5 bg-[#1E1E1E] border border-white/10 rounded text-[#F8F5EF] text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#C8A24A] focus:ring-1 focus:ring-[#C8A24A]/20 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label
                htmlFor="organization"
                className="text-xs font-medium tracking-[0.05em] uppercase text-zinc-500 mb-2"
              >
                Organisation / Institution
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                placeholder="Votre organisation"
                className="px-4 py-3.5 bg-[#1E1E1E] border border-white/10 rounded text-[#F8F5EF] text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#C8A24A] focus:ring-1 focus:ring-[#C8A24A]/20 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-xs font-medium tracking-[0.05em] uppercase text-zinc-500 mb-2"
              >
                Motif de contact
              </label>
              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
                className="px-4 py-3.5 bg-[#1E1E1E] border border-white/10 rounded text-[#F8F5EF] text-sm focus:outline-none focus:border-[#C8A24A] focus:ring-1 focus:ring-[#C8A24A]/20 transition-all duration-300 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%201.5L6%206.5L11%201.5%22%20stroke%3D%22%23999%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
              >
                <option value="" disabled>
                  Sélectionnez un motif
                </option>
                <option value="masterclass">Masterclass</option>
                <option value="consultance">Consultance</option>
                <option value="jury">Jury</option>
                <option value="presse">Presse</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-xs font-medium tracking-[0.05em] uppercase text-zinc-500 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Décrivez votre projet ou votre demande..."
              className="px-4 py-3.5 bg-[#1E1E1E] border border-white/10 rounded text-[#F8F5EF] text-sm placeholder:text-zinc-600 focus:outline-none focus:border-[#C8A24A] focus:ring-1 focus:ring-[#C8A24A]/20 transition-all duration-300 resize-y min-h-[150px]"
            />
          </div>

          <button
            type="submit"
            disabled={submitted}
            className={`w-full flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded transition-all duration-300 ${
              submitted
                ? "bg-[#0F382C] border border-[#0F382C] text-[#F8F5EF]"
                : "bg-[#C8A24A] text-[#121212] hover:bg-[#d4af5a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,162,74,0.25)]"
            }`}
          >
            <Send size={16} />
            {submitted ? "Message envoyé !" : "Envoyer la demande"}
          </button>
        </form>
      </div>
    </section>
  );
}
