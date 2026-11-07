'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Mesh, Texture, TextureLoader, Vector3 } from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSection } from '../context/SectionContext';
import { useIsMobile } from './useIsMobile';

const sectionConfig: Record<
    string,
    { position: [number, number, number]; scale: number; planet: PlanetName }
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
type Phase = 'idle' | 'leaving' | 'arriving';

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

    const planetMap = useMemo<Record<PlanetName, Texture>>(
        () => ({ moon, mars, venus, jupiter }),
        [moon, mars, venus, jupiter]
    );

    const [currentTexture, setCurrentTexture] = useState<Texture>(moon);
    const currentTextureRef = useRef<Texture>(moon);
    const nextTextureRef = useRef<Texture | null>(null);
    const startLeavePosRef = useRef<Vector3 | null>(null);
    const phaseRef = useRef<Phase>('idle');
    const progressRef = useRef(0);
    const rotationSpeedRef = useRef(0.003);

    const targetConfig = sectionConfig[currentSection] ?? sectionConfig.hero;

    useEffect(() => {
        const newTexture = planetMap[targetConfig.planet];

        if (newTexture !== currentTextureRef.current && phaseRef.current === 'idle') {
            if (meshRef.current) {
                startLeavePosRef.current = meshRef.current.position.clone();
            }

            nextTextureRef.current = newTexture;
            phaseRef.current = 'leaving';
            progressRef.current = 0;
        }
    }, [planetMap, targetConfig.planet]);

    useFrame(() => {
        const mesh = meshRef.current;
        if (!mesh) return;

        const phase = phaseRef.current;
        const target = new Vector3(...targetConfig.position);
        const t = Math.min(progressRef.current + 0.05, 1);
        progressRef.current = t;

        if (isMobile) {
            if (phase === 'leaving' && startLeavePosRef.current) {
                mesh.position.set(
                    startLeavePosRef.current.x - 10 * t,
                    startLeavePosRef.current.y + 5 * t,
                    startLeavePosRef.current.z
                );
                mesh.scale.setScalar(targetConfig.scale * (1 - 0.4 * t));

                if (t >= 1 && nextTextureRef.current) {
                    currentTextureRef.current = nextTextureRef.current;
                    setCurrentTexture(nextTextureRef.current);
                    phaseRef.current = 'arriving';
                    progressRef.current = 0;
                    startLeavePosRef.current = null;
                    mesh.position.set(target.x + 10, target.y - 5, target.z);
                    mesh.scale.setScalar(targetConfig.scale * 0.6);
                }
            } else if (phase === 'arriving') {
                mesh.position.set(
                    target.x + 10 * (1 - t),
                    target.y - 5 * (1 - t),
                    target.z
                );
                mesh.scale.setScalar(targetConfig.scale * (0.6 + 0.4 * t));

                if (t >= 1) {
                    phaseRef.current = 'idle';
                    progressRef.current = 0;
                }
            } else {
                mesh.position.lerp(target, 0.05);
                mesh.scale.setScalar(mesh.scale.x + (targetConfig.scale - mesh.scale.x) * 0.05);
            }
        } else {
            const fixedDesktopPosition = new Vector3(0, -5.1, -1);

            if (phase === 'leaving' && nextTextureRef.current) {
                rotationSpeedRef.current = 0.3;
                currentTextureRef.current = nextTextureRef.current;
                setCurrentTexture(nextTextureRef.current);
                phaseRef.current = 'arriving';
                progressRef.current = 0;
            }

            if (phase === 'arriving') {
                rotationSpeedRef.current = Math.max(rotationSpeedRef.current - 0.01, 0.003);
                if (rotationSpeedRef.current <= 0.003) {
                    phaseRef.current = 'idle';
                }
            }

            mesh.position.copy(fixedDesktopPosition);
            mesh.scale.setScalar(4.5);
        }

        mesh.rotation.y += rotationSpeedRef.current;
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial map={currentTexture} roughness={0.62} metalness={0.04} />
        </mesh>
    );
}

export default function MoonCanvas() {
    return (
        <Canvas
            orthographic
            camera={{ zoom: 70, position: [0, 0, 5] }}
            style={{ pointerEvents: 'none', width: '100%', height: '100dvh' }}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
            <ambientLight intensity={0.36} />
            <directionalLight position={[2, 2, 2]} intensity={1.1} />
            <directionalLight position={[-3, -1, 4]} intensity={0.25} />
            <MoonMesh />
        </Canvas>
    );
}
