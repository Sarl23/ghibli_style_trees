import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import { Ground } from "./Ground";

export const FiberContainer = () => {
    return (
        <Canvas
            camera={{
                position: [14.46666, 2.0365, 5.556165],
                fov: 40
            }}
            shadows>
            <Scene />
            <Ground />
            <OrbitControls
                minDistance={1}
                maxDistance={200}
            />
        </Canvas>
    )
}