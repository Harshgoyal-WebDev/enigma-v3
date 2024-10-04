import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import SectionTitle from "../SectionTitle";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Testimonials = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        pin: true,
        scrub: 0.1,
        start: "10% top",
        end: "+=3000 top",
      },
    });

    // Random rotation and vertical translation for each card
    tl.to(".testimonial-container", {
      xPercent: -100,
      
    });
     
    tl.to(
      ".test-card1, .test-card2, .test-card3 ,.test-card4, .test-card5, .test-card6 ",
     
      {
        rotateZ: () => gsap.utils.random(-10, 10),
        yPercent: () => gsap.utils.random(-10, 10),
        xPercent: () => gsap.utils.random(-10, 10),
        delay:-0.5,
        ease: "power2.out", // You can adjust the easing here
      }
    );
  });
  return (
    <>
      <section
        id="testimonials"
        className="w-screen h-full bg-secondary-color py-[10%] pb-[15%] overflow-hidden"
      >
          <div className="container-lg">
            <SectionTitle line1={"What our"} line2={"Clients Have to say"}/>
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
