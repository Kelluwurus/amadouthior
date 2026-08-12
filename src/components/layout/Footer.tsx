import Link from "next/link";
import { siteConfig, mainNav } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-[--color-bg] border-t border-[--color-border] pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <div>
            <span className="font-[family-name:var(--font-cormorant)] text-xl text-[--color-fg] block mb-1">
              {siteConfig.name}
            </span>
            <p className="text-caption text-[--color-fg-muted]">
              {siteConfig.subtitle}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Navigation pied de page">
            {mainNav.filter((l) => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-caption text-[--color-fg-muted] hover:text-[--color-accent] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-[--color-border] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[--color-fg-subtle]">
            © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/distinctions"
              className="text-xs text-[--color-fg-subtle] hover:text-[--color-accent] transition-colors"
            >
              Distinctions
            </Link>
            <Link
              href="/collaborations"
              className="text-xs text-[--color-fg-subtle] hover:text-[--color-accent] transition-colors"
            >
              Collaborations
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
