import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[--color-accent] text-white hover:bg-[--color-accent-hover]",
    secondary:
      "border border-[--color-fg] text-[--color-fg] hover:border-[--color-accent] hover:text-[--color-accent]",
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
