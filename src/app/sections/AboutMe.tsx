'use client';

import styles from './About.module.css';
import { useState } from 'react';
import {
    FaCode, FaBuilding, FaTerminal,
    FaUserCircle,
    FaLightbulb
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs,
    SiDotnet, SiDjango, SiFirebase, SiMongodb, SiSqlite, SiMysql,
    SiFigma, SiAdobephotoshop, SiBootstrap, SiTailwindcss,
    SiGit, SiGnubash, SiApachenetbeanside
} from 'react-icons/si';

export default function About() {
    const [activeTab, setActiveTab] = useState('perfil');
    const techs = [
        { icon: <SiHtml5 />, label: 'HTML' },
        { icon: <SiCss3 />, label: 'CSS/SCSS' },
        { icon: <SiJavascript />, label: 'JavaScript' },
        { icon: <SiReact />, label: 'React' },
        { icon: <SiNextdotjs />, label: 'Next.js' },
        { icon: <SiDotnet />, label: '.NET' },
        { icon: <SiDjango />, label: 'Django' },
        { icon: <SiFirebase />, label: 'Firebase' },
        { icon: <SiApachenetbeanside />, label: 'APIs REST' },
        { icon: <SiMysql />, label: 'SQL Server' },
        { icon: <SiSqlite />, label: 'SQLite' },
        { icon: <SiMongodb />, label: 'MongoDB' },
        { icon: <SiFigma />, label: 'Figma' },
        { icon: <SiAdobephotoshop />, label: 'Photoshop' },
        { icon: <SiBootstrap />, label: 'Bootstrap' },
        { icon: <SiTailwindcss />, label: 'Tailwind' },
        { icon: <SiGit />, label: 'Git' },
        { icon: <SiGnubash />, label: 'Bash' },
    ];

    const tabs = [
        { id: 'perfil', label: 'Perfil', icon: <FaCode /> },
        { id: 'experiencia', label: 'Experiencia', icon: <FaBuilding /> },
        { id: 'stack', label: 'Stack', icon: <FaTerminal /> },
        { id: 'personal', label: 'Información Personal', icon: <FaUserCircle /> },
        { id: 'hobbies', label: 'Enfoques', icon: <FaLightbulb /> }
    ];

    return (
        <section className={styles.about} id="about">
            <header className={styles.header}>
                <h2 className={styles.title}>
                    Acerca de mi
                </h2>
                <p className={styles.description}>
                    Construyo sistemas donde diseño, lógica y experiencia orbitan alrededor del usuario.
                </p>
            </header>

            <nav className={styles.tabs}>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </nav>

            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    className={styles.content}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15, ease: 'easeInOut' }}
                >
                    {activeTab === 'perfil' && (
                        <>
                            <div className={styles.profileBlock}>
                                <div className={styles.profileRow}>
                                    <span className={styles.label}>Rol</span>
                                    <span className={styles.value}>Desarrollador de Software</span>
                                </div>
                                <div className={styles.profileRow}>
                                    <span className={styles.label}>Especialidad</span>
                                    <span className={styles.value}>Interfaces funcionales</span>
                                </div>
                                <div className={styles.profileRow}>
                                    <span className={styles.label}>Proyectos</span>
                                    <span className={styles.value}>Dashboards, landings, flujos</span>
                                </div>
                                <div className={styles.profileRow}>
                                    <span className={styles.label}>Prioridad</span>
                                    <span className={styles.value}>Eficiencia y modularidad</span>
                                </div>
                                <div className={styles.profileRow}>
                                    <span className={styles.label}>Construcción</span>
                                    <span className={styles.value}>Coherencia entre lógica, interfaz y uso</span>
                                </div>

                            </div>
                        </>
                    )}
                    {activeTab === 'experiencia' && (
                        <>
                            <h3 className={styles.subtitle}>Trayectoria profesional</h3>
                            <div className={styles.timeline}>
                                <div>
                                    <span className={styles.date}>2024 – Actualidad</span>
                                    <strong>AlexSoft S.A.</strong>
                                    <p>Desarrollo de APIs en .NET y UIs entorno financiero y flujos de cajeros.</p>
                                </div>
                                <div>
                                    <span className={styles.date}>2025</span>
                                    <strong>Condor Energy</strong>
                                    <p>Sitio coorporativo en React con integración de pasarelas de pago PayPayl y Firebase.</p>
                                </div>
                                <div>
                                    <span className={styles.date}>2024</span>
                                    <strong>Payconer</strong>
                                    <p>Integración full stack con React, Django y PostgreSQL con despliegue automatizado.</p>
                                </div>
                            </div>
                        </>


                    )}

                    {activeTab === 'stack' && (
                        <>
                            <div className={styles.techGrid}>
                                {techs.map(({ icon, label }) => (
                                    <div className={styles.techItem} key={label}>
                                        <span className={styles.techIcon}>{icon}</span>
                                        <span className={styles.techLabel}>{label}</span>
                                    </div>
                                ))}
                            </div>

                        </>
                    )}

                    {activeTab === 'personal' && (
                        <>
                            {/* <h3 className={styles.subtitle}>Sobre mi persona</h3> */}

                            <div className={styles.personalCardGrid}>
                                <div className={styles.cardItem}>
                                    <span className={styles.label}>Nombre Completo</span>
                                    <span className={styles.value}>Fernando Daniel Jácome Veliz</span>
                                </div>

                                <div className={styles.cardItem}>
                                    <span className={styles.label}>Nacionalidad</span>
                                    <span className={styles.value}>Ecuatoriano</span>
                                </div>

                                <div className={styles.cardItem}>
                                    <span className={styles.label}>Edad</span>
                                    <span className={styles.value}>23 años</span>
                                </div>

                                <div className={styles.cardItem}>
                                    <span className={styles.label}>Formación</span>
                                    <span className={styles.value}>Ing. en Software (10mo semestre)</span>
                                </div>

                                <div className={styles.cardItem}>
                                    <span className={styles.label}>Experiencia</span>
                                    <span className={styles.value}>3 años desarrollo web</span>
                                </div>
                                {/* <div className={styles.cardItem}>
                                    <span className={styles.label}>Links</span>
                                    <div className={styles.value} style={{ display: 'flex', gap: '0.3rem' }}>
                                        <a href="#projects">Ver proyectos</a>
                                        <a href="#contact">Contactar</a>
                                        <a href="/FernandoJacome_2025.pdf" download>Descargar CV</a>
                                    </div>
                                </div> */}
                            </div>
                        </>
                    )}

                    {activeTab === 'hobbies' && (
                        <>
                            <div className={styles.hobbyGridCompact}>
                                {/* <div className={styles.hobbyCardCompact}>
                                    <span className={styles.label}>Electrónica</span>
                                    <p>Proyectos físicos y lógica digital.</p>
                                </div> */}

                                <div className={styles.hobbyCardCompact}>
                                    <span className={styles.label}>Hardware de PC</span>
                                    <p>Armado y optimización.</p>
                                </div>

                                <div className={styles.hobbyCardCompact}>
                                    <span className={styles.label}>Cocina técnica</span>
                                    <p>Procesos y precisión.</p>
                                </div>

                                <div className={styles.hobbyCardCompact}>
                                    <span className={styles.label}>Streaming</span>
                                    <p>Procesos en vivo.</p>
                                </div>

                                <div className={styles.hobbyCardCompact}>
                                    <span className={styles.label}>Pixel art / tiles</span>
                                    <p>Diseño modular de juegos.</p>
                                </div>

                                <div className={styles.hobbyCardCompact}>
                                    <span className={styles.label}>Criptografía</span>
                                    <p>Cifrado y análisis de datos.</p>
                                </div>
                            </div>
                        </>
                    )}


                </motion.div>
            </AnimatePresence>
        </section>
    );
}
