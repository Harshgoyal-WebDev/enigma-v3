import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Button from "../Button";
import SectionTitle from "../SectionTitle";
gsap.registerPlugin(useGSAP, ScrollTrigger);


const Blogs = () => {
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#blogs",
        pin: true,
        scrub: true,
        start: "top -30%",
        end: "+=1000 top",
      },
    });
    
    tl.to(".blog-card1", {
      left: "0%",
    });
    tl.to(".blog-card2", {
      delay: -0.5,
    });
    tl.to(".blog-card3", {
      right: "0%",
      delay: -0.53,
      ease: "none",
    });
    tl.to(".blog-card1", {
      scale: 0.8,
      delay: -0.5,
    });
    tl.to(".blog-card2", {
      scale: 0.8,
      delay: -0.5,
    });
    tl.to(".blog-card3", {
      scale: 0.8,
      delay: -0.5,
    });
  });
  return (
    <>
      <section
        id="blogs"
        className="py-[10%] w-screen h-full bg-secondary-color overflow-hidden"
      >
        <div className="container-lg h-screen flex flex-col justify-between relative items-center">
          <div className="w-full h-fit flex justify-between">
            <div>
              <SectionTitle line1={"See Our"} line2={"Creative Musing"}/>

            
            </div>
            <div className="flex items-end">
              <Button
                btnText={"Read more"}
                link={"#"}
                classname={"border-white text-white"}
                invert={"invert"}
              />
            </div>
          </div>
          <div className="w-full h-screen blogs">
            <div className="w-[37%] h-[38vw] rounded-[1.5vw] absolute top-[30%]  left-[32%] blog-card1 z-[4] overflow-hidden">
              <Image
                src="/assets/home/blog-image-1.webp"
                alt="blog-image-1"
                className="object-cover w-full h-full"
                fill
              />
              <div className="w-full h-full flex flex-col justify-between absolute ">
                <div className="w-full flex justify-between text-white px-[1.5vw] pt-[1.5vw]">
                  <span className="bg-secondary-color px-[1.2vw] py-[0.5vw] rounded-[10vw] text-[1.4vw]">
                    Digital Marketing
                  </span>
                </div>
                <div className="w-full h-[12vw] white-glass rounded-[1vw] px-[1.5vw] py-[2vw] text-[1.6vw] shadow-2xl drop-shadow-2xl">
                  Beginners Guide To SEO: 30 Websites To Help You Getting
                  Started On Your Link Building Journey
                </div>
              </div>
            </div>
            <div className="w-[37%] h-[38vw] rounded-[1.5vw]  absolute top-[30%]  left-[50%] translate-x-[-50%] scale-[0.9] blog-card2 overflow-hidden z-[3]">
              <Image
                src="/assets/home/blog-image-2.webp"
                alt="blog-image-2"
                className="object-cover w-full h-full"
                fill
              />
              <div className="w-full h-full flex flex-col justify-between absolute ">
                <div className="w-full flex justify-between text-white px-[1.5vw] pt-[1.5vw]">
                  <span className="bg-secondary-color px-[1.2vw] py-[0.5vw] rounded-[10vw] text-[1.4vw]">
                    Strategy
                  </span>
                </div>
                <div className="w-full h-[12vw] white-glass rounded-[1vw] px-[1.5vw] py-[2vw] text-[1.6vw]">
                  How Much Should A Website Cost? Cracking The Ultimate
                  Conundrum
                </div>
              </div>
            </div>
            <div className="w-[37%] h-[38vw] rounded-[1.5vw]  absolute top-[30%]  right-[33%] scale-[0.8] blog-card3 overflow-hidden z-[2]">
              <Image
                src="/assets/home/blog-image-3.webp"
                alt="blog-image-3"
                className="object-cover w-full h-full"
                fill
              />
              <div className="w-full h-full flex flex-col justify-between absolute ">
                <div className="w-full flex justify-between text-white px-[1.5vw] pt-[1.5vw]">
                  <span className="bg-secondary-color px-[1.2vw] py-[0.5vw] rounded-[10vw] text-[1.4vw]">
                    Design
                  </span>
                </div>
                <div className="w-full h-[12vw] white-glass rounded-[1vw] px-[1.5vw] py-[2vw] text-[1.6vw]">
                  The Power Of Psychology In UX Design: Unlocking The Human
                  Element
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
