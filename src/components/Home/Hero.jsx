import { View } from '@react-three/drei';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Model from '../Meshes/Model';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger,useGSAP);

const Hero = () => {


 

  return (
    <>
      <section id='hero' className=''>
        <div className='relative h-[100vh]  w-screen flex flex-col items-start justify-start mb-[5vw] '> 
            <div className='w-screen container-lg h-screen flex flex-col items-start justify-center gap-[2vw] title-block '>
              <h1 className='title-1 grotesk leading-[1.01] block w-[60%] tracking-tight '>
                <span className='hero-title-anim'>Digital</span> 
                <span className='text-primary-color hero-title-anim'> Experience</span><br />
                <span className='outline-text tracking-normal hero-title-anim'>Design Agency</span>
              </h1>
              <p className='w-[50%] '>
                Harnessing the power of Emotion, Design, Technology & Neuromarketing, we create Digital Brand Experiences that propel your success in the enigmatic realm of bits & bytes.
              </p>
            </div>
          <div className='w-[75vw] h-auto rounded-[40px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 mx-auto video'>
            <video
              src='/assets/home/hero.mp4'
              type="video/mp4"
              autoPlay
              muted
              loop
              className='rounded-[40px] w-full h-full object-cover'
            />
          </div>
          <div className='absolute top-0 left-0 w-full'>
              <View className='h-screen w-screen'>
                <Model /> 
              </View>
            </div>
             </div>
      </section>
    </>
  );
}

export default Hero;
