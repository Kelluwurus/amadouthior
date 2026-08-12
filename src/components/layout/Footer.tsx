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
    <footer className="border-t border-[--color-border] pt-14 pb-10 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Brand + citation */}
        <div className="mb-10">
          <span className="font-[family-name:var(--font-display)] text-2xl text-[--color-fg] block mb-1">
            Amadou Thior
          </span>
          <p className="text-xs text-[--color-fg-muted] mb-4">
            Cinéaste · Producteur-réalisateur · Scénariste · Formateur
          </p>
          <p className="text-caption italic text-[--color-fg-subtle] max-w-md">
            Plus de quatre décennies au service du cinéma, de la transmission et
            de la mémoire audiovisuelle.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-10" aria-label="Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-[--color-fg-subtle] hover:text-[--color-accent] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-[--color-fg-subtle]">
          © {new Date().getFullYear()} Amadou Thior
        </p>
      </div>
    </footer>
  );
}
