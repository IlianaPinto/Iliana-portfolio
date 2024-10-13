import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
// import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { ExperienceSection } from "@/sections/Experience";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      {/* <section id="projects">
        <ProjectsSection />
      </section> */}
      <section id="experience">
        <ExperienceSection />
        <TapeSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
