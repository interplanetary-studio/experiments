import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    object_mesh: THREE.Mesh;
  };
};

const Object = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF("/models/object.glb") as GLTFResult;
  const [color, metalness, roughness, normal] = useTexture([
    "/textures/object/object_color.webp",
    "/textures/object/object_metalness.webp",
    "/textures/object/object_roughness.webp",
    "/textures/object/object_normal.webp",
  ]);

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.object_mesh.geometry}>
        <meshPhysicalMaterial
          map={color}
          map-flipY={false}
          metalnessMap={metalness}
          metalnessMap-flipY={false}
          roughnessMap={roughness}
          roughnessMap-flipY={false}
          normalMap={normal}
          normalMap-flipY={false}
        />
      </mesh>
    </group>
  );
};

export { Object as ObjectModel };

useTexture.preload("/textures/object/object_color.webp");
useTexture.preload("/textures/object/object_metalness.webp");
useTexture.preload("/textures/object/object_roughness.webp");
useTexture.preload("/textures/object/object_normal.webp");
useGLTF.preload("/models/object.glb");
