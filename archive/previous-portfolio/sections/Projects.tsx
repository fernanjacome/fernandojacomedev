'use client';

import { JSX, useState } from 'react';
import styles from './Projects.module.css';
import {
    FaCode,
    FaDesktop,
    FaExchangeAlt,
    FaMicrophone,
    FaProjectDiagram,
    FaReact,
    FaServer,
    FaTools,
} from 'react-icons/fa';
import { SiDotnet, SiElectron, SiJavascript, SiVite } from 'react-icons/si';
import { FiArrowRight, FiCheck, FiCpu, FiLayers, FiTarget } from 'react-icons/fi';

type Project = {
    title: string;
    area: string;
    role: string;
    icon: JSX.Element;
    thesis: string;
    proof: string;
    signals: string[];
    flow: string[];
    stack: string[];
};

const techIcons: Record<string, JSX.Element> = {
    '.NET 8': <SiDotnet />,
    'ASP.NET Core': <SiDotnet />,
    'React': <FaReact />,
    'Electron': <SiElectron />,
    'Vite': <SiVite />,
    'JavaScript': <SiJavascript />,
    'Service Worker': <SiJavascript />,
    'Speech API': <FaMicrophone />,
    'API REST': <FaServer />,
    'WebSocket': <FaExchangeAlt />,
    'HTML/CSS': <FaCode />,
    'XML': <FaCode />,
};

