// LogCameraPosition.tsx
import { useFrame, useThree } from '@react-three/fiber'

export default function LogCameraPosition() {
    const { camera } = useThree()

    useFrame(() => {
        console.log(camera.position)
    })

    return null
}