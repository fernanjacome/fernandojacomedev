// 📁 src/app/page.tsx
import ObservedSection from './components/ObservedSection';
import styles from './page.module.css';
import AboutMe from './sections/AboutMe';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

export default function Home() {
  return (
    <main>
      <ObservedSection id="hero">
        <Hero />
      </ObservedSection>

      <ObservedSection id="about">
        <AboutMe />
      </ObservedSection>
      {/* <ObservedSection id="skills">
        <Skills />
      </ObservedSection>
      <ObservedSection id="projects">
        <Projects />
      </ObservedSection> */}
    </main>
  );
}
