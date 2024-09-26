
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(useGSAP,ScrollTrigger)
import {
  View,
  Preload,
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import SecondMesh from '@/components/SecondMesh';
import { useEffect, useState } from 'react';



function Home() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  

  return (
    <>
      <section className='w-screen h-screen bg-pink-300' id='section-1'>

      </section>
      <section className='w-screen h-screen bg-gray-500' id='section-2'>
      <View className="view" style={{ height: height, width: width }}>
          <Common color="lightblue" />
           {/* Wrap the mesh in a group */}
            <SecondMesh/> {/* Pass the state as a prop */}
          
          <OrbitControls makeDefault />
        </View>

      </section>
      <section className='w-screen h-screen bg-blue-500' id='section-3'>
        
         
        
      </section>
    </>
  );
}
function Common({ color }) {
  return (
    <>
      {color && <color attach="background" args={[color]} />}
      <ambientLight intensity={0.5} />
      <pointLight position={[20, 30, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="blue" />
      <Environment preset="dawn" />
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 10]} />
    </>
  );
}

export default Home;