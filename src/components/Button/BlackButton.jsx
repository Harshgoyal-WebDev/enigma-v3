import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useEffect } from "react";
import $ from 'jquery';

const ANIMATEDCLASSNAME = "animated";

const BlackButton = ({ link, btnText, classname , invert }) => {
  const elementRef = useRef(null);
      const spanRef = useRef(null);
    
      useEffect(() => {
        const handleMouseOver = (e) => {
          const element = elementRef.current;
          const span = spanRef.current;
    
          span.style.left = `${e.pageX - element.offsetLeft}px`;
          span.style.top = `${e.pageY - element.offsetTop}px`;
    
          // Add animation class
          element.classList.add(ANIMATEDCLASSNAME);
        };
    
        const handleMouseOut = (e) => {
          const element = elementRef.current;
          const span = spanRef.current;
    
          span.style.left = `${e.pageX - element.offsetLeft}px`;
          span.style.top = `${e.pageY - element.offsetTop}px`;
    
          // Remove animation class
          element.classList.remove(ANIMATEDCLASSNAME);
        };
    
        const element = elementRef.current;
    
        if (element) {
          element.addEventListener('mouseover', handleMouseOver);
          element.addEventListener('mouseout', handleMouseOut);
          
          // Cleanup listeners on component unmount
          return () => {
            element.removeEventListener('mouseover', handleMouseOver);
            element.removeEventListener('mouseout', handleMouseOut);
          };
        }
      }, []);

  return (
    <>
      <div className="w-fit flex gap-[0.3vw]  relative group"  ref={elementRef}>

        <Link href={link}>
          <div className={`w-fit min-w-[7vw] bg-[#f9f9f9] relative HOVER text-secondary-color hover:text-secondary-color transistion-all ease-in duration-300 border border-secondary-color px-[3vw] py-[0.7vw] text-[1.3vw] rounded-full btn-hover overflow-hidden ${classname}`}>
        <span className="bg-[#f9f9f9]" ref={spanRef}></span>
        
            
            <div className="relative z-[2]">{btnText}</div>
          </div>
        </Link>
        <div className={`w-fit h-fit p-[1.1vw] border border-[#f9f9f9] rounded-full relative bg-transparent group-hover:bg-[#f9f9f9] transition-all duration-300 ease-out HOVER group-hover:rotate-45 `} ref={elementRef}>
          <span ref={spanRef} className="bg-[#f9f9f9]"></span>
          <Image src="/button-arrow.svg" alt="button-svg" className={`object-contain invert transition-all duration-300 group-hover:invert-0 ${invert}`} width={20} height={20}/>
        </div>
      </div>
    </>
  );
};

export default BlackButton;
