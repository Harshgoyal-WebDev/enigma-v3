import React, { useRef, useEffect, useState} from "react";
import { Environment, useGLTF, Lightformer } from "@react-three/drei";
import gsap from "gsap";
import { useLenis } from "@studio-freight/react-lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Modeljsx } from "./Modeljsx";
import * as THREE from 'three'


gsap.registerPlugin(ScrollTrigger);

export default function Model({ timeline }) {
  const modelMeshRef = useRef(null);
  const cameraRef = useRef(null);
  const { scene } = useGLTF("/enigma-icon.glb");
  const lenis = useLenis()

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        if (child.material) child.material.dispose();
        child.material = new THREE.MeshPhysicalMaterial({
          transmission: 1.5,
          thickness: 126,
          roughness: 0.17,
          
          metalness: 0,
          color: new THREE.Color(0xffffff),
          attenuationDistance: 1.43,
          attenuationColor: new THREE.Color(0xffffff),
          ior: 2.94,
          clearcoat: 0.54,
          clearcoatRoughness: 0.47,
          reflectivity: 0,
          side: THREE.DoubleSide,
          samples:16,
          resolution:256,
          backsideThickness:180,
          chromaticAberration:2,
          anisotropy:1,
          distortion:0.34,
          distortionScale:0.2,
          temporalDistortion:0.23,
        });
      }
    });
    scene.rotation.set(0,Math.PI, 0);
  }, [scene]);
  // useEffect(() => {
  //   timeline.from(modelMeshRef.current.position, {
  //     z: -50,
  //     x: -0.4,
  //     y: 0,
  //     duration: 2.5,
  //     delay: 0,
  //     ease: "power4.out", 
  //   })
  //   .to(modelMeshRef.current.position,{
  //    x:3,
  //    z:1,
  //    y:0,
  //    delay:-0.5,
  //    duration:1
  //   })

  // }, []);
  modelMeshRef.position = [3,0,1];


  useEffect(() => {
    const lerpFactor = 0.05; // Smoothing factor for camera movement
    const moveCamera = () => {
      if (cameraRef.current) {
        const targetX = mouse.x * 0.7; // Adjust multiplier for the amount of camera movement
        const targetY = mouse.y * 0.7;

        // Interpolate the camera position smoothly
        cameraRef.current.position.x = THREE.MathUtils.lerp(
          cameraRef.current.position.x,
          targetX,
          lerpFactor
        );
        cameraRef.current.position.y = THREE.MathUtils.lerp(
          cameraRef.current.position.y,
          targetY,
          lerpFactor
        );
      }
    };

    const animate = () => {
      moveCamera();
      requestAnimationFrame(animate);
    };
    animate();
  }, [mouse]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-model",
        start: "top top",
        end: "+=2500 top",
        scrub: true,
        pin: true,
      },
    
    
    });

    tl.to(modelMeshRef.current.position, {
        delay: -1,
        x: -0.4,
        y: 0,
        z: 1,
        duration: 1,
        ease: "none",
      })
      .to(modelMeshRef.current.position, {
        z: 20,
        y: 0,
        x: 0,
        duration: 4,
        delay: 0,
        ease: "none",
      });
  }, []);

  return (
    <>
    
      <mesh ref={modelMeshRef} scale={4} position={[3, 0, 0]} rotation={[0,-0.35,0]} castShadow receiveShadow>
      <Modeljsx/> 
        <ambientLight intensity={2} />
        <Environment preset='city' environmentIntensity={3}>
      <Lightformer form="rect" intensity={1} position={[2,3,3]} scale={5}/>
      <Lightformer form="rect" intensity={2} position={[-2,2,-4]} scale={5}/>
      </Environment>
      </mesh>
    </>
  );
}

