// 📁 src/app/page.tsx
import ObservedSection from './components/ObservedSection';

import AboutMe from './sections/AboutMe';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';

export default function Home() {
  return (
    <main>
      <ObservedSection id="hero" className='hero'>
        <Hero />
      </ObservedSection>

      <ObservedSection id="about" className='about'>
        <AboutMe />
      </ObservedSection>
      <ObservedSection id="projects" className='projects'>
        <Projects />
      </ObservedSection>
      <ObservedSection id="skills" className='skills'>
        <Skills />
      </ObservedSection>

    </main>
  );
}
