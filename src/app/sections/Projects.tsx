'use client';
import { JSX, useState } from 'react';
import styles from './Projects.module.css';
import {
    FaReact,
    FaWindows,
    FaCogs,
    FaGamepad,
    FaBootstrap,
    FaDatabase,
    FaCss3Alt,
    FaPaypal,
} from 'react-icons/fa';
import {
    SiDotnet,
    SiNextdotjs,
    SiFramer,
    SiFirebase,
    SiRedux,
} from 'react-icons/si';

const techIcons: Record<string, JSX.Element> = {
    'React': <FaReact />,
    'WinForms': <FaWindows />,
    'C#': <FaCogs />,
    '.NET': <SiDotnet />,
    'SQL Server': <FaDatabase />,
    'Firebase': <SiFirebase />,
    'PayPal': <FaPaypal />,
    'Redux': <SiRedux />,
    'Bootstrap': <FaBootstrap />,
    'SCSS': <FaCss3Alt />,
    'Next.js': <SiNextdotjs />,
    'Framer Motion': <SiFramer />,
    'Pixel Art': <FaGamepad />,
    'MonoGame': <FaGamepad />,
};

const projects = [
    {
        title: 'Sistema de Integridad ATM',
        description:
            'Desarrollo de un sistema de control de integridad para cajeros automáticos multientidad (Banco Guayaquil, Pichincha, Bolivariano, Solidario, etc). Incluye WinForms para visualización, API REST en .NET Framework, y base de datos para trazabilidad de eventos.',
        tech: 'C#, WinForms, .NET, REST, SQL Server',
    },
    {
        title: 'Plataforma Web Corporativa',
        description:
            'Diseño y desarrollo del sitio web oficial de Condor Energy con React y Firebase. Incluye catálogo de productos, integración de pasarela PayPal, sistema de emails automáticos y diseño UI/UX personalizado.',
        tech: 'React, Firebase, PayPal, CSS Modules',
    },
    {
        title: 'Flujos UI de Cajeros Multientidad',
        description:
            'Diseño e implementación de interfaces administrativas para cajeros automáticos en entornos de producción reales. Integración de múltiples entidades financieras mediante APIs REST y diseño optimizado con SCSS, Bootstrap y Material UI.',
        tech: '.NET, Redux, Bootstrap, SCSS, Azure',
    },
    {
        title: 'Portfolio Técnico Animado',
        description:
            'Diseño y desarrollo de un portfolio profesional animado en Next.js. Incluye interacción con Three.js, collapsibles personalizados, organización por secciones y despliegue responsive optimizado.',
        tech: 'Next.js, Framer Motion, React Three Fiber, CSS Modules',
    },
];


export default function Projects() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);



    const toggleIndex = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className={styles.about}>
            <div className={styles.projectBlock}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Proyectos</h2>
                    <p className={styles.description}>
                        Interfaces, sistemas y juegos desarrollados con precisión técnica y propósito.
                    </p>
                </div>

                <div className={styles.projectGrid}>
                    {projects.map(({ title, description, tech }, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <div
                                key={title}
                                className={`${styles.projectCard} ${isActive ? styles.expanded : ''}`}
                                onClick={() => toggleIndex(index)}
                            >
                                <div className={styles.projectHeader}>
                                    <div className={styles.projectLeft}>
                                        <span className={styles.projectTitle}>{title}</span>
                                    </div>

                                    <div className={styles.projectIcons}>
                                        {tech.split(',').map(t => (
                                            <span key={t.trim()} className={styles.icon}>
                                                {techIcons[t.trim()] || null}
                                            </span>
                                        ))}
                                        <span className={`${styles.arrow} ${isActive ? styles.rotated : ''}`}>&#x25B6;</span>
                                    </div>
                                </div>


                                <div className={`${styles.projectBody} ${isActive ? styles.show : styles.hide}`}>
                                    <p className={styles.projectDescription}>{description}</p>
                                    <div className={styles.techTags}>
                                        {tech.split(',').map(t => (
                                            <span key={t} className={styles.techItem}>{t.trim()}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

    );
}
