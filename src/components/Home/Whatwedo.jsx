import React, { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Whatwedo = () => {

    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                markers: true,
            }
        });
        tl.from(textRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
        });
    });

    return (
        <section ref={containerRef} className='w-full h-screen' id='section-break'>
            <div className='container-lg h-full flex justify-center items-center'>
                <h3 ref={textRef} className='text-center text-[4.5vw] font-medium text-black'>
                    We make cool things that do great business
                </h3>
            </div>
        </section>
    );
};

export default Whatwedo;