const projects: Project[] = [
    {
        title: 'Recursos ATM remotos',
        area: 'Infraestructura EVA',
        role: 'Diseno backend + cache',
        icon: <FaServer />,
        thesis: 'Actualizaciones controladas con manifest, cache cliente y despliegue portable.',
        proof: 'Versionado, health checks y continuidad operativa.',
        signals: ['Manifest como contrato', 'Cache offline', 'Health checks', 'Azure / Podman'],
        flow: ['Publicar manifest', 'Sincronizar cajero', 'Reportar estado'],
        stack: ['.NET 8', 'ASP.NET Core', 'Service Worker', 'API REST'],
    },
    {
        title: 'Pantallas ATM multi-entidad',
        area: 'UI transaccional',
        role: 'Diseno y adaptacion',
        icon: <FaDesktop />,
        thesis: 'Sistema visual para flujos bancarios multi-entidad, consistente y compatible con EVA.',
        proof: 'Estados claros, variantes controladas y lectura rapida.',
        signals: ['Multi-entidad', 'Estados ATM', 'Flujos bancarios', 'Assets controlados'],
        flow: ['Entidad', 'Flujo', 'Pantalla'],
        stack: ['HTML/CSS', 'JavaScript', 'XML'],
    },
    {
        title: 'Agente de voz ATM',
        area: 'Interaccion asistida',
        role: 'Prototipo funcional',
        icon: <FaMicrophone />,
        thesis: 'Voz para iniciar operaciones ATM con activacion, feedback visual y fallback tactil.',
        proof: 'Menos friccion, mas accesibilidad y control.',
        signals: ['Wake phrase', 'Speech API', 'Avatar/estado', 'Fallback tactil'],
        flow: ['Escuchar', 'Interpretar', 'Abrir flujo'],
        stack: ['JavaScript', 'Speech API', 'HTML/CSS'],
    },
    {
        title: 'EVA Studio 2026',
        area: 'Tooling interno',
        role: 'Arquitectura modular',
        icon: <FaTools />,
        thesis: 'Tool de escritorio para XML, pantallas, comparaciones, compilacion y modulos EVA.',
        proof: 'Menos trabajo manual, mas trazabilidad.',
        signals: ['Modulos desacoplados', 'Diff XML', 'Sesion persistente', 'noVNC'],
        flow: ['Editar', 'Comparar', 'Compilar'],
        stack: ['Electron', 'React', 'Vite', 'XML'],
    },
    {
        title: 'Modernizacion legacy',
        area: 'Migracion tecnica',
        role: 'Transicion por capas',
        icon: <FaExchangeAlt />,
        thesis: 'Migraciones de VB, WebForms, HTML y WCF hacia .NET, APIs y React.',
        proof: 'Migracion por capas sin romper reglas criticas.',
        signals: ['VB -> .NET', 'WCF -> API', 'HTML -> React', 'Riesgo controlado'],
        flow: ['Aislar contrato', 'Migrar modulo', 'Validar paridad'],
        stack: ['.NET 8', 'React', 'API REST'],
    },
    {
        title: 'Monitoreo en tiempo real',
        area: 'Alta disponibilidad',
        role: 'Observabilidad operativa',
        icon: <FaProjectDiagram />,
        thesis: 'Eventos, estados y fallos en tiempo real con lectura operativa clara.',
        proof: 'Senales accionables para decidir rapido.',
        signals: ['Eventos criticos', 'Tiempo real', 'Trazabilidad', 'Estados claros'],
        flow: ['Evento', 'Canal', 'Decision'],
        stack: ['.NET 8', 'WebSocket', 'API REST'],
    },
];

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projects[activeIndex];

    return (
        <div className={styles.projects}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>Trabajo seleccionado</span>
                <h2 className={styles.title}>Proyectos</h2>
                <p className={styles.description}>Arquitectura, criterio operativo y producto aplicado a sistemas reales.</p>
            </div>

            <div className={styles.workbench}>
                <aside className={styles.projectRail} aria-label="Seleccionar proyecto">
                    {projects.map((project, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <button
                                key={project.title}
                                type="button"
                                className={`${styles.projectTab} ${isActive ? styles.activeTab : ''}`}
                                onClick={() => setActiveIndex(index)}
                                aria-pressed={isActive}
                            >
                                <span className={styles.tabNumber}>{String(index + 1).padStart(2, '0')}</span>
                                <span className={styles.tabIcon}>{project.icon}</span>
                                <span className={styles.tabCopy}>
                                    <strong>{project.title}</strong>
                                    <small>{project.area}</small>
                                </span>
                            </button>
                        );
                    })}
                </aside>

                <article className={styles.casePanel} key={activeProject.title}>
                    <div className={styles.panelTop}>
                        <span>{activeProject.area}</span>
                        <span>{activeProject.role}</span>
                    </div>

                    <div className={styles.heroLine}>
                        <div>
                            <h3>{activeProject.title}</h3>
                            <p>{activeProject.thesis}</p>
                        </div>
                        <div className={styles.scoreCard}>
                            <FiTarget />
                            <span>Lectura tecnica</span>
                            <strong>{activeProject.proof}</strong>
                        </div>
                    </div>

                    <div className={styles.signalGrid} aria-label="Senales tecnicas">
                        {activeProject.signals.map((signal) => (
                            <div className={styles.signal} key={signal}>
                                <FiCheck />
                                <span>{signal}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.flowMap} aria-label="Flujo del proyecto">
                        <div className={styles.flowHeader}>
                            <FiLayers />
                            <span>Flujo que conviene mostrar</span>
                        </div>
                        <div className={styles.flowSteps}>
                            {activeProject.flow.map((step, index) => (
                                <div className={styles.flowStep} key={step}>
                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                    <strong>{step}</strong>
                                    {index < activeProject.flow.length - 1 && <FiArrowRight />}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.footerGrid}>
                        <div className={styles.stackBlock}>
                            <FiCpu />
                            <div>
                                <span>Stack principal</span>
                                <div className={styles.stackRail}>
                                    {activeProject.stack.map((tech) => (
                                        <small key={tech}>
                                            {techIcons[tech] ?? <FaCode />}
                                            {tech}
                                        </small>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={styles.recruiterNote}>
                            <span>Lo que deberia quedar claro</span>
                            <strong>Resuelvo sistemas reales, no solo pantallas bonitas.</strong>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
