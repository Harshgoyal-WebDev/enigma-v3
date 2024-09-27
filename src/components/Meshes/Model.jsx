import React, { useRef, useEffect } from "react";
import { Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Model({ sectionId }) {
  const modelRef = useRef(null);
  const modelMeshRef = useRef(null);
  const { scene } = useGLTF("/enigma_stl.glb");

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
    scene.position.set(3.5, 4, 0);
    scene.rotation.set(Math.PI / 2, 0, 0);
  }, [scene]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionId,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl.to(modelRef.current.position, {
      x: -3,
      y: -10,
      z: 1,
      duration: 1,
    }).to(modelMeshRef.current.position, {
      z: 17,
      y: 10,
      x: 0.5,
      duration: 1,
      delay: -0.8,
    });

    return () => {
      tl.kill();
    };
  }, [scene, sectionId]);

  return (
    <mesh ref={modelMeshRef} scale={0.7} className="">
      <ambientLight intensity={0.5} /> 
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment files="/assets/home/environment.hdr"/>
      <primitive object={scene} ref={modelRef} />
    </mesh>
  );
}

useGLTF.preload("/enigma_stl.glb");
