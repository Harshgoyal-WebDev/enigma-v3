import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useLenis } from "@studio-freight/react-lenis";
gsap.registerPlugin(useGSAP,ScrollTrigger)

const Loader = ({timeline}) => {
  const [isLoaded, setIsLoaded] = useState(false);
 

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);

    };
  }, []);
  const handleClick =()=>{
    console.log("clicked")
   
   
    gsap.to(".loader-container", {duration: 2, opacity: 0 , filter:"blur(30px)", onComplete:()=>{
      gsap.to(".loader-container",{
        pointerEvents:"none"
      })
    }}
      
    )
    timeline.play()
  }

  return (
    <section className={`loader-container ${isLoaded ? '' : ''} w-screen h-screen`}>
      <h1 className='grotesk text-[5vw] uppercase font-medium text-[#f9f9f9] text-center leading-[1.2] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full'>deep dive into the digital experience</h1>
      <div className='w-fit h-fit py-[0.8vw] px-[2.5vw] border border-[#f9f9f9] rounded-full text-[1.2vw] text-[#f9f9f9] absolute bottom-[10%] cursor-pointer' onClick={handleClick}>click</div>
    </section>
  );
};

export default Loader;
