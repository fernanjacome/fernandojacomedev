'use client';
import { useEffect, useRef } from 'react';
import { useSection } from '../context/SectionContext';

interface Props {
    id: string;
    children: React.ReactNode;
    className?: string;
}

export default function ObservedSection({ id, children, className = '' }: Props) {
    const ref = useRef<HTMLElement>(null);
    const { setCurrentSection } = useSection();

    useEffect(() => {
        const section = ref.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCurrentSection(id);
                }
            },
            {
                threshold: 0.6,
            }
        );

        observer.observe(section);
        return () => {
            observer.unobserve(section);
        };
    }, [id]);

    return (
        <section id={id} ref={ref} className={className} style={{ scrollSnapAlign: 'start' }}>
            {children}
        </section>
    );
}
