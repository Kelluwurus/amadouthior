"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cineclubNav } from "@/data/cineclub-project";

export default function CineclubNav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-[57px] z-40 bg-[--color-bg]/95 backdrop-blur-md border-b border-[--color-border]"
      aria-label="Navigation CINECLUB"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none py-3 -mx-2">
          {cineclubNav.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/projets/cineclub-diner-debat" &&
                pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`shrink-0 px-4 py-2 text-sm rounded-sm transition-all duration-300 ${
                  isActive
                    ? "bg-[--color-accent] text-white font-medium"
                    : "text-[--color-fg-muted] hover:text-[--color-accent] hover:bg-[--color-surface]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
