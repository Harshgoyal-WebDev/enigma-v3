import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import ImagesLoaded from 'imagesloaded';
import Lenis from '@studio-freight/lenis';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Brands = () => {
  const mainRef = useRef(null);
  const gridsRef = useRef([]);

  useEffect(() => {
    // Initialize smooth scrolling
    const initSmoothScrolling = () => {
      const lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
      });
      lenis.on("scroll", () => ScrollTrigger.update());

      const scrollFn = (time) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };
      requestAnimationFrame(scrollFn);
    };

    const getRandomItems = (arr, count) => {
      const randomItems = [];
      const clonedArr = Array.from(arr);
      while (randomItems.length < count && clonedArr.length > 0) {
        const randomIndex = Math.floor(Math.random() * clonedArr.length);
        randomItems.push(clonedArr.splice(randomIndex, 1)[0]);
      }
      return randomItems;
    };

    const applyAnimation = (grid, animationType) => {
      const gridWrap = grid.querySelector(".grid-wrap");
      const gridItems = grid.querySelectorAll(".grid__item");
      const gridItemsInner = [...gridItems].map((item) =>
        item.querySelector(".grid__item-inner")
      );

      const randomGridItems = getRandomItems(gridItemsInner, 2);
      randomGridItems.forEach((item) => {
        item.style.opacity = 1;
      });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: gridWrap,
          start: "top bottom+=5%",
          end: "bottom top-=5%",
          scrub: true,
        },
      });

      if (animationType === "type3") {
        grid.style.setProperty("--grid-width", "105%");
        grid.style.setProperty("--grid-columns", "8");
        grid.style.setProperty("--perspective", "1500px");
        grid.style.setProperty("--grid-inner-scale", "2");

        timeline
          .set(gridItems, {
            transformOrigin: "0% 0%",
            z: () => gsap.utils.random(-5000, -2000),
            rotationX: () => gsap.utils.random(-65, -25),
            filter: "brightness(0%)",
          })
          .to(
            gridItems,
            {
              xPercent: () => gsap.utils.random(-150, 150),
              yPercent: () => gsap.utils.random(-300, 300),
              rotationX: 0,
              filter: "brightness(200%)",
            },
            0
          )
          .to(
            gridWrap,
            {
              z: 6500,
            },
            0
          )
          .fromTo(
            gridItemsInner,
            {
              scale: 1,
              opacity: 1,
            },
            {
              scale: 0.5,
              opacity: (i, target) =>
                randomGridItems.includes(target) ? 1 : 0.5,
            },
            0
          );
      }
    };

    const scroll = () => {
      const grids = document.querySelectorAll(".grid");
      grids.forEach((grid, i) => {
        let animationType = i % 2 === 0 ? "type3" : null;
        if (animationType) {
          applyAnimation(grid, animationType);
        }
      });
    };

    initSmoothScrolling();

    ImagesLoaded(mainRef.current, () => {
      scroll();
      document.body.classList.remove("loading");
    });

  }, []);

  return (
    <section className="loading w-screen h-[100vh] relative overflow-hidden mt-[10%]" id='brands'>
      <div ref={mainRef} className='relative w-full h-screen mt-[2vw]'>
        <section className="content absolute mb-[2vw] top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] ">
          <div className="grid grid--1">
            <div className="grid-wrap">
              <div className="grid__item">
                <div className="grid__item-inner h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/bespin.svg" alt="image 1" fill />
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/dmtca.svg" alt="image 2"  fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/jellyfish.svg" alt="Fabric" fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/kedarkala.svg" alt="image 4" fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/patra.svg" alt="image 6" fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/patronum.svg" alt="Fabric" fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/quickx.svg" alt="image 8" fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/rivaj.svg" alt="image 9" fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/bespin.svg" alt="image 11" fill />
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/dmtca.svg" alt="image 12" fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/jellyfish.svg" alt="image 13" fill />
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/kedarkala.svg" alt="image 14" fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/patra.svg" alt="image 15" fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/patronum.svg" alt="image 16" fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner  h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/quickx.svg" alt="image 17" fill/>
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/rivaj.svg" alt="image 18" fill />
                </div>
              </div>
              <div className="grid__item">
                <div className="grid__item-inner h-[20vw] w-[20vw] relative">
                  <Image src="/assets/icons/dmtca.svg" alt="Fabric" fill/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='grotesk text-[4vw] font-medium text-primary-color absolute top-[50%] translate-y-[-100%] left-[50%] translate-x-[-50%]'>
        Brands we&apos;ve elevated
      </div>
    </section>
  );
};

export default Brands;
