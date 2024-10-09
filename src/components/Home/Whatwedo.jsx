import React, { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SplitInLineOnly } from "../splitTextUtils";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Whatwedo = () => {

    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        const text = textRef.current;
        const texth2 = textRef.current;

        SplitInLineOnly(texth2);
        if (globalThis.innerWidth > 1023) {
           

            const textbreakLine = texth2.querySelectorAll(".line");
            gsap.to(textbreakLine, {
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                    end: "bottom 40%",
                    scrub: true,
                },
                backgroundPositionX: 0,
                duration: 1,
                stagger: 1,
                ease: "power2.inOut"
            })
        }
        else {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container, 
                    start: "top bottom",
                    end: "2500 top",
                    scrub: 1,
                },
            });

            tl.from(text, {
                duration: 2,
                delay: -2,
                ease: 'power2.out'
            })

            const textbreakLine = texth2.querySelectorAll(".line");
            gsap.to(textbreakLine, {
                scrollTrigger: {
                    trigger: container,
                    start: "top 80%",
                    end: "bottom 40%",
                    scrub: true,
                },
                backgroundPositionX: 0,
                duration: 1,
                stagger: 1,
                ease: "power2.inOut"
            })

        }

    });
    return (
        <section ref={containerRef} className='w-screen h-screen overflow-hidden' id='section-break'>
            <div className='container-lg h-full flex justify-center items-center'>
                <h3 ref={textRef} className='text-center textbreak text-[4.5vw] font-medium text-black'>
                    We make cool things that do great business
                </h3>
            </div>
        </section>
    );
};

export default Whatwedo;
