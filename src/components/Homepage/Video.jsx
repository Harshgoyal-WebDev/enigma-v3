import * as THREE from 'three';
import React, { Suspense, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Reflector, Plane, useTexture } from '@react-three/drei';

function VideoText(props) {
  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/assets/home/hero.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }));
  useEffect(() => void video.play(), [video]);
  return (
    <Plane args={[5, 3]} {...props}>
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]} encoding={THREE.sRGBEncoding} />
      </meshBasicMaterial>
    </Plane>
  );
}

function Ground() {
  const [floor, normal] = useTexture(['/assets/home/SurfaceImperfections003_1K_var1.jpg', '/assets/home/SurfaceImperfections003_1K_Normal.jpg']);
  return (
    <Reflector blur={[400, 100]} resolution={512} args={[10, 10]} mirror={0.5} mixBlur={6} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
      {(Material, props) => <Material color="#a0a0a0" metalness={0.4} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
    </Reflector>
  );
}

const Video = () => {
  const [scale, setScale] = useState(1);
  const [rotationY, setRotationY] = useState(Math.PI / 6); // Start at 30 degrees

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollY / maxScroll;

      // Rotate from 30 degrees to 0 over the first 50% of scroll
      const newRotationY = Math.max(0, -Math.PI / 6 - scrollPercentage * Math.PI / 6);

      // Scale up after the rotation is complete
      const newScale = 1.5 + (scrollPercentage > 0.5 ? (scrollPercentage - 0.5) * 8 : 0); // Scale starts at 50% scroll

      setRotationY(newRotationY);
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <mesh scale={scale} position={[3,-5,0]}>
        <color attach="background" args={['black']} />
        <fog attach="fog" args={['black', 15, 20]} />
        <Suspense fallback={null}>
          <group position={[0, -1, 0]} rotation={[0, rotationY, 0]} scale={scale}>
            <VideoText position={[0, 1.3, -2]} />
            <Ground position={[0, -1.8, 0]} />
          </group>
          <ambientLight intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.3} />
          <directionalLight position={[-50, 0, -40]} intensity={0.7} />
        </Suspense>
      </mesh>
    </>
  );
};

export default Video;
