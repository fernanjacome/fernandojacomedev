'use client';
import styles from './Projects.module.css';

export default function Projects() {
    return (
        <div className={styles.container}>
            <h2>Proyectos</h2>
            <p>Explora algunos de los sistemas y soluciones que he desarrollado.</p>
            <ul className={styles.projectList}>
                <li>
                    <h3>Sistema de Monitoreo</h3>
                    <span>WinForms + C# + API REST</span>
                </li>
                <li>
                    <h3>Dashboard React + .NET</h3>
                    <span>React, Tailwind, Web API</span>
                </li>
                <li>
                    <h3>Juego tipo Stardew Valley</h3>
                    <span>MonoGame, C#, Pixel Art</span>
                </li>
            </ul>
        </div>
    );
}
