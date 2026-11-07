'use client';

import { useState } from 'react';
import { FaRocket, FaUser, FaFolderOpen, FaEnvelope } from 'react-icons/fa';
import styles from './RocketMenu.module.css';
import { useSection } from '../context/SectionContext';
import { FaEarthAmericas } from 'react-icons/fa6';

export default function RocketMenu() {
    const { currentSection } = useSection();
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

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
                            <button
                                onClick={() => scrollTo('contact')}
                                className={`${styles.contactButton} ${currentSection === 'contact' ? styles.active : ''}`}
                            >
                                <FaEnvelope /> Contacto
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
