import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Button from "../Button/PrimaryButton";
import SectionTitle from "../SectionTitle";
import Link from "next/link";
import BlackButton from "../Button/BlackButton";
gsap.registerPlugin(useGSAP, ScrollTrigger);


const Blogs = () => {
  const blogsRef = useRef(null);

  // IntersectionObserver to change body background color on entering and leaving the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.add("bg-secondary-color"); // Change to the desired color when in view
        } else {
          document.body.style.backgroundColor = "#ffffff"; // Change to white when out of view
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (blogsRef.current) {
      observer.observe(blogsRef.current);
    }

    return () => {
      if (blogsRef.current) {
        observer.unobserve(blogsRef.current);
      }
    };
  }, []);
  
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
        className="py-[10%] w-screen h-full overflow-hidden"
      >
        <div className="container-lg h-screen flex flex-col justify-between relative items-center">
          <div className="w-full h-fit flex justify-between">
            <div>
              <SectionTitle line1={"See Our"} line2={"Creative Musing"} firstColor={"text-white"}/>

            
            </div>
            <div className="flex items-end">
              <BlackButton
                btnText={"Read more"}
                link={"#"}
                classname={"border-white text-white bg-transparent"}
                invert={"invert"}
              />
            </div>
          </div>
          <div className="w-full h-screen blogs">
            <Link href={"#"}>
            <div className="w-[37%] h-[38vw] rounded-[1.5vw] absolute top-[30%]  left-[32%] blog-card1 z-[4] overflow-hidden">
              <Image
                src="/assets/home/blog-image-1.webp"
                alt="blog-image-1"
                className="object-cover w-full h-full"
                fill
              />
              <div className="w-full h-full flex flex-col justify-between absolute ">
                <div className="w-full flex justify-between items-center text-white px-[1.5vw] pt-[1.5vw]">
                  <span className="bg-secondary-color px-[1.2vw] py-[0.5vw] rounded-[10vw] text-[1.4vw]">
                    Digital Marketing
                  </span>
                  <div className="p-[1.2vw] rounded-full bg-secondary-color">
                  <div className="w-[1.3vw] h-[1.3vw]  relative">
                    <Image src="/blog-arrow.svg" alt="blog-arrow" className="object-contain w-full h-full" fill/>
                  </div>

                  </div>
                </div>
                <div className="w-full h-[12vw] white-glass rounded-[1vw] px-[1.5vw] py-[2vw] text-[1.6vw] shadow-2xl drop-shadow-2xl">
                  Beginners Guide To SEO: 30 Websites To Help You Getting
                  Started On Your Link Building Journey
                </div>
              </div>
            </div>
            </Link>
            <Link href={"#"}>
            <div className="w-[37%] h-[38vw] rounded-[1.5vw]  absolute top-[30%]  left-[50%] translate-x-[-50%] scale-[0.9] blog-card2 overflow-hidden z-[3]">
              <Image
                src="/assets/home/blog-image-2.webp"
                alt="blog-image-2"
                className="object-cover w-full h-full"
                fill
              />
              <div className="w-full h-full flex flex-col justify-between absolute ">
                <div className="w-full flex justify-between items-center text-white px-[1.5vw] pt-[1.5vw]">
                  <span className="bg-secondary-color px-[1.2vw] py-[0.5vw] rounded-[10vw] text-[1.4vw]">
                    Strategy
                  </span>
                  <div className="p-[1.2vw] rounded-full bg-secondary-color">
                  <div className="w-[1.3vw] h-[1.3vw]  relative">
                    <Image src="/blog-arrow.svg" alt="blog-arrow" className="object-contain w-full h-full" fill/>
                  </div>

                  </div>
                </div>
                <div className="w-full h-[12vw] white-glass rounded-[1vw] px-[1.5vw] py-[2vw] text-[1.6vw]">
                  How Much Should A Website Cost? Cracking The Ultimate
                  Conundrum
                </div>
              </div>
            </div>

            </Link>
            <Link href={"#"}>
            <div className="w-[37%] h-[38vw] rounded-[1.5vw]  absolute top-[30%]  right-[33%] scale-[0.8] blog-card3 overflow-hidden z-[2]">
              <Image
                src="/assets/home/blog-image-3.webp"
                alt="blog-image-3"
                className="object-cover w-full h-full"
                fill
              />
              <div className="w-full h-full flex flex-col justify-between absolute ">
                <div className="w-full flex justify-between items-center text-white px-[1.5vw] pt-[1.5vw]">
                  <span className="bg-secondary-color px-[1.2vw] py-[0.5vw] rounded-[10vw] text-[1.4vw]">
                    Design
                  </span>
                  <div className="p-[1.2vw] rounded-full bg-secondary-color">
                  <div className="w-[1.3vw] h-[1.3vw]  relative">
                    <Image src="/blog-arrow.svg" alt="blog-arrow" className="object-contain w-full h-full" fill/>
                  </div>

                  </div>
                </div>
                <div className="w-full h-[12vw] white-glass rounded-[1vw] px-[1.5vw] py-[2vw] text-[1.6vw]">
                  The Power Of Psychology In UX Design: Unlocking The Human
                  Element
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
