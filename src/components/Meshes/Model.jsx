import React, { useRef, useEffect } from "react";
import { Environment, useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei"; // Corrected import
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Model() {
  const modelMeshRef = useRef(null);
  const cameraRef = useRef(null); 
  const { scene } = useGLTF("/enigma-icon.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        if (child.material) child.material.dispose();
        child.material = new THREE.MeshPhysicalMaterial({
          transmission: 1,
          thickness: 1,
          roughness: 0,
          metalness: 0,
          color: new THREE.Color(0xffffff),
          attenuationDistance: 1,
          attenuationColor: new THREE.Color(0xff6b00),
          ior: 1.5,
          clearcoat: 1,
          clearcoatRoughness: 0,
          reflectivity: 1,
          side: THREE.DoubleSide,
        });
      }
    });
    scene.rotation.set(0, Math.PI, 0);
  }, [scene]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-model",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(modelMeshRef.current.rotation,{
      y:Math.PI*2,
      duration:3,

    })
    tl.to(modelMeshRef.current.position, {
      delay: -3.5,
      x: 0,
      y: 0,
      z: 1,
      duration: 6,
      ease: "none",
    });

    tl.to(modelMeshRef.current.position, {
      z: 20,
      y: 0,
      x: 0,
      duration: 8,
      delay: 0,
      ease: "none",
    });
  }, []);


  return (
    <>
     
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault 
        fov={75}
        aspect={window.innerWidth / window.innerHeight} 
        near={0.1}
        far={1000} 
        position={[0, 0, 6]} 
      />

      {/* Model and Scene */}
      <mesh ref={modelMeshRef} scale={1.2} position={[3, 0, 0]} className="">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment files="/assets/home/environment.hdr" />
        <primitive object={scene} />
      </mesh>
    </>
  );
}

useGLTF.preload("/enigma-icon.glb");
