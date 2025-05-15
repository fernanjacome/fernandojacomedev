'use client';

import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader, Mesh } from 'three';
import { useRef, Suspense } from 'react';

function MoonMesh() {
    const moonRef = useRef<Mesh>(null);
    const texture = useLoader(TextureLoader, '/textures/moon.jpg'); // carga segura

    useFrame(() => {
        if (moonRef.current) {
            moonRef.current.rotation.y += 0.003;
        }
    });

    return (
        <mesh ref={moonRef}>
            <sphereGeometry args={[1.5, 64, 64]} />
            <meshStandardMaterial map={texture} map-anisotropy={16} />
        </mesh>
    );
}

export default function MoonCanvas() {
    return (
        <Canvas gl={{ preserveDrawingBuffer: true }}
        >
            <ambientLight intensity={0.3} />
            <directionalLight position={[2, 2, 2]} />
            <Suspense fallback={null}>
                <MoonMesh />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
    );
}
