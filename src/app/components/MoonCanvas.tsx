'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';

import { TextureLoader, Mesh, MeshStandardMaterial } from 'three';
import { useRef, Suspense } from 'react';
import { useSection } from '../context/SectionContext';
import { Vector3 } from 'three';

const sectionConfig: Record<
    string,
    { position: [number, number, number]; scale: number }
> = {
    hero: { position: [0, -3, 1], scale: 1.7 },
    about: { position: [2, 0, 0], scale: 2 },
    projects: { position: [-1, 0.5, -1], scale: 1.4 },
    skills: { position: [0, -0.5, -2], scale: 1.1 },
    contact: { position: [0, -1.5, -3], scale: 1.6 },
};
function MoonMesh() {
    const moonRef = useRef<Mesh>(null);
    const texture = useLoader(TextureLoader, '/textures/moon.webp');
    const { currentSection } = useSection();

    useFrame(() => {
        if (!moonRef.current) return;

        const mesh = moonRef.current;
        const material = mesh.material as MeshStandardMaterial;

        // 🌕 Rotación constante
        mesh.rotation.y += 0.003;

        // 🌘 Fade-in suave de opacidad
        if (material.opacity < 1) {
            material.opacity += 0.02;
        }

        // 🌗 Escalado inicial hasta 1.0
        if (mesh.scale.x < 1) {
            const initial = mesh.scale.x + 0.005;
            mesh.scale.set(initial, initial, initial);
        }
        const config = sectionConfig[currentSection] ?? sectionConfig.hero;

        const targetVec3 = new Vector3(...config.position);
        mesh.position.lerp(targetVec3, 0.05);

        // Asegurá forma esférica
        const current = mesh.scale.x;
        mesh.scale.set(current, current, current);

        // Lerp uniforme
        const targetScale = new Vector3(config.scale, config.scale, config.scale);
        mesh.scale.lerp(targetScale, 0.05);
    });


    return (
        <mesh ref={moonRef} scale={[0.95, 0.95, 0.95]}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <meshStandardMaterial
                map={texture}
                transparent
                opacity={0}
            />
        </mesh>
    );
}

export default function MoonCanvas() {
    return (
        <Canvas style={{ pointerEvents: "none" }} gl={{ preserveDrawingBuffer: true }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[2, 2, 2]} />
            <Suspense fallback={null}>
                <MoonMesh />
            </Suspense>
        </Canvas>
    );
}
