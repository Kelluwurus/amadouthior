import { Calendar, MapPin, Clock, Clapperboard, Award, Radio, Tag, Target } from "lucide-react";
import type { Edition } from "@/data/cineclub";

interface EditionCardProps {
  edition: Edition;
}

export default function EditionCard({ edition }: EditionCardProps) {
  return (
    <div className="bg-[#1a2e1a] border border-[#2E5C1E]/30 rounded-xl overflow-hidden">
      {/* Highlight badge */}
      {edition.highlight && (
        <div className="bg-[#D4AF37] px-6 py-3 text-center">
          <span className="text-sm font-semibold text-[#1A1A1A]">
            {edition.highlight}
          </span>
        </div>
      )}

      <div className="p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-[#D4AF37] mb-1 block">
              Édition {edition.year}
            </span>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#f5f0eb]">
              {edition.filmTitle}
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#2E5C1E]/40 border border-[#2E5C1E]/50 rounded-full text-[#D4AF37]">
            <Calendar size={12} />
            {edition.year}
          </span>
        </div>

        {/* Technical details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center gap-2 text-sm text-[#9ca3af]">
            <Clapperboard size={14} className="text-[#C97B5A]" />
            <span>{edition.director}</span>
          </div>
          {edition.producer && (
            <div className="flex items-center gap-2 text-sm text-[#9ca3af]">
              <Target size={14} className="text-[#C97B5A]" />
              <span>{edition.producer}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-sm text-[#9ca3af]">
            <MapPin size={14} className="text-[#C97B5A]" />
            <span>{edition.country}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#9ca3af]">
            <Clock size={14} className="text-[#C97B5A]" />
            <span>{edition.duration}</span>
          </div>
        </div>

        <div className="inline-block px-3 py-1 text-xs font-medium bg-[#0f0f0f]/50 border border-white/10 rounded text-[#9ca3af]">
          {edition.genre}
        </div>

        {/* Synopsis */}
        <div>
          <h4 className="text-sm font-semibold text-[#f5f0eb] mb-2">Synopsis</h4>
          <p className="text-sm text-[#9ca3af] leading-relaxed">
            {edition.synopsis}
          </p>
        </div>

        {/* Context */}
        <div>
          <h4 className="text-sm font-semibold text-[#f5f0eb] mb-2">Contexte</h4>
          <p className="text-sm text-[#9ca3af] leading-relaxed">
            {edition.context}
          </p>
        </div>

        {/* Media */}
        {edition.media && edition.media.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-[#f5f0eb] mb-2 flex items-center gap-2">
              <Radio size={14} className="text-[#D4AF37]" />
              Couverture médiatique
            </h4>
            <ul className="space-y-1">
              {edition.media.map((item) => (
                <li key={item} className="text-sm text-[#9ca3af] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Objectives */}
        {edition.objectives && (
          <div>
            <h4 className="text-sm font-semibold text-[#f5f0eb] mb-3 flex items-center gap-2">
              <Award size={14} className="text-[#D4AF37]" />
              Objectifs de l&apos;édition
            </h4>
            <ul className="space-y-2">
              {edition.objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-2.5 text-sm text-[#9ca3af]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-1.5" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Themes */}
        {edition.themes && (
          <div>
            <h4 className="text-sm font-semibold text-[#f5f0eb] mb-3 flex items-center gap-2">
              <Tag size={14} className="text-[#D4AF37]" />
              Thématiques
            </h4>
            <div className="flex flex-wrap gap-2">
              {edition.themes.map((theme) => (
                <span
                  key={theme}
                  className="px-3 py-1 text-xs font-medium bg-[#2E5C1E]/30 border border-[#2E5C1E]/40 rounded-full text-[#D4AF37]"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Audiences */}
        {edition.audiences && (
          <div>
            <h4 className="text-sm font-semibold text-[#f5f0eb] mb-3">
              Publics cibles
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {edition.audiences.map((audience) => (
                <div
                  key={audience}
                  className="flex items-center gap-2 text-sm text-[#9ca3af]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C97B5A]" />
                  {audience}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
