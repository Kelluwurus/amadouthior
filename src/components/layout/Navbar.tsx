"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { mainNav } from "@/content/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[--color-bg]/95 backdrop-blur-sm border-b border-[--color-border] py-4"
          : "py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-cormorant)] text-xl font-medium text-[--color-fg] tracking-wide"
        >
          Amadou Thior
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
          {mainNav.filter(l => l.href !== "/").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === link.href
                  ? "text-[--color-accent]"
                  : "text-[--color-fg-muted] hover:text-[--color-fg]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[--color-fg]"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile */}
      {isOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-[--color-bg] border-b border-[--color-border] py-6 px-6">
          <div className="flex flex-col gap-4">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base transition-colors ${
                  pathname === link.href ? "text-[--color-accent]" : "text-[--color-fg]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
