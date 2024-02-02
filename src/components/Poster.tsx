
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

interface PosterProps {
    imgUrl: string;
}

const Poster: React.FC<PosterProps> = ({ imgUrl }) => {
    const texture = useLoader(TextureLoader, imgUrl);
    const scale = 1.2;

    return (
        <mesh position={[-0.8, 1.5, -3]} rotation-y={Math.PI / 2}>
            <planeGeometry args={[scale * 2, scale * 1.5]} />
            <meshBasicMaterial map={texture} />
        </mesh>
    );
};

export default Poster;