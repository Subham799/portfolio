import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyHireMe from './components/WhyHireMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        }
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section-animate');
    for (const section of sections) {
      observer.observe(section);
    }

    return () => {
      for (const section of sections) {
        observer.unobserve(section);
      }
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App bg-[#121920] text-white min-h-screen">
      <Navbar
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToSkills={() => scrollToSection(skillsRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <Hero />
      <About ref={aboutRef} />
      <WhyHireMe />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
