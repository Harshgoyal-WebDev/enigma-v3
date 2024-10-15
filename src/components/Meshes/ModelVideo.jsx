import { Environment, Lightformer } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Modeljsx } from "./Modeljsx";
import * as THREE from 'three';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Reflector, Plane, useTexture } from '@react-three/drei';

gsap.registerPlugin(ScrollTrigger);

function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/assets/home/hero.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }));
  useEffect(() => void video.play(), [video]);
  return (
    <Plane args={[10, 5]} {...props}>
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Plane>
  );
}

function Ground() {
  const [floor, normal] = useTexture(['/assets/home/SurfaceImperfections003_1K_var1.jpg', '/assets/home/SurfaceImperfections003_1K_Normal.jpg']);
  return (
    <Reflector blur={[400, 100]} resolution={512} args={[30, 30]} mirror={0.5} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => <Material color="#111111" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
    </Reflector>
  );
}

const ModelVideo = () => {
  const modelMeshRef = useRef(null);
  const videoMeshRef = useRef(null);
  const mainMesh = useRef(null);
  const groundMeshRef = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-model",
        start: "top top",
        end: "+=3500 bottom",
        scrub: true,
        pin: true,
      },
    });

    // Model movement
    tl.to(modelMeshRef.current.position, {
      delay: -1,
      x: -0.4,
      y: -3,
      z: 1,
      duration: 1,
      ease: "none",
    })
    .to(modelMeshRef.current.rotation, {
      y: 0,
      delay: -0.5,
      ease: 'none'
    })
    .to(modelMeshRef.current.position, {
      z: 20,
      y: 8,
      x: 0,
      duration: 4,
      delay: 0,
      ease: "none",
    });

    tl.to(videoMeshRef.current.position, {
      x: 0,
      y: -15,
      z: -35,
      duration: 1,
      delay: -5,
      ease: "none",
    })
    .to(videoMeshRef.current.rotation,{
        y:0,
        duration:1,
        delay:-4,
        ease:"none"
    })
    .to(videoMeshRef.current.position,{
        z:6,
        y:0,
        x:-2,
        duration:4,
        delay:-4,
        ease:"none"
    })

  }, []);

  return (
    <>
      <mesh ref={mainMesh}>
        <mesh ref={modelMeshRef} scale={4} position={[3, 0, 0]} rotation={[0, -0.35, 0]} castShadow receiveShadow>
          <Modeljsx />
          <ambientLight intensity={2} />
          <Environment preset="city" environmentIntensity={3}>
            <Lightformer form="rect" intensity={1} position={[2, 3, 3]} scale={5} />
            <Lightformer form="rect" intensity={2} position={[-2, 2, -4]} scale={5} />
          </Environment>
        </mesh>
        <mesh ref={videoMeshRef} scale={1} position={[12, -5, -35]} rotation={[0, -Math.PI / 2, 0]}>
          <color attach="background" args={['black']} />
          <fog attach="fog" args={['black', 15, 20]} />
          <Suspense fallback={null}>
            <group position={[0, -1, 0]} rotation={[0, 0, 0]} scale={1}>
              <VideoText position={[1.7, 3, -2]} />
            </group>
          </Suspense>
            </mesh>
            <mesh ref={groundMeshRef} position={[0,-8,5]}>
            <fog attach="fog" args={["#ffffff", 1, 20]} />
                <Ground />
            </mesh>
           
      </mesh>
    </>
  );
};

export default ModelVideo;
