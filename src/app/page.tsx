import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import BlogPreview from "@/components/BlogPreview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Certifications />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
