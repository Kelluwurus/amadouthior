export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5 mb-8">
          <div>
            <span className="font-[family-name:var(--font-cormorant)] text-xl text-[#F8F5EF] block mb-1">
              Amadou Thior
            </span>
            <p className="text-sm text-zinc-500">Cinéaste & Consultant</p>
          </div>
          <nav className="flex flex-wrap gap-6">
            <a
              href="#vision"
              className="text-sm text-zinc-500 hover:text-[#C8A24A] transition-colors duration-300"
            >
              Vision
            </a>
            <a
              href="#filmographie"
              className="text-sm text-zinc-500 hover:text-[#C8A24A] transition-colors duration-300"
            >
              Filmographie
            </a>
            <a
              href="#parcours"
              className="text-sm text-zinc-500 hover:text-[#C8A24A] transition-colors duration-300"
            >
              Parcours
            </a>
            <a
              href="#services"
              className="text-sm text-zinc-500 hover:text-[#C8A24A] transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-zinc-500 hover:text-[#C8A24A] transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} Amadou Thior — Cinéaste &
            Consultant. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-zinc-600 hover:text-[#C8A24A] transition-colors duration-300"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-xs text-zinc-600 hover:text-[#C8A24A] transition-colors duration-300"
            >
              Crédits photos
            </a>
            <a
              href="#"
              className="text-xs text-zinc-600 hover:text-[#C8A24A] transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
