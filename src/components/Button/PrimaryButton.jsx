import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { useEffect } from "react";
import $ from 'jquery';

const ANIMATEDCLASSNAME = "animated";

const PrimaryButton = ({ link, btnText, classname , invert }) => {
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
    
  // useEffect(()=> {
  //   $('.btn-hover').on('mouseenter', function (e) {
  //       var x = e.pageX - $(this).offset().left;
  //       var y = e.pageY - $(this).offset().top;

  //       $(this).find('span').css({
  //       top: y,
  //       left: x
  //       });
  //   });

  //   $('.btn-hover').on('mouseout', function (e) {
  //       var x = e.pageX - $(this).offset().left;
  //       var y = e.pageY - $(this).offset().top;

  //       $(this).find('span').css({
  //       top: y,
  //       left: x
  //       });
  //   });
  // }, [])
  return (
    <>
      <div className="w-fit flex gap-[0.3vw]  relative group"  ref={elementRef}>

        <Link href={link}>
          <div className={`w-fit min-w-[7vw] bg-transparent relative HOVER text-secondary-color hover:text-[#f9f9f9] transistion-all ease-in duration-300 border border-secondary-color px-[3vw] py-[0.7vw] text-[1.3vw] rounded-full btn-hover overflow-hidden ${classname}`}>
        <span className="bg-[#1d1d1d]" ref={spanRef}></span>
        
            
            <div className="relative z-[2]">{btnText}</div>
          </div>
        </Link>
        <div className={`w-fit h-fit p-[1.1vw] border border-secondary-color rounded-full relative bg-transparent transition-all duration-300 ease-out HOVER group-hover:rotate-45 group-hover:bg-secondary-color ${invert}`} ref={elementRef}>
          <span ref={spanRef} className="bg-[#1d1d1d]"></span>
          <Image src="/button-arrow.svg" alt="button-svg" className="object-contain group-hover:invert transition-all duration-300" width={20} height={20}/>
        </div>
      </div>
    </>
  );
};

export default PrimaryButton;
