import Hero from "@/components/home/Hero";
import VisionSection from "@/components/home/VisionSection";
import CineclubTeaser from "@/components/home/CineclubTeaser";
import Divider from "@/components/ui/Divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Divider />
      <VisionSection />
      <CineclubTeaser />
    </>
  );
}
