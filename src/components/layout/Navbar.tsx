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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[--color-bg]/95 backdrop-blur-md border-b border-[--color-border] py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-cormorant)] text-lg md:text-xl font-semibold text-[--color-accent-dark] tracking-wide"
        >
          AMADOU THIOR
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Navigation principale">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-300 ${
                pathname === link.href
                  ? "text-[--color-accent] font-medium"
                  : "text-[--color-fg-muted] hover:text-[--color-accent]"
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
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[--color-bg]/98 backdrop-blur-lg z-40 transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[--color-accent-dark]"
            onClick={() => setIsOpen(false)}
          >
            AMADOU THIOR
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-[--color-fg]"
            aria-label="Fermer le menu"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col items-start px-6 pt-8 gap-6" aria-label="Navigation mobile">
          {mainNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-[family-name:var(--font-cormorant)] transition-colors duration-300 ${
                pathname === link.href
                  ? "text-[--color-accent]"
                  : "text-[--color-fg] hover:text-[--color-accent]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
