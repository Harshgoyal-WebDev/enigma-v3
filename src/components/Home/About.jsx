import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Button from "../Button/PrimaryButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".about-cards-container",
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
        },
      })
      .to(".about-card1", {
        xPercent: 70,
        zPercent: 2,
        rotate: 0,
        opacity: 1,
        ease: "power1.out",
        duration: 2,
      })
      .to(".about-card2", {
        xPercent: -70,
        yPercent: 2,
        rotate: 0,
        opacity: 1,
        ease: "power1.out",
        duration: 2,
      })
      .to(".about-card3", {
        xPercent: 70,
        yPercent: 2,
        rotate: 0,
        opacity: 1,
        ease: "power1.out",
        duration: 2,
      })
      .to(".about-card4", {
        xPercent: -70,
        yPercent: 2,
        rotate: 0,
        opacity: 1,
        ease: "power1.out",
        duration: 2,
      });
  });

  return (
    <section
      ref={aboutRef}
      className="w-screen h-full py-[10%] overflow-hidden"
      id="about-section"
    >
      <div className="container-lg flex flex-col justify-between items-start h-full">
        <div className="flex justify-between items-start">
          <div className="w-1/2">
            <ul className="list-disc">
              <li className="uppercase text-[#1D1D1D] text-[1.3vw] ml-[5%]">
                About Us
              </li>
            </ul>
          </div>
          <div className="w-[95%]">
            <p className="text-[2.92vw] text-[#1D1D1D] font-regular mb-[4vw]">
              We unravel complex design challenges through meticulous user
              research, expert analysis, prototyping, and collaborative design
              with users and stakeholders. Harnessing the power of cutting-edge
              tools and our proprietary approach, we craft delightful and
              intuitive experiences.
            </p>
            <Button btnText={"Know More"} link={"#"} />
          </div>
        </div>

        <div className="mt-[10vw] pb-[5vw] flex flex-wrap gap-[3vw] items-center justify-center about-cards-container">
          {/* Card 1 */}
          <div className="translate-x-[-70%] opacity-0 about-card1 -rotate-[45deg] group z-10">
  <div className="flex items-start justify-between rounded-[20px] bg-gray-200 text-black h-[26.5vw] w-[42vw] px-[3vw] transition-all duration-300 ease group-hover:text-white relative overflow-hidden">
    <div className="text-[5.7vw] z-10 flex flex-col relative">
      {/* First number slides up */}
      <span className="absolute transition-transform duration-300 ease-in-out">12+</span>
      {/* Second number takes its position */}
      {/* <span className="absolute transition-transform duration-300 ease-in-out group-hover:translate-y-0 top-[30%]">12+</span> */}
    </div>
    <div className="flex flex-col items-center justify-center h-full gap-[3vw] w-[50%]">
      <div className="h-[10vw] w-[15vw] relative z-10">
        <Image src="/assets/home/awards.png" fill alt="Awards" />
      </div>
      <div className="text-[2.9vw] z-10">Awards & Recognition</div>
    </div>
  </div>
  <span className="absolute inset-0 bg-[#ff6b00] scale-x-0 origin-left transition-transform duration-300 ease group-hover:scale-x-100 rounded-[20px] z-0" />
</div>



          {/* Card 2 */}
          <div className="translate-y-[40%] translate-x-[70%] opacity-0 about-card2 rotate-[45deg] group z-10">
            <div className="flex items-start justify-between rounded-[20px] bg-gray-200  text-black h-[26.5vw] w-[42vw] px-[3vw]  transition-all duration-300 ease group-hover:text-white">
              <div className="text-[5.7vw] z-10">
                <span className="">20+</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full gap-[3vw] w-[50%]">
                <div className="h-[10vw] w-[15vw] relative z-10">
                  <Image
                    src="/assets/home/awards.png"
                    fill
                    alt="Projects Complete"
                  />
                </div>
                <div className="text-[2.9vw] z-10">Projects Complete</div>
              </div>
            </div>
            <span className="absolute inset-0 bg-[#734eff] scale-x-0 origin-right transition-transform duration-300 ease group-hover:scale-x-100 rounded-[20px] z-0" />
          </div>

          {/* Card 3 */}
          <div className="translate-x-[-70%] opacity-0 about-card3 -rotate-[45deg] group z-10">
            <div className="flex items-start justify-between rounded-[20px] bg-gray-200  text-black h-[26.5vw] w-[42vw] px-[3vw]   transition-all duration-300 ease">
              <div className="text-[5.7vw] z-10">
                <span className="">10+</span>
              </div>
              <div className="flex flex-col items-center justify-center h-full gap-[3vw] w-[50%]">
                <div className="h-[10vw] w-[15vw] relative z-10">
                  <Image
                    src="/assets/home/awards.png"
                    fill
                    alt="Years of Experience"
                  />
                </div>
                <div className="text-[2.9vw] z-10">Years of Experience</div>
              </div>
            </div>
            <span className="absolute inset-0 bg-[#a5ffb9] scale-x-0 origin-left transition-transform duration-300 ease group-hover:scale-x-100 rounded-[20px] z-0" />
          </div>

          {/* Card 4 */}
          <div className="translate-y-[40%] translate-x-[70%] opacity-100 about-card4 rotate-[45deg] relative overflow-hidden group z-10">
  <div className="flex items-start justify-between rounded-[20px] bg-gray-200 text-black h-[26.5vw] w-[42vw] px-[3vw] transition-all duration-300 ease">
    <div className="text-[5.7vw] z-10"> 
      <span>45+</span>
    </div>
    <div className="flex flex-col items-center justify-center h-full gap-[3vw] w-[50%] z-10"> 
      <div className="h-[10vw] w-[15vw] relative z-10"> 
        <Image
          src="/assets/home/awards.png"
          fill
          alt="Happy Customers"
        />
      </div>
      <div className="text-[2.9vw] z-10">
        Happy Customers
      </div>
    </div>
  </div>
  <span className="absolute inset-0 bg-[#ffe974] scale-x-0 origin-right transition-transform duration-300 ease group-hover:scale-x-100 rounded-[20px] z-0" />
</div>



        </div>
      </div>
    </section>
  );
};

export default About;
