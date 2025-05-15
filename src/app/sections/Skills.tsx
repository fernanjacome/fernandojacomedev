'use client';
import React from 'react';
import styles from './Skills.module.css'; // Opcional si tienes estilos

const Skills = () => {
    return (
        <div className={styles.skills}>
            <h2>Habilidades Técnicas</h2>
            <ul className={styles.skillList}>
                <li>C# / .NET</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>Entity Framework</li>
                <li>HTML / CSS</li>
                <li>MonoGame</li>
                <li>Git / GitHub</li>
            </ul>
        </div>
    );
};

export default Skills;
