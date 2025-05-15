'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader, Mesh } from 'three';
import { useRef, Suspense } from 'react';

function MoonMesh() {
    const moonRef = useRef<Mesh>(null);
    const texture = useLoader(TextureLoader, '/textures/moon.jpg');

    useFrame(() => {
        if (!moonRef.current) return;

        // Rotación
        moonRef.current.rotation.y += 0.003;

        // Fade-in suave de opacidad
        const material = moonRef.current.material as THREE.MeshStandardMaterial;
        if (material.opacity < 1) {
            material.opacity += 0.02;
        }

        // Escalado suave
        if (moonRef.current.scale.x < 1) {
            moonRef.current.scale.x += 0.005;
            moonRef.current.scale.y += 0.005;
            moonRef.current.scale.z += 0.005;
        }
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
        <Canvas gl={{ preserveDrawingBuffer: true }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[2, 2, 2]} />
            <Suspense fallback={null}>
                <MoonMesh />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
}
