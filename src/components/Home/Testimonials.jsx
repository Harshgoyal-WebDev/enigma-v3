import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
gsap.registerPlugin(ScrollTrigger, useGSAP);
// import { titleAnim } from "../gsapAnimations";

const Testimonials = () => {
  // titleAnim()
  const testimonialsRef = useRef(null);

 
  useGSAP(() => {
    const body = document.body;

    const changeBodyColor = (color) => {
      gsap.to(body, {
        backgroundColor: color,
        duration: 0.05, // Duration for smooth transition
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
        start: "10% top",
        end: "+=3000 top",
        // markers: true,
      },
    });

    // Random rotation and vertical translation for each card
    tl.to(".testimonial-container", {
      xPercent: -100,
    });

    tl.to(
      ".test-card1, .test-card2, .test-card3, .test-card4, .test-card5, .test-card6",
      {
        rotateZ: () => gsap.utils.random(-10, 10),
        yPercent: () => gsap.utils.random(-10, 10),
        xPercent: () => gsap.utils.random(-10, 10),
        delay: -0.5,
        ease: "power2.out",
      }
    );
  });
  return (
    <>
      <section
        id="testimonials"
        ref={testimonialsRef}
        className={`w-screen h-full py-[10%] pb-[15%] overflow-hidden transition-colors duration-700`}
      >
          <div className="container-lg">
            <SectionTitle line1={"What our"} line2={"Clients Have to say"} firstColor={"text-white"}/>
          </div>
        <div className="w-full h-full">
          <div className="w-[200vw] flex flex-nowrap gap-[1vw] translate-x-[50%] testimonial-container items-center h-full">
            <div className="w-[30vw] h-[30vw] rounded-[1vw] border test-card1 relative z-[2] glassmorphism flex flex-col px-[1.5vw] py-[1.5vw] pb-[3vw] text-white">
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
      </section>
    </>
  );
};

export default Testimonials;
