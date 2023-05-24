import {
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function Model() {
    const gltf = useLoader(GLTFLoader, "./luxury-hotel.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.4} />
        </>
    );
}

export function CanvasComponent() {
    return (
        <div id="canvas-container">
            <Canvas camera={{ position: [22, 18, 30], fov: 20 }}>
                <Model />
                <Environment
                    files="./venice_sunset_1k.hdr"
                    background
                    blur={0.5}
                />
                <PerspectiveCamera />
                <OrbitControls />
                <directionalLight position={[8, 0.5, 4]} intensity={3} />
            </Canvas>
        </div>
    );
}
