// 📁 src/app/page.tsx
import ObservedSection from './components/ObservedSection';

import AboutMe from './sections/AboutMe';
import Hero from './sections/Hero';

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
