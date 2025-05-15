'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Mesh, MeshStandardMaterial, Vector3 } from 'three';
import { useRef, Suspense } from 'react';
import { useSection } from '../context/SectionContext';

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
            material.opacity = Math.min(material.opacity + 0.02, 1);
        }

        // 🌗 Escalado inicial uniforme
        if (mesh.scale.x < 1) {
            const uniform = Math.min(mesh.scale.x + 0.005, 1);
            mesh.scale.setScalar(uniform);
        }

        // 🎯 Target de posición y escala según sección
        const config = sectionConfig[currentSection] ?? sectionConfig.hero;

        // 🔄 Interpolación de posición
        const targetPosition = new Vector3(...config.position);
        mesh.position.lerp(targetPosition, 0.05);

        // 🛡 Escala esférica garantizada
        const currentScale = mesh.scale.x;
        mesh.scale.setScalar(currentScale); // forzar simetría antes de interpolar
        const targetScale = new Vector3(config.scale, config.scale, config.scale);
        mesh.scale.lerp(targetScale, 0.05);
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
            camera={{ fov: 50, near: 0.1, far: 100, position: [0, 0, 5] }}
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
