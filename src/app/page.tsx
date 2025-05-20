'use client';

import ObservedSection from './components/ObservedSection';
import useScrollSnap from './components/useScrollSnap';
import AboutMe from './sections/AboutMe';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

export default function Home() {
  useScrollSnap(['hero', 'about', 'projects', 'skills']);

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

      <ObservedSection id="skills" className="skills">
        <Skills />
      </ObservedSection>
    </main>
  );
}
