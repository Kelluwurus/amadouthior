import Link from "next/link";
import { siteConfig, mainNav } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-[--color-border] pt-12 pb-8 mt-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <span className="font-[family-name:var(--font-cormorant)] text-lg text-[--color-fg]">
              {siteConfig.name}
            </span>
            <p className="text-caption text-[--color-fg-subtle] mt-0.5">
              {siteConfig.subtitle}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Pied de page">
            {mainNav.filter(l => l.href !== "/").map((link) => (
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
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
