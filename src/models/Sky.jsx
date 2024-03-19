import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import skyScene from "../assets/3d/sky.glb";

const Sky = () => {
  const { nodes, materials } = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    
      skyRef.current.rotation.y += 0.075 * delta;
  
  });
  if (materials["Scene_-_Root"]) {
    materials["Scene_-_Root"].color.set(0x001b4e); // Set material color to black
    materials["Scene_-_Root"].emissiveIntensity = 0.35; // Increase emissive intensity for a glowing effect
  }
  return (
    <group ref={skyRef} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5000}
        />
      </group>
    </group>
  );
};

export default Sky;
