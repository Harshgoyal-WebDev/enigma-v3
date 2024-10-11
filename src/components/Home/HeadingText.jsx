import React from 'react'
import {Html } from '@react-three/drei'
import { useState, useEffect , useRef} from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from "three";
import { SplitInLine } from '../splitTextUtils';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const HeadingText = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const cameraRef = useRef(null);

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
        const lerpFactor = 0.05;
        const moveCamera = () => {
          if (cameraRef.current) {
            const targetX = mouse.x * 0.7;
            const targetY = mouse.y * 0.7;
    
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
   <mesh>
            <Html position={[-9.5, 3, 0]}>
            <h1 className="title-1 grotesk leading-[1.01] block w-[60%] tracking-tight" >
              <span  className="">Digital</span>
              <span  className="text-primary-color">
                {" "} Experience
              </span>
              <br />
              <span  className="outline-text tracking-normal">
                Design Agency
              </span> 
            </h1>
            </Html>
    </mesh>
   </>
  )
}

export default HeadingText
