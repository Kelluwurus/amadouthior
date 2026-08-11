import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Filmography from "@/components/Filmography";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Filmography />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
