import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Hero from '@/components/Home/Hero';
import Header from '@/components/Header';
import About from '@/components/Home/About';
import Whatwedo from '@/components/Home/Whatwedo';
import Projects from '@/components/Home/Projects';
import Services from '@/components/Home/Services';
import Brands from '@/components/Home/Brands';
import Testimonials from '@/components/Home/Testimonials';
import Blogs from '@/components/Home/Blogs';
import Faq from '@/components/Home/Faq';
import Footer from '@/components/Footer';

gsap.registerPlugin(useGSAP,ScrollTrigger)

export default function Home() {
  const timeline = gsap.timeline({ paused: true }); // Pause the timeline initially

  useEffect(() => {
    ScrollTrigger.refresh(); // Refresh ScrollTrigger after timeline is set
  }, []);
  
  return (
    <>
    <Header timeline={timeline}/>
     <main>
    <Hero timeline={timeline}/>
       <About/>
      <Whatwedo/> 
      <Projects/>
      <Services/>
      <Brands/>
      <Testimonials/>
      <Blogs/>
      <Faq/>
     </main>
     <Footer/>
    </>
  );
}
