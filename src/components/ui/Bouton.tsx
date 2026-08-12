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
    "inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300";

  const variants = {
    primaire:
      "bg-[--color-accent] text-white uppercase hover:bg-[--color-accent-hover] hover:shadow-lg",
    secondaire:
      "border border-[--color-fg]/20 text-[--color-fg] uppercase hover:border-[--color-accent] hover:text-[--color-accent]",
    ghost:
      "text-[--color-accent] hover:text-[--color-accent-hover]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{children}</a>;
  }
  return <Link href={href} className={classes}>{children}</Link>;
}
