interface ImageSlotProps {
  alt: string;
  aspect?: "portrait" | "landscape" | "square" | "cinema";
  size?: "sm" | "md" | "lg";
  className?: string;
  src?: string;
}

/**
 * Emplacement image élégant avec tailles contrôlées.
 * sm = max 200px, md = max 320px, lg = max 480px (par défaut md).
 */
export default function ImageSlot({
  alt,
  aspect = "landscape",
  size = "md",
  className = "",
  src,
}: ImageSlotProps) {
  const aspects = {
    portrait: "aspect-[3/4]",
    landscape: "aspect-[3/2]",
    square: "aspect-square",
    cinema: "aspect-[16/9]",
  };

  const sizes = {
    sm: "max-w-[200px]",
    md: "max-w-[320px]",
    lg: "max-w-[480px]",
  };

  if (src) {
    return (
      <div className={`${aspects[aspect]} ${className.includes("!max-w-none") ? "" : sizes[size]} overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`${aspects[aspect]} ${sizes[size]} bg-[--color-surface] border border-[--color-border] flex items-center justify-center ${className}`}
    >
      <span className="text-[0.6rem] text-[--color-fg-subtle] tracking-wide uppercase">
        Image à fournir
      </span>
    </div>
  );
}
