import { useTexture, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { Texture } from 'three';

export default function Office(): JSX.Element {
    const { nodes } = useGLTF(`./glb/office.glb`)
    const bakedTexture: Texture = useTexture(`./glb/bake.jpg`)
    bakedTexture.flipY = false

    return (
        <>
            {/* -2.2, 1.5, 2.5 */}
            <mesh geometry={(nodes.Office as THREE.Mesh).geometry as THREE.BufferGeometry}>
                <meshBasicMaterial map={bakedTexture} />
            </mesh>

            {/* Window */}
            <mesh position={[5.8, 1.55, -5.75]} rotation-y={Math.PI + 3.14}>
                <planeGeometry args={[2, 4.5]} />
            </mesh>
        </>
    )
}