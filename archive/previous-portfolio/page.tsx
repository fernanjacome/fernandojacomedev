'use client';

import ObservedSection from './components/ObservedSection';
import RocketMenu from './components/RocketMenu';
import useScrollSnap from './components/useScrollSnap';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

const SECTION_IDS = ['hero', 'about', 'projects', 'contact'];

export default function Home() {
  useScrollSnap(SECTION_IDS);

  return (
    <main>
      <ObservedSection id="hero" className="hero">
        <Hero />
      </ObservedSection>

      <ObservedSection id="about" className="about">
        <AboutMe />
      </ObservedSection>

      <ObservedSection id="projects" className="projects">
        <Projects />
      </ObservedSection>

      <ObservedSection id="contact" className="contact">
        <Contact />
      </ObservedSection>
      <RocketMenu />
    </main>
  );
}
