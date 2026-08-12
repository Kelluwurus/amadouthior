import Link from "next/link";

interface BoutonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primaire" | "secondaire" | "ghost";
  className?: string;
  external?: boolean;
}

export default function Bouton({
  href,
  children,
  variant = "primaire",
  className = "",
  external = false,
}: BoutonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-colors duration-300";

  const variants = {
    primaire:
      "bg-[--color-accent] text-[#FAF6EF] hover:bg-[--color-accent-hover]",
    secondaire:
      "border border-[--color-border] text-[--color-fg] hover:border-[--color-accent] hover:text-[--color-accent]",
    ghost:
      "text-[--color-accent] hover:text-[--color-accent-hover]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
