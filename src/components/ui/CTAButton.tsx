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
  const baseStyles =
    "inline-flex items-center gap-2 px-7 py-3 text-sm font-medium rounded-sm transition-all duration-300 hover:-translate-y-0.5";

  const variants = {
    primary:
      "bg-[--color-accent] text-white hover:bg-[--color-accent-hover] hover:shadow-md",
    secondary:
      "border border-[--color-accent] text-[--color-accent] hover:bg-[--color-accent] hover:text-white",
    ghost:
      "text-[--color-accent] hover:text-[--color-accent-hover] hover:bg-[--color-accent]/5",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

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
