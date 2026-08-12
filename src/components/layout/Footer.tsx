import Link from "next/link";
import { siteConfig, mainNav, secondaryNav } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-[--color-border] pt-14 pb-8 mt-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Top: brand + navigation */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 md:gap-16 mb-10">
          {/* Brand */}
          <div>
            <span className="font-[family-name:var(--font-cormorant)] text-lg text-[--color-fg]">
              {siteConfig.name}
            </span>
            <p className="text-caption text-[--color-fg-subtle] mt-1 max-w-xs">
              {siteConfig.subtitle}
            </p>
          </div>

          {/* Nav principale */}
          <nav aria-label="Navigation">
            <p className="text-meta text-[--color-accent] mb-3">Navigation</p>
            <ul className="space-y-2">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-[--color-fg-muted] hover:text-[--color-accent] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Nav secondaire */}
          <nav aria-label="Pages complémentaires">
            <p className="text-meta text-[--color-accent] mb-3">Voir aussi</p>
            <ul className="space-y-2">
              {secondaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-caption text-[--color-fg-muted] hover:text-[--color-accent] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-[--color-border] pt-6">
          <p className="text-xs text-[--color-fg-subtle]">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
