import { useRef, useState, useEffect } from "react";
import MagicalMaterial from "./material/shaderMaterial";
import { useTexture } from "@react-three/drei";
import { animated, useSpring ,useScroll} from "@react-spring/three";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const texturesArray = [
  "/assets/home/blob/rainbow.jpeg",
  "/assets/home/blob/deep-ocean.jpeg",
  "/assets/home/blob/cosmic-fusion.jpeg",
  "/assets/home/blob/passion.jpeg",
  "/assets/home/blob/white.jpeg",
  "/assets/home/blob/sunset-vibes.jpeg",
  "/assets/home/blob/iridescent.jpeg",
  "/assets/home/blob/cd.jpeg",
  "/assets/home/blob/halloween.jpeg",
  "/assets/home/blob/floyd.jpeg",
  "/assets/home/blob/hollogram.jpeg",
  "/assets/home/blob/imaginarium.jpeg",
];

const AnimatedMagicalMaterial = animated(MagicalMaterial);

const Blob = ({ material, map, geometry }) => {
  const meshblobRef = useRef();
  const { scale, rotate } = geometry;
  let isWheelEventTriggered = false;
  let scrollTimeout = null;

  const textures = useTexture(texturesArray);
  const texture = textures[map];

  const [positionSpring, setPositionSpring] = useSpring(() => ({
    position: [0, 0.5, 0], 
    config: { tension: 50, friction: 14 },
  }));

  const [currentRotation, setCurrentRotation] = useState([0, 0, 0]);

  const [rotationSpring, setRotationSpring] = useSpring(() => ({
    rotation: currentRotation,
    config: { tension: 50, friction: 14 },
  }));

  const handleWheel = (e) => {
    const deltaY = e.deltaY;
    const deltaX = e.deltaX;
  
    if (!isWheelEventTriggered) {
      setPositionSpring((prev) => {
        const currentPosition = prev.position || [0, 0, 0];
        let newPosition = [...currentPosition];
  
      
        if (deltaY < 0 || deltaX < 0) {
          if (deltaY < -5 || deltaX < -5) {
            newPosition[0] += 0.7;
          }
        } else if (deltaY > 0 || deltaX > 0) {
          if (deltaY > 5 || deltaX > 5) {
            newPosition[0] -= 0.7;
          }
        }
  
      
        newPosition[1] = 0.5; 
        return { position: newPosition };
      });
  
      setCurrentRotation((prevRotation) => {
        let newRotation = [...prevRotation];
  
        if (deltaY < 0 || deltaX < 0) {
          if (deltaY < -7 || deltaX < -7) {
            newRotation[1] += Math.PI / 2;
          }
        } else if (deltaY > 0 || deltaX > 0) {
          if (deltaY > 7 || deltaX > 7) {
            newRotation[1] -= Math.PI / 2;
          }
        }
        setRotationSpring({ rotation: newRotation });
  
        return newRotation;
      });
  
      isWheelEventTriggered = true;
  
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setPositionSpring({ position: [0, 0.5, 0] }); 
        isWheelEventTriggered = false;
      }, 100);
    }
  };
  

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <animated.mesh
      ref={meshblobRef}
      scale={scale}
      position={positionSpring.position}
      rotation={rotationSpring.rotation}
      frustumCulled={false}
    >
      <sphereGeometry args={[1, 512, 512]} rotation={rotate} />
      <AnimatedMagicalMaterial map={texture} {...material} />
    </animated.mesh>
  );
};



export default Blob;
