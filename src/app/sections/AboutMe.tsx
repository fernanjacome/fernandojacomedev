'use client';
import { useEffect, useRef } from 'react';
import { useSection } from '../context/SectionContext';
import styles from './About.module.css';
export default function About() {

    return (
        <section id="about" className={styles.about}>
            <div className={styles.content}>
                <h2>Sobre mí</h2>
                <p>
                    Soy un desarrollador de software con pasión por el diseño, la
                    arquitectura de interfaces y las soluciones elegantes. Me especializo
                    en construir experiencias digitales que se ven y funcionan de forma
                    impecable.
                </p>
                <p>
                    Trabajo con tecnologías como <strong>React</strong>,{' '}
                    <strong>Next.js</strong> y <strong>.NET</strong> para crear
                    dashboards, portafolios, sitios corporativos y software a medida que
                    combinan rendimiento y estética.
                </p>
                <div className={styles.skillsSummary}>
                    <span>✨ Interfaces a medida</span>
                    <span>🧩 Diseño UX limpio</span>
                    <span>⚙️ Código reutilizable</span>
                    <span>🚀 Full Stack adaptable</span>
                </div>
            </div>
        </section>
    );
}
