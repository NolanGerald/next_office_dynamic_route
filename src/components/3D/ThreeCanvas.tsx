// components/3D/ThreeCanvas.js
import { Canvas } from '@react-three/fiber';
import { CineonToneMapping } from 'three'
import React, { ReactNode } from 'react';


interface ThreeCanvasProps {
    children: ReactNode;
}

const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ children }) => {
    return (
        <Canvas
            gl={{ toneMapping: CineonToneMapping, antialias: true }}
            camera={{ position: [8.885163, 5.2478584, 5.51447], fov: 50, near: 0.1, far: 1000 }}
        >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            {children}
        </Canvas>
    );

}

export default ThreeCanvas
// { x: 8.8851633847261e6, y: 5.247858448727815, z: 5.514476971553ees )