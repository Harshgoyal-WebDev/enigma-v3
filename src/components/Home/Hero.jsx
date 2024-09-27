import { View } from '@react-three/drei';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Model from '../Meshes/Model';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionId = "home-hero";

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionId,
        start: '15% top', 
        end: 'bottom bottom', 
        scrub: true,
      }
    });

    tl.fromTo(".video", { 
      opacity: 0 ,
      scale:0.2,
    }, 
      {
        opacity: 1,
        scale:1,
         duration:1,
         ease:"power4.out"
        
        });

    return () => {
      tl.kill();
    };
  }, [sectionId]);

  return (
    <>
      <section id={sectionId} className=''>
        <div className='relative h-[200vh]  w-screen flex flex-col items-start justify-start mb-[5vw] '> 
            <div className='w-screen container-lg h-screen flex flex-col items-start justify-center gap-[2vw] '>
              <h1 className='title-1 grotesk leading-[1.01] block w-[75vw]'>
                Digital 
                <span className='text-[#FF6B00]'> Experience</span><br />
                <span className='outline-text'>Design Agency</span>
              </h1>
              <p className='w-[70%] grotesk content'>
                Harnessing the power of Emotion, Design, Technology & Neuromarketing, we create Digital Brand Experiences that propel your success in the enigmatic realm of bits & bytes.
              </p>
            </div>
          <div className='w-screen h-screen flex items-center  rounded-[40px] absolute top-1/2 left-[2%] video'>
            <video
              src='/assets/home/hero.mp4'
              type="video/mp4"
              autoPlay
              muted
              loop
              className=' rounded-[40px] w-[95vw]'
            />
          </div>
          <div className='absolute top-0 left-0 w-full'>
              <View className='h-[200vh] w-full'>
                <Model sectionId={sectionId} /> 
              </View>
            </div>
             </div>
      </section>
    </>
  );
}

export default Hero;
