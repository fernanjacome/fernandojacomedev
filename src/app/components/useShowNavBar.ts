// src/hooks/useShowNavbar.ts
import { useSection } from '../context/SectionContext';
import { useEffect, useState } from 'react';

export function useShowNavbar() {
  const { currentSection } = useSection();
  const [show, setShow] = useState(false);


  useEffect(() => {
    setShow(currentSection !== 'hero');
    console.log(currentSection)
  }, [currentSection]);

  return show;
}
