export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <span className="font-[family-name:var(--font-playfair)] text-lg text-[#f5f0eb]">
              Amadou Thior
            </span>
            <p className="text-sm text-[#9ca3af] mt-1">
              Réalisateur · Producteur · Formateur Audiovisuel
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            <a href="#about" className="text-sm text-[#9ca3af] hover:text-[#c4723a] transition-colors">
              À propos
            </a>
            <a href="#filmography" className="text-sm text-[#9ca3af] hover:text-[#c4723a] transition-colors">
              Filmographie
            </a>
            <a href="#experience" className="text-sm text-[#9ca3af] hover:text-[#c4723a] transition-colors">
              Parcours
            </a>
            <a href="#services" className="text-sm text-[#9ca3af] hover:text-[#c4723a] transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm text-[#9ca3af] hover:text-[#c4723a] transition-colors">
              Contact
            </a>
          </nav>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b7280]">
            &copy; {new Date().getFullYear()} Amadou Thior — TAF Productions Afrique Sarl. Tous droits réservés.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-[#6b7280] hover:text-[#c4723a] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-xs text-[#6b7280] hover:text-[#c4723a] transition-colors">
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
