import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ImagesLoaded from 'imagesloaded';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
  const mainRef = useRef(null);
  const gridsRef = useRef([]);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    ImagesLoaded(mainRef.current, () => {
      document.body.classList.remove('loading');
    });
    const grids = gridsRef.current;

    grids.forEach((grid, i) => {
      const gridWrap = grid.querySelector('.grid-wrap');
      const gridItems = grid.querySelectorAll('.grid__item');
      const gridItemsInner = [...gridItems].map((item) =>
        item.querySelector('.grid__item-inner')
      );

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: gridWrap,
          start: 'top 60%',
          end: '+=1000 top',
          scrub: true,
        //   markers:true,
        //   pin:true
        },
      });
      const animationType = 'type3'; 

      if (animationType === 'type3') {
        grid.style.setProperty('--grid-width', '105%');
        grid.style.setProperty('--grid-columns', '8');
        grid.style.setProperty('--perspective', '1500px');
        grid.style.setProperty('--grid-inner-scale', '0.5');

        timeline
          .set(gridItems, {
            transformOrigin: '50% 0%',
            z: () => gsap.utils.random(-5000, -2000),
            rotationX: () => gsap.utils.random(-65, -25),
            filter: 'brightness(0%)',
          })
          .to(
            gridItems,
            {
              xPercent: () => gsap.utils.random(-250, 250),
              yPercent: () => gsap.utils.random(-500, 500),
              rotationX: 0,
              filter: 'brightness(200%)',
              duration: 3,
            },
            0
          )
          .to(
            gridWrap,
            {
              z: 8500,
              duration: 3,
            },
            0
          )
          .fromTo(
            gridItemsInner,
            {
              scale: 2,
            },
            {
              scale: 0.5,
              duration: 3,
            },
            0
          );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      lenis.destroy();
    };
  }, []);

  const addToGridsRef = (el) => {
    if (el && !gridsRef.current.includes(el)) {
      gridsRef.current.push(el);
    }
  };

  return (
    <section className="loading w-screen h-screen relative">
      <div ref={mainRef} className='relative w-full h-screen mt-[2vw] '>
        <section className="content absolute mb-[2vw] top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] ">
          <div className="grid grid--1 p-[2vw] w-full" ref={addToGridsRef}>
            <div className="grid-wrap">
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/bespin.svg"
                  alt="Image 1"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/dmtca.svg"
                  alt="Image 2"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/jellyfish.svg"
                  alt="Image 3"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/kedarkala.svg"
                  alt="Image 4"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/patra.svg"
                  alt="Image 5"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/quickx.svg"
                  alt="Image 6"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/rivaj.svg"
                  alt="Image 7"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/yellow.svg"
                  alt="Image 7"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/bespin.svg"
                  alt="Image 1"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/dmtca.svg"
                  alt="Image 2"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/jellyfish.svg"
                  alt="Image 3"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/kedarkala.svg"
                  alt="Image 4"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/patra.svg"
                  alt="Image 5"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/quickx.svg"
                  alt="Image 6"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/rivaj.svg"
                  alt="Image 7"
                />
              </div>
              <div className="grid__item">
                <img
                  className="grid__item-inner"
                  src="/assets/icons/yellow.svg"
                  alt="Image 7"
                />
              </div>
              
            </div>
          </div>
        </section>
      </div>
      <div className='grotesk text-[4vw] font-medium text-primary-color absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'>
        Brands we&apos;ve elevated
      </div>

    </section>
  );
};

export default Brands;
