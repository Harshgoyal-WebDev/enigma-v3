/* eslint-disable no-unused-vars */
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SectionTitle from "../SectionTitle";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const SingleAccordion = ({ id, title, content1, content2 }) => {
  return (
    <AccordionItem value={id} className="group relative bg-[#f9f9f9]">
      <div className="w-full bg-black lineDraw h-[1px]  mobile:block tablet:block"></div>
      <div className="absolute bg-secondary-color w-full h-full scale-y-0 group-hover:scale-y-[1] origin-top transition-all duration-500 ease-out"></div>
      <AccordionTrigger
        data-para-anim
        className="text-[1.2vw] mobile:text-[6vw] pl-[5vw] mobile:text-left mobile:flex mobile:w-full tablet:text-[4vw] relative z-[2] tablet:text-left group-hover:text-white ease-in font-normal py-[2%] mobile:py-[5%] accordion [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:rotate-[90deg] [&[data-state=open]>.line>.line-internal>.icon-container>.icon>.minus]:rotate-90 [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:bg-body [&[data-state=open]>.line>.line-internal>.icon-container>.icon]:text-white"
      >
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-[1.2vw] pl-[5vw] font-light leading-[1.3] space-y-[1.5vw] w-[70%] mb-[20px] mobile:w-full mobile:text-[4vw] mobile:space-y-[4vw] text-secondary-color group-hover:text-white relative z-[2] tablet:text-[2.7vw] tablet:w-[90%]">
        <p data-para-anim className="">
          {content1}
        </p>
        <p data-para-anim className="">
          {content2}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
};

const Faq = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    const body = document.body;

    const changeBodyColor = (color) => {
      gsap.to(body, {
        backgroundColor: color,
        duration: 0.03, // Duration for smooth transition
        ease: "power2.out",
      });
    };

    // ScrollTrigger for changing body background color
    ScrollTrigger.create({
      trigger: "#faq",
      start: "top bottom", // When the section enters the viewport
      end: "bottom 80%", // When the section is about to leave
      onEnter: () => changeBodyColor("#f9f9f9"), // Replace with your actual secondary color
      onLeaveBack: () => changeBodyColor("#1d1d1d"), // Revert when scrolling back up
    });
  });

  return (
    <section className=" py-[10%] mobile:pb-[15%]" id="faq">
      <div ref={containerRef} className="container-lg">
        <div className="space-y-[2.5vw] mobile:space-y-[7vw]">
          <SectionTitle
            line1={"Frequently"}
            line2={"Asked questions"}
            firstColor={"text-secondary-color"}
          />
        </div>

        <div className="w-full ml-auto mt-[10vw] mobile:w-full tablet:w-full">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            <SingleAccordion
              id="item-1"
              title="How long does a project usually take?"
              content1="We bring simplicity to complexity – distilling goals and values into brands that are relevant and inspiring, for customers and staff."
              content2="Through a brand workshop, a series of interactive sessions, research and a thorough understanding of your business, we work with you to define your business strategy – developing a set of tools, brand values, brand purpose and personality traits that drive everything from your brand identity, communication, digital presence and even your social media presence."
              btnLink="/what-we-do/brand-strategy"
              btnText="View More"
            />
            <SingleAccordion
              id="item-2"
              title="Brand Identity"
              content1="We bring simplicity to complexity – distilling goals and values into brands that are relevant and inspiring, for customers and staff."
              content2="Through a brand workshop, a series of interactive sessions, research and a thorough understanding of your business, we work with you to define your business strategy – developing a set of tools, brand values, brand purpose and personality traits that drive everything from your brand identity, communication, digital presence and even your social media presence."
              btnLink="#"
              btnText="View More"
            />
            <SingleAccordion
              id="item-3"
              title="Brand Naming"
              content1="We bring simplicity to complexity – distilling goals and values into brands that are relevant and inspiring, for customers and staff."
              content2="Through a brand workshop, a series of interactive sessions, research and a thorough understanding of your business, we work with you to define your business strategy – developing a set of tools, brand values, brand purpose and personality traits that drive everything from your brand identity, communication, digital presence and even your social media presence."
              btnLink="#"
              btnText="View More"
            />
            <SingleAccordion
              id="item-4"
              title="Advertising"
              content1="We bring simplicity to complexity – distilling goals and values into brands that are relevant and inspiring, for customers and staff."
              content2="Through a brand workshop, a series of interactive sessions, research and a thorough understanding of your business, we work with you to define your business strategy – developing a set of tools, brand values, brand purpose and personality traits that drive everything from your brand identity, communication, digital presence and even your social media presence."
              btnLink="#"
              btnText="View More"
            />
            <SingleAccordion
              id="item-5"
              title="Content & Production"
              content1="We bring simplicity to complexity – distilling goals and values into brands that are relevant and inspiring, for customers and staff."
              content2="Through a brand workshop, a series of interactive sessions, research and a thorough understanding of your business, we work with you to define your business strategy – developing a set of tools, brand values, brand purpose and personality traits that drive everything from your brand identity, communication, digital presence and even your social media presence."
              btnLink="#"
              btnText="View More"
            />
          </Accordion>
          <div className="w-full bg-black lineDraw h-[1px] mobile:block tablet:block"></div>
          {/* <AccordionLine/> */}
        </div>
      </div>
    </section>
  );
};

export default Faq;
