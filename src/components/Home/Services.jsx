/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const WorkCard = ({ no, heading, src, para, className }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const image = card.querySelector(".id-card-anim");

    const cardRect = card.getBoundingClientRect(); // Get card's bounding box
    const mouseX = e.clientX - cardRect.left; // Mouse X relative to card
    const mouseY = e.clientY - cardRect.top; // Mouse Y relative to card

    // Calculate how much the image should move
    const xMove = (mouseX / cardRect.width - 0.5) * 50; // Move up to 30px in X
    const yMove = (mouseY / cardRect.height - 0.5) * 30; // Move up to 30px in Y

    gsap.to(image, {
      x: xMove,
      
      rotate:- xMove * 0.3, // Slight rotation based on X movement
      ease: "power2.out",
      duration: 0.5,
    });
  };

  const handleMouseLeave = (e) => {
    const image = e.currentTarget.querySelector(".id-card-anim");
    gsap.to(image, {
      x: 0, // Reset position
       // Reset position
      rotate: 0, // Reset rotation
      ease: "power2.out",
      duration: 0.5,
    });
  };
  
  return (
    <>
      <div 
        className={`w-[90vw] h-[45vw] flex flex-col gap-[4vw] items-center rounded-[50px] bg-secondary-color px-[4vw] shadow-xl border border-black/10 mobile:rounded-[6vw] fadeup tablet:rounded-[3vw] mobile:py-[10vw] idcards `}
      >
        <div className="w-full h-full flex justify-between items-center">
          <div className="w-[36vw] h-[36vw] relative rounded-[2vw] overflow-hidden bg-zinc-900"  onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
            <Image
              src="/assets/home/id-card-strategy.webp"
              alt="id-card"
              fill
              className="object-contain w-full h-full id-card-anim translate-y-[-10%]"
            />
          </div>
          <div className="w-1/2 h-full flex flex-col gap-[1.5vw] text-white justify-center">
            <h3 className="text-[4.5vw] uppercase text-start">{heading}</h3>
            <p className="text-[1.3vw] ">
              Strategic planning based on insight is the starting point of
              everything we do. Combining strategic thinking, wide marketing
              experience, insights, best practices, and sound judgment, we craft
              effective strategies that turn insights into measurable results.
            </p>
            <p className="text-[1.3vw]">
              Driving growth and success for your brand needs a brilliant plan
              (roadmap) that is rooted in deep insights and aimed at delivering
              tangible results. Our strategy consulting services includes:
              Digital Advisory and Consulting, Integrated Digital Marketing Plan
              (D.M.P.), User Experience Development, Customer Experience
              Strategy, Consumer Research, Insights & Target Market Analysis,
              Digital Capabilities Development, Persona Design & Customer
              Segmentation, Digital Marketing and Website Performance Audit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Services = () => {

  useGSAP(() => {
    const images = document.querySelectorAll(".id-card-anim");
    images.forEach((img) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: img,
          start: "top top",
          end: "bottom top",
          // markers:true, 
        },
      });
      tl.from(img, {
        yPercent: -100,
        ease:"elastic.out",
        duration:1,
        
      });
    });
  });
  if (globalThis.innerWidth < 1024) {
  } else {
    useGSAP(() => {
      // Timeline with pinning
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".works-container",
          pin: true, // Pin for the first part
          start: "top top",
          end: "+=3000 top",
          scrub: true,
          // markers: true,
        },
      });
    
      // Animations for pinned section
      tl1.from(".feature-container", {
        yPercent: 20,
        ease: "none",
        duration: 0.07,
      })
        .to(".feature-container2", {
          yPercent: -100,
          ease: "power4.out",
        })
        .to(".feature-container", {
          scale: 0.9,
          delay: -0.5,
          ease: "none",
        })
        .to(".feature-container3", {
          yPercent: -200,
          ease: "power4.out",
          delay: -0.3,
        })
        .to(".feature-container2", {
          scale: 0.93,
          delay: -0.5,
          ease: "none",
        })
        .to(".feature-container4", {
          yPercent: -300,
          ease: "power1.out",
          delay: -0.3,
        })
        .to(".feature-container3", {
          scale: 0.96,
          delay: -0.5,
        });
    
      // Second timeline without pinning
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".works-container",
         // Disable pinning for this section
          start: "+=3000 top", // Starts after the previous scroll section
          end: "+=5000 top", // Control how far the next animations scroll
          scrub: true,
          markers: true, // Uncomment for debugging
        },
      });
    
      // Animations without pinning
      tl2.to(".feature-container3", {
        yPercent: -190,
        ease: "none",
      })
        .to(".feature-container2", {
          yPercent: -90,
          ease: "none",
        })
        .to(".feature-container", {
          yPercent: 20,
          ease: "none",
        });
    });
    
  }
  return (
    <section
      className=" w-screen h-screen bg-transparent works-container mobile:h-full tablet:h-full my-[10%]"
      id="work"
    >
      <div className="flex flex-col justify-center items-center relative">
        <div className="feature-container w-full h-[100vh] flex justify-center items-center py-[2vw] mobile:pb-[4vh] feature-card tablet:pb-[3vw] tablet:pt-0">
          <WorkCard heading={"Strategy"} />
        </div>
        <div className="feature-container2 w-full h-[100vh] flex justify-center items-center py-[7vw] mobile:pb-[4vh] feature-card tablet:py-[3vw]">
          <WorkCard heading={"Strategy"} />
        </div>
        <div className="feature-container3 w-full h-[100vh] flex justify-center items-center py-[7vw] mobile:pb-[4vh] feature-card tablet:py-[3vw]">
          <WorkCard heading={"Strategy"} />
        </div>
        <div className="feature-container4 w-full h-[100vh] flex justify-center items-center py-[7vw] mobile:pb-[4vh] feature-card tablet:py-[3vw]">
          <WorkCard heading={"Strategy"} />
        </div>
      </div>
    </section>
  );
};

export default Services;
