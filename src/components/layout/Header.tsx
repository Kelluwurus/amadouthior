"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Parcours", href: "/parcours" },
  { label: "Œuvres", href: "/oeuvres" },
  { label: "Transmission", href: "/transmission" },
  { label: "Expertise", href: "/expertise" },
  { label: "CINECLUB", href: "/cineclub" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[--color-bg]/90 backdrop-blur-md border-b border-[--color-border] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-2xl font-medium text-[--color-fg] tracking-wide"
        >
          Amadou Thior
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                pathname.startsWith(link.href)
                  ? "text-[--color-accent]"
                  : "text-[--color-fg-muted] hover:text-[--color-fg]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-[--color-fg]"
          aria-label={open ? "Fermer" : "Menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden fixed inset-0 bg-[--color-bg]/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8">
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-[--color-fg]">
            <X size={24} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-[family-name:var(--font-display)] text-[--color-fg] hover:text-[--color-accent] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
