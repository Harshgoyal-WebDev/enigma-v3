
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(useGSAP,ScrollTrigger)
import {
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";

import Projects from '@/components/Home/Projects';
import Hero from '@/components/Home/Hero';
import Whatwedo from '@/components/Home/Whatwedo';



const home=()=> {
  

  return (
    <>
     <main>
      <Hero/>
      <Whatwedo/>
      <Projects/>

     </main>
      
    </>
  );
}


export default home;