'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';
import { TfiWorld } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useShowNavbar } from './useShowNavBar';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiFillAlert, AiFillApi } from 'react-icons/ai';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const visible = useShowNavbar();
    const sections = [
        { id: 'hero', label: 'Inicio', icon: <AiOutlineHome /> },
        { id: 'about', label: 'Sobre mí', icon: <AiOutlineUser /> },
        { id: 'projects', label: 'Proyectos', icon: <AiOutlineProject /> },
        { id: 'skills', label: 'Habilidades', icon: <AiFillAlert /> },
        { id: 'contact', label: 'Contacto', icon: <AiFillApi /> },
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
                        <button
                            key={section.id}
                            onClick={() => handleScroll(section.id)}
                            className={styles.menuItem}
                        >
                            <span className={styles.icon}>{section.icon}</span>
                            <span>{section.label}</span>
                        </button>
                    ))}
                </div>
            )}


        </header>
    );
};

export default Navbar;
