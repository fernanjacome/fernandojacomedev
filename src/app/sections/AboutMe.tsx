'use client';

import styles from './About.module.css';
import { useState } from 'react';
import {
    FaCode, FaBuilding, FaTerminal, FaPaintBrush, FaPuzzlePiece, FaBrain,
    FaUserCircle,
    FaLightbulb
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
    const [activeTab, setActiveTab] = useState('perfil');

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
                            <h3 className={styles.subtitle}>Perfil profesional</h3>

                            <div className={styles.profileBlock}>
                                <div className={styles.profileRow}>
                                    <span className={styles.label}>Rol</span>
                                    <span className={styles.value}>Software Developer</span>
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
                                <div><strong>AlexSoft S.A.</strong><p>Desarrollo de APIs en .NET y UIs para flujos de cajeros.</p></div>
                                <div><strong>Condor Energy</strong><p>Sitio institucional en React con integración de pasarelas de pago.</p></div>
                                <div><strong>Payconer</strong><p>Backend en Django y PostgreSQL con despliegue automatizado.</p></div>
                            </div>
                        </>
                    )}

                    {activeTab === 'stack' && (
                        <>
                            <h3 className={styles.subtitle}>Stack técnico</h3>
                            <div className={styles.stackGrid}>
                                <div><h4>Frontend</h4><p>React, Next.js, SCSS, MUI</p></div>
                                <div><h4>Backend</h4><p>.NET, Django, Firebase</p></div>
                                <div><h4>Bases de datos</h4><p>PostgreSQL, SQLite</p></div>
                                <div><h4>DevOps</h4><p>Git, Azure, Bash</p></div>
                            </div>
                            <div className={styles.links}>
                                <a href="#projects">Ver proyectos</a>
                                <a href="#contact">Contactar</a>
                                <a href="/FernandoJacome_2025.pdf" download>Descargar CV</a>
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
                            </div>
                        </>
                    )}

                    {activeTab === 'hobbies' && (
                        <>
                            <div className={styles.hobbyGridCompact}>
                                <div className={styles.hobbyCardCompact}>
                                    <span className={styles.label}>Electrónica</span>
                                    <p>Proyectos físicos y lógica digital.</p>
                                </div>

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
