import {
    Environment,
    OrbitControls,
    PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "../../util/Model";

export function CanvasComponent() {
    return (
        <div className="h-[500px] w-3/4 m-auto border-gray-400 border-[10px] rounded-md cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [22, 18, 30], fov: 20 }}>
                <Model file="luxury-hotel" />
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
