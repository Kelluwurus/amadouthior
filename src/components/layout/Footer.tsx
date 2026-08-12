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
    <footer className="border-t border-[--color-border] pt-12 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
          <div>
            <span className="font-[family-name:var(--font-cormorant)] text-lg text-[--color-fg]">
              Amadou Thior
            </span>
            <p className="text-xs text-[--color-fg-subtle] mt-1">
              Cinéaste · Producteur · Formateur · Consultant
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Navigation secondaire">
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
        </div>
        <p className="text-xs text-[--color-fg-subtle]">
          © {new Date().getFullYear()} Amadou Thior
        </p>
      </div>
    </footer>
  );
}
