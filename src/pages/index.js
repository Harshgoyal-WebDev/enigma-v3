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
import Testimonials from '@/components/Home/Testimonials';
import Blogs from '@/components/Home/Blogs';
import PortfolioSection from '@/components/Home/Cards';
import Brands from '@/components/Home/Brands';
import Faq from '@/components/Home/Faq';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

gsap.registerPlugin(useGSAP,ScrollTrigger)

export default function Home() {
  
  return (
    <>
    <Header/>
     <main>
      <Hero/>
      <About/>
      <Whatwedo/> 
      <Projects/>
      <Services/>
      <Brands/>
      <Testimonials/>
      <Blogs/>
      <Faq/>
      {/* <PortfolioSection/> */}
       
       {/* <CanvasAnimation/>  */}
     </main>
     <Footer/>
    </>
  );
}
