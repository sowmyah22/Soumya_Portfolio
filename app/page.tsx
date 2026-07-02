import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
// import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
}
