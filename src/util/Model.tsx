import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

interface ModelProps {
    file: string;
}

export function Model({ file }: ModelProps) {
    console.log(file);

    const gltf = useLoader(GLTFLoader, `./luxury-hotel.gltf`);
    return (
        <>
            <primitive object={gltf.scene} scale={0.4} />
        </>
    );
}
