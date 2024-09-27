
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



const home=()=> {
  

  return (
    <>
     <main>
      <Hero/>
      <Projects/>

     </main>
      
    </>
  );
}


export default home;