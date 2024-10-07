import { useEffect, useState } from "react";
import SphereCanvas from "../Blob/SphereCanvas";
import useUsefulHooks from "../Blob/hooks/useWheel";
import { pages } from "../Blob/Text/data";
import React from 'react';
import Button from '../Button/PrimaryButton';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; 
import { View } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger); 

const Footer = () => {
  const [current, setCurrent] = useState(0);
  const { prevPage, nextPage, lastAction } = useUsefulHooks();

  useEffect(() => {
    if (lastAction) {
      if (lastAction === "next") {
        setCurrent(current === pages.length - 1 ? 0 : current + 1);
        console.log("next");
      }
      if (lastAction === "prev") {
        setCurrent(current === 0 ? pages.length - 1 : current - 1);
        console.log("prev");
      }
    }
  }, [prevPage, nextPage, lastAction, current]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#footer", 
      pin: true,
      start: "top top",
      end: "+=500",
      scrub: true, 
      markers: false 
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <section id="footer">
        <div className="h-screen w-screen relative text-white flex flex-col items-center justify-between py-[3vw] rounded-t-[2.3vw]">
          <div className="absolute inset-0 z-[-1]">
            <SphereCanvas current={current} setCurrent={setCurrent} />
          </div>
          <div className="relative text-center z-10 flex items-center justify-center flex-col h-full w-full gap-[2vw]">
            <h2 className="text-[3.9vw]">Let`&apos;s Make Something</h2>
            <h2 className="text-[5.2vw]">CREATIVE</h2>
            <div>
              <Button
                btnText={"Say Hello"}
                link={"#"}
                classname={"border-white bg-white text-black"}
                invert={"bg-white"}
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-[3vw] z-10">
            <div className="flex flex-col gap-[1vw] w-[15%]">
              <p className="text-[1.25vw] font-medium">Contact Us</p>
              <p className="text-[1.25vw] font-normal tracking-wider">hi@weareenigma.com</p>
              <p className="text-[1.25vw] font-normal tracking-wider">+91 8745044555</p>
              <p className="text-[1.25vw] font-normal tracking-wider">
                Grandslam I-Thum, A-40, Sector- 62, Noida, Uttar Pradesh (201309)
              </p>
            </div>
            <div className="flex flex-col gap-[2vw] mt-[10vw]">
              <div className="flex justify-center gap-[2.5vw]">
                <img src="/assets/icons/twitter.png" />
                <img src="/assets/icons/instagram.png" />
                <img src="/assets/icons/linkedin.png" />
                <img src="/assets/icons/facebook.png" />
              </div>
              <p className="text-[1.04vw] tracking-wider font-normal">
                © 2024 Enigma Digital Consulting LLP. All rights reserved all wrongs reversed.
              </p>
            </div>
            <div>
              <p className="text-[1.15vw] tracking-wider font-medium">next up</p>
              <div className="flex flex-col">
                <h2 className="text-[2.95vw] tracking-wider font-normal">ABOUT US</h2>
                <div className="progress-container relative w-[19.8vw] m-auto bg-[rgba(255,255,240,0.35)] h-[0.1vw] rounded-[5%]">
                  <span className="progressbar absolute h-[0.1vw] rounded-[5%] bg-[#ffffff] w-[40%]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
