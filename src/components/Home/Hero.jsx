/* eslint-disable react-hooks/rules-of-hooks */
import { View } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Model from "../Meshes/Model";
import { useGSAP } from "@gsap/react";
import ReelButton from "../Button/ReelButton";
import { initMagneticButton } from "../splitTextUtils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Hero = () => {
  useEffect(() => {
    initMagneticButton();
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
    tl.to(".title-block", {
      opacity: 0,
      duration: 2,
      ease: "none",
    });
    tl.fromTo(
      "#hero-reel",
      {
        scale: 0,
        yPercent: 10,
      },
      {
        delay: 4,
        scale: 1,
        yPercent: 0,
        duration: 6,
        ease: "none",
      }
    );
    tl.from(".reel-btn", {
      opacity: 0,
      scale: 0.2,
      delay: -0.5,
    });
  });

  return (
    <>
      <section id="hero" className="">
        <div className="relative h-screen w-screen overflow-hidden">
          {/* 3d Model Container */}
          <div className="absolute top-0 left-0 w-full" id="hero-model">
            <View className="h-screen w-screen">
              <Model />
            </View>
          </div>

          {/* Hero Text Container  */}
          <div className="container-lg h-screen flex flex-col items-start justify-center gap-[2vw] title-block">
            <h1 className="title-1 grotesk leading-[1.01] block w-[60%] tracking-tight ">
              <span className="hero-title-anim">Digital</span>
              <span className="text-primary-color hero-title-anim">
                {" "}
                Experience
              </span>
              <br />
              <span className="outline-text tracking-normal hero-title-anim">
                Design Agency
              </span>
            </h1>
            <p className="w-[50%] text-[1.2vw] ">
              Harnessing the power of Emotion, Design, Technology &
              Neuromarketing, we create Digital Brand Experiences that propel
              your success in the enigmatic realm of bits & bytes.
            </p>
          </div>

          {/* Showreel Container */}
          <div
            className="top-0 left-0 bottom-0 right-0 absolute flex justify-center items-center"
            id="reel-container"
          >
            <video
              id="hero-reel"
              src="/assets/home/hero.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
              className="rounded-[40px] h-auto object-cover overflow-hidden w-3/4 mx-auto scale-0"
            />
          </div>
          <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] reel-btn">
            <ReelButton text={"Play Reel"} className="magnetic-inner" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
