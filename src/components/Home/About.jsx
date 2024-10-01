import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutCard = ({ color, no, text, src }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      backgroundColor: color,
      color: 'white',
      duration: 0.2,
      ease: 'power4.out',
      opacity:1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      backgroundColor: 'rgba(93,143,143,0.1)', 
      color: 'black',
      duration: 0.2,
      ease: 'power4.out',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`about-card flex items-start justify-between h-[26.5vw] w-[42vw] rounded-[20px] px-[3vw] transition-all duration-100 bg-[#5d8f8f]/[0.1]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-[5.7vw] ">{no}+</div>
      <div className="flex flex-col items-center justify-center h-full gap-[3vw] w-[50%]">
        <div className="h-[10vw] w-[15vw] relative">
          <Image src={src} fill alt="Awards" />
        </div>
        <div className="text-[2.9vw]  ">{text}</div>
      </div>
    </div>
  );
};

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top top",
          end: "bottom bottom",
          // pin:true,
          scrub: true,
        },
      })
      .to(".about-card1" ,{
        xPercent: 100,
        yPercent: 2,
        zPercent:2,
        rotate:0,
        opacity: 1,
        ease: "none",
        stagger: 0.2,
        duration:1,
      })
      .to(".about-card2", {
        xPercent: -100,
        yPercent: 2,
        rotate:0,
        opacity: 1,
        ease: "none",
        stagger: 0.2,
        duration:1,
      })
      .to(".about-card3" ,{
        xPercent: 100,
        yPercent: 2,
        rotate:0,
        opacity: 1,
        ease: "none",
        stagger: 0.2,
        duration:1,
      })
      .to(".about-card4", {
        xPercent: -100,
        yPercent: 2,
        rotate:0,
        opacity: 1,
        ease: "none",
        stagger: 0.2,
        duration: 1,
      });
    }, aboutRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={aboutRef} className='w-screen h-full' id='about-section'>
      <div className="container-lg flex flex-col justify-between items-start h-full py-[3vw]" >
        <div className="flex justify-between items-start">
          <div className="w-1/2">
            <ul className="list-disc">
              <li className="uppercase text-[#1D1D1D] text-[1.3vw]">About Us</li>
            </ul>
          </div>
          <div className="w-[95%]">
            <p className="text-[2.92vw] text-[#1D1D1D] font-regular">
              We unravel complex design challenges through meticulous user research, expert analysis, prototyping, and collaborative design with users and stakeholders. Harnessing the power of cutting-edge tools and our proprietary approach, we craft delightful and intuitive experiences.
            </p>
          </div>
        </div>
        <div className="mt-[10vw] pb-[5vw] flex flex-wrap gap-[2vw] items-center justify-center">
          <div className=' translate-x-[-100%] opacity-0 about-card1 -rotate-12'>
            <AboutCard color={'#ff6b00'} no={12} text={"Awards & Recognition"} src={"/assets/home/awards.png"} />
          </div>
          <div className='translate-y-[50%] translate-x-[100%] opacity-0 about-card2  rotate-12'>
            <AboutCard color={'#734eff'} no={20} text={"Projects Complete"} src={"/assets/home/awards.png"} />
          </div>
          <div className='translate-x-[-100%] opacity-0 about-card3  -rotate-12'>
            <AboutCard color={'#a5ffb9'} no={10} text={"Years of Experience"} src={"/assets/home/awards.png"} />
          </div>
          <div className='translate-y-[50%] translate-x-[100%] opacity-0 about-card4  rotate-12'>
            <AboutCard color={'#ffe974'} no={45} text={"Happy Customers"} src={"/assets/home/awards.png"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
