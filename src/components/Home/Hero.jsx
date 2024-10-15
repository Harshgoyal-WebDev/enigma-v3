/* eslint-disable react-hooks/rules-of-hooks */
import { View } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Model from "../Meshes/Model";
import { useGSAP } from "@gsap/react";
import ReelButton from "../Button/ReelButton";
import { initMagneticButton, SplitInLine } from "../splitTextUtils";
import dynamic from "next/dynamic";
import { CustomEase } from "gsap/dist/CustomEase";
import { useLenis } from "@studio-freight/react-lenis";
import { Html } from "@react-three/drei";
import HeadingText from "./HeadingText";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const VideoModal = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
});


const Hero = ({timeline}) => {
  const primaryEase = CustomEase.create("cus-1", "0.62, 0.05, 0.01, 0.99");
 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const lenis = useLenis();

  const handleOpen = () => {
    setIsModalOpen(true);
    // lenis.stop();
  };

  const handleClose = () => {
    setIsModalOpen(false);
    // lenis.start();
  };
  console.log(timeline)
  if(timeline){

    useGSAP(() => {
      const paraAnimations = document.querySelectorAll("[data-para-anim]");
      paraAnimations.forEach((paraAnimation) => {
        SplitInLine(paraAnimation);
        let paraLine = paraAnimation.querySelectorAll(".line-internal");
        gsap.from(paraLine, {
          scrollTrigger: {
            trigger: paraAnimation,
            start: "top 90%",
          },
          delay:1,
          duration: 1.2,
          yPercent: 100,
          stagger: 0.07,
          ease: primaryEase,
        });
      });
    });
  }
  useEffect(() => {
    if (!lenis) {
      console.error("Lenis is not initialized.");
    } else {
      console.log(lenis);
    }
  }, [lenis]);

  // Watch for modal state and control Lenis
  useEffect(() => {
    if (lenis) {
      console.log("Stopping Lenis");
      if (isModalOpen) {
        lenis.stop();
      } else {
        console.log("starting Lenis");
        lenis.start();
      }
    }
  }, [isModalOpen, lenis]);
  useEffect(() => {
    initMagneticButton();
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "+=2000 top",
        scrub: true,
        pin: true,
      },
    });
    tl.to(".title-block", {
      opacity: 0,
      duration: 1,
      ease: "none",
    });
    tl.fromTo(
      "#hero-reel",
      {
        scale: 0,
        yPercent: 10,
      },
      {
        scale: 1,
        yPercent: 0,
        duration: 3,
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
            <View className="h-screen w-screen relative">
              <Model timeline={timeline} />
            </View>
          </div>

          {/* Hero Text Container  */}
          <div className="container-lg h-screen flex flex-col items-start justify-center gap-[2vw] title-block relative z-[-1]">
            <View className="h-[70%] w-full">
           <HeadingText />
           </View>
            <p className="w-[38%] text-[1.2vw] ">
              Harnessing the power of Emotion, Design, Technology &
              Neuromarketing, we create Digital Brand Experiences that propel
              your success in the enigmatic realm of bits & bytes.
            </p>
          </div>

          {/* Showreel Container */}
          <div
            className="top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] bottom-0 right-0 absolute flex justify-center items-center w-4/5 h-fit overflow-hidden"
            id="reel-container"
            data-magnetic-target
            data-magnetic-strength="200"
          >
            <video
              id="hero-reel"
              src="/assets/home/hero.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
              className="rounded-[40px] h-auto object-cover overflow-hidden w-full mx-auto scale-0"
            />
            <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] reel-btn">
              <ReelButton
                text={"Play Reel"}
                className="magnetic-inner"
                onClick={handleOpen}
              />
            </div>
          </div>
        </div>
        {isModalOpen && (
          <VideoModal
            isOpen={isModalOpen}
            onClose={handleClose}
            videoSrc="/assets/home/hero.mp4"
          />
        )}
      </section>
    </>
  );
};

export default Hero;
