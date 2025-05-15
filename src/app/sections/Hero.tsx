// src/sections/Hero.tsx
'use client';
import styles from './Hero.module.css';


export default function Hero() {

    return (

        <div className={styles.overlay}>
            <small className={styles.tagline}>
                Interfaces limpias. Experiencias claras. Desarrollo profesional.
            </small>
            <h1><span className={styles.name}>Fernando Jácome</span></h1>
            <div className={styles.line}></div>
            <p className={styles.highlight}>Diseñador y desarrollador de software</p>
            <p>Enfocado en <strong>experiencias digitales impecables</strong>, diseño UI/UX y soluciones a medida con React, Next.js y .NET.</p>
            <div className={styles.techTags}>
                <span>#React</span><span>#NextJS</span><span>#CSharp</span>
                <span>#DotNet</span><span>#UI</span><span>#UX</span>
            </div>


        </div>
    );
}
