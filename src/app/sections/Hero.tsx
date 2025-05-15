// src/sections/Hero.tsx
'use client';

import styles from './Hero.module.css';
import dynamic from 'next/dynamic';

const MoonCanvas = dynamic(() => import('../components/MoonCanvas'), { ssr: false });

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.canvasContainer}>
                <MoonCanvas />
            </div>
            <div className={styles.overlay}>
                <h1>Fernando Jácome</h1>
                <p>Full Stack Developer especializado en C#, React y .NET</p>
            </div>
        </section>
    );
}
