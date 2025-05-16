'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';
import { TfiWorld } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useShowNavbar } from './useShowNavBar';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const visible = useShowNavbar();
    const sections = [
        { id: 'hero', label: 'Inicio' },
        { id: 'about', label: 'Sobre mí' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'skills', label: 'Habilidades' },
        { id: 'contact', label: 'Contacto' },
    ];

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: 'smooth' });
        setOpen(false);
    };

    return (
        <header className={`${styles.navbar} ${visible ? styles.visible : ''}`}>
            <div className={styles.language}>
                <TfiWorld />
            </div>

            <div className={styles.logo}>
                FJ
            </div>

            <button className={styles.burger} onClick={() => setOpen(!open)}>
                <RxHamburgerMenu />
            </button>

            {open && (
                <div className={styles.menu}>
                    {sections.map((section) => (
                        <button key={section.id} onClick={() => handleScroll(section.id)}>
                            {section.label}
                        </button>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Navbar;
