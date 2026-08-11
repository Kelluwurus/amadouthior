"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cineclubNav } from "@/data/cineclub-project";

export default function CineclubNav() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-[57px] z-40 bg-[#0C0C0C]/95 backdrop-blur-md border-b border-[#0F382C]/20"
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
                className={`shrink-0 px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-[#0F382C] text-[#C8A24A] font-medium"
                    : "text-[#8A8A8A] hover:text-[#F5F0EB] hover:bg-[#0F382C]/20"
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
