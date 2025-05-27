'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
    TextureLoader,
    Mesh,
    Vector3,
    Texture,
} from 'three';
import { useRef, useEffect, useState } from 'react';
import { useSection } from '../context/SectionContext';
import { useIsMobile } from './useIsMobile';


// CONFIGURACIÓN DE SECCIONES Y TEXTURAS
const sectionConfig: Record<
    string,
    { position: [number, number, number]; scale: number; planet: string }
> = {
    hero: { position: [0, -5.1, -1], scale: 4.5, planet: 'moon' },
    about: { position: [2, -1, -1], scale: 5, planet: 'mars' },
    projects: { position: [-2, -1, -1], scale: 5, planet: 'jupiter' },
    contact: { position: [0, -5.1, -1], scale: 5, planet: 'venus' },
};

const texturePaths = {
    moon: '/textures/moon.webp',
    mars: '/textures/mars.webp',
    venus: '/textures/venus.webp',
    jupiter: '/textures/jupiter.webp',
};

type PlanetName = 'moon' | 'mars' | 'venus' | 'jupiter';

// COMPONENTE PLANETA
function MoonMesh() {
    const isMobile = useIsMobile();

    const meshRef = useRef<Mesh>(null);
    const { currentSection } = useSection();

    const [moon, mars, venus, jupiter] = useLoader(TextureLoader, [
        texturePaths.moon,
        texturePaths.mars,
        texturePaths.venus,
        texturePaths.jupiter,
    ]);
    const planetMap: Record<PlanetName, Texture> = { moon, mars, venus, jupiter };
    const [rotationSpeed, setRotationSpeed] = useState(0.003); // velocidad normal

    const [currentTexture, setCurrentTexture] = useState<Texture>(moon);
    const [phase, setPhase] = useState<'idle' | 'leaving' | 'arriving'>('idle');
    const [progress, setProgress] = useState(0);
    const [nextTexture, setNextTexture] = useState<Texture | null>(null);
    const [startLeavePos, setStartLeavePos] = useState<Vector3 | null>(null);

    const targetConfig = sectionConfig[currentSection] ?? sectionConfig.hero;

    useEffect(() => {
        const newTexture = planetMap[targetConfig.planet as PlanetName];
        if (newTexture !== currentTexture && phase === 'idle') {
            if (meshRef.current) {
                setStartLeavePos(meshRef.current.position.clone());
            }
            setNextTexture(newTexture);
            setPhase('leaving');
            setProgress(0);
        }
    }, [currentSection]);

    useFrame(() => {
        const mesh = meshRef.current;
        if (!mesh) return;

        const { position, scale } = mesh;
        const t = Math.min(progress + 0.05, 1);
        setProgress(t);
        const target = new Vector3(...targetConfig.position);

        if (isMobile) {
            // Comportamiento móvil (animaciones completas)
            if (phase === 'leaving' && startLeavePos) {
                const leavePos = new Vector3(
                    startLeavePos.x - 10 * t,
                    startLeavePos.y + 5 * t,
                    startLeavePos.z
                );
                position.copy(leavePos);
                scale.setScalar(targetConfig.scale * (1 - 0.4 * t));

                if (t >= 1 && nextTexture) {
                    setCurrentTexture(nextTexture);
                    setPhase('arriving');
                    setProgress(0);
                    setStartLeavePos(null);

                    const entryPos = new Vector3(
                        target.x + 10,
                        target.y - 5,
                        target.z
                    );
                    mesh.position.copy(entryPos);
                    mesh.scale.setScalar(targetConfig.scale * 0.6);
                }
            }

            else if (phase === 'arriving') {
                const enterPos = new Vector3(
                    target.x + 10 * (1 - t),
                    target.y - 5 * (1 - t),
                    target.z
                );
                position.copy(enterPos);
                scale.setScalar(targetConfig.scale * (0.6 + 0.4 * t));

                if (t >= 1) {
                    setPhase('idle');
                    setProgress(0);
                }
            }

            else if (phase === 'idle') {
                position.lerp(target, 0.05);
                scale.setScalar(scale.x + (targetConfig.scale - scale.x) * 0.05);
            }
        } else {
            const fixedDesktopPosition = new Vector3(0, -5.1, -1);
            const fixedDesktopScale = 4.5;

            // si está por transformarse, aumentá la velocidad
            if (phase === 'leaving' && nextTexture) {
                setRotationSpeed(0.3); // rotación rápida
                setCurrentTexture(nextTexture);
                setPhase('arriving');
                setProgress(0);
            }

            if (phase === 'arriving') {
                // desacelerar progresivamente
                const newSpeed = Math.max(rotationSpeed - 0.01, 0.003);
                setRotationSpeed(newSpeed);
                if (newSpeed <= 0.003) {
                    setPhase('idle');
                }
            }

            if (phase === 'idle') {
                setRotationSpeed(0.003); // velocidad normal
            }

            mesh.position.copy(fixedDesktopPosition);
            mesh.scale.setScalar(fixedDesktopScale);
        }

        // Rotación común
        mesh.rotation.y += rotationSpeed;

    });


    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial map={currentTexture} />
        </mesh>
    );
}

// CANVAS PRINCIPAL
export default function MoonCanvas() {
    return (
        <Canvas
            orthographic
            camera={{ zoom: 70, position: [0, 0, 5] }}
            style={{ pointerEvents: 'none', width: '100%', height: '100dvh' }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <ambientLight intensity={0.3} />
            <directionalLight position={[2, 2, 2]} />

            <MoonMesh />
        </Canvas>
    );
}