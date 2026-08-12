import Link from "next/link";

const navLinks = [
  { label: "Parcours", href: "/parcours" },
  { label: "Œuvres", href: "/oeuvres" },
  { label: "Transmission", href: "/transmission" },
  { label: "Expertise", href: "/expertise" },
  { label: "Archives", href: "/archives" },
  { label: "CINECLUB", href: "/cineclub" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[--color-border] py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 mb-12">
          <div>
            <span className="font-[family-name:var(--font-display)] text-3xl text-[--color-fg] block mb-3">
              Amadou Thior
            </span>
            <p className="text-sm text-[--color-fg-subtle] max-w-md leading-relaxed">
              Cinéaste · Producteur-réalisateur · Scénariste · Formateur.
              Plus de quatre décennies au service du cinéma, de la transmission
              et de la mémoire audiovisuelle.
            </p>
          </div>
          <nav className="flex flex-col gap-2" aria-label="Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-wider text-[--color-fg-subtle] hover:text-[--color-accent] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-xs text-[--color-fg-subtle]">
          © {new Date().getFullYear()} Amadou Thior
        </p>
      </div>
    </footer>
  );
}
