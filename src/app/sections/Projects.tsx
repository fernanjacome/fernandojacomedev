'use client';
import { JSX, useState } from 'react';
import styles from './Projects.module.css';
import {
    FaReact,
    FaWindows,

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
} from 'react-icons/si';
import { FiChevronRight } from 'react-icons/fi';

const techIcons: Record<string, JSX.Element> = {
    'React': <FaReact />,
    'WinForms': <FaWindows />,
    '.NET': <SiDotnet />,
    'SQL Server': <FaDatabase />,
    'Firebase': <SiFirebase />,
    'PayPal': <FaPaypal />,
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
            'Sistema para monitoreo de cajeros multientidad con WinForms, .NET y base de datos para trazabilidad.',
        tech: 'C#, WinForms, .NET, REST, SQL Server',
    },
    {
        title: 'Plataforma Web Corporativa',
        description:
            'Sitio web de Condor Energy con catálogo, pagos por PayPal y automatización de correos vía Firebase.',
        tech: 'React, Firebase, PayPal, CSS Modules',
    },
    {
        title: 'Flujos UI de Cajeros Multientidad',
        description:
            'Interfaces administrativas para cajeros con APIs REST y diseño UI con Bootstrap, SCSS y Material UI.',
        tech: '.NET, Redux, Bootstrap, SCSS, Azure',
    },
    {
        title: 'Portfolio Técnico Animado',
        description:
            'Portfolio interactivo con animaciones, collapsibles y diseño modular en Next.js y Three.js.',
        tech: 'Next.js, SCSS, React ',
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
                                        <span className={`${styles.chevron} ${isActive ? styles.rotated : ''}`}>
                                            <FiChevronRight />
                                        </span>

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
