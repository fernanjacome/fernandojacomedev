'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
    TextureLoader,
    Mesh,
    Vector3,
    Texture,
} from 'three';
import { useRef, Suspense, useEffect, useState } from 'react';
import { useSection } from '../context/SectionContext';

// CONFIGURACIÓN DE SECCIONES Y TEXTURAS
const sectionConfig: Record<
    string,
    { position: [number, number, number]; scale: number; planet: string }
> = {
    hero: { position: [0, -5.1, -1], scale: 4, planet: 'moon' },
    about: { position: [2, 0, -1], scale: 5, planet: 'mars' },
    projects: { position: [-2, 0, -1], scale: 5, planet: 'venus' },
    skills: { position: [0, -5.1, -1], scale: 4, planet: 'neptune' },
    contact: { position: [0, -1.5, -3], scale: 1.6, planet: 'moon' },
};

const texturePaths = {
    moon: '/textures/moon.webp',
    mars: '/textures/mars.jpg',
    venus: '/textures/venus.jpg',
    neptune: '/textures/jupiter.jpg',
};

type PlanetName = 'moon' | 'mars' | 'venus' | 'neptune';

// COMPONENTE PLANETA
function MoonMesh() {
    const meshRef = useRef<Mesh>(null);
    const { currentSection } = useSection();

    const [moon, mars, venus, neptune] = useLoader(TextureLoader, [
        texturePaths.moon,
        texturePaths.mars,
        texturePaths.venus,
        texturePaths.neptune,
    ]);
    const planetMap: Record<PlanetName, Texture> = { moon, mars, venus, neptune };

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

        mesh.rotation.y += 0.003;
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
            <Suspense fallback={null}>
                <MoonMesh />
            </Suspense>
        </Canvas>
    );
}