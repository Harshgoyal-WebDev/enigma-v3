import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import SectionTitle from "../SectionTitle";

gsap.registerPlugin(ScrollTrigger, useGSAP);
// import { titleAnim } from "../gsapAnimations";
const ANIMATEDCLASSNAME = "animated";
const Testimonials = () => {
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
  // titleAnim()
  const testimonialsRef = useRef(null);

 
  useGSAP(() => {
    const body = document.body;

    const changeBodyColor = (color) => {
      gsap.to(body, {
        backgroundColor: color,
        duration: 0.02, // Duration for smooth transition
        ease: "power2.out",
      });
    };

    // ScrollTrigger for changing body background color
    ScrollTrigger.create({
      trigger: "#testimonials",
      start: "top 60%", // When the section enters the viewport
      end: "bottom 20%", // When the section is about to leave
      onEnter: () => changeBodyColor("#1d1d1d"), // Replace with your actual secondary color
      // onLeave: () => changeBodyColor("#ffffff"), // Revert to white when leaving
      // onEnterBack: () => changeBodyColor("#"), // Reapply when scrolling back
      onLeaveBack: () => changeBodyColor("#f9f9f9"), // Revert when scrolling back up
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        pin: true,
        scrub: 0.1,
        start: "30% top",
        end: "+=1500 top",
        // markers: true,
      },
    });

    gsap.to(".testimonial-container", {
      xPercent: -100,
      scrollTrigger:{
        trigger:"#testimonials",
        start: "top 60%",
        end:"+=3000 top",
        // markers:true,
        scrub:true

      }
    });

    gsap.to(
      ".test-card1, .test-card2, .test-card3, .test-card4, .test-card5, .test-card6",
      {
        rotateZ: () => gsap.utils.random(-10, 10),
        yPercent: () => gsap.utils.random(-10, 10),
        xPercent: () => gsap.utils.random(-10, 10),
        delay: -0.5,
        ease: "power1.out",
        scrollTrigger:{
          trigger:"#testimonials",
          start: "top 60%",
          end:"+=3000 top",
          // markers:true,
          scrub:true
  
        }
      }
    );
  });
  return (
    <>
      <section
        id="testimonials"
        ref={testimonialsRef}
        className={`w-screen h-full pt-[10%] transition-colors duration-700`}
      >
        <div className="flex flex-col w-full h-[120vh] justify-between">
          <div className="px-[5vw] mb-[6vw]">
            <SectionTitle line1={"What our"} line2={"Clients Have to say"} firstColor={"text-white"}/>
          </div>
        <div className="w-full h-full">
          <div className="w-[200vw] flex flex-nowrap gap-[1vw] translate-x-[50%] testimonial-container items-center h-full">
            <div className="w-[30vw] h-[30vw] rounded-[1vw] border test-card1 relative z-[2] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] HOVER text-white" ref={elementRef}>
              <span className="bg-[#f9f9f9] absolute z-[3]" ref={spanRef}></span>
              <div className="w-full h-1/2 flex justify-between">
                <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                  <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                  <p className="text-[1.2vw]">
                    Assistant Vice President, Cleartrip
                  </p>
                </div>
                <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                  <Image
                    src="/assets/home/testimonial-img.webp"
                    alt="testimonial-image"
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
              </div>
              <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                <div className="w-[7vw] h-[10vw] relative">
                  <Image
                    src="/assets/home/quote-icon.webp"
                    alt="quote-icon"
                    className="object-contain w-full h-full"
                    fill
                  />
                </div>
                <p className="text-[1.1vw] font-light">
                  Hiveminds has a passionate team with sound knowledge of
                  business and technical skills. The agency displayed good
                  Execution skills that helped us improve our ROI and deliver
                  our business and spend goals.
                </p>
              </div>
            </div>
            <div className="w-[30vw] h-[30vw] rounded-[1vw] border test-card2 relative z-[3] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
              <div className="w-full h-1/2 flex justify-between">
                <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                  <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                  <p className="text-[1.2vw]">
                    Assistant Vice President, Cleartrip
                  </p>
                </div>
                <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                  <Image
                    src="/assets/home/testimonial-img.webp"
                    alt="testimonial-image"
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
              </div>
              <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                <div className="w-[7vw] h-[10vw] relative">
                  <Image
                    src="/assets/home/quote-icon.webp"
                    alt="quote-icon"
                    className="object-contain w-full h-full"
                    fill
                  />
                </div>
                <p className="text-[1.1vw] font-light">
                  Hiveminds has a passionate team with sound knowledge of
                  business and technical skills. The agency displayed good
                  Execution skills that helped us improve our ROI and deliver
                  our business and spend goals.
                </p>
              </div>
            </div>
            <div className="w-[30vw] h-[30vw] rounded-[1vw] border test-card3 relative z-[4] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
              <div className="w-full h-1/2 flex justify-between">
                <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                  <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                  <p className="text-[1.2vw]">
                    Assistant Vice President, Cleartrip
                  </p>
                </div>
                <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                  <Image
                    src="/assets/home/testimonial-img.webp"
                    alt="testimonial-image"
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
              </div>
              <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                <div className="w-[7vw] h-[10vw] relative">
                  <Image
                    src="/assets/home/quote-icon.webp"
                    alt="quote-icon"
                    className="object-contain w-full h-full"
                    fill
                  />
                </div>
                <p className="text-[1.1vw] font-light">
                  Hiveminds has a passionate team with sound knowledge of
                  business and technical skills. The agency displayed good
                  Execution skills that helped us improve our ROI and deliver
                  our business and spend goals.
                </p>
              </div>
            </div>
            <div className="w-[30vw] h-[30vw] rounded-[1vw] border test-card4 relative z-[4] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
              <div className="w-full h-1/2 flex justify-between">
                <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                  <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                  <p className="text-[1.2vw]">
                    Assistant Vice President, Cleartrip
                  </p>
                </div>
                <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                  <Image
                    src="/assets/home/testimonial-img.webp"
                    alt="testimonial-image"
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
              </div>
              <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                <div className="w-[7vw] h-[10vw] relative">
                  <Image
                    src="/assets/home/quote-icon.webp"
                    alt="quote-icon"
                    className="object-contain w-full h-full"
                    fill
                  />
                </div>
                <p className="text-[1.1vw] font-light">
                  Hiveminds has a passionate team with sound knowledge of
                  business and technical skills. The agency displayed good
                  Execution skills that helped us improve our ROI and deliver
                  our business and spend goals.
                </p>
              </div>
            </div>
            <div className="w-[30vw] h-[30vw] rounded-[1vw] border test-card5 relative z-[4] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
              <div className="w-full h-1/2 flex justify-between">
                <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                  <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                  <p className="text-[1.2vw]">
                    Assistant Vice President, Cleartrip
                  </p>
                </div>
                <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                  <Image
                    src="/assets/home/testimonial-img.webp"
                    alt="testimonial-image"
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
              </div>
              <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                <div className="w-[7vw] h-[10vw] relative">
                  <Image
                    src="/assets/home/quote-icon.webp"
                    alt="quote-icon"
                    className="object-contain w-full h-full"
                    fill
                  />
                </div>
                <p className="text-[1.1vw] font-light">
                  Hiveminds has a passionate team with sound knowledge of
                  business and technical skills. The agency displayed good
                  Execution skills that helped us improve our ROI and deliver
                  our business and spend goals.
                </p>
              </div>
            </div>
            <div className="w-[30vw] h-[30vw] rounded-[1vw] border test-card6 relative z-[4] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
              <div className="w-full h-1/2 flex justify-between">
                <div className="w-full flex flex-col gap-[0.5vw] pt-[1.5vw]">
                  <h4 className="text-[1.9vw]">Ashish Dhruva</h4>
                  <p className="text-[1.2vw]">
                    Assistant Vice President, Cleartrip
                  </p>
                </div>
                <div className="w-[15vw] h-[12vw] relative overflow-hidden rounded-[1vw]">
                  <Image
                    src="/assets/home/testimonial-img.webp"
                    alt="testimonial-image"
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>
              </div>
              <div className="w-full h-1/2 flex flex-col gap-[0.5vw]">
                <div className="w-[7vw] h-[10vw] relative">
                  <Image
                    src="/assets/home/quote-icon.webp"
                    alt="quote-icon"
                    className="object-contain w-full h-full"
                    fill
                  />
                </div>
                <p className="text-[1.1vw] font-light">
                  Hiveminds has a passionate team with sound knowledge of
                  business and technical skills. The agency displayed good
                  Execution skills that helped us improve our ROI and deliver
                  our business and spend goals.
                </p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>
    </>
  );
};

export default Testimonials;
