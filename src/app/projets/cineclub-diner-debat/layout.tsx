import CineclubNav from "@/components/cineclub/CineclubNav";

export default function CineclubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <CineclubNav />
      {children}
    </div>
  );
}
