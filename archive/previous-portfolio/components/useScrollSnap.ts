import { useEffect } from 'react';

export default function useScrollSnap(sectionIds: string[]) {
  useEffect(() => {
    let isScrolling = false;

    const handleScroll = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX) || e.ctrlKey) return;
      e.preventDefault();

      if (isScrolling) return;
      isScrolling = true;

      const direction = e.deltaY > 0 ? 1 : -1;
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

      const currentIndex = sections.reduce((nearestIndex, section, index) => {
        const nearestDistance = Math.abs(
          sections[nearestIndex]?.getBoundingClientRect().top ?? 0
        );
        const distance = Math.abs(section.getBoundingClientRect().top);
        return distance < nearestDistance ? index : nearestIndex;
      }, 0);

      const nextIndex = Math.min(
        sections.length - 1,
        Math.max(0, currentIndex + direction)
      );

      sections[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        isScrolling = false;
      }, 850);
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [sectionIds]);
}
