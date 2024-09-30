import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Whatwedo = () => {
    // useEffect(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".whatwedo",
    //             start: "top top", 
    //             end: "bottom top",
    //             pin: true,
    //             scrub: true,
    //             markers: true
    //         }
    //     });

    //     // Cleanup ScrollTrigger on component unmount
    //     return () => {
    //         if (tl.scrollTrigger) {
    //             tl.scrollTrigger.kill();
    //         }
    //     };
    // }, []); // Empty dependency array means this will run only once on mount

    return (
        <section id='whatwedo' className='w-screen h-screen relative'>
            <div className='w-full h-full flex justify-center items-center whatwedo'>
                <h3 className='text-[5vw] grotesk font-medium text-center'>
                    We Make Cool Things That Do Great Business
                </h3>
            </div>
        </section>
    );
};

export default Whatwedo;
