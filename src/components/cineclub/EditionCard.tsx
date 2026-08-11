import { Calendar, MapPin, Clock, Clapperboard, Award, Radio, Tag, Target, Globe, Users } from "lucide-react";
import type { CineclubProject } from "@/data/cineclub-project";

type Edition = CineclubProject["editions"][number];

interface EditionCardProps {
  edition: Edition;
}

export default function EditionCard({ edition }: EditionCardProps) {
  return (
    <div className="bg-[#1a2e1a] border border-[#2E5C1E]/30 rounded-xl overflow-hidden">
      {"internationalDay" in edition && edition.internationalDay && (
        <div className="bg-[#D4AF37] px-6 py-3 text-center">
          <span className="text-sm font-semibold text-[#1A1A1A]">
            {edition.internationalDay.name} — {edition.internationalDay.location}, {edition.internationalDay.date}
          </span>
        </div>
      )}
      <div className="p-6 md:p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-[#D4AF37] mb-1 block">{edition.editionLabel}</span>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#f5f0eb]">{edition.filmTitle}</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#2E5C1E]/40 border border-[#2E5C1E]/50 rounded-full text-[#D4AF37]">
            <Calendar size={12} />{edition.year}
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="flex items-center gap-2 text-sm text-[#9ca3af]"><Clapperboard size={14} className="text-[#C97B5A]" /><span>{edition.director}</span></div>
          {"producer" in edition && edition.producer && <div className="flex items-center gap-2 text-sm text-[#9ca3af]"><Target size={14} className="text-[#C97B5A]" /><span>{edition.producer}</span></div>}
          <div className="flex items-center gap-2 text-sm text-[#9ca3af]"><MapPin size={14} className="text-[#C97B5A]" /><span>{edition.country}</span></div>
          <div className="flex items-center gap-2 text-sm text-[#9ca3af]"><Clock size={14} className="text-[#C97B5A]" /><span>{edition.duration}</span></div>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium bg-[#0f0f0f]/50 border border-white/10 rounded text-[#9ca3af]">{edition.genre}</span>
          <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-[#0f0f0f]/50 border border-white/10 rounded text-[#9ca3af]"><Globe size={11} />{edition.originalLanguage}</span>
        </div>
        {"recognition" in edition && edition.recognition && <p className="text-sm text-[#D4AF37] italic">{edition.recognition}</p>}
        <div><h4 className="text-sm font-semibold text-[#f5f0eb] mb-2">Synopsis</h4><p className="text-sm text-[#9ca3af] leading-relaxed">{edition.synopsis}</p></div>
        {"eventStory" in edition && edition.eventStory && (
          <div>
            <h4 className="text-sm font-semibold text-[#f5f0eb] mb-2">Contexte de la projection</h4>
            <p className="text-sm text-[#9ca3af] leading-relaxed">{edition.eventStory}</p>
            {"eventDate" in edition && "venue" in edition && (
              <div className="flex flex-wrap gap-4 mt-3 text-xs text-[#6b7280]">
                <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#D4AF37]" />{edition.eventDate}</span>
                <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#D4AF37]" />{edition.venue}</span>
              </div>
            )}
          </div>
        )}
        {"awards" in edition && edition.awards && edition.awards.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-[#f5f0eb] mb-2 flex items-center gap-2"><Award size={14} className="text-[#D4AF37]" />Distinctions</h4>
            <ul className="space-y-1">{edition.awards.map((award: string) => <li key={award} className="text-sm text-[#9ca3af] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#D4AF37]" />{award}</li>)}</ul>
          </div>
        )}
        {"mediaAppearances" in edition && edition.mediaAppearances && edition.mediaAppearances.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-[#f5f0eb] mb-2 flex items-center gap-2"><Radio size={14} className="text-[#D4AF37]" />Couverture médiatique</h4>
            <ul className="space-y-1">{edition.mediaAppearances.map((item: string) => <li key={item} className="text-sm text-[#9ca3af] flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#D4AF37]" />{item}</li>)}</ul>
          </div>
        )}
        {"objectives" in edition && edition.objectives && (
          <div>
            <h4 className="text-sm font-semibold text-[#f5f0eb] mb-3 flex items-center gap-2"><Award size={14} className="text-[#D4AF37]" />Objectifs</h4>
            <ul className="space-y-2">{edition.objectives.map((obj: string) => <li key={obj} className="flex items-start gap-2.5 text-sm text-[#9ca3af]"><span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0 mt-1.5" />{obj}</li>)}</ul>
          </div>
        )}
        {"themes" in edition && edition.themes && (
          <div>
            <h4 className="text-sm font-semibold text-[#f5f0eb] mb-3 flex items-center gap-2"><Tag size={14} className="text-[#D4AF37]" />Thématiques</h4>
            <div className="flex flex-wrap gap-2">{edition.themes.map((theme: string) => <span key={theme} className="px-3 py-1 text-xs font-medium bg-[#2E5C1E]/30 border border-[#2E5C1E]/40 rounded-full text-[#D4AF37]">{theme}</span>)}</div>
          </div>
        )}
        {"targetAudiences" in edition && edition.targetAudiences && (
          <div>
            <h4 className="text-sm font-semibold text-[#f5f0eb] mb-3 flex items-center gap-2"><Users size={14} className="text-[#D4AF37]" />Publics cibles</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{edition.targetAudiences.map((a: string) => <div key={a} className="flex items-center gap-2 text-sm text-[#9ca3af]"><span className="w-1.5 h-1.5 rounded-full bg-[#C97B5A]" />{a}</div>)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
