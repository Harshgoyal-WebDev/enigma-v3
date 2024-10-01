import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Projects from '@/components/Home/Projects';
import Hero from '@/components/Home/Hero';
import Whatwedo from '@/components/Home/Whatwedo';
import About from '@/components/Home/About';
import Services from '@/components/Home/Services';
import CanvasAnimation from '@/components/Home/CanvasAnimation';

gsap.registerPlugin(useGSAP,ScrollTrigger)

export default function Home() {
  
  return (
    <>
     <main>
      <Hero/>
      <About/>
      <Whatwedo/> 
      <Projects/>
      <Services/>
      <CanvasAnimation/>

     </main>
    </>
  );
}
