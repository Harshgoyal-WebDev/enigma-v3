import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Hero from '@/components/Homepage/Hero';

gsap.registerPlugin(useGSAP,ScrollTrigger)

export default function Home() {
  
  return (
    <>
    {/* <Header/> */}
     <main>
    <Hero/>
      {/* <About/>
      <Whatwedo/> 
      <Projects/>
      <Services/>
      <Brands/>
      <Testimonials/>
      <Blogs/>
      <Faq/> */}
     </main>
     {/* <Footer/> */}
    </>
  );
}
