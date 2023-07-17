import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense, useRef } from "react";
import { OrbitControls as OrbitControlsType } from "three-stdlib";

const SceneWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<OrbitControlsType>(null);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage
          controls={ref}
          preset="rembrandt"
          intensity={1}
          environment="city"
        >
          {children}
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  );
};

export { SceneWrapper };
