'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh, MeshStandardMaterial, Vector3 } from 'three';
import { useRef, Suspense } from 'react';
import { useSection } from '../context/SectionContext';

const sectionConfig: Record<
    string,
    { position: [number, number, number]; scale: number }
> = {
    hero: { position: [0, -4.5, -1], scale: 4 },
    about: { position: [2, 0, -1], scale: 5 },
    projects: { position: [-2, 0, -1], scale: 5 },
    skills: { position: [0, 4.5, -1], scale: 4 },
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

        // 🌘 Fade-in suave
        if (material.opacity < 1) {
            material.opacity = Math.min(material.opacity + 0.02, 1);
        }

        // ✅ SIEMPRE mantener escala exacta uniforme
        const config = sectionConfig[currentSection] ?? sectionConfig.hero;
        const currentScale = mesh.scale.x;

        // Limpiar cualquier desincronización de ejes
        mesh.scale.set(currentScale, currentScale, currentScale);

        // Interpolar escala garantizando igualdad
        const target = config.scale;
        const nextScale = currentScale + (target - currentScale) * 0.05;
        mesh.scale.setScalar(nextScale);

        // 🔄 Interpolar posición sin efecto angular (ortográfica)
        const targetPos = new Vector3(...config.position);
        mesh.position.lerp(targetPos, 0.05);
    });


    return (
        <mesh ref={moonRef} scale={[1, 1, 1]}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial map={texture} transparent opacity={0} />
        </mesh>
    );
}

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
