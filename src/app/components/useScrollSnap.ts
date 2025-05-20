// 📁 src/hooks/useScrollSnap.ts
import { useEffect } from 'react';

export default function useScrollSnap(sectionIds: string[]) {
  useEffect(() => {
    let isScrolling = false;

    const handleScroll = (e: WheelEvent) => {
      if (isScrolling) return;
      isScrolling = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentIndex = sectionIds.findIndex((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top >= -1 && rect.top <= window.innerHeight / 2;
      });

      const nextIndex = Math.min(
        sectionIds.length - 1,
        Math.max(0, currentIndex + direction)
      );

      const nextSection = document.getElementById(sectionIds[nextIndex]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }

      setTimeout(() => {
        isScrolling = false;
      }, 1000); // Bloquea scroll múltiple por 1 segundo
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [sectionIds]);
}
