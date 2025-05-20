'use client';

import { useState } from 'react';
import { FaRocket, FaUser, FaFolderOpen, FaTools, FaEnvelope, FaHome } from 'react-icons/fa';
import styles from './RocketMenu.module.css';
import { useSection } from '../context/SectionContext'; // Ajustá el path si es necesario
import { FaEarthAmericas } from 'react-icons/fa6';

export default function RocketMenu() {
    const { currentSection } = useSection();
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    // Ocultar el botón mientras estás en el hero
    const isVisible = currentSection !== 'hero';

    return (
        <>
            {isVisible && (
                <div className={styles.floatingButton}>
                    <button
                        className={styles.rocketButton}
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Abrir menú de navegación"
                    >
                        <FaRocket
                            className={`${styles.rocketIcon} ${menuOpen ? styles.rotateUp : styles.rotateDown}`}
                        />

                    </button>

                    {menuOpen && (
                        <div className={styles.menu}>
                            <button
                                onClick={() => scrollTo('hero')}
                                className={currentSection === 'hero' ? styles.active : ''}
                            >
                                <FaEarthAmericas /> Inicio
                            </button>
                            <button
                                onClick={() => scrollTo('about')}
                                className={currentSection === 'about' ? styles.active : ''}
                            >
                                <FaUser /> Sobre mí
                            </button>
                            <button
                                onClick={() => scrollTo('projects')}
                                className={currentSection === 'projects' ? styles.active : ''}
                            >
                                <FaFolderOpen /> Proyectos
                            </button>
                            {/* <button
                                onClick={() => scrollTo('skills')}
                                className={currentSection === 'skills' ? styles.active : ''}
                            >
                                <FaTools /> Habilidades
                            </button> */}
                            <a
                                href="#contacto"
                                className={`${styles.contactButton} ${currentSection === 'contacto' ? styles.active : ''}`}
                            >
                                <FaEnvelope /> Contacto
                            </a>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
