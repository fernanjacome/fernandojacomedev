// 📁 src/app/page.tsx
import styles from './page.module.css';
import Hero from './sections/Hero';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      {/* <AboutMe />
      <Skills  />
      <Projects />
      <Contact /> */}
    </main>
  );
}
