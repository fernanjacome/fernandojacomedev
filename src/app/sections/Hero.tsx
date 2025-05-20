// src/sections/Hero.tsx
'use client';
import { FaRocket } from 'react-icons/fa';
import styles from './Hero.module.css';


export default function Hero() {

    return (

        <div className={styles.overlay}>
            <div>
                <small className={styles.tagline}>
                    Diseño con intención. Código con propósito.
                </small>
                <h1><span className={styles.name}>Fernando Jácome</span></h1>
                <div className={styles.line}></div>
                <p className={styles.highlight}>Full Stack Developer con mirada de diseñador.</p>
                Desarrollo sistemas, dashboards y sitios web donde cada píxel y cada función cuentan.
                <strong><br></br>Si impacta al usuario, me interesa.</strong>
                <div className={styles.techTags}>
                    <span>#React</span><span>#NextJS</span><span>#CSharp</span>
                    <span>#DotNet</span><span>#UI</span><span>#UX</span>
                </div>
            </div>

            <button
                className={styles.scrollButton}
                onClick={() => {
                    const about = document.getElementById('about');
                    if (about) about.scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Scroll hacia abajo"
            >
                <FaRocket className={styles.rocketIcon} />
            </button>

        </div>
    );
}
